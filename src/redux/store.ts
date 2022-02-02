import {createStore} from '@reduxjs/toolkit';
import {todoReducer} from './reducers/todoReducer';

export const store = createStore(todoReducer);
