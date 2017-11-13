<template>
    <div class="wrap">
        <div class="router">
            <p class="remind">
                *由于2020年拟在京招生普通高校专业（类）选考科目范围尚未公布，暂时调用2018年拟在浙招生普通高校专业（类）选考科目范围，该数据仅供参考，正式文件公布后会即时替换！
            </p>
            <ul class="tab">
                <router-link class="filter-items" :to="{name:'overall'}" :tag="'li'">综合检索</router-link>
                <router-link class="filter-items" :to="{name:'college'}" :tag="'li'">高校检索</router-link>
                <router-link class="filter-items" :to="{name:'major'}" :tag="'li'">专业检索</router-link>
            </ul>
            <router-view></router-view>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {

        }
    }
}
</script>
<style>
* {
    margin: 0;
    padding: 0;
    list-style: none;
}

html,
body {
    width: 100%;
    height: 100%;
}

.wrap {
    width: 1200px;
    margin: 0 auto;
}

.router {
    font-size: 16px;
}

.remind {
    color: red;
    font-size: 14px;
    line-height: 30px;
}

.tab {
    height: auto;
    font-size: 0;
    margin: 10px 0;
    border-bottom: 1px solid #ccc;
    box-sizing: border-box;
}

.tab li {
    display: inline;
}

.selected {
    background: rgba(0, 160, 92, 1);
    color: #fff;
}

.filter-items {
    display: inline-block;
    min-width: 70px;
    height: 35px;
    color: #333;
    text-align: center;
    line-height: 35px;
    padding: 7px;
    cursor: pointer;
    font-size: 16px;
}

.router-link-active,
.filter-items:hover {
    background: rgba(0, 160, 92, 1);
    color: #fff;
}

.selected-condations {
    padding: 10px;
    line-height: 35px;
}

.left-title {
    padding-left: 5px;
    margin: 5px 0;
}

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

.clearfix {
    *zoom: 1;
}

.main h3 {
    padding-top: 10px;
    line-height: 40px;
    border-bottom: 1px solid #ccc;
}
</style>

 