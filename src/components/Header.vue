<template>
    <header>
      <img id="logo" src="@/assets/logo.png" alt="logo" />
      <strong>教学质量测评系统</strong>
      <span>{{ identity }}</span>
    </header>
</template>

<script>
export default {
  name: "Header",
  props: {},
};
</script>

<style lang="scss">
header {
  background-color: #f0f0f0;
  text-align: left;
  span:last-child {
    float: right;
    margin-right: 20px;
    height: 80px;
    line-height: 80px;
    cursor: pointer;
  }
}
strong {
  height: 80px;
  line-height: 80px;
  margin-left: 85px;
}
#logo {
  position: absolute;
  top: 15px;
  left: 18px;
  width: 50px;
  height: 50px;
}
</style>
