<template>
  <label class="y-input" :class="{ 'y-input_suffix': showSuffix }">
    <input
      class="y-input_inner"
      :class="{ 'is-disabled': disabled }"
      :type="showPassword ? (passwordVisible ? 'text' : 'password') : type"
      :placeholder="placeholder"
      :name="name"
      :disabled="disabled"
      :value="modelValue"
      :autocomplete="autocomplete"
      @input="handleInput"
    />
    <span class="y-input_suffix" v-if="showSuffix">
      <el-icon class="" v-if="clearable && modelValue" @click="handleClear"
        ><circle-close-filled
      /></el-icon>
      <el-icon class="" v-if="showPassword" @click="handleShowPassword"
        ><View></View
      ></el-icon>
    </span>
  </label>
</template>

<script>
import { computed, ref } from "vue";
export default {
  name: "YInput",
  props: {
    placeholder: {
      type: String,
      default: "请输入",
    },
    type: {
      type: String,
      default: "text",
    },
    name: {
      type: String,
      default: "",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    modelValue: {
      type: String,
      default: "",
    },
    autocomplete: {
      type: String,
      default: "",
    },
    clearable: {
      type: Boolean,
      default: false,
    },
    showPassword: {
      type: Boolean,
      default: false,
    },
  },
  emits: ["update:modelValue"],
  setup(props, context) {
    const { emit } = context;
    const handleInput = function (e) {
      emit("update:modelValue", e.target.value);
    };

    let showSuffix = computed(() => {
      return props.clearable || props.showPassword;
    });
    let passwordVisible = ref(false); // 密码是否显示
    const handleClear = function (e) {
      emit("update:modelValue", "");
    };
    const handleShowPassword = function (e) {
      passwordVisible.value = !passwordVisible.value;
    };

    return {
      handleInput,
      showSuffix,
      passwordVisible,
      handleClear,
      handleShowPassword,
    };
  },
};
</script>

<style lang="less" scope>
.y-input {
  width: 100%;
  position: relative;
  font-size: 14px;
  display: inline-block;
  .y-input_inner {
    -webkit-appearance: none;
    background-color: #fff;
    background-image: none;
    border: 1px solid #dcdfe6;
    border-radius: 4px;
    box-sizing: border-box;
    color: #606266;
    display: inline-block;
    font-size: inherit;
    height: 40px;
    line-height: 40px;
    outline: none;
    padding: 0 15px;
    transition: border-color 0.2s cubic-bezier(0.645, 045, 0.355, 1);
    width: 100%;
    &:focus {
      outline: none;
      border-color: #409eff;
    }
    // input禁用样式
    &.is-disabled {
      background-color: #f5f7fa;
      border-color: #e4e7ed;
      color: #c0c4cc;
      cursor: not-allowed;
    }
  }
}
// 后面加suffix的意思是后面如果有后缀的话，触发该样式
.y-input_suffix {
  .y-input_inner {
    padding-right: 30px;
  }
  .y-input_suffix {
    position: absolute;
    right: 10px;
    height: 100%;
    top: 0;
    line-height: 40px;
    text-align: center;
    color: #c0c4cc;
    transition: all 0.3s;
    z-index: 900;
    i {
      color: #c0c4cc;
      font-size: 14px;
      cursor: pointer;
      transition: color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
    }
  }
}
</style>