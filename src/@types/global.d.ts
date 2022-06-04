declare global
{
    interface Window
    {
        api: IAPI;
    }
}

export interface IAPI
{
    loadGameData(): void;
    getPolygonsMapData(): object;
    getPlacesMapData(): object;
}