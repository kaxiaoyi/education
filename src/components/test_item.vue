<template>
    <table class="test-item">
        <thead>
            <tr>
                <td>选考科目</td>
                <td>高校数</td>
                <td>专业(类)数</td>
                <td>科目比例</td>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(v,i) in testdata" :key="i">
                    <td>{{v.subject}}</td>
                    <td>{{v.collegesCount}}</td>
                    <td>{{v.majorCount}}</td>
                    <td>{{v.rate}}</td>
            </tr>
        </tbody>
    </table>
</template>
<script>
export default {
    props:['testdata']
}
</script>
<style scoped>
    .test-item{
        width: 50%;
        text-align: center;
        float: left;
        line-height: 50px;
        margin-bottom: 20px;
    }
    .test-item thead{
        background: rgba(0,160,92,1);  
        color: #fff;
    }
     .test-item tbody{
        border:1px solid #ccc;
     }
    .test-item tbody tr{
        border-bottom: 1px solid #ccc;
    }
    .test-item tbody tr td{
      border-right: 1px solid #ccc;  
    }
</style>

