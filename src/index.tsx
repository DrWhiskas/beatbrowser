import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Login from './components/Login/Login';
import Signin from './components/Signin/Signin';
import Error from './pages/Error/Error';


// REDUX

import { Provider } from 'react-redux';
import store from './features/store';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);
root.render(
	<React.StrictMode>
		<Provider store={store}>
			<HashRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/home" element={<Home />} />
					<Route path="/login" element={<Login />} />
					<Route path="/signin" element={<Signin />} />
					<Route path="/*" element={<Error />} />
				</Routes>
			</HashRouter>
		</Provider>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
