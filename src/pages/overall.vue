<template>
    <div class="filter-box">

        <div class="selected-condations clearfix">
            <div class="left-title">已选条件:</div>
            <div class="right-selected">
                <span class="clear" v-if="selected_range_item!='不限'">
                    {{selected_range_item}}
                    <em @click="clearRange">X</em>
                </span>
                <span class="clear" v-if="selected_area_item!='不限'">
                    {{selected_area_item}}
                    <em @click="clearArea">X</em>
                </span>
            </div>
        </div>

        <div class="condations-box">
            <div class="major-range clearfix">
                <div class="left-title">专业层次:</div>
                <div class="right-selected">

                </div>
            </div>

            <school-range :school-range-list="$store.state.school_range_obj"></school-range>

            <school-area :school-area-list="$store.state.school_area_obj"></school-area>

        </div>

         <div class="main">
            <h3>选考科目分析</h3>
             <p class="remind">
                科目比例：要求所选选考科目的专业总数/条件范围内专业总数。以专业为例：经济统计学专业历史所占比例为66.7%，意为选考历史，66.7%的经济统计学专业均可报考。
            </p>
        </div>
    </div>
</template>
<script>
import school_range from '../components/school_range.vue'
import school_area from '../components/school_area.vue'
export default {
    data: function() {
        return {
        }
    },
    computed: {
        selected_range_item: function() {
            return this.$store.getters.selected_range;
        },
        selected_area_item: function() {
            return this.$store.getters.selected_area;
        }
    },
    created: function() {
        this.$http.get("src/server/schoolRange.json").then((res) => {
            let range_data = res.data.list.map((value, index) => {
                return index == 0 ? { value: value, selected: true } : { value: value, selected: false };
            })
            this.$store.commit('updated_school_range', range_data);
        });
        this.$http.get("src/server/schoolArea.json").then((res) => {
            let area_data = res.data.list.map((value, index) => {
                return index == 0 ? { value: value, selected: true } : { value: value, selected: false };
            })
            this.$store.commit('updated_school_area', area_data);
        });

    },
    components: {
        "school-range": school_range,
        "school-area": school_area
    },
    methods: {
        clearRange: function() {
            this.$store.commit("clear_range")
        },
        clearArea: function() {
            this.$store.commit("clear_area")
        }
    }
}
</script>
<style scoped>

.left-title,
.right-selected {
    float: left;
}

.condations-box {
    border: 1px solid #ccc;
    padding: 10px;
    line-height: 35px;
}


.selected {
    background: rgba(0, 160, 92, 1);
    color: #fff;
}

.clearfix:before,
.clearfix:after {
    content: " ";
    display: table;
}

.clearfix:after {
    clear: both;
}





/**
 * For IE 6/7 only
 */

.clearfix {
    *zoom: 1;
}

.clear {
    display: inline-block;
    min-width: 70px;
    height: 30px;
    color: #333;
    text-align: center;
    line-height: 30px;
    padding: 3px 5px;
    cursor: pointer;
    font-size: 16px;
    border: 1px solid #ccc;
    margin-top: 3px;
}
</style>

