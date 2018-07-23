import {applyMiddleware, createStore} from 'redux';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';


import RootReducer from './RootReducer';


export default function configureStore(initialState?: any) {

    return createStore(
        RootReducer,
        initialState,
        applyMiddleware(reduxImmutableStateInvariant(), thunk)
    );
}
