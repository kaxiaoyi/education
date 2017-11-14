<template>
    <table class="table">
        <thead>
            <tr>
                <td v-for="(v,i) in $store.state.table_title" :key="i">{{v}}</td>
            </tr>
        </thead>
        <table-item v-for="(v,i) in $store.state.table_item" :key="i" :row="v"></table-item>
    </table>
</template>
<script>
import table_item from "./table_item.vue";
export default {
    components: {
        "table-item": table_item
    }
}
</script>
<style scope>
.table {
    width: 100%;
    text-align: center;
}

.table>thead {
    line-height: 50px;
    background-color: rgba(0, 160, 92, 1);
    color: #fff;
}
.table tbody {
    line-height: 50px;
}
</style>


