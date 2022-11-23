import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import toysReducer from "./features/toysSlice";
import cartReducer, { getTotals } from './features/cartSlice';


const store = configureStore({
    reducer:{
        toys: toysReducer,
        cart: cartReducer,
    }
});

store.dispatch(getTotals())

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
        <Provider store={store}>
            <App />
        </Provider>
);