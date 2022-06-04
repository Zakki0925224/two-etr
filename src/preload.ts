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

        getPolygonsMapData(): object
        {
            const data = loader.getDataList().find((v) => v.getId() === 'polygon_map');
            console.log(data);
            return data?.getData();
        },

        getPlacesMapData(): object
        {
            const data = loader.getDataList().find((v) => v.getId() === 'place_map');
            return data?.getData();
        }
    }
);