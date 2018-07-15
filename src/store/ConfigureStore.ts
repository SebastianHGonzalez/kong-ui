import {applyMiddleware, createStore} from 'redux';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';

import RootReducer from 'src/store/RootReducer';


export default function configureStore(initialState?: any) {

    return createStore(
        RootReducer,
        initialState,
        applyMiddleware(reduxImmutableStateInvariant())
    );
}
