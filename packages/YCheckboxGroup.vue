<template>
  <div class="one-checkbox-group">
    <slot></slot>
  </div>
</template>

<script>
import { provide, watch, ref, reactive } from "vue";

export default {
  name: "YCheckboxGroup",
  props: {
    modelValue: {
      type: Array,
    },
  },
  setup(props, ctx) {
    const { emit } = ctx;
    let arr = ref([...props.modelValue]);
    provide("CheckboxGroup", {
      CheckboxGroupValue: arr,
      emit: (value) => {
        emit("update:modelValue", value);
      },
    });

    watch(
      () => props.modelValue,
      (newValue) => {
        arr.value = newValue;
      }
    );
  },
};
</script>

<style>
</style>