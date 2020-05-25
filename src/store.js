import {createStore} from 'redux';
import homeReduser from './reducer/homeReduser';
 const store =createStore(homeReduser,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
    export default store;