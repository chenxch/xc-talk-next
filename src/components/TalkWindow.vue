<!--
 * @Description: 
 * @Author: chenxch
 * @Date: 2021-05-18 16:41:32
-->
<template>
  <div class="main">
    <div class="talk__content">
      {{ msgList }}
      <a-avatar>
        <template #icon><UserOutlined /></template>
      </a-avatar>
    </div>
    <div class="talk__send">
      <a-mentions autofocus v-model:value="value" @select="onSelect">
        <a-mentions-option value="afc163">afc163</a-mentions-option>
        <a-mentions-option value="zombieJ">zombieJ</a-mentions-option>
        <a-mentions-option value="yesmeck">yesmeck</a-mentions-option>
      </a-mentions>
    </div>
    <a-button type="primary"> 发送1 </a-button>
  </div>
</template>

<script lang="ts">
import { ref, reactive, defineComponent, watch } from 'vue';

import UserOutlined from '@ant-design/icons-vue/UserOutlined';
export default defineComponent({
  name: 'TalkWindow',
  components: { UserOutlined },
  props: {},
  setup: () => {
    const value = ref<string>('@afc163');
    const msgList = reactive([]);
    msgList.push({ name: 'xc', msg: 'hello', time: '20201-05-19 00:00:00' });
    msgList.push({ name: 'kf', msg: 'hello', time: '20201-05-19 00:00:00' });
    watch(value, () => {
      console.log('value', value);
    });
    const onSelect = (option: { value: string }) => {
      console.log('select', option);
    };

    return {
      value,
      onSelect,
      msgList,
    };
  },
});
</script>
<style lang="less" scoped>
.main {
  height: 100%;
  width: 800px;
  border: 1px solid #e0e0e0;
  text-align: left;
  margin: 0 auto;
}
.talk {
  &__content {
    height: 350px;
    overflow-y: auto;
    padding: 10px;
  }
  &__send {
    height: 150px;
    border-top: 1px solid #e0e0e0;
  }
}
</style>
