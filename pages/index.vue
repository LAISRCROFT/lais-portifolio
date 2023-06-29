<template>
    <div class="index row">
        <div class="topo col-12">
            <Topbar />
            <div class="row w-100 text-center row-dama-title">
                <div class="col-12 col-dama-title">
                    <h1 class="dama-title">Dama</h1>
                </div>
                <div class="col-12 typewriter-effect" id="app">
                </div>
            </div>
        </div>
        <About id="section_about" />
    </div>
    <!-- <div>
        <TypeWriter />
    </div> -->
</template>
<script>
import Typewriter from 'typewriter-effect/dist/core';
export default {
    data() {
        return {

        };
    },
    mounted() {
        this.typeWriterEffect()
    },
    methods: {
        typeWriterEffect() {
            var app = document.getElementById('app');
            var typewriter = new Typewriter(app, {
                loop: true,
                delay: 75,
            });
            typewriter
            .typeString("Hello, I'm the <strong>Dama</strong>!")
            .pauseFor(300)
            .deleteChars(20)
            .typeString('Here you will know a little about <strong>me</strong> ')
            .typeString('and my work, welcome!')
            .pauseFor(1000)
            .start();
        }
    },
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
  width: 0px;
  height: 0px;
}

*::-webkit-scrollbar-track {
    background-color: transparent;
    background-clip: padding-box;
}

*::-webkit-scrollbar-thumb {
  background-color: #574559;
  border-radius: 20px;
  border: 1px solid transparent;
}
</style>