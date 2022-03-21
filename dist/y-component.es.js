import { openBlock, createElementBlock, normalizeStyle, normalizeClass, createElementVNode, renderSlot, createTextVNode, inject, computed, withDirectives, vModelCheckbox, Fragment, toDisplayString, createCommentVNode, pushScopeId, popScopeId, ref, provide, watch, resolveComponent, createBlock, Transition, withCtx, withModifiers, createVNode, vShow, vModelRadio, reactive, onUpdated, onMounted, nextTick } from "vue";
var YButton_vue_vue_type_style_index_0_scope_true_lang = "";
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$9 = {
  name: "YButton",
  props: {
    type: {
      type: String,
      default: ""
    },
    plain: {
      type: Boolean,
      default: false
    },
    round: {
      type: Boolean,
      default: false
    },
    circle: {
      type: Boolean,
      default: false
    },
    width: {
      type: String,
      default: "auto"
    },
    height: {
      type: String,
      default: "auto"
    },
    disable: {
      type: Boolean,
      default: false
    }
  },
  emits: ["click"],
  setup(props, context) {
    const { emit } = context;
    const handleYClick = function(e) {
      console.log("y-button-click");
      emit("click", e);
    };
    return {
      handleYClick
    };
  }
};
const _hoisted_1$9 = ["disabled"];
const _hoisted_2$6 = { class: "flex-vertical" };
const _hoisted_3$4 = /* @__PURE__ */ createTextVNode(" \u9ED8\u8BA4\u6309\u94AE ");
function _sfc_render$9(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("button", {
    onClick: _cache[0] || (_cache[0] = (...args) => $setup.handleYClick && $setup.handleYClick(...args)),
    style: normalizeStyle({ width: `${$props.width}px`, height: `${$props.height}px` }),
    class: normalizeClass(["y-button", [
      `y-button-${$props.type}`,
      { "is-plain": $props.plain },
      { "is-round": $props.round },
      { "is-circle": $props.circle },
      { "is-disabled": $props.disable }
    ]]),
    disabled: $props.disable
  }, [
    createElementVNode("span", _hoisted_2$6, [
      renderSlot(_ctx.$slots, "default", {}, () => [
        _hoisted_3$4
      ])
    ])
  ], 14, _hoisted_1$9);
}
var YButton = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["render", _sfc_render$9]]);
var YCheckBox_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$8 = {
  name: "YCheckbox",
  props: {
    modelValue: {
      type: Boolean,
      default: false
    },
    label: {
      type: String,
      default: ""
    },
    name: {
      type: String,
      default: ""
    }
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
      }
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
      injectValue
    };
  }
};
const _withScopeId = (n) => (pushScopeId("data-v-f3c3747e"), n = n(), popScopeId(), n);
const _hoisted_1$8 = { class: "y-checkbox_input" };
const _hoisted_2$5 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createElementVNode("span", { class: "y-checkbox_inner" }, null, -1));
const _hoisted_3$3 = ["name", "value"];
const _hoisted_4$3 = { class: "y-checkbox_label" };
function _sfc_render$8(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("label", {
    class: normalizeClass(["y-checkbox", { " is-checked": $setup.isChecked }])
  }, [
    createElementVNode("span", _hoisted_1$8, [
      _hoisted_2$5,
      withDirectives(createElementVNode("input", {
        type: "checkbox",
        class: "y-checkbox_original",
        name: $props.name,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.model = $event),
        value: $props.label
      }, null, 8, _hoisted_3$3), [
        [vModelCheckbox, $setup.model]
      ])
    ]),
    createElementVNode("span", _hoisted_4$3, [
      renderSlot(_ctx.$slots, "default", {}, void 0, true),
      !_ctx.$slots.default ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
        createTextVNode(toDisplayString($props.label), 1)
      ], 64)) : createCommentVNode("", true)
    ])
  ], 2);
}
var YCheckBox = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["render", _sfc_render$8], ["__scopeId", "data-v-f3c3747e"]]);
const _sfc_main$7 = {
  name: "YCheckboxGroup",
  props: {
    modelValue: {
      type: Array
    }
  },
  setup(props, ctx) {
    const { emit } = ctx;
    let arr = ref([...props.modelValue]);
    provide("CheckboxGroup", {
      CheckboxGroupValue: arr,
      emit: (value) => {
        emit("update:modelValue", value);
      }
    });
    watch(() => props.modelValue, (newValue) => {
      arr.value = newValue;
    });
  }
};
const _hoisted_1$7 = { class: "one-checkbox-group" };
function _sfc_render$7(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1$7, [
    renderSlot(_ctx.$slots, "default")
  ]);
}
var YCheckboxGroup = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["render", _sfc_render$7]]);
var YDialog_vue_vue_type_style_index_0_scope_true_lang = "";
const _sfc_main$6 = {
  name: "YDialog",
  props: {
    title: {
      type: String,
      default: "\u9ED8\u8BA4\u6807\u9898"
    },
    top: {
      type: String,
      default: "15vh"
    },
    width: {
      type: String,
      default: "30%"
    },
    visible: {
      type: Boolean,
      default: false
    }
  },
  emits: ["update:visible", "check"],
  setup(props, context) {
    const { emit } = context;
    const handleClose = function() {
      emit("update:visible", false);
    };
    const handleCheck = function() {
      emit("update:visible", false);
      emit("check");
    };
    return {
      handleClose,
      handleCheck
    };
  }
};
const _hoisted_1$6 = { class: "y-dialog_header" };
const _hoisted_2$4 = { class: "y-dialog_title" };
const _hoisted_3$2 = { class: "y-dialog_body" };
const _hoisted_4$2 = /* @__PURE__ */ createTextVNode(" \u9ED8\u8BA4\u5185\u5BB9 ");
const _hoisted_5 = {
  key: 0,
  class: "y-dialog_footer"
};
const _hoisted_6 = /* @__PURE__ */ createTextVNode("\u53D6\u6D88");
const _hoisted_7 = /* @__PURE__ */ createTextVNode("\u786E\u8BA4");
function _sfc_render$6(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_close = resolveComponent("close");
  const _component_y_button = resolveComponent("y-button");
  return openBlock(), createBlock(Transition, { name: "dialog-fade" }, {
    default: withCtx(() => [
      withDirectives(createElementVNode("div", {
        class: "y-dialog_wrapper",
        onClick: _cache[0] || (_cache[0] = withModifiers((...args) => $setup.handleClose && $setup.handleClose(...args), ["self"]))
      }, [
        createElementVNode("div", {
          class: "y-dialog",
          style: normalizeStyle({ width: $props.width, "margin-top": $props.top })
        }, [
          createElementVNode("div", _hoisted_1$6, [
            renderSlot(_ctx.$slots, "header", {}, () => [
              createElementVNode("div", _hoisted_2$4, toDisplayString($props.title), 1),
              createVNode(_component_y_button, {
                style: { "margin-right": "0" },
                class: "y-dialog_headerbtn",
                onClick: $setup.handleClose
              }, {
                default: withCtx(() => [
                  createVNode(_component_close, { style: { "width": "1em", "height": "1em", "margin-right": "8px" } })
                ]),
                _: 1
              }, 8, ["onClick"])
            ])
          ]),
          createElementVNode("div", _hoisted_3$2, [
            renderSlot(_ctx.$slots, "default", {}, () => [
              _hoisted_4$2
            ])
          ]),
          _ctx.$slots.footer ? (openBlock(), createElementBlock("div", _hoisted_5, [
            renderSlot(_ctx.$slots, "footer", {}, () => [
              createVNode(_component_y_button, { onClick: $setup.handleClose }, {
                default: withCtx(() => [
                  _hoisted_6
                ]),
                _: 1
              }, 8, ["onClick"]),
              createVNode(_component_y_button, {
                style: { "margin-right": "0" },
                type: "primary",
                onClick: $setup.handleCheck
              }, {
                default: withCtx(() => [
                  _hoisted_7
                ]),
                _: 1
              }, 8, ["onClick"])
            ])
          ])) : createCommentVNode("", true)
        ], 4)
      ], 512), [
        [vShow, $props.visible]
      ])
    ]),
    _: 3
  });
}
var YDialog = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["render", _sfc_render$6]]);
const _sfc_main$5 = {
  name: "YForm",
  props: {
    model: {
      type: Object,
      required: true,
      default: () => {
      }
    },
    labelWidth: {
      type: String,
      default: ""
    }
  },
  setup(props) {
    provide("labelWidth", props.labelWidth);
  }
};
const _hoisted_1$5 = { class: "y-form" };
function _sfc_render$5(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1$5, [
    renderSlot(_ctx.$slots, "default")
  ]);
}
var YForm = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", _sfc_render$5]]);
var YFormItem_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$4 = {
  name: "YFormItem",
  props: {
    label: {
      type: String,
      default: ""
    }
  },
  setup() {
    let labelWidth = inject("labelWidth");
    return {
      labelWidth
    };
  }
};
const _hoisted_1$4 = { class: "y-form-item" };
const _hoisted_2$3 = { class: "y-form-item_content" };
function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1$4, [
    createElementVNode("label", {
      style: normalizeStyle({ width: $setup.labelWidth }),
      class: "y-form-item_label"
    }, toDisplayString($props.label), 5),
    createElementVNode("div", _hoisted_2$3, [
      renderSlot(_ctx.$slots, "default", {}, void 0, true)
    ])
  ]);
}
var YFormItem = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$4], ["__scopeId", "data-v-9224b030"]]);
var YInput_vue_vue_type_style_index_0_scope_true_lang = "";
const _sfc_main$3 = {
  name: "YInput",
  props: {
    placeholder: {
      type: String,
      default: "\u8BF7\u8F93\u5165"
    },
    type: {
      type: String,
      default: "text"
    },
    name: {
      type: String,
      default: ""
    },
    disabled: {
      type: Boolean,
      default: false
    },
    modelValue: {
      type: String,
      default: ""
    },
    autocomplete: {
      type: String,
      default: ""
    },
    clearable: {
      type: Boolean,
      default: false
    },
    showPassword: {
      type: Boolean,
      default: false
    }
  },
  emits: ["update:modelValue"],
  setup(props, context) {
    const { emit } = context;
    const handleInput = function(e) {
      emit("update:modelValue", e.target.value);
    };
    let showSuffix = computed(() => {
      return props.clearable || props.showPassword;
    });
    let passwordVisible = ref(false);
    const handleClear = function(e) {
      emit("update:modelValue", "");
    };
    const handleShowPassword = function(e) {
      passwordVisible.value = !passwordVisible.value;
    };
    return {
      handleInput,
      showSuffix,
      passwordVisible,
      handleClear,
      handleShowPassword
    };
  }
};
const _hoisted_1$3 = ["type", "placeholder", "name", "disabled", "value", "autocomplete"];
const _hoisted_2$2 = {
  key: 0,
  class: "y-input_suffix"
};
function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_circle_close_filled = resolveComponent("circle-close-filled");
  const _component_el_icon = resolveComponent("el-icon");
  const _component_View = resolveComponent("View");
  return openBlock(), createElementBlock("label", {
    class: normalizeClass(["y-input", { "y-input_suffix": $setup.showSuffix }])
  }, [
    createElementVNode("input", {
      class: normalizeClass(["y-input_inner", { "is-disabled": $props.disabled }]),
      type: $props.showPassword ? $setup.passwordVisible ? "text" : "password" : $props.type,
      placeholder: $props.placeholder,
      name: $props.name,
      disabled: $props.disabled,
      value: $props.modelValue,
      autocomplete: $props.autocomplete,
      onInput: _cache[0] || (_cache[0] = (...args) => $setup.handleInput && $setup.handleInput(...args))
    }, null, 42, _hoisted_1$3),
    $setup.showSuffix ? (openBlock(), createElementBlock("span", _hoisted_2$2, [
      $props.clearable && $props.modelValue ? (openBlock(), createBlock(_component_el_icon, {
        key: 0,
        class: "",
        onClick: $setup.handleClear
      }, {
        default: withCtx(() => [
          createVNode(_component_circle_close_filled)
        ]),
        _: 1
      }, 8, ["onClick"])) : createCommentVNode("", true),
      $props.showPassword ? (openBlock(), createBlock(_component_el_icon, {
        key: 1,
        class: "",
        onClick: $setup.handleShowPassword
      }, {
        default: withCtx(() => [
          createVNode(_component_View)
        ]),
        _: 1
      }, 8, ["onClick"])) : createCommentVNode("", true)
    ])) : createCommentVNode("", true)
  ], 2);
}
var YInput = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$3]]);
var YRadio_vue_vue_type_style_index_0_scope_true_lang = "";
const _sfc_main$2 = {
  props: {
    modelValue: null,
    label: {
      type: [Boolean, String, Number],
      default: "",
      required: true
    },
    name: {
      type: String,
      default: ""
    }
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
        return isFromRadioGroup.value ? RadioGroupProp.modelValue : props.modelValue;
      },
      set: (value) => {
        isFromRadioGroup.value ? RadioGroupEmit(value) : emit("update:modelValue", value);
      }
    });
    return {
      model,
      isFromRadioGroup
    };
  }
};
const _hoisted_1$2 = { class: "y-radio_input" };
const _hoisted_2$1 = /* @__PURE__ */ createElementVNode("span", { class: "y-radio_inner" }, null, -1);
const _hoisted_3$1 = ["name", "value"];
const _hoisted_4$1 = { class: "y-radio_label" };
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("label", {
    class: normalizeClass(["y-radio", { "is-checked": $props.label === $setup.model }])
  }, [
    createElementVNode("span", _hoisted_1$2, [
      _hoisted_2$1,
      withDirectives(createElementVNode("input", {
        name: $props.name,
        class: "y-radio_original",
        type: "radio",
        value: $props.label,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.model = $event)
      }, null, 8, _hoisted_3$1), [
        [vModelRadio, $setup.model]
      ])
    ]),
    createElementVNode("span", _hoisted_4$1, [
      renderSlot(_ctx.$slots, "default", {}, () => [
        createTextVNode(toDisplayString($props.label), 1)
      ])
    ])
  ], 2);
}
var YRadio = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2]]);
const _sfc_main$1 = {
  name: "YRadioGroup",
  props: {
    modelValue: null
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
  }
};
const _hoisted_1$1 = { class: "" };
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1$1, [
    renderSlot(_ctx.$slots, "default")
  ]);
}
var YRadioGroup = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1]]);
var YSwitch_vue_vue_type_style_index_0_scope_true_lang = "";
const _sfc_main = {
  name: "YSwitch",
  props: {
    modelValue: {
      type: Boolean,
      default: false
    },
    activeColor: {
      type: String,
      default: ""
    },
    inactiveColor: {
      type: String,
      default: ""
    },
    name: {
      type: String,
      default: ""
    }
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
    const handleClick = async function() {
      emit("update:modelValue", !props.modelValue);
      await nextTick();
      setColor();
      inputName.value.checked = props.modelValue;
    };
    const setColor = function() {
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
      inputName
    };
  }
};
const _hoisted_1 = ["name"];
const _hoisted_2 = {
  class: "y-switch_core",
  ref: "code"
};
const _hoisted_3 = /* @__PURE__ */ createElementVNode("span", { class: "y-switch_button" }, null, -1);
const _hoisted_4 = [
  _hoisted_3
];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    class: normalizeClass(["y-switch", { "is-checked": $props.modelValue }]),
    onClick: _cache[0] || (_cache[0] = (...args) => $setup.handleClick && $setup.handleClick(...args))
  }, [
    createElementVNode("input", {
      ref: "inputName",
      class: "y-switch_input",
      type: "checkbox",
      name: $props.name
    }, null, 8, _hoisted_1),
    createElementVNode("span", _hoisted_2, _hoisted_4, 512)
  ], 2);
}
var YSwitch = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
const components = [
  YButton,
  YDialog,
  YInput,
  YCheckBox,
  YRadio,
  YRadioGroup,
  YSwitch,
  YCheckboxGroup,
  YForm,
  YFormItem
];
const install = function(Vue) {
  console.log("\u5168\u5C40\u6CE8\u518CYComponent");
  components.forEach((component) => {
    Vue.component(component.name, component);
  });
};
if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}
var index = {
  install
};
export { index as default };
