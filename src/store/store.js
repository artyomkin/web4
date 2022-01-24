import { createStore } from 'redux';
import reducer from './reducer';

const initialState = {
    points: [],
    radius: 3
}

const store = createStore(reducer, initialState);

export default store;