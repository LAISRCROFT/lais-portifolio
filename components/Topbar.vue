<template>
    <div class="topbar" :class="{ 'colored-text': isScrolled }">
      <Button :key="i18ControlCounter" :label="this.$i18n.topbar.home" class="buttons-menu d-none d-lg-block" @click="scrollToSection('section_home')"/>
      <Button :key="i18ControlCounter" :label="this.$i18n.topbar.about" class="buttons-menu d-none d-lg-block" @click="scrollToSection('section_about')"/>
      <Button :key="i18ControlCounter" :label="this.$i18n.topbar.portfolio" class="buttons-menu d-none d-lg-block" />
      <Button :key="i18ControlCounter" :label="this.$i18n.topbar.contacts" class="buttons-menu d-none d-lg-block" />
      <button class="navbar-toggler menu-button-sidebar d-block d-lg-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
        <i class="ri-menu-line menu-icon-sidebar" :class="{ 'colored-icon-sidebar': isScrolledIconSidebar }"></i>
      </button>

      <div 
        class="offcanvas offcanvas-end sidebar"
        id="offcanvasNavbar"
        data-bs-scroll="true" 
        data-bs-backdrop="true"
        >
        <div class="offcanvas-header">
          <button 
            type="button" 
            class="btn-close" 
            data-bs-dismiss="offcanvas"
            data-bs-target="#offcanvasNav"
            aria-label="Close"
            ></button>
        </div>
        <div class="offcanvas-body">
          <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
            <li class="nav-item itens-sidebar">
              <a class="nav-link active" :key="i18ControlCounter" href="javascript:void(0)">{{this.$i18n.topbar.home}}</a>
            </li>
            <li class="nav-item itens-sidebar">
              <a class="nav-link active" :key="i18ControlCounter" href="javascript:void(0)" @click="scrollToSection('section_about', $event)">{{this.$i18n.topbar.about}}</a>
            </li>
            <li class="nav-item itens-sidebar">
              <a class="nav-link active" :key="i18ControlCounter" href="javascript:void(0)">{{this.$i18n.topbar.portfolio}}</a>
            </li>
            <li class="nav-item itens-sidebar">
              <a class="nav-link active" :key="i18ControlCounter" href="javascript:void(0)">{{this.$i18n.topbar.contacts}}</a>
            </li>
          </ul>
        </div>
      </div>

    </div>
  </template>
  
  <script>
    export default {
      name: 'Topbar',
      props: ['i18Controller'],
      data() {
        return {
          i18ControlCounter: 0,
          showSidebar: false,
          isScrolled: false,
          isScrolledIconSidebar: false
        };
      },
      watch: {
        i18Controller(){
          this.i18ControlCounter++;
        }
      },
      mounted() {
        window.addEventListener("scroll", this.handleScroll);
      },
      beforeDestroy() {
        window.removeEventListener("scroll", this.handleScroll);
      },
      methods: {
        scrollToSection(sectionId) {
          const element = document.getElementById(sectionId);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        },
        handleScroll() {
          // Define uma posição específica onde você deseja aplicar o estilo
          const scrollThreshold = 850; // Por exemplo, 100px
          console.log(window.scrollY)
          if (window.scrollY >= 850) console.log("S", scrollThreshold);
          this.isScrolled = window.scrollY >= scrollThreshold;
          this.isScrolledIconSidebar = window.scrollY >= scrollThreshold
        }
      },
    }
  </script>
  
<style lang="scss">
@import '~/assets/scss/components/Topbar.scss';

</style>