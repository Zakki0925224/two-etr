import path from 'path';
import * as fs from 'fs';
import toml from 'toml';

export type DataCategory = 'map' | 'world' | 'local' | 'gfx' | 'unused';
export type DataFileId = 'ideology' | 'nation' | 'scenario' | 'ui' | 'place_map' | 'polygon_map' | 'any';

export class GameData
{
    private filePath: string;
    private category: DataCategory;
    private id: DataFileId
    private data: any;

    constructor(filePath: string, category: DataCategory, id: DataFileId, data: any)
    {
        this.filePath = filePath;
        this.category = category;
        this.id = id;
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

    public getId(): DataFileId
    {
        return this.id;
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
            const extname = path.extname(fpath);
            const filename = path.basename(fpath, extname);
            const lastDirname = path.basename(path.resolve(fpath, ".."));
            const oneUpperDirname = path.basename(path.resolve(path.resolve(fpath, ".."), ".."));

            if (oneUpperDirname == "local" && extname == Ex_Toml)
            {
                if (filename == "ideology")
                {
                    this.dataList.push(new GameData(fpath, 'local', 'ideology', this.parseToml(fpath)));
                }
                else if (filename == "nation")
                {
                    this.dataList.push(new GameData(fpath, 'local', 'nation', this.parseToml(fpath)));
                }
                else if (filename == "ui")
                {
                    this.dataList.push(new GameData(fpath, 'local', 'ui', this.parseToml(fpath)));
                }
                else
                {
                    this.dataList.push(new GameData(fpath, 'local', 'any', this.parseToml(fpath)));
                }
            }
            else if (lastDirname == "map" && extname == Ex_GeoJSON)
            {
                if (filename == "world_places")
                {
                    this.dataList.push(new GameData(fpath, 'map', 'place_map', JSON.parse(this.readFile(fpath))));
                }
                else if (filename == "world_states_provinces")
                {
                    this.dataList.push(new GameData(fpath, 'map', 'polygon_map', JSON.parse(this.readFile(fpath))));
                }
                else
                {
                    this.dataList.push(new GameData(fpath, 'map', 'any', JSON.parse(this.readFile(fpath))));
                }
            }
            else if(lastDirname == "gameData" && extname == Ex_Toml)
            {
                if (filename == "ideologies")
                {
                    this.dataList.push(new GameData(fpath, 'world', 'ideology', this.parseToml(fpath)));
                }
                else if (filename == "nations")
                {
                    this.dataList.push(new GameData(fpath, 'world', 'nation', this.parseToml(fpath)));
                }
                else if (filename == "scenario")
                {
                    this.dataList.push(new GameData(fpath, 'world', 'scenario', this.parseToml(fpath)));
                }
                else
                {
                    this.dataList.push(new GameData(fpath, 'world', 'any', this.parseToml(fpath)));
                }
            }
            else
            {
                this.dataList.push(new GameData(fpath, 'unused', 'any', null));
            }
        });

        console.log("Loaded");
        console.log(this.dataList);
    }

    public getDataList(): Array<GameData>
    {
        return this.dataList;
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