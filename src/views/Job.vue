<template>
  <h1>封装组件</h1>
  <div>---------y-button-plain-round-circle-icon--------------</div>
  <y-button :plain="true" type="primary">primary按钮</y-button>
  <y-button :round="true" type="primary">primary按钮</y-button>
  <y-button :disable="true" type="primary" @click="handleYbtnClick"
    >primary按钮</y-button
  >
  <y-button :circle="true" type="primary" :height="'60'" :width="'60'">
    按钮
  </y-button>
  <y-button type="primary">
    <circle-plus-filled style="width: 1em; height: 1em" />
    <span style="margin-left: 2px">加1</span>
  </y-button>
  <y-button type="primary" @click="handleYbtnClick"> </y-button>

  <div>---------y-button--------------</div>
  <y-button type="primary">primary按钮</y-button>
  <y-button type="success">success按钮</y-button>
  <y-button type="info">info按钮</y-button>
  <y-button type="danger">danger按钮</y-button>
  <y-button type="warning">warning按钮</y-button>

  <div>---------el-button--------------</div>
  <el-button type="primary">primary按钮</el-button>
  <el-button type="success">success按钮</el-button>
  <el-button type="info">info按钮</el-button>
  <el-button type="danger">danger按钮</el-button>
  <el-button type="warning">warning按钮</el-button>
  <div>---------el-other-component-------------</div>
  <el-tag class="my-tag">Tag</el-tag>
  <el-date-picker v-model="value" type="date" placeholder="Pick a day" />
  <div style="font-size: 20px">
    <circle-plus-filled style="width: 1em; height: 1em; margin-right: 8px" />
    <close style="width: 1em; height: 1em; margin-right: 8px"></close>
  </div>
  <div>---------y-dialog--------------</div>
  <y-button @click="showTip">打开温馨提示</y-button>
  <y-button @click="showAncientPoetry">打开暮年</y-button>

  <y-dialog
    :title="'温馨提示'"
    width="40%"
    top="10vh"
    v-model:visible="tipShow"
    @check="submitTip"
  >
    <div>
      <label>姓名</label>
      <input v-model="person.username" />
    </div>
    <div>
      <label>年龄</label>
      <input v-model="person.age" />
    </div>
    <template v-slot:footer> </template>
  </y-dialog>

  <y-dialog width="60%" top="50vh" v-model:visible="poetryShow">
    <template v-slot:header>
      <h1 style="margin: '0px'">暮年</h1>
    </template>
    <div>
      <p>你我暮年，闲坐庭院</p>
      <p>云卷云舒听雨声，星明星稀赏月明</p>
      <p>花开花落忆江南</p>
      <p>愿有岁月可回首，且以深情共白头</p>
    </div>
  </y-dialog>

  <div>---------y-input--------------</div>
  <form>
    <label for="username">姓名</label>
    <y-input
      placeholder="请输入名字"
      type="text"
      name="username"
      v-model="person.username"
      :clearable="true"
    ></y-input>
    <label for="password">密码</label>
    <y-input
      placeholder="请输入密码"
      type="password"
      name="password"
      v-model="person.password"
      :showPassword="true"
      autocomplete="on"
    ></y-input>
  </form>

  <div>---------y-switch--------------</div>
  <y-switch v-model="activeSwitchOne"></y-switch>
  <y-switch
    v-model="activeSwitchTwo"
    active-color="red"
    inactive-color="green"
    name="yhcjSwitch"
  ></y-switch>

  <div>---------y-radio--------------</div>
  <y-radio-group v-model="gender">
    <y-radio :label="0">女</y-radio>
    <y-radio :label="1">男</y-radio>
  </y-radio-group>

  <y-radio label="0" v-model="elGender">女</y-radio>
  <y-radio label="1" v-model="elGender">男</y-radio>

  <div>---------y-checkbox--------------</div>
  <y-check-box v-model="activeCheckBox">是否选中</y-check-box>
  <y-checkbox-group v-model="hobbies">
    <y-check-box label="1"></y-check-box>
    <y-check-box label="2"></y-check-box>
    <y-check-box label="3"></y-check-box>
    <y-check-box label="4"></y-check-box>
  </y-checkbox-group>
  <div>
    {{ hobbies }}
  </div>
  <div>---------y-form--------------</div>
  <y-form :model="formModel" label-width="100px">
    <y-form-item label="用户名">
      <y-input
        placeholder="请输入用户名"
        v-model="formModel.username"
      ></y-input>
    </y-form-item>
    <y-form-item label="年龄">
      <y-input placeholder="请输入年龄" v-model="formModel.age"></y-input>
    </y-form-item>
    <y-form-item label="婚姻状态">
      <y-switch v-model="formModel.marray">已婚</y-switch>
    </y-form-item>
    <y-form-item label="爱好">
      <y-checkbox-group v-model="formModel.hobbies">
        <y-check-box label="足球"></y-check-box>
        <y-check-box label="篮球"></y-check-box>
        <y-check-box label="乒乓球"></y-check-box>
        <y-check-box label="羽毛球"></y-check-box>
      </y-checkbox-group>
    </y-form-item>
  </y-form>
</template>

<script>
import { ref, reactive } from "vue";
export default {
  setup() {
    // el-data
    let value = ref("");
    // button & input
    let person = reactive({
      username: "yhcj",
      age: "23",
      password: "123456",
    });
    const handleYbtnClick = function (e) {
      console.log("按钮点击", e);
    };

    // dialog
    let tipShow = ref(false);
    let poetryShow = ref(false);
    const showTip = function (e) {
      tipShow.value = true;
    };
    const submitTip = function () {
      tipShow.value = false;
      console.log("dialog提交", person);
    };
    const showAncientPoetry = function (e) {
      poetryShow.value = true;
    };

    // switch
    let activeSwitchOne = ref(false);
    let activeSwitchTwo = ref(false);

    // radio
    let gender = ref(0);
    // el-radio
    let elGender = ref("0");

    //checkbox
    let activeCheckBox = ref(true);
    let hobbies = ref(["1"]);

    // form
    let formModel = reactive({
      username: "",
      age: "",
      marray: false,
      hobbies: [],
    });
    return {
      value,

      person,
      handleYbtnClick,

      tipShow,
      showTip,
      submitTip,
      poetryShow,
      showAncientPoetry,

      activeSwitchOne,
      activeSwitchTwo,

      gender,
      elGender,

      activeCheckBox,
      hobbies,

      formModel,
    };
  },
};
</script>

<style lang="less" scoped>
.my-tag {
  --el-tag-bg-color: red;
}
</style>