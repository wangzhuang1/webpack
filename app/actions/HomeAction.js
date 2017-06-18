/**
 * Created by wangzhuang on 11/6/17.
 */

import {GET_BANNER_LIST} from './ActionTypes';
import {rcAjax} from '../Plugin';

export function fetchBannerList(dispatch){
    return rcAjax('GET','',{

    },function(data){
        dispatch({ type: GET_BANNER_LIST, data:data});
    });
}