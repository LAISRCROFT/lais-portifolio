<template>
    <div class="row index">
        <Topbar />
        <div class="col dama">
            Dama
        </div>
        
        <div class="col center" id="app">
        </div>
    </div>
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

@import url('https://fonts.googleapis.com/css?family=Source+Code+Pro:200');

</style>