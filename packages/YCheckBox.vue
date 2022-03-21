<template>
  <label class="y-checkbox" :class="{ ' is-checked': isChecked }">
    <span class="y-checkbox_input">
      <span class="y-checkbox_inner"></span>
      <input
        type="checkbox"
        class="y-checkbox_original"
        :name="name"
        v-model="model"
        :value="label"
      />
    </span>
    <span class="y-checkbox_label">
      <slot></slot>
      <template v-if="!$slots.default">
        {{ label }}
      </template>
    </span>
  </label>
</template>

<script>
import { computed, inject, watch } from "vue";
export default {
  name: "YCheckbox",
  props: {
    modelValue: {
      type: Boolean,
      default: false,
    },
    label: {
      type: String,
      default: "",
    },
    name: {
      type: String,
      default: "",
    },
  },
  setup(props, ctx) {
    const { emit } = ctx;
    const CheckboxGroup = inject("CheckboxGroup");
    let isGroup = computed(() => {
      return !!CheckboxGroup;
    });
    let injectValue = computed(() => {
      if (isGroup.value) {
        return CheckboxGroup.CheckboxGroupValue.value;
      }
    });
    let model = computed({
      get() {
        if (isGroup.value) {
          return injectValue.value;
        } else {
          return props.modelValue;
        }
      },
      set(value) {
        if (isGroup.value) {
          CheckboxGroup.emit(value);
        } else {
          emit("update:modelValue", value);
        }
      },
    });

    let isChecked = computed(() => {
      if (isGroup.value) {
        return model.value.includes(props.label);
      } else {
        return model.value;
      }
    });
    return {
      isGroup,
      model,
      isChecked,
      injectValue,
    };
  },
};
</script>

<style lang="less" scoped>
.y-checkbox {
  color: #606266;
  font-weight: 500;
  font-size: 14px;
  position: relative;
  cursor: pointer;
  display: inline-block;
  white-space: nowrap;
  user-select: none;
  margin-right: 30px;
  .y-checkbox_input {
    white-space: nowrap;
    cursor: pointer;
    outline: none;
    display: inline-block;
    line-height: 1;
    position: relative;
    vertical-align: middle;
    .y-checkbox_inner {
      display: inline-block;
      position: relative;
      border: 1px solid #dcdfe6;
      border-radius: 2px;
      box-sizing: border-box;
      width: 14px;
      height: 14px;
      background-color: #fff;
      z-index: 1;
      transition: border-color 0.25s cubic-bezier(0.71, -0.46, 0.29, 1.46),
        background-color 0.25s, cubic-bezier(0.71, -0.46, 0.29, 1.46);
      &:after {
        box-sizing: content-box;
        content: "";
        border: 1px solid #ffffff;
        border-left: 0;
        border-top: 0;
        height: 7px;
        left: 4px;
        position: absolute;
        top: 1px;
        transform: rotate(45deg) scaleY(0);
        width: 3px;
        transition: transform 0.15s ease-in 0.05s;
        transform-origin: center;
      }
    }
    .y-checkbox_original {
      opacity: 0;
      outline: none;
      position: absolute;
      left: 10px;
      margin: 0;
      width: 0;
      height: 0;
      z-index: -1;
    }
  }
  .y-checkbox_label {
    display: inline-block;
    padding-left: 10px;
    line-height: 19px;
    font-size: 14px;
  }
}
// 选中的样式
.y-checkbox.is-checked {
  .y-checkbox_input {
    .y-checkbox_inner {
      background-color: #409eff;
      border-color: #409eff;
      &:after {
        transform: rotate(45deg) scaleY(1);
      }
    }
  }
  .y-checkbox_label {
    color: #409eff;
  }
}
</style>