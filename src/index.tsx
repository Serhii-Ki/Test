import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import App from './srcPract/App';
import { GlobalStyles } from './styles/GlobalStyles';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);
root.render(
	<React.StrictMode>
		<GlobalStyles />
		<App />
	</React.StrictMode>
);

reportWebVitals();
