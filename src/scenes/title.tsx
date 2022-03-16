import React, { useState } from 'react';

import './style.css';

type MenuName = 'main' | 'play' | 'option' | 'mod';

type Props =
{
    changeSceneToPlay: () => void;
    changeSceneToLoading: () => void;
}

type MenuProps =
{
    changeMenuToMain: () => void;
    changeMenuToPlay: () => void;
    changeMenuToOption: () => void;
    changeMenuToMod: () => void;
}

export const Title = (props: Props) =>
{
    const [menu, setMenu] = useState<MenuName>('main');

    // TODO: to simplification
    return (
        <div className="container">
            <h1>Title</h1>
            {/* <button onClick={props.changeSceneToLoading}>ToLoading</button> */}
            {menu === 'main' && <MainMenu changeMenuToMain={() => setMenu('main')} changeMenuToPlay={() => setMenu('play')} changeMenuToOption={() => setMenu('option')} changeMenuToMod={() => setMenu('mod')}/>}
            {menu === 'play' && <PlayMenu changeMenuToMain={() => setMenu('main')} changeMenuToPlay={() => setMenu('play')} changeMenuToOption={() => setMenu('option')} changeMenuToMod={() => setMenu('mod')}/>}
            {menu === 'option' && <OptionMenu changeMenuToMain={() => setMenu('main')} changeMenuToPlay={() => setMenu('play')} changeMenuToOption={() => setMenu('option')} changeMenuToMod={() => setMenu('mod')}/>}
            {menu === 'mod' && <ModMenu changeMenuToMain={() => setMenu('main')} changeMenuToPlay={() => setMenu('play')} changeMenuToOption={() => setMenu('option')} changeMenuToMod={() => setMenu('mod')}/>}
        </div>
    );
};

const MainMenu = (menuProps: MenuProps) =>
{
    return (
        <div className="menu-container">
            <table><tbody>
                <tr><th><button className='title-buttons' onClick={menuProps.changeMenuToPlay}>Play</button></th></tr>
                <tr><th><button className='title-buttons' onClick={menuProps.changeMenuToOption}>Options</button></th></tr>
                <tr><th><button className='title-buttons' onClick={menuProps.changeMenuToMod}>Modifications</button></th></tr>
                <tr><th><button className='title-buttons'>Help</button></th></tr>
                <tr><th><button className='title-buttons'>Website</button></th></tr>
                <tr><th><button className='title-buttons'>Exit</button></th></tr>
            </tbody></table>
        </div>
    );
};

const PlayMenu = (menuProps: MenuProps) =>
{
    return (
        <div className="menu-container">
            <table><tbody>
                <tr><th><button className='title-buttons'>SinglePlay</button></th></tr>
                <tr><th><button className='title-buttons'>MultiPlay</button></th></tr>
                <tr><th><button className='title-buttons' onClick={menuProps.changeMenuToMain}>Back</button></th></tr>
            </tbody></table>
        </div>
    );
};

const OptionMenu = (menuProps: MenuProps) =>
{
    return (
        <div className="menu-container">
            <table><tbody>
                <tr><th><button className='title-buttons'>OptionMenu</button></th></tr>
                <tr><th><button className='title-buttons'>OptionMenu</button></th></tr>
                <tr><th><button className='title-buttons' onClick={menuProps.changeMenuToMain}>Back</button></th></tr>
            </tbody></table>
        </div>
    );
};

const ModMenu = (menuProps: MenuProps) =>
{
    return (
        <div className="menu-container">
            <table><tbody>
                <tr><th><button className='title-buttons'>ModMenu</button></th></tr>
                <tr><th><button className='title-buttons'>ModMenu</button></th></tr>
                <tr><th><button className='title-buttons' onClick={menuProps.changeMenuToMain}>Back</button></th></tr>
            </tbody></table>
        </div>
    );
};