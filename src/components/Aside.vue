<template>
  <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
    <el-menu :default-active="$route.path">
      <el-menu-item >首页</el-menu-item>
      <aside-sub ></aside-sub>
    </el-menu>
  </el-aside>
</template>
  
  <script>
  import AsideSub from './AsideSub.vue';
  export default {
    name: 'Aside',
    components:{AsideSub},
    props: {
      msg: 'aside'
    },
    data(){
        return {
            menuList:[{name:'测试',id:1},{name:'评价',id:2}],
        }
    },
// mounted(){
// console.log(this.$refs);
// }
  }
  </script>
  
 <style>

</style>