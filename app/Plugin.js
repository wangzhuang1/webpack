/**
 * Created by wangzhuang on 11/6/17.
 */

import $ from 'jquery';
import {Component} from 'react';


export function rcAjax(type,url,param,callback){
    return $.ajax({
        type : type,
        url : url,
        data : param,
        success : function (msg) {
            callback(msg);
        }
    })
}

export function extendComponent() {
    return function(){
        Component.prototype.isEmptyobj = function(obj) {
            for (var key in obj) {
                return false;
            }
            return true;
        }

    }
}