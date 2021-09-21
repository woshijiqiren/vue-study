<template>
  <div>
    <div class="main" @scroll.passive="getScroll($event)">
      <div class="div1"></div>
      <div class="div2"></div>
    </div>
    <h2>{{ scrollBottom }}</h2>
  </div>
</template>

<script>
import draggable from "vuedraggable";
export default {
  components: {
    draggable,
  },
  data() {
    return {
      scrollBottom: "",
    };
  },
  methods: {
    getScroll(event) {
      this.scrollBottom =
        event.target.scrollHeight -
        event.target.scrollTop -
        event.target.clientHeight;
    },
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
