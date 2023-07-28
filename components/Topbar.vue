<template>
    <div class="topbar">
      <Button :key="i18ControlCounter" :label="this.$i18n.topbar.home" class="buttons-menu" />
      <Button :key="i18ControlCounter" :label="this.$i18n.topbar.about" class="buttons-menu" @click="scrollToSection('section_about')"/>
      <Button :key="i18ControlCounter" :label="this.$i18n.topbar.portfolio" class="buttons-menu" />
      <Button :key="i18ControlCounter" :label="this.$i18n.topbar.contacts" class="buttons-menu" />
    </div>
  </template>
  
  <script>
    export default {
      name: 'Topbar',
      props: ['i18Controller'],
      data() {
        return {
          i18ControlCounter: 0,
        };
      },
      watch: {
        i18Controller(){
          this.i18ControlCounter++;
        }
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