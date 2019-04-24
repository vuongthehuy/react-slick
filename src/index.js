import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SimpleSlider from './SimpleSlider';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<SimpleSlider />, document.getElementById('root'));
registerServiceWorker();
