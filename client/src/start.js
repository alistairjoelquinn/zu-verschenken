import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';

import App from './App';
import Reducer from '../store/reducer';

const store = createStore(Reducer, applyMiddleware(ReduxThunk));

const elem = (
    <Provider store={store}>
        <App />
    </Provider>
);
ReactDOM.render(elem, document.querySelector('main'));