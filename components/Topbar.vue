<template>
    <div class="topbar">
        <Button label="Home" class="buttons-menu" />
        <Button label="About" class="buttons-menu" @click="scrollToSection('section_about')"/>
        <Button label="Portfolio" class="buttons-menu" />
        <Button label="Contacts" class="buttons-menu" />
    </div>
  </template>
  
  <script>
    export default {
      name: 'Topbar',
      data() {
        return {

        };
      },
      methods: {
        scrollToSection(sectionId) {
          const element = document.getElementById(sectionId);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }
      },
    }
  </script>
  
<style lang="scss">
@import '~/assets/scss/components/Topbar.scss';

</style>