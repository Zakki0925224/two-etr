import React, { FC } from 'react';

import './style.css';

type Props =
{
    changeSceneToTitle: () => void;
    changeSceneToPlay: () => void;
}

export const Loading: FC<Props> = ({changeSceneToTitle, changeSceneToPlay}) =>
{
    return (
        <div className="container">
            <h1>Loading</h1>
            <button onClick={changeSceneToPlay}>ToPlay</button>
        </div>
    );
};