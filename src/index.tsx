import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { router } from './router';
import { store } from './store'
import { Provider } from 'react-redux'
import { GlobalStyle } from './styles/GlobalStyle';

import errorIcon from './assets/images/yalantis-interactive-404.gif'



const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);
root.render(
	<React.StrictMode>
		<Provider store={store}>
			<GlobalStyle icon={errorIcon}/>
			<RouterProvider router={router}/>
		</Provider>
	</React.StrictMode>
	
);

 

