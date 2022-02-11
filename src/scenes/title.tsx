import React, { FC } from 'react';

import './style.css';

type Props =
{
    changeSceneToPlay: () => void;
    changeSceneToLoading: () => void;
}

export const Title: FC<Props> = ({changeSceneToPlay, changeSceneToLoading}) =>
{
    return (
        <div className="container">
            <h1>Title</h1>
            <button onClick={changeSceneToLoading}>ToLoading</button>

            <div className="window-container">
                <table><tbody>
                    <tr><th><button className='title-buttons'>Play</button></th></tr>
                    <tr><th><button className='title-buttons'>Option</button></th></tr>
                    <tr><th><button className='title-buttons'>Help</button></th></tr>
                    <tr><th><button className='title-buttons'>Website</button></th></tr>
                    <tr><th><button className='title-buttons'>Exit</button></th></tr>
                </tbody></table>
            </div>
        </div>
    );
};