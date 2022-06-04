import { contextBridge } from 'electron';
import { GameDataLoader } from './game/gameDataLoader';

const loader = new GameDataLoader();

contextBridge.exposeInMainWorld(
    "api",
    {
        loadGameData(): void
        {
            loader.loadGameData();
        },
    }
);