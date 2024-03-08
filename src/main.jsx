import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import 'semantic-ui-css/semantic.min.css';
import "./scss/global.scss"; // overwriting semantic-ui default styles

ReactDOM.createRoot(document.getElementById('root')).render(<App />)
