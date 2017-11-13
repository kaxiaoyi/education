<template>
    <div class="school-range clearfix">
        <div class="left-title">高校层次:</div>
        <div class="right-selected">
            <filter-item v-for="(value,index) in SchoolRangeList" :key="index" :index="index" :range-object="value" :catagory="'高校层次'"></filter-item>
        </div>
    </div>
</template>
<script>
import filter_item from "./filer_item.vue"
export default {
    props: {
        SchoolRangeList: {
            type: Array,
            required: true
        }
    },
     components: {
        "filter-item":filter_item
    }
}
</script>
<style scoped>
    
.right-selected {
    width: 90%;
}
</style>

