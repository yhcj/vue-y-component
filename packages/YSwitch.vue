<template>
  <div
    class="y-switch"
    @click="handleClick"
    :class="{ 'is-checked': modelValue }"
  >
    <input
      ref="inputName"
      class="y-switch_input"
      type="checkbox"
      :name="name"
    />
    <span class="y-switch_core" ref="code">
      <span class="y-switch_button"> </span>
    </span>
  </div>
</template>

<script>
import { onMounted, reactive, ref, nextTick } from "vue";
export default {
  name: "YSwitch",
  props: {
    modelValue: {
      type: Boolean,
      default: false,
    },
    activeColor: {
      type: String,
      default: "",
    },
    inactiveColor: {
      type: String,
      default: "",
    },
    name: {
      type: String,
      default: "",
    },
  },
  emits: ["update:modelValue"],
  setup(props, context) {
    const { emit } = context;
    const code = ref(null);
    const inputName = ref(null);
    const { inactiveColor, activeColor } = reactive(props);
    onMounted(() => {
      setColor();
      inputName.value.checked = props.modelValue;
    });
    const handleClick = async function () {
      emit("update:modelValue", !props.modelValue);
      await nextTick();
      setColor();
      inputName.value.checked = props.modelValue;
    };
    const setColor = function () {
      if (activeColor || inactiveColor) {
        let color = props.modelValue ? activeColor : inactiveColor;
        code.value.style.borderColor = color;
        code.value.style.backgroundColor = color;
      }
    };
    return {
      handleClick,
      code,
      setColor,
      inputName,
    };
  },
};
</script>

<style lang="less" scope>
.y-switch {
  display: inline-block;
  align-items: center;
  position: relative;
  font-size: 14px;
  line-height: 20px;
  vertical-align: middle;
  .y-switch_core {
    margin: 0;
    display: inline-block;
    position: relative;
    width: 40px;
    height: 20px;
    border: 1px solid #dcdfe6;
    outline: none;
    border-radius: 10px;
    box-sizing: border-box;
    background: #dcdfe6;
    cursor: pointer;
    transition: border-color 0.3s, background-color 0.3s;
    vertical-align: middle;
    .y-switch_button {
      position: absolute;
      top: 1px;
      left: 1px;
      border-radius: 100%;
      transition: all 0.3s;
      width: 16px;
      height: 16px;
      background-color: #fff;
    }
  }
}
// 选中样式
.is-checked {
  .y-switch_core {
    border-color: #409eff;
    background-color: #409eff;
    .y-switch_button {
      transform: translateX(20px);
    }
  }
}
// 隐藏input标签
.y-switch_input {
  position: absolute;
  width: 0;
  height: 0;
  opacity: 0;
  margin: 0;
}
</style>