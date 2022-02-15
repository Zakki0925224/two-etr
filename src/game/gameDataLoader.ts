import path from 'path';
export class GameDataLoader
{
    dataDirPath: string;

    constructor()
    {
        const executableDirPath = process.env.PORTABLE_EXECUTABLE_DIR;
        let dPath = "";

        if (executableDirPath)
        {
            dPath = executableDirPath;
        }

        this.dataDirPath = path.resolve(dPath, "gameData");
        console.log(this.dataDirPath);
    }
}