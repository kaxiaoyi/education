<template>
    <div>
        <div class="retrieval">
            <input type="text" placeholder="请输入要搜索的高校名称">
            <button @click="retrieval">搜索</button>
        </div>

        <div class="main">
            <h3>选考科目分析</h3>
            <p class="remind">
                科目比例：要求所选选考科目的专业总数/条件范围内专业总数。以专业为例：经济统计学专业历史所占比例为66.7%，意为选考历史，66.7%的经济统计学专业均可报考。
            </p>
        </div>

        <div class="retrieval_list">
            <div class="retrieval_list_tit" id="1">
                <ol id="1">
                    <li>选考科目</li>
                    <li>专业(类)数</li>
                    <li>科目比例</li>
                </ol>
                <retrieval-item :retrieval="$store.state.retrieval_list_data" :id="1"></retrieval-item>
            </div>
            <div class="retrieval_list_tit" id="2">
                <ol id="1">
                    <li>选考科目</li>
                    <li>专业(类)数</li>
                    <li>科目比例</li>
                </ol>
                <retrieval-item :retrieval="$store.state.retrieval_list_data" :id="2"></retrieval-item>
            </div>
            <div class="retrieval_list_tit" id="3">
                <ol id="1">
                    <li>选考科目</li>
                    <li>专业(类)数</li>
                    <li>科目比例</li>
                </ol>
                    <retrieval-item :retrieval="$store.state.retrieval_list_data" :id="3"></retrieval-item>
            </div>
        </div>
    </div>
</template>
<script>
import retrieval_item from "../components/retrieval_item.vue"
export default {
    data() {
        return {

        }
    },
    methods: {
        retrieval: function() {
            this.$store.commit("retrieval", this.name)
        }
    },
    created: function() {
        this.$http.get("src/server/retrievalData.json").then((res) => {
            this.$store.commit("retrieval", res.data);
        })
    },
    components: {
        "retrieval-item": retrieval_item
    }

}
</script>
<style scoped>
* {
    margin: 0;
    padding: 0;
}

.retrieval {
    font-size: 0;
}

.retrieval input {
    width: 400px;
    height: 35px;
    border-width: 0;
    background: none;
    border: 3px solid rgba(0, 160, 92, 1);
}

.retrieval button {
    width: 90px;
    height: 41px;
    background: rgba(0, 160, 92, 1);
    border: none;
    color: #fff;
    padding-bottom: 1px;
    font-weight: bold;
}

.retrieval_list {
    width: 100%;
    display: flex;
    border-left: 1px solid #ccc;
    font-size: 14px;
}

.retrieval_list_tit {
    flex: 1;
}

.retrieval_list_tit ol {
    display: flex;
    text-align: center;
    line-height: 50px;
    color: #fff;
    height: 50px;
    background: rgba(0, 160, 92, 1);
}

.retrieval_list_tit ol li {
    flex: 1;
    text-align: center;
}
</style>


