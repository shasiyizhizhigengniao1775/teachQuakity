<!--
 * @Description: 
 * @Autor: 夏晓雪
 * @Date: 2023-04-16 14:41:27
 * @LastEditors: 夏晓雪
 * @LastEditTime: 2023-04-16 15:31:10
-->
<template>
    <!-- <aside>
        <p><router-link to="/index">首页</router-link></p>
        <p v-for="menu in menuList" :key="menu.id">{{menu.name }}</p>
    </aside> -->
    <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
    <el-menu :default-openeds="['1', '2']">
      <el-submenu index="1">
        <template slot="title"><i class="el-icon-message"></i>首页</template>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title"><i class="el-icon-setting"></i>教学评价</template>
        <!-- <el-menu-item-group>
          <template slot="title">分组一</template>
          <el-menu-item index="3-1">选项1</el-menu-item>
          <el-menu-item index="3-2">选项2</el-menu-item>
        </el-menu-item-group> -->
      </el-submenu>
    </el-menu>
  </el-aside>
  </template>
  
  <script>
  export default {
    name: 'AsideSub',
    props: {
      msg: 'aside'
    },
    data(){
        return {
            menuList:[{name:'测试',id:1},{name:'评价',id:2}],
        }
    }
  }
  </script>
  
 <style>
 aside{
   position: absolute;
   left: 0;
   background-color: aqua;
   width:300px;

 }
</style>