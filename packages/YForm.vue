<template>
  <div class="y-form"><slot></slot></div>
</template>

<script>
import { provide } from "vue";
export default {
  name: "YForm",
  props: {
    model: {
      type: Object,
      required: true,
      default: () => {},
    },
    labelWidth: {
      type: String,
      default: "",
    },
  },
  setup(props) {
    provide("labelWidth", props.labelWidth);
  },
};
</script>

<style>
</style>