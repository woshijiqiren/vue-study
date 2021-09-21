
<template>
  <div>
    <h2>base64文件比原文件多了data:image/png;base64,和结尾的==</h2>
    <h2>由于编码的性质，还需要*0.75</h2>
    <h2>示例文件</h2>
    <div>
        <img :src="pic"/>
    </div>
    <br>
    <div style="width:100%;overflow-x:scroll;background:#b3ffff">
      <p>{{pic}}</p>
    </div>
    <el-button @click="copyFile" class="copyman" :data-clipboard-text="pic">点击复制文件内容</el-button>
    <h2>图片大小{{length}}kb</h2>
  </div>
</template>

<script>
import Clipboard from 'clipboard'
export default {

  data() {
    return {
      pic: "data:image/png;base64,AAABAAEAEBAAAAEAIABoBAAAFgAAACgAAAAQAAAAIAAAAAEAIAAAAAAAQAQAAAAAAAAAAAAAAAAAAAAAAAB9SR//fUkf/31JH/99SR//fUkf/31JH/99SR//fUkf/31JH/99SR//fUkf/6mHbP+LXDf/fUkf/31JH/99SR//fUkf/31JH/99SR//fUkf/31JH/99SR//i104/5lwT/+RZkP/fksh/6eFaP/8/Pv/mG9N/31JH/99SR//fUkf/31JH/99SR//fUkf/31JH/+tjHL/6uHb//7+/v////////////Xx7v/8+/r//////6N/Yv99SR//fUkf/31JH/99SR//fUkf/35LIf/PvK3///////////////////////////////////////////+vj3b/fUkf/31JH/99SR//fUkf/31JH/++pI/////////////08Oz/vqSQ/8y3p///////////////////////u6CK/31JH/99SR//fUkf/31JH/+IWDL/+vn3///////s5d//iVo1/6B7XP/6+ff/8Orl/9TDtv+5nYb/nXZX/4NRKf9+SyL/fUkf/31JH/99SR//sJF3////////////onxe/35LIv+ge1z/ils1/31JH/99SR//fUkf/6qIbf/dz8T/1MK0/31JH/99SR//fUkf/8WunP///////Pv7/39MIv99SR//fUkf/31JH/99SR//fUkf/31JH//ay7///////+ri2/99SR//fUkf/31JH//Frpv///////38+/9/TCP/fUkf/31JH/99SR//fUkf/31JH/99SR//2szA///////q4dv/fUkf/31JH/99SR//r491////////////pIBi/31JH/99SR//fUkf/31JH/99SR//hVUt//j29P//////1MK1/31JH/99SR//fUkf/4dXMP/59/b//////+7o4/+MXjn/fUkf/31JH/99SR//gE0k/9XFuP///////////6aDZ/99SR//fUkf/31JH/99SR//up+I////////////9vPw/8OrmP+si3D/uZ2G/+ri2////////////97Rx/99SiD/fUkf/31JH/99SR//fUkf/31KIP/KtqX//v7+/////////////////////////////////+Xb0/+HWDH/fUkf/31JH/99SR//fUkf/31JH/99SR//fUkf/6eFaP/l2tL//v7+////////////8evn/7yhi/+BTyb/fUkf/31JH/99SR//fUkf/31JH/99SR//fUkf/31JH/99SR//fUkf/4dXMP+Uakf/jV86/31JH/99SR//fUkf/31JH/99SR//fUkf/31JH/9/SyH/f0sh/39LIf9/SyH/f0sh/39LIf9/SyH/f0sh/39LIf9/SyH/f0sh/39LIf9/SyH/f0sh/39LIf9/SyH/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==",
      length:"",
    };
  },
  mounted(){
    let strLength=this.pic.length
    let fileLength=parseInt(strLength-(strLength/8)*2)
    this.length = fileLength/1024
  },
  methods: {
    copyFile(){
      var clipboard = new Clipboard('.copyman')
      clipboard.on('success', e => {
      console.log('复制成功')
      // 释放内存
      clipboard.destroy()
      })
      clipboard.on('error', e => {
      // 不支持复制
      console.log('该浏览器不支持自动复制')
      // 释放内存
      clipboard.destroy()
      })
    }
  },
};
</script>


<style lang="scss" scoped>
.main {
  height: 300px;
  width: 300px;
  overflow-y: auto;
}
.div1 {
  height: 300px;
  background: wheat;
}
.div2 {
  height: 300px;
  background: yellow;
}
</style>
