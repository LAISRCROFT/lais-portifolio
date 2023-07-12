<template>
    <div class="hobbies">
        <div class="row">
            <div class="offset-1 offset-xxl-2 col-10 col-xxl-8 mt-1">
                <div class="row organiza-row-hobbies">
                    <div class="col-12 align-switchs mb-4">
                        <span class="mr-1">Color</span><InputSwitch v-model="color" class="mr-4"/><br >
                        <span class="mr-1">Expand all</span><InputSwitch v-model="expandedAll"/>
                    </div>
                    <div :class="{ 'col-12': !imagem.collapsed, 'col-6': imagem.collapsed }" class="col-sm-5 col-md-4 col-lg-3 mt-3 col-imagens-icons" v-for="(imagem, i) in hobbies" :key="i">
                        <!-- <img :src="require(`@/${color ? imagem.iconPNG : imagem.iconSVG}`)" :class="{'imagens-icons': !color, 'imagens-icons-png': color}" /> -->
                        
                        <!-- <Divider align="left" class="mb-0"> -->
                        <img 
                            :src="require(`@/${color ? imagem.iconPNG : imagem.iconSVG}`)" 
                            :class="{'imagens-icons': !color, 'imagens-icons-png': color, 'image-collapsed-12': !imagem.collapsed,}"
                            @click="imagem.collapsed = !imagem.collapsed"
                        />
                        <span class="title-divider d-none d-lg-inline">{{ imagem.title }}</span>
                        <!-- </Divider> -->
                        <Panel :toggleable="true" :collapsed.sync="imagem.collapsed" class="panel-hobbies">
                            <span class="title-divider d-block d-lg-none">{{ imagem.title }}</span>
                            {{ imagem.description }}
                        </Panel>
                        <!-- <p>{{ imagem.description }}</p> -->
                    </div>
                </div>
                <!-- <button type="button" @click="isCollapsed = !isCollapsed">Toggle Programmatically</button>
                <Panel :toggleable="true" :collapsed.sync="isCollapsed">
                    Content
                </Panel> -->
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
                        id: 0,
                        title: 'Programming',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut sem ut lectus blandit rhoncus. Aenean molestie id erat sed lacinia.',
                        iconSVG: `assets/images/icons/SVG/programming.svg`,
                        iconPNG: `assets/images/icons/PNG/programming.png`,
                        collapsed: true
                    },
                    {
                        id: 1,
                        title: 'Anime',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut sem ut lectus blandit rhoncus. Aenean molestie id erat sed lacinia.',
                        iconSVG: `assets/images/icons/SVG/anime.svg`,
                        iconPNG: `assets/images/icons/PNG/anime.png`,
                        collapsed: true
                    },
                    {
                        id: 2,
                        title: 'Cosplay',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut sem ut lectus blandit rhoncus. Aenean molestie id erat sed lacinia.',
                        iconSVG: `assets/images/icons/SVG/cosplay.svg`,
                        iconPNG: `assets/images/icons/PNG/cosplay.png`,
                        collapsed: true
                    },
                    {
                        id: 3,
                        title: 'Create',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut sem ut lectus blandit rhoncus. Aenean molestie id erat sed lacinia.',
                        iconSVG: `assets/images/icons/SVG/create.svg`,
                        iconPNG: `assets/images/icons/PNG/create.png`,
                        collapsed: true
                    },
                    {
                        id: 4,
                        title: 'Drawing',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut sem ut lectus blandit rhoncus. Aenean molestie id erat sed lacinia.',
                        iconSVG: `assets/images/icons/SVG/drawing.svg`,
                        iconPNG: `assets/images/icons/PNG/drawing.png`,
                        collapsed: true
                    },
                    {
                        id: 5,
                        title: 'Edit',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut sem ut lectus blandit rhoncus. Aenean molestie id erat sed lacinia.',
                        iconSVG: `assets/images/icons/SVG/edit.svg`,
                        iconPNG: `assets/images/icons/PNG/edit.png`,
                        collapsed: true
                    },
                    {
                        id: 6,
                        title: 'Games',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut sem ut lectus blandit rhoncus. Aenean molestie id erat sed lacinia.',
                        iconSVG: `assets/images/icons/SVG/games.svg`,
                        iconPNG: `assets/images/icons/PNG/games.png`,
                        collapsed: true
                    },
                    {
                        id: 7,
                        title: 'Piano',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut sem ut lectus blandit rhoncus. Aenean molestie id erat sed lacinia.',
                        iconSVG: `assets/images/icons/SVG/piano.svg`,
                        iconPNG: `assets/images/icons/PNG/piano.png`,
                        collapsed: true
                    },
                    {
                        id: 8,
                        title: 'Read',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut sem ut lectus blandit rhoncus. Aenean molestie id erat sed lacinia.',
                        iconSVG: `assets/images/icons/SVG/read.svg`,
                        iconPNG: `assets/images/icons/PNG/read.png`,
                        collapsed: true
                    },
                    {
                        id: 9,
                        title: 'Writing',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut sem ut lectus blandit rhoncus. Aenean molestie id erat sed lacinia.',
                        iconSVG: `assets/images/icons/SVG/writing.svg`,
                        iconPNG: `assets/images/icons/PNG/writing.png`,
                        collapsed: true
                    },
                ],
                color: false,
                expandedAll: false,
                isCollapsed: []
            }
        },
        watch: {
            expandedAll() {
                console.log(this.expandedAll)
                if (this.expandedAll) {
                    console.log("verdadeiro ")
                    for (let i = 0; i < this.hobbies.length; i++) {
                        this.hobbies[i].collapsed = false
                    }
                }
                else {
                    console.log("falso")
                    for (let i = 0; i < this.hobbies.length; i++) {
                        this.hobbies[i].collapsed = true
                    }
                }
            }
        },  
        computed: {
            
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