<template>
  <div class="home">
    home
  </div>
</template>
<script>
export default {
  name: "home",
  components: {},
  data() {
    return {};
  },
  methods: {},
};
</script>
<style lang="less">
.home {
  height: 100%;
  margin: 0 auto;
}
</style>
<style lang="less" scoped>
.home {
  height: 100%;
  margin: 0 auto;
  display: flex;
  aside {
    width: 320px;
    border-right: thin solid #eee;
    background-color: orangered;
    &.fold {
      width: 0;
      border-right: none;
    }
  }
  .lr-switcher {
    margin-right: -14px;
    i {
      position: relative;
      top: 50%;
      margin-top: -7px;
      cursor: pointer;
    }
  }
  main {
    flex-basis: 320px;
    flex-grow: 1;
    flex-shrink: 1;
    background-color: orange;
    display: flex;
    flex-direction: column;
    .filters {
      height: 240px;
      border-bottom: thin solid #eee;
      background-color: blueviolet;
      &.fold {
        height: 0;
        border-bottom: none;
      }
    }
    .ud-switcher {
      margin-bottom: -21px;
      i {
        position: relative;
        left: 50%;
        margin-left: -7px;
        cursor: pointer;
      }
    }
    .listviews {
      flex-basis: 320px;
      flex-grow: 1;
      flex-shrink: 1;
      background-color: greenyellow;
    }
  }
}
</style>