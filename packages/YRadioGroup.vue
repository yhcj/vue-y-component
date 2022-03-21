<template>
  <div class="">
    <slot></slot>
  </div>
</template>

<script>
import { onUpdated, provide, reactive } from "vue";
export default {
  name: "YRadioGroup",
  props: {
    // 组件接收到了modelValue值，我们需要触发这个组件的input事件
    // provide 与 inject  用来做祖孙之间得组件通讯
    modelValue: null,
  },
  emits: ["update:modelValue"],
  setup(props, context) {
    const { emit } = context;
    provide("RadioGroupProp", reactive(props));
    provide("RadioGroupEmit", (value) => {
      emit("update:modelValue", value);
    });
    onUpdated(() => {
      console.log("modelValue", props.modelValue);
    });
  },
};
</script>

<style>
</style>