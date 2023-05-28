<!--
 * @Description: 
 * @Autor: 夏晓雪
 * @Date: 2023-04-09 17:16:47
 * @LastEditors: 夏晓雪
 * @LastEditTime: 2023-04-14 21:36:58
-->
<template>
  <div id="app">
    <Header></Header>
    <Aside></Aside>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from "./components/Header.vue"
import Aside from "./components/Aside.vue"
export default {
  name:'app',
  components: {Header,Aside},
  data() {
    return {
      // identity: "身份",
    };
  },
};
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  height: 100%;
  // background-color: #f0f0f0;
}

</style>
