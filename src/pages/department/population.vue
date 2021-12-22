<template>
  <div class="population">
    <form>
      <div class="form-group">
        <label for="deptName">部门名称</label>
        <div v-if="readonly" class="card" id="deptName">
          <div class="card-body">This is some text within a card body.</div>
        </div>
        <input
          v-else
          class="form-control"
          id="deptName"
          placeholder=""
        />
      </div>
      <div class="form-group">
        <label for="deptInfo">部门职责</label>
        <div v-if="readonly" class="card" id="deptInfo">
          <div class="card-body">This is some text within a card body.</div>
        </div>
        <textarea v-else class="form-control" id="deptInfo" rows="3"></textarea>
      </div>
      <div class="form-group">
        <label for="minister">户部侍郎</label>
        <div v-if="readonly" class="card" id="minister">
          <div class="card-body">This is some text within a card body.</div>
        </div>
        <select
          v-else
          id="minister"
          class="selectpicker show-tick"
          data-width="100%"
        >
          <option>Mustard</option>
          <option>Ketchup</option>
          <option>Barbecue</option>
        </select>
      </div>
      <div class="form-group">
        <label for="children">下辖部门</label>
        <div v-if="readonly" class="card" id="children">
          <div class="card-body">This is some text within a card body.</div>
        </div>
        <textarea v-else class="form-control" id="children" rows="3"></textarea>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  name: "PopulationMinister",
  data() {
    return {
      readonly: true,
    };
  },
  created() {
    this.readonly = this.$route.query.mode !== 'update';
  }
};
</script>
<style lang="less" scoped>
.population {
  padding: 24px 0;
}
</style>