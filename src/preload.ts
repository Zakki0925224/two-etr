import { contextBridge } from 'electron';
import { GameDataLoader } from './game/gameDataLoader';

const loader = new GameDataLoader();

contextBridge.exposeInMainWorld(
    "api",
    {
        loadGameData(): void
        {
            loader.getAllFilePath(loader.dataDirPath).forEach(filePath => console.log(loader.readFile(filePath)));
        },

        getLoadFilePath(): string[]
        {
            return loader.getAllFilePath(loader.dataDirPath);
        }
    }
);