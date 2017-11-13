<template>
    <span class="filter-item" @click="toggle" :class="{selected:rangeObject.selected}">
        {{rangeObject.value}}</span>
</template>
<script>

export default {
    props: ['index', 'catagory', 'rangeObject'],
    // props: {
    //     index: {
    //         type: Number,
    //         required: true
    //     },
    //     catagory: {
    //         type: String,
    //         required: true
    //     },
    //     rangeObject: {
    //         type: "*",
    //         required: true
    //     }
    // },
    methods: {
        toggle: function() {
            if (this.catagory == "高校层次") {
                this.$store.commit("reset_school_range", {
                    index: this.index,
                    selected: !this.rangeObject.selected
                })
                return;
            }
             if (this.catagory == "高校地区") {
                this.$store.commit("reset_school_area", {
                    index: this.index,
                    selected: !this.rangeObject.selected
                })
            }
        }
    }
}
</script>
<style scoped>
.filter-item {
    min-width: 70px;
    height: 35px;
    color: #333;
    text-align: center;
    line-height: 35px;
    padding: 7px;
    margin: 5px;
    cursor: pointer;
}

.selected {
    background: rgba(0, 160, 92, 1);
    color: #fff;
}

.filter-item:hover {
    background: rgba(0, 160, 92, 1);
    color: #fff;
}
</style>

