import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Title } from './scenes/title';
import { Play } from './scenes/play';
import { Loading } from './scenes/loading';

type SceneName = 'title' | 'play' | 'loading';

const App = () =>
{
  const [scene, setScene] = useState<SceneName>('title');

  return (
    <div>
      {scene === 'title' && <Title changeSceneToPlay={() => setScene('play')} changeSceneToLoading={() => setScene('loading')}/>}
      {scene === 'play' && <Play changeSceneToTitle={() => setScene('title')} changeSceneToLoading={() => setScene('loading')}/>}
      {scene === 'loading' && <Loading changeSceneToTitle={() => setScene('title')} changeSceneToPlay={() => setScene('play')}/>}
    </div>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
