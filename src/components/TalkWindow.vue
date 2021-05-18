<!--
 * @Description: 
 * @Author: chenxch
 * @Date: 2021-05-18 16:41:32
-->
<template>
    <div class="main">
      <div class="talk__content">
          <a-avatar icon="user" />
      </div>
      <div class="talk__send">
        消息窗口
      </div>
    </div>
</template>

<script lang='ts'>
import { ref, defineComponent } from 'vue'
export default defineComponent({
  name: 'TalkWindow',
  components: {},
  props: {},
  setup: ()=>{}
});
</script>
<style lang="less" scoped>
.main {
  height: 100%;
  width: 800px;
  border: 1px solid #E0E0E0;
  margin: 0 auto;
}
.talk {
  &__content {
    height: 350px;
    overflow-y: auto;
  }
  &__send {
    height: 150px;
    border-top: 1px solid #E0E0E0;
  }
}
</style>
