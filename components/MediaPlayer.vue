<template>
  <div>
    <div class="modal-card">
      <youtube-embedd
        :player-width="width" 
        :player-height="height" 
        :video-id="data.url" 
        :player-vars="{origin:'http://mydomain.local'}"
      />
    </div>
  </div>
</template>

<script>
export default {
  props:{
    data:{
      type:Object,
      default: () => {}
    },
    width:{
      type:String,
      default: () => '800' 
    },
    height:{
      type:String,
      default: () => '800'
    }
  }

}
</script>

<style>
.modal-card {
  height: 800px;
  display: flex;
  justify-content: center;
  align-items: center;
}

iframe {
  height:500px !important;
  width: 560px !important;
}
</style>
