import React, { FC } from 'react';
import Globe from 'react-globe.gl';

import './style.css';
import { PolygonMap } from '../@types/world_states_provinces';
import { PlaceMap } from '../@types/world_places';

type Props =
{
    changeSceneToTitle: () => void;
    changeSceneToLoading: () => void;
}

export const Play = (props: Props) =>
{
    console.log(window.api.getPlacesMapData());

    return (
        <div className="container">
            <h1>Play</h1>
            <button onClick={props.changeSceneToTitle}>ToTitle</button>
            <Globe polygonsData={(window.api.getPolygonsMapData() as PolygonMap).features} />
            {/* <Globe pointsData={(window.api.getPlacesMapData() as PlaceMap).features} /> */}
        </div>
    );
};