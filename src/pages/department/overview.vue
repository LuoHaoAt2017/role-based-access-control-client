<template>
  <div class="department-list">
    <a-list item-layout="horizontal" :data-source="depts">
      <a-list-item slot="renderItem" slot-scope="item">
        <a-list-item-meta>
          <h3 slot="title">{{ item.dept_name }}</h3>
          <a-avatar slot="avatar">
            <a-icon slot="icon" :type="item.dept_logo"></a-icon>
          </a-avatar>
          <div slot="description">
            {{ item.description }}
          </div>
        </a-list-item-meta>
      </a-list-item>
    </a-list>
  </div>
</template>
<script>
export default {
  name: "department-overview",
  components: {},
  data() {
    return {
      depts: [],
    };
  },
  mounted() {},
  methods: {},
};
</script>
<style lang="less">
.department-list {
  height: 100%;
  margin: 0 auto;
}
</style>
<style lang="less" scoped>
.department-list {
}
</style>