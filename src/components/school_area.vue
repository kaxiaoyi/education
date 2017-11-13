<template>
    <div class="school-area clearfix">
        <div class="left-title">高校地区:</div>
        <div class="right-selected">
            <filter-item v-for="(value,index) in SchoolAreaList" :key="index" :index="index" :range-object="value" :catagory="'高校地区'"></filter-item>
        </div>
    </div>
</template>
<script>
import filter_item from "./filer_item.vue"
export default {
    props: {
        SchoolAreaList: {
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

