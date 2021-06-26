<template>
  <div class="main">
    <draggable class="draggable">
      <div v-for="(item,index) in imgs" :key="index"  class="item-empt">
        <img :src="item.pic" class="imgs" />
      </div>
    </draggable>
  </div>
</template>

<script>
import draggable from 'vuedraggable'
export default {
  components: {
    draggable,
  },
  data() {
    return {
      imgs: [
        { id: 1, pic: require('./img/img1.jpg') },
        { id: 2, pic: require('./img/img2.jpg') },
        { id: 3, pic: require('./img/img3.jpg') },
        { id: 4, pic: require('./img/img4.jpg') },
        { id: 5, pic: require('./img/img5.jpg') },
        { id: 6, pic: require('./img/img6.jpg') },
        { id: 7, pic: require('./img/img7.jpg') },
        { id: 8, pic: require('./img/img8.jpg') },
        { id: 9, pic: require('./img/img9.jpg') },
        { id: 10, pic: require('./img/img10.jpg') },
        { id: 11, pic: require('./img/img11.jpg') },
        { id: 12, pic: require('./img/img12.jpg') },
        { id: 13, pic: require('./img/img13.jpg') },
        { id: 14, pic: require('./img/img14.jpg') },
        { id: 15, pic: require('./img/img15.jpg') },
        { id: 16, pic: require('./img/img16.jpg') },
      ],
    }
  },

}
</script>


<style lang="scss" scoped>
.main {
  width: 100%;
  height: 1500px;
  background: #ebebeb;
}
.draggable{
    width: 450px;
}
.item-empt {
  width: 100px;
  height: 100px;
  margin-left: 8px;
  background: floralwhite;
  display: inline-block;
}
.imgs {
  width: 100px;
  height: 100px;
}
</style>
