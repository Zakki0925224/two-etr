import { useEffect } from 'react';
import './style.css';

type Props =
{
    changeSceneToTitle: () => void;
    changeSceneToPlay: () => void;
}

export const Loading = (props: Props) =>
{
    useEffect(() =>
    {
        window.api.loadGameData();
        console.log(window.api.getLoadFilePath());
    }, []);

    return (
        <div className="container">
            <h1>Loading</h1>
            {/* <button onClick={props.changeSceneToPlay}>ToPlay</button> */}
        </div>
    );
};