import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';


import './global.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BrowserRouter basename='/VanillaWebsite'><App /></BrowserRouter>);
