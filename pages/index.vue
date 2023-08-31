<template>
    <div class="index row">
        <div>
            <TopbarDropdown @localizationChanged='localizationChanged' />
            <Topbar :color="isDivVisible" class="topbar-target"/>
        </div>
        <div class="topo col-12" id="section_home">
            <div class="row w-100 text-center row-dama-title d-flex justify-content-center">
                <div class="col-12 col-dama-title">
                    <h1 class="dama-title">Dama</h1>
                </div>
                <div class="col-12 typewriter-effect" id="app">
                </div>
            </div>
        </div>
        <About id="section_about" />
        <Education id="section_education" />
        <Experience id="section_experiences" />
        <Skills id="section_skills" />
        <Projects id="section_projects" />
    </div>
    <!-- <div>
        <TypeWriter />
    </div> -->
</template>
<script>
import Typewriter from 'typewriter-effect/dist/core';
import eventBus from '../plugins/eventBus'
import Projects from '~/components/Projects.vue';

export default {
    data() {
        return {
            i18Controll: 0,
            selectedOption: '',
            isDivVisible: false
        };
    },
    mounted() {
        this.typeWriterEffect();
        window.addEventListener("scroll", this.checkDivVisibility);
    },
    beforeDestroy() {
        window.removeEventListener("scroll", this.checkDivVisibility);
    },
    async created() {
        eventBus.$on('att-idioma', async (option) => {
            this.selectedOption = option;
            setTimeout(() => {
                this.typeWriterEffect();
            }, 500);
        });
    },
    methods: {
        localizationChanged() {
            this.i18Controll++;
        },
        async typeWriterEffect() {
            var app = document.getElementById('app');
            var typewriter = new Typewriter(app, {
                loop: true,
                delay: 75,
            });
            typewriter
                .typeString(this.$i18n.home.typeWriterPT1)
                .pauseFor(300)
                .deleteChars(this.$i18n.home.typeWriterPT1.length)
                .typeString(this.$i18n.home.typeWriterPT2)
                .typeString(this.$i18n.home.typeWriterPT3)
                .pauseFor(1000)
                .start();
        },
        checkDivVisibility() {
            const targetDiv = document.querySelector(".topo");
            if (!targetDiv)
                return;
            const targetDivPosition = targetDiv.getBoundingClientRect();
            let height = targetDivPosition.height - (targetDivPosition.height * 0.1);
            this.isDivVisible = window.scrollY >= height;
        }
    },
    watch: {},
    components: { Projects }
};
</script>
<style lang="scss">
@import '~/assets/scss/index.scss';

/* Works on Firefox */
* {
  scrollbar-width: thin;
  scrollbar-color: blue orange;
}

/* Works on Chrome, Edge, and Safari */
*::-webkit-scrollbar {
  width: 4px;
  height: 0px;
}

*::-webkit-scrollbar-track {
    background-color: transparent;
    background-clip: padding-box;
}

*::-webkit-scrollbar-thumb {
  background-color: #803f88;
  border-radius: 20px;
  border: 1px solid transparent;
}
</style>