import React, { FC } from 'react';

import './style.css';

type Props =
{
    changeSceneToTitle: () => void;
    changeSceneToLoading: () => void;
}

export const Play: FC<Props> = ({changeSceneToTitle, changeSceneToLoading}) =>
{
    return (
        <div className="container">
            <h1>Play</h1>
            <button onClick={changeSceneToTitle}>ToTitle</button>
        </div>
    );
};