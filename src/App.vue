<script lang="ts">
import { defineComponent } from "vue";
import { ElConfigProvider } from "element-plus";
import zhCn from "element-plus/lib/locale/lang/zh-cn";

export default defineComponent({
  components: {
    ElConfigProvider,
  },
  setup() {
    return {
      locale: zhCn,
    };
  },
});
</script>

<template>
  <el-config-provider :locale="locale">
    <!-- 路由导航 -->
    <router-link to="/job" class="router-div">组件</router-link>
    <!-- 路由出口 -->
    <router-view v-slot="{ Component }">
      <keep-alive>
        <component :is="Component" />
      </keep-alive>
    </router-view>
  </el-config-provider>
</template>

<style>
/* active-class 就等于下面的这个样式 */
.router-link-active {
  font-size: 24px;
  color: red;
}
.router-div {
  width: 20px;
  height: 20px;
  margin-right: 20px;
  background-color: beige;
}
</style>
