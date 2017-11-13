<template>
    <div class="retrieval_list_main">
        <ul v-for="item in retrieval" v-if="item.collegesCount==id">
            <li>{{item.subject}}</li>
            <li>{{item.majorCount}}</li>
            <li>{{item.rate}}</li>
        </ul>
     </div> 
</template>
<script>
export default {
    data: function() {
        return {
            retrieval_filter:[],
            name:{}
        }
    },
    props: ["retrieval",'id'],
    created: function() {
        console.log(this.id)

    },
    // updated: function() {
    //     for (var key in this.retrieval) {
    //         if(this.retrieval[key].collegesCount == this.id){
    //             this.retrieval =  this.retrieval 
    //             // console.log(this.retrieval[key]);           
    //         }
    //     }
    // },
    filters: {  
    filterFun: function (value) {  
        console.log(value)
      return value  
    }  
  }  
}
</script>
<style scoped>
.retrieval_list_main ul {
    display: flex;
    border-bottom: 1px solid #ccc;
}
.retrieval_list_main ul li {
    flex: 1;
    text-align: center;
    line-height: 50px;
    border-right:1px solid #ccc;
}
</style>


