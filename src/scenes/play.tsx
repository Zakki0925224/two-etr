import React, { FC } from 'react';

import './style.css';

type Props =
{
    changeSceneToTitle: () => void;
    changeSceneToLoading: () => void;
}

export const Play = (props: Props) =>
{
    return (
        <div className="container">
            <h1>Play</h1>
            <button onClick={props.changeSceneToTitle}>ToTitle</button>
        </div>
    );
};