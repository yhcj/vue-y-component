<template>
  <div class="y-form-item">
    <label :style="{ width: labelWidth }" class="y-form-item_label">{{
      label
    }}</label>
    <div class="y-form-item_content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import { inject } from "vue";
export default {
  name: "YFormItem",
  props: {
    label: {
      type: String,
      default: "",
    },
  },
  setup() {
    let labelWidth = inject("labelWidth");
    return {
      labelWidth,
    };
  },
};
</script>
<style lang="less" scoped>
.y-form-item {
  margin-bottom: 25px;
  .y-form-item_label {
    text-align: right;
    vertical-align: middle;
    float: left;
    font-size: 14px;
    color: #606266;
    line-height: 40px;
    padding: 0 12px 0 0;
    box-sizing: border-box;
  }
  .y-form-item_content {
    line-height: 40px;
    position: relative;
    font-size: 14px;
    overflow: hidde;
  }
}
</style>