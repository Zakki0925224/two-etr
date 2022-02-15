import { contextBridge, ipcRenderer } from 'electron';
import { GameDataLoader } from './game/gameDataLoader';

contextBridge.exposeInMainWorld(
    "api",
    {
        loadGameData(): void
        {
            new GameDataLoader();
        }
    }
);