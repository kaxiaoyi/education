import Vue from "vue";

import Vuex from 'vuex';
Vue.use(Vuex);


let store = new Vuex.Store({
    state: {
        school_range_obj: [],
        school_area_obj: [],
        retrieval_list_data:{},
        table_title:[],
        table_item:[],
        test_data:[],
        test_left:[],
        test_right:[]
    },
    mutations: {
        updated_school_range: function (state, list) {
            state.school_range_obj = list;
        },
        updated_school_area: function (state, list) {
            state.school_area_obj = list;
        },
        reset_school_range: function (state, item) {
            let arr;
            arr = state.school_range_obj.map((value, index) => {
                if (item.index == index) {
                    value.selected = item.selected;
                } else {
                    value.selected = false;
                }
                return value;
            })

            let selected_none = true;
            arr.forEach(item => {
                if (item.selected) {
                    selected_none = false;
                }
            })
            if (selected_none) {
                arr[0].selected = true;
            }
            state.school_range_obj = arr;
        },
        reset_school_area: function (state, item) {
            let arr;
            arr = state.school_area_obj.map((value, index) => {
                if (item.index == index) {
                    value.selected = item.selected;
                }
                return value;
            })
            arr[0].selected = false;
            if (item.index == 0) {
                arr.forEach(item => {
                    item.selected = false;
                })
            }
            let selected_none = true;
            arr.forEach(item => {
                if (item.selected) {
                    selected_none = false;
                }
            })
            if (selected_none) {
                arr[0].selected = true;
            }
            state.school_area_obj = arr;
        },
        clear_range:function(state){
            state.school_range_obj.forEach((item,index)=>{
              item.selected = (index==0);
            })
        },
        clear_area:function(state){
             state.school_area_obj.forEach((item,index)=>{
              item.selected = (index==0);
            })
        },
        retrieval:function(state,list){
                    state.retrieval_list_data=list.result.analysisData;
        },
        table_title:(state,list)=>{
            state.table_title=list;
        },
        table_item:(state,list)=>{
            state.table_item=list;
        },
        test_data:function(state,list){
            state.test_data=list;
        },
        test_left:function(state,len){
           state.test_left=state.test_data.slice(0,len);
           state.test_right=state.test_data.slice((len-1),state.test_data.length-1);
        }
    },
    getters:{
        selected_range:function(state){
            let str="";
            state.school_range_obj.forEach((value,index)=>{
                if(value.selected){
                    str=value.value;
                }
            })
             return str;
        },
        selected_area:function(state){
             let arr=[];
            state.school_area_obj.forEach((value,index)=>{
                if(value.selected){
                    arr.push(value.value);
                }
            })
            return arr.join(',');
        },
        retrieval_list_data:function(state){
            // return "aaa"
            console.log(state)
        }
    }
})
export default store;