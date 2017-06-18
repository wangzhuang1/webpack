/**
 * Created by wangzhuang on 11/6/17.
 */

import {GET_BANNER_LIST} from '../actions/ActionTypes'


export function todoApp(state = {}, action) {
    switch (action.type) {
        case GET_BANNER_LIST:
            if( action.data.code == 200 ){
                state = action.data.data;
                return state;
            }else{
                return {};
            }
        default:
            return state
    }
}