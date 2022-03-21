<template>
  <label class="y-radio" :class="{ 'is-checked': label === model }">
    <span class="y-radio_input">
      <span class="y-radio_inner"></span>
      <input
        :name="name"
        class="y-radio_original"
        type="radio"
        :value="label"
        v-model="model"
      />
    </span>
    <span class="y-radio_label"
      ><slot>{{ label }}</slot>
    </span>
  </label>
</template>

<script>
import { computed, inject } from "vue";
export default {
  props: {
    modelValue: null,
    label: {
      type: [Boolean, String, Number],
      default: "",
      required: true,
    },
    name: {
      type: String,
      default: "",
    },
  },
  emits: ["update:modelValue"],
  setup(props, context) {
    const { emit } = context;

    const RadioGroupProp = inject("RadioGroupProp");
    const RadioGroupEmit = inject("RadioGroupEmit");

    let isFromRadioGroup = computed(() => {
      return !!RadioGroupProp;
    });
    let model = computed({
      get: () => {
        return isFromRadioGroup.value
          ? RadioGroupProp.modelValue
          : props.modelValue;
      },
      set: (value) => {
        isFromRadioGroup.value
          ? RadioGroupEmit(value)
          : emit("update:modelValue", value);
      },
    });
    return {
      model,
      isFromRadioGroup,
    };
  },
};
</script>

<style lang="less" scope>
.y-radio {
  color: #606266;
  font-weight: 500;
  line-height: 1;
  position: relative;
  cursor: pointer;
  display: inline-block;
  white-space: nowrap;
  outline: none;
  font-size: 14px;
  margin-right: 30px;
  -moz-user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  .y-radio_input {
    white-space: nowrap;
    cursor: pointer;
    outline: none;
    display: inline-block;
    line-height: 1;
    position: relative;
    vertical-align: middle;
    .y-radio_inner {
      border: 1px solid #dcdfe6;
      border-radius: 100%;
      width: 14px;
      height: 14px;
      background-color: #fff;
      position: relative;
      cursor: pointer;
      display: inline-block;
      box-sizing: border-box;
      &:after {
        width: 4px;
        height: 4px;
        border-radius: 100%;
        background-color: #fff;
        content: "";
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%) scale(0);
        transition: transform 0.15s ease-in;
      }
    }
    .y-radio_original {
      opacity: 0;
      outline: none;
      position: absolute;
      z-index: -1;
      top: 0;
      left: 0px;
      right: 0;
      bottom: 0;
      margin: 0;
    }
  }
  .y-radio_label {
    font-size: 14px;
    padding-left: 10px;
  }
}
// 选中的样式
.y-radio.is-checked {
  .y-radio_input {
    .y-radio_inner {
      border-color: #409eff;
      background-color: #409eff;
      &:after {
        transform: translate(-50%, -50%) scale(1);
      }
    }
  }
  .y-radio_label {
    color: #409eff;
  }
}
</style>