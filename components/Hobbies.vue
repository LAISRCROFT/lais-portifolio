<template>
    <div class="hobbies">
        <div class="row">
            <div class="offset-1 offset-xxl-2 col-10 col-xxl-8 mt-1">
                <div class="row organiza-row-hobbies">
                    <InputSwitch v-model="color" class="show-color-images"/>
                    <div class="col-4 col-sm-3 col-lg-2 mt-3 col-imagens-icons" v-for="(imagem, i) in hobbies" :key="i">
                        <img :src="require(`@/${color ? imagem.iconPNG : imagem.iconSVG}`)" :class="{'imagens-icons': !color, 'imagens-icons-png': color}" />
                        <!-- <Fieldset :legend="imagem.title" :toggleable="true" :collapsed="false">
                            <p>Lorem ipsum dolor sit amet</p>
                        </Fieldset> -->
                        <!-- <Avatar :image="require(`@/${imagem.iconPNG}`)" class="mr-2" size="xlarge" shape="circle" /> -->
                    </div>
                </div>
                <!-- <img src="../assets/images/icons/SVG/anime.svg" /> -->
            </div>
        </div>
    </div>
  </template>
  
  <script>
    export default {
        name: 'Hobbies',
        data() {
            return {
                hobbies: [
                    {
                        title: 'Programming',
                        iconSVG: `assets/images/icons/SVG/programming.svg`,
                        iconPNG: `assets/images/icons/PNG/programming.png`
                    },
                    {
                        title: 'Anime',
                        iconSVG: `assets/images/icons/SVG/anime.svg`,
                        iconPNG: `assets/images/icons/PNG/anime.png`
                    },
                    {
                        title: 'Cosplay',
                        iconSVG: `assets/images/icons/SVG/cosplay.svg`,
                        iconPNG: `assets/images/icons/PNG/cosplay.png`
                    },
                    {
                        title: 'Create',
                        iconSVG: `assets/images/icons/SVG/create.svg`,
                        iconPNG: `assets/images/icons/PNG/create.png`
                    },
                    {
                        title: 'Drawing',
                        iconSVG: `assets/images/icons/SVG/drawing.svg`,
                        iconPNG: `assets/images/icons/PNG/drawing.png`
                    },
                    {
                        title: 'Edit',
                        iconSVG: `assets/images/icons/SVG/edit.svg`,
                        iconPNG: `assets/images/icons/PNG/edit.png`
                    },
                    {
                        title: 'Games',
                        iconSVG: `assets/images/icons/SVG/games.svg`,
                        iconPNG: `assets/images/icons/PNG/games.png`
                    },
                    {
                        title: 'Piano',
                        iconSVG: `assets/images/icons/SVG/piano.svg`,
                        iconPNG: `assets/images/icons/PNG/piano.png`
                    },
                    {
                        title: 'Read',
                        iconSVG: `assets/images/icons/SVG/read.svg`,
                        iconPNG: `assets/images/icons/PNG/read.png`
                    },
                    {
                        title: 'Writing',
                        iconSVG: `assets/images/icons/SVG/writing.svg`,
                        iconPNG: `assets/images/icons/PNG/writing.png`
                    },
                ],
                color: false,
            }
        },
        methods: {
            
        },
        mounted() {
            
        }
    }
  </script>
  
<style lang="scss">
@import '~/assets/scss/components/Hobbies.scss';

</style>