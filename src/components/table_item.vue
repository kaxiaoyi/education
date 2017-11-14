<template>
    <tbody>
        <tr class="tr">
            <td v-for="(item,index) in v_title" :key="index">
                <span v-if="index==0" @click="show_btn">{{val}}</span>{{item}}
            </td>
        </tr>
        <tr v-show="auto_none">
           <td colspan="9">
                <table class="children_table">
                    <tr>
                        <td>高校地区</td>
                        <td>高校名称</td>
                        <td>专业(类)</td>
                        <td>类中所含专业</td>
                        <td>选考科目范围</td>
                    </tr>
                    <tr v-for="(v,i) in v_main" :key="i">
                        <td>{{v.province}}</td>
                         <td>{{v.collegeName}}</td>
                        <td>{{v.majorName}}</td>
                        <td>{{v.subjectRangeNames.join(',')}}</td>
                        <td>{{v.userProvince}}</td> 
                    </tr>
                </table>
           </td>
        </tr>
    </tbody>
</template>
<script>
export default {
    data: function() {
        return {
            v_title: [],
            v_main: [],
            auto_none:false,
            val:"+"
        }
    },
    props: ['row'],
    methods:{
        show_btn:function(){
            this.auto_none=!this.auto_none;
            if(this.auto_none){
                this.val='-'
            }else{
                this.val='+'
            }
        }
    },
    created: function() {
        this.v_title = this.row.slice(0, 9);
        this.v_main = this.row.slice(9)[0];
    },
}
</script>
<style scoped>
.children_table {
    width: 100%;
    background: #eee;
    border-left: 1px solid #ccc;
}
.children_table tr{
    border-bottom:1px solid #ccc; 
}
.children_table tr td{
    border-right: 1px solid #ccc;
}
.tr{
     border-bottom: 1px solid #ccc;
     border-left: 1px solid #ccc;
}
.tr td{
    border-right: 1px solid #ccc;
    position: relative;
}
.tr span{
    float: left;
    display: inline-block;
    width: 15px;
    height: 15px;
    background: rgba(0,160,92,1);
    text-align: center;
    line-height: 15px;
    color:#fff;
    margin-top: 15px;
    margin-left: 5px;
    cursor:pointer;
}
</style>
