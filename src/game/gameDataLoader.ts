import path from 'path';
import * as fs from 'fs';
import toml from 'toml';
export class GameDataLoader
{
    public dataDirPath: string;

    constructor()
    {
        const executableDirPath = process.env.PORTABLE_EXECUTABLE_DIR;
        let dPath = "";

        if (executableDirPath)
        {
            dPath = executableDirPath;
        }

        this.dataDirPath = path.resolve(dPath, "gameData");
    }

    public getAllFilePath(rootDirPath: string): string[]
    {
        return fs.readdirSync(rootDirPath, { withFileTypes: true }).flatMap(dirent => dirent.isFile() ? [`${rootDirPath}/${dirent.name}`] : this.getAllFilePath(`${rootDirPath}/${dirent.name}`));
    }

    public readFile(filePath: string): string
    {
        return fs.readFileSync(filePath, "utf-8");
    }
}