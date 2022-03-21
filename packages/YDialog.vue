<template>
  <transition name="dialog-fade">
    <div class="y-dialog_wrapper" v-show="visible" @click.self="handleClose">
      <div class="y-dialog" :style="{ width: width, 'margin-top': top }">
        <div class="y-dialog_header">
          <slot name="header">
            <div class="y-dialog_title">{{ title }}</div>
            <y-button
              style="margin-right: 0"
              class="y-dialog_headerbtn"
              @click="handleClose"
            >
              <close style="width: 1em; height: 1em; margin-right: 8px"></close>
            </y-button>
          </slot>
        </div>
        <div class="y-dialog_body">
          <slot> 默认内容 </slot>
        </div>
        <div class="y-dialog_footer" v-if="$slots.footer">
          <slot name="footer">
            <y-button @click="handleClose">取消</y-button>
            <y-button
              style="margin-right: 0"
              type="primary"
              @click="handleCheck"
              >确认</y-button
            >
          </slot>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import { ref } from "vue";
export default {
  name: "YDialog",
  props: {
    title: {
      type: String,
      default: "默认标题",
    },
    top: {
      type: String,
      default: "15vh",
    },
    width: {
      type: String,
      default: "30%",
    },
    visible: {
      type: Boolean,
      default: false,
    },
  },
  emits: ["update:visible", "check"],
  setup(props, context) {
    const { emit } = context;
    const handleClose = function () {
      emit("update:visible", false);
    };
    const handleCheck = function () {
      emit("update:visible", false);
      emit("check");
    };
    return {
      handleClose,
      handleCheck,
    };
  },
};
</script>

<style lang="less" scope>
.y-dialog_wrapper {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: auto;
  margin: 0;
  z-index: 2001;
  background-color: rgba(0, 0, 0, 0.5);
  .y-dialog {
    position: relative;
    margin: 15vh auto 50px;
    background: #fff;
    border-radius: 2px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
    box-sizing: border-box;
    width: 30%;
    &_header {
      padding: 20px 20px 10px;
      .y-dialog_title {
        line-height: 24px;
        font-size: 18px;
        color: #303133;
      }
      .y-dialog_headerbtn {
        position: absolute;
        top: 20px;
        right: 20px;
        padding: 0;
        background: transparent;
        border: none;
        outline: none;
        cursor: pointer;
        font-size: 16px;
        .one-icon-close {
          color: 909399;
        }
      }
    }
    &_body {
      padding: 30px 20px;
      color: #606266;
      font-size: 14px;
      word-break: break-all;
    }
    &_footer {
      padding: 10px 20px 20px;
      text-align: right;
      box-sizing: border-box;
      ::v-deep .one-button:first-child {
        margin-right: 20px;
      }
    }
  }
}
.dialog-fade-enter-active {
  animation: fade 0.3s;
}
.dialog-fade-leave-active {
  animation: fade 0.3s reverse;
}
@keyframes fade {
  0% {
    opacity: 0;
    transform: translateY(-20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>