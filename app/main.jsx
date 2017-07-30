/**
 * Created by wangzhuang on 11/6/17.
 */
import React from 'react';
import ReactDom from 'react-dom';
import {Route,HashRouter,hashHistory} from 'react-router-dom';
import { createStore,combineReducers } from 'redux'
import { Provider } from 'react-redux';
import reducers from './reducers'

import "antd/dist/antd.less";
const todoApp = combineReducers(reducers);

import {extendComponent} from './Plugin';
extendComponent()();

import Frame from './containers/Frame';
import Home from './containers/home/index';
import List from './containers/list/index';



let store = createStore(todoApp);

ReactDom.render(
    <Provider store={store}>
        <HashRouter history={hashHistory}>
            <Frame>
                <Route exact path="/" component={Home} />
                <Route exact path="/home" component={Home} />
                <Route exact path="/list" component={List} />
            </Frame>

        </HashRouter>
    </Provider>,
    document.getElementById('app')
);