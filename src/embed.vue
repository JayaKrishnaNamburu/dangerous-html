<template>
  <div :style="{ display: 'contents' }" ref="wrapper"></div>
</template>

<script>
export default {
  name: "DangerousHTML",
  props: ['html'],
  mounted(){
    if (!this.html || !this.$refs?.wrapper) {
      return
    }
    const slotHtml = document.createRange().createContextualFragment(this.html);
    this.$refs.wrapper.append(slotHtml)
  },
};
</script>
