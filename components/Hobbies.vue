<template>
    <div class="hobbies">
        <div class="row">
            <div class="offset-1 offset-xxl-2 col-10 col-xxl-8 mt-1">
                <div class="row organiza-row-hobbies">
                    <div class="col-12 align-switchs mb-4">
                        <span class="mr-1">{{ i18n.interests_and_hobbies.switches.color }}</span><InputSwitch v-model="color" class="mr-4"/><br >
                        <span class="mr-1">{{ i18n.interests_and_hobbies.switches.expand_all }}</span><InputSwitch v-model="expandedAll"/>
                    </div>
                    <div :class="{ 'col-12': !imagem.collapsed, 'col-6': imagem.collapsed }" class="col-sm-5 col-md-4 col-lg-3 mt-3 col-imagens-icons" v-for="(imagem, i) in hobbies" :key="i">
                        <!-- <img :src="require(`@/${color ? imagem.iconPNG : imagem.iconSVG}`)" :class="{'imagens-icons': !color, 'imagens-icons-png': color}" /> -->
                        
                        <!-- <Divider align="left" class="mb-0"> -->
                            <!-- {{ i18n.interests_and_hobbies }} -->
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
    import eventBus from '../plugins/eventBus';
    export default {
        name: 'Hobbies',
        data() {
            return {
                hobbies: [],
                color: false,
                expandedAll: false,
                isCollapsed: [],
                i18n: {}
            }
        },
        async created() {
            this.i18n = this.$i18n.about
            this.hobbies = [
                {
                    id: 0,
                    title: this.i18n.interests_and_hobbies.hobbies.programming.title,
                    description: this.i18n.interests_and_hobbies.hobbies.programming.description,
                    iconSVG: `assets/images/icons/SVG/programming.svg`,
                    iconPNG: `assets/images/icons/PNG/programming.png`,
                    collapsed: true
                },
                {
                    id: 1,
                    title: this.i18n.interests_and_hobbies.hobbies.anime.title,
                    description: this.i18n.interests_and_hobbies.hobbies.anime.description,
                    iconSVG: `assets/images/icons/SVG/anime.svg`,
                    iconPNG: `assets/images/icons/PNG/anime.png`,
                    collapsed: true
                },
                {
                    id: 2,
                    title: this.i18n.interests_and_hobbies.hobbies.cosplay.title,
                    description: this.i18n.interests_and_hobbies.hobbies.cosplay.description,
                    iconSVG: `assets/images/icons/SVG/cosplay.svg`,
                    iconPNG: `assets/images/icons/PNG/cosplay.png`,
                    collapsed: true
                },
                {
                    id: 3,
                    title: this.i18n.interests_and_hobbies.hobbies.create.title,
                    description: this.i18n.interests_and_hobbies.hobbies.create.description,
                    iconSVG: `assets/images/icons/SVG/create.svg`,
                    iconPNG: `assets/images/icons/PNG/create.png`,
                    collapsed: true
                },
                {
                    id: 4,
                    title: this.i18n.interests_and_hobbies.hobbies.drawing.title,
                    description: this.i18n.interests_and_hobbies.hobbies.drawing.description,
                    iconSVG: `assets/images/icons/SVG/drawing.svg`,
                    iconPNG: `assets/images/icons/PNG/drawing.png`,
                    collapsed: true
                },
                {
                    id: 5,
                    title: this.i18n.interests_and_hobbies.hobbies.edit.title,
                    description: this.i18n.interests_and_hobbies.hobbies.edit.description,
                    iconSVG: `assets/images/icons/SVG/edit.svg`,
                    iconPNG: `assets/images/icons/PNG/edit.png`,
                    collapsed: true
                },
                {
                    id: 6,
                    title: this.i18n.interests_and_hobbies.hobbies.games.title,
                    description: this.i18n.interests_and_hobbies.hobbies.games.description,
                    iconSVG: `assets/images/icons/SVG/games.svg`,
                    iconPNG: `assets/images/icons/PNG/games.png`,
                    collapsed: true
                },
                {
                    id: 7,
                    title: this.i18n.interests_and_hobbies.hobbies.piano.title,
                    description: this.i18n.interests_and_hobbies.hobbies.piano.description,
                    iconSVG: `assets/images/icons/SVG/piano.svg`,
                    iconPNG: `assets/images/icons/PNG/piano.png`,
                    collapsed: true
                },
                {
                    id: 8,
                    title: this.i18n.interests_and_hobbies.hobbies.read.title,
                    description: this.i18n.interests_and_hobbies.hobbies.read.description,
                    iconSVG: `assets/images/icons/SVG/read.svg`,
                    iconPNG: `assets/images/icons/PNG/read.png`,
                    collapsed: true
                },
                {
                    id: 9,
                    title: this.i18n.interests_and_hobbies.hobbies.writing.title,
                    description: this.i18n.interests_and_hobbies.hobbies.writing.description,
                    iconSVG: `assets/images/icons/SVG/writing.svg`,
                    iconPNG: `assets/images/icons/PNG/writing.png`,
                    collapsed: true
                },
            ],
            eventBus.$on('att-idioma', async(option) => {
                this.selectedOption = option;
                this.expandedAll = false
                setTimeout(() => {
                    this.i18n = this.$i18n.about
                    this.selectLanguageHobbies()
                }, 500)
            });
        },
        watch: {
            expandedAll() {
                console.log(this.expandedAll)
                if (this.expandedAll) {
                    for (let i = 0; i < this.hobbies.length; i++) {
                        this.hobbies[i].collapsed = false
                    }
                }
                else {
                    for (let i = 0; i < this.hobbies.length; i++) {
                        this.hobbies[i].collapsed = true
                    }
                }
            }
        },  
        computed: {
            
        },
        methods: {
            async selectLanguageHobbies() {
                this.hobbies = [
                    {
                        id: 0,
                        title: this.i18n.interests_and_hobbies.hobbies.programming.title,
                        description: this.i18n.interests_and_hobbies.hobbies.programming.description,
                        iconSVG: `assets/images/icons/SVG/programming.svg`,
                        iconPNG: `assets/images/icons/PNG/programming.png`,
                        collapsed: true
                    },
                    {
                        id: 1,
                        title: this.i18n.interests_and_hobbies.hobbies.anime.title,
                        description: this.i18n.interests_and_hobbies.hobbies.anime.description,
                        iconSVG: `assets/images/icons/SVG/anime.svg`,
                        iconPNG: `assets/images/icons/PNG/anime.png`,
                        collapsed: true
                    },
                    {
                        id: 2,
                        title: this.i18n.interests_and_hobbies.hobbies.cosplay.title,
                        description: this.i18n.interests_and_hobbies.hobbies.cosplay.description,
                        iconSVG: `assets/images/icons/SVG/cosplay.svg`,
                        iconPNG: `assets/images/icons/PNG/cosplay.png`,
                        collapsed: true
                    },
                    {
                        id: 3,
                        title: this.i18n.interests_and_hobbies.hobbies.create.title,
                        description: this.i18n.interests_and_hobbies.hobbies.create.description,
                        iconSVG: `assets/images/icons/SVG/create.svg`,
                        iconPNG: `assets/images/icons/PNG/create.png`,
                        collapsed: true
                    },
                    {
                        id: 4,
                        title: this.i18n.interests_and_hobbies.hobbies.drawing.title,
                        description: this.i18n.interests_and_hobbies.hobbies.drawing.description,
                        iconSVG: `assets/images/icons/SVG/drawing.svg`,
                        iconPNG: `assets/images/icons/PNG/drawing.png`,
                        collapsed: true
                    },
                    {
                        id: 5,
                        title: this.i18n.interests_and_hobbies.hobbies.edit.title,
                        description: this.i18n.interests_and_hobbies.hobbies.edit.description,
                        iconSVG: `assets/images/icons/SVG/edit.svg`,
                        iconPNG: `assets/images/icons/PNG/edit.png`,
                        collapsed: true
                    },
                    {
                        id: 6,
                        title: this.i18n.interests_and_hobbies.hobbies.games.title,
                        description: this.i18n.interests_and_hobbies.hobbies.games.description,
                        iconSVG: `assets/images/icons/SVG/games.svg`,
                        iconPNG: `assets/images/icons/PNG/games.png`,
                        collapsed: true
                    },
                    {
                        id: 7,
                        title: this.i18n.interests_and_hobbies.hobbies.piano.title,
                        description: this.i18n.interests_and_hobbies.hobbies.piano.description,
                        iconSVG: `assets/images/icons/SVG/piano.svg`,
                        iconPNG: `assets/images/icons/PNG/piano.png`,
                        collapsed: true
                    },
                    {
                        id: 8,
                        title: this.i18n.interests_and_hobbies.hobbies.read.title,
                        description: this.i18n.interests_and_hobbies.hobbies.read.description,
                        iconSVG: `assets/images/icons/SVG/read.svg`,
                        iconPNG: `assets/images/icons/PNG/read.png`,
                        collapsed: true
                    },
                    {
                        id: 9,
                        title: this.i18n.interests_and_hobbies.hobbies.writing.title,
                        description: this.i18n.interests_and_hobbies.hobbies.writing.description,
                        iconSVG: `assets/images/icons/SVG/writing.svg`,
                        iconPNG: `assets/images/icons/PNG/writing.png`,
                        collapsed: true
                    },
                ]
            }
        },
        mounted() {
            
        }
    }
  </script>
  
<style lang="scss">
@import '~/assets/scss/components/Hobbies.scss';

</style>