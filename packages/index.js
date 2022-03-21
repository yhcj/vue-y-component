// 整个包的入口
// 统一导出
// 导出颜色选择器组件
import YButton from "./YButton.vue";
import YCheckBox from "./YCheckBox.vue";
import YCheckboxGroup from "./YCheckboxGroup.vue";
import YDialog from "./YDialog.vue";
import YForm from "./YForm.vue";
import YFormItem from "./YFormItem.vue";
import YInput from "./YInput.vue";
import YRadio from "./YRadio.vue";
import YRadioGroup from "./YRadioGroup.vue";
import YSwitch from "./YSwitch.vue";

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
]
// 定义install方法
const install = function (Vue) {
  console.log('全局注册YComponent')
  // 注册所有的组件
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}
// 判断是否直接引入文件，如果是，就不用调用Vue.use()
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}
export default {
  install
}
