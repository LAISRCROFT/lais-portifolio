<template>
    <div class="home">
      <h5>Basic</h5>
      <Button label="Submit" />
      <Button label="Disabled" disabled="disabled" />
      <Button label="Link" class="p-button-link" />
    </div>
  </template>
  
  <script>
    export default {
        name: 'Home'
    }
  </script>
  
<style lang="scss">
@import '~/assets/scss/components/Home.scss';

</style>