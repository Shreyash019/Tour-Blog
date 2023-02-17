import { legacy_createStore as createStore , combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { tourReducer, tourDetailsReducer } from '../utils/reducers/TourReducer';
import {allUsersReducer, forgotPasswordReducer, profileReducer, userDetailsReducer, UserReducer} from '../utils/reducers/UserReducer'


const reducer = combineReducers({
    tours: tourReducer,
    tour: tourDetailsReducer,
    user: UserReducer,
    profile: profileReducer,
    userDetails: userDetailsReducer,
    allUsers: allUsersReducer,
    forgotPassword: forgotPasswordReducer,
});



let initialState={}

const middleware = [thunk];

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))


export default store