import {createStore} from '@reduxjs/toolkit';
import {todoReducer, TodoReducerState} from './reducers/todoReducer';

export type ReduxStoreType = TodoReducerState;

export const store = createStore(todoReducer);
