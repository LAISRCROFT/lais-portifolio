<template>
    <div class="topbar" :class="{ 'colored-text': color }">
      <Button :label="i18n.home" class="buttons-menu d-none d-lg-block" @click="scrollToSection('section_home')"/>
      <Button :label="i18n.about" class="buttons-menu d-none d-lg-block" @click="scrollToSection('section_about')"/>
      <Button :label="i18n.education" class="buttons-menu d-none d-lg-block" @click="scrollToSection('section_education')"/>
      <Button :label="i18n.experiences" class="buttons-menu d-none d-lg-block" @click="scrollToSection('section_experiences')"/>
      <Button :label="i18n.skills" class="buttons-menu d-none d-lg-block" @click="scrollToSection('section_skills')"/>
      <Button :label="i18n.projects" class="buttons-menu d-none d-lg-block" @click="scrollToSection('section_projects')"/>

      <Button :label="i18n.contacts" class="buttons-menu d-none d-lg-block" />
      <button 
        class="navbar-toggler menu-button-sidebar d-block d-lg-none" 
        type="button" 
        data-bs-toggle="offcanvas" 
        data-bs-target="#staticBackdrop" 
        aria-controls="staticBackdrop"
        @click="showSidebar = true"
      >
        <i class="ri-menu-line menu-icon-sidebar" :class="{ 'colored-icon-sidebar': isScrolledIconSidebar }"></i>
      </button>

      <div
        :class="{ 'colored-text': color  }">
        <div 
          class="offcanvas offcanvas-end sidebar"
          data-bs-backdrop="static" 
          tabindex="-1" 
          id="staticBackdrop" 
          aria-labelledby="staticBackdropLabel"
          >
          <div class="offcanvas-header">
            <button 
              type="button" 
              class="btn-close" 
              data-bs-dismiss="offcanvas"
              data-bs-target="#offcanvasNav"
              aria-label="Close"
              @click="showSidebar = false"
              ></button>
          </div>
          <div class="offcanvas-body">
            <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li class="nav-item itens-sidebar">
                <a class="nav-link active" href="javascript:void(0)" @click="scrollToSection('section_home', event)">{{i18n.home}}</a>
              </li>
              <li class="nav-item itens-sidebar">
                <a class="nav-link active" href="javascript:void(0)" @click="scrollToSection('section_about', event)">{{i18n.about}}</a>
              </li>
              <li class="nav-item itens-sidebar">
                <a class="nav-link active" href="javascript:void(0)" @click="scrollToSection('section_education', event)">{{i18n.education}}</a>
              </li>
              <li class="nav-item itens-sidebar">
                <a class="nav-link active" href="javascript:void(0)" @click="scrollToSection('section_experiences', event)">{{i18n.experiences}}</a>
              </li>
              <li class="nav-item itens-sidebar">
                <a class="nav-link active" href="javascript:void(0)" @click="scrollToSection('section_projects', event)">{{i18n.projects}}</a>
              </li>
              <li class="nav-item itens-sidebar">
                <a class="nav-link active" href="javascript:void(0)" @click="scrollToSection('section_skills', event)">{{i18n.skills}}</a>
              </li>
              <li class="nav-item itens-sidebar">
                <a class="nav-link active" href="javascript:void(0)">{{i18n.contacts}}</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
</template>
<script>
    import eventBus from '../plugins/eventBus';
    export default {
      name: 'Topbar',
      props: ['i18Controller', 'color'],
      data() {
        return {
          i18n: {},
          showSidebar: false,
          isScrolled: false,
          isScrolledIconSidebar: false,
        };
      },
      watch: {
        showSidebar() {
          eventBus.$emit('att-dropdown', this.showSidebar);
        }
      },
      mounted() {
        
      },
      created() {
        this.i18n = this.$i18n.topbar
        eventBus.$on('att-idioma', async(option) => {
            this.selectedOption = option;
            setTimeout(() => {
                this.i18n = this.$i18n.topbar
            }, 500)
        });
      },
      beforeDestroy() {
        
      },
      methods: {
        scrollToSection(sectionId) {
          const element = document.getElementById(sectionId);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        },
      },
    }
</script>
  
<style lang="scss" scoped>
@import '~/assets/scss/components/Topbar.scss';

</style>