import path from 'path';
import * as fs from 'fs';
import toml from 'toml';

type DataCategory = 'map' | 'world' | 'local' | 'gfx' | 'unused';

class GameData
{
    private filePath: string;
    private category: DataCategory;
    private data: any;

    constructor(filePath: string, category: DataCategory, data: any)
    {
        this.filePath = filePath;
        this.category = category;
        this.data = data;
    }

    public getFilePath(): string
    {
        return this.filePath;
    }

    public getCategory(): DataCategory
    {
        return this.category;
    }

    public getData(): any
    {
        return this.data;
    }
}

const Ex_GeoJSON = ".geojson";
const Ex_Toml = ".toml";

export class GameDataLoader
{
    private rootDataDirPath: string;
    private dataList: Array<GameData>;

    constructor()
    {
        const executableDirPath = process.env.PORTABLE_EXECUTABLE_DIR;
        let dPath = "";

        if (executableDirPath)
        {
            dPath = executableDirPath;
        }

        this.rootDataDirPath = path.resolve(dPath, "gameData");

        this.dataList = new Array<GameData>();
    }

    public loadGameData(): void
    {
        const filePath = this.getAllFilePath(this.rootDataDirPath);

        // set data category
        filePath.forEach((fpath) =>
        {
            if (path.basename(path.resolve(path.resolve(fpath, ".."), "..")) == "local" && path.extname(fpath) == Ex_Toml)
            {
                this.dataList.push(new GameData(fpath, 'local', this.parseToml(fpath)));
            }
            else if (path.basename(path.resolve(fpath, "..")) == "map" && path.extname(fpath) == Ex_GeoJSON)
            {
                this.dataList.push(new GameData(fpath, 'map', JSON.parse(this.readFile(fpath))));
            }
            else if(path.basename(path.resolve(fpath, "..")) == "gameData" && path.extname(fpath) == Ex_Toml)
            {
                this.dataList.push(new GameData(fpath, 'world', this.parseToml(fpath)));
            }
            else
            {
                this.dataList.push(new GameData(fpath, 'unused', null));
            }
        });

        console.log("Loaded");
        console.log(this.dataList);
    }

    private getAllFilePath(rootDirPath: string): string[]
    {
        return fs.readdirSync(rootDirPath, { withFileTypes: true }).flatMap(dirent => dirent.isFile() ? [`${rootDirPath}/${dirent.name}`] : this.getAllFilePath(`${rootDirPath}/${dirent.name}`));
    }

    private parseToml(filePath: string): any
    {
        return toml.parse(this.readFile(filePath));
    }

    private readFile(filePath: string): string
    {
        return fs.readFileSync(filePath, "utf-8");
    }
}