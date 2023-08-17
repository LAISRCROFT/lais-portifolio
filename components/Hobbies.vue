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
                        <img 
                            :src="require(`@/${color ? imagem.iconPNG : imagem.iconSVG}`)" 
                            :class="{'imagens-icons': !color, 'imagens-icons-png': color, 'image-collapsed-12': !imagem.collapsed}"
                            @click="imagem.collapsed = !imagem.collapsed"
                        />
                        <!-- <Badge value="2" v-show="imagem.content.view"></Badge> -->
                        
                        <span class="title-divider d-none d-lg-inline">{{ imagem.title }}</span>
                        <!-- </Divider> -->
                        <Panel :toggleable="true" :collapsed.sync="imagem.collapsed" class="panel-hobbies">
                            <span class="title-divider d-block d-lg-none">{{ imagem.title }}</span>
                            {{ imagem.description }} <br />
                            <Button :label="imagem.content.description" class="p-button-link" v-show="imagem.content" @click="gallery = true"/>
                        </Panel>
                    </div>
                    <Galleria 
                        :value="images_galery" 
                        :responsiveOptions="responsiveOptions" 
                        :numVisible="11" 
                        :circular="true"
                        :showThumbnails="false" 
                        :showItemNavigators="true"
                        :showItemNavigatorsOnHover="true"
                        :fullScreen="true"
                        :visible.sync="gallery"
                        class="galeria d-block d-md-none">
                        <template #item="slotProps">
                            <img :src="require(`@/${slotProps.item.itemImageSrc}`)" style="width: 40em;" class="foto" :alt="slotProps.item.alt"/>
                        </template>
                    </Galleria>
                </div>
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
                responsiveOptions: [
                    {
                        breakpoint: '1024px',
                        numVisible: 5
                    },
                    {
                        breakpoint: '768px',
                        numVisible: 3
                    },
                    {
                        breakpoint: '560px',
                        numVisible: 1
                    }
                ],
                images_galery: [
                    {
                        "itemImageSrc": "assets/images/drawings/1.jpg",
                        "alt": "Description for Image 1",
                        "title": "Title 1"
                    },
                    {
                        "itemImageSrc": "assets/images/drawings/2.jpg",
                        "alt": "Description for Image 2",
                        "title": "Title 2"
                    },
                    {
                        "itemImageSrc": "assets/images/drawings/3.jpg",
                        "alt": "Description for Image 3",
                        "title": "Title 3"
                    },
                    {
                        "itemImageSrc": "assets/images/drawings/4.jpg",
                        "alt": "Description for Image 4",
                        "title": "Title 4"
                    },
                    {
                        "itemImageSrc": "assets/images/drawings/5.jpg",
                        "alt": "Description for Image 5",
                        "title": "Title 5"
                    },
                    {
                        "itemImageSrc": "assets/images/drawings/6.jpg",
                        "alt": "Description for Image 6",
                        "title": "Title 6"
                    },
                    {
                        "itemImageSrc": "assets/images/drawings/7.jpg",
                        "alt": "Description for Image 7",
                        "title": "Title 7"
                    },
                    {
                        "itemImageSrc": "assets/images/drawings/8.png",
                        "alt": "Description for Image 8",
                        "title": "Title 8"
                    },
                    {
                        "itemImageSrc": "assets/images/drawings/9.jpg",
                        "alt": "Description for Image 9",
                        "title": "Title 9"
                    },
                    {
                        "itemImageSrc": "assets/images/drawings/10.png",
                        "alt": "Description for Image 10",
                        "title": "Title 10"
                    },
                ],
                color: false,
                expandedAll: false,
                gallery: false,
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
                    collapsed: true,
                    content: {
                        view: this.i18n.interests_and_hobbies.hobbies.programming.content.view,
                        description: this.i18n.interests_and_hobbies.hobbies.programming.content.description
                    }
                },
                {
                    id: 1,
                    title: this.i18n.interests_and_hobbies.hobbies.anime.title,
                    description: this.i18n.interests_and_hobbies.hobbies.anime.description,
                    iconSVG: `assets/images/icons/SVG/anime.svg`,
                    iconPNG: `assets/images/icons/PNG/anime.png`,
                    collapsed: true,
                    content: {
                        view: this.i18n.interests_and_hobbies.hobbies.anime.content.view,
                        description: this.i18n.interests_and_hobbies.hobbies.anime.content.description
                    }
                },
                {
                    id: 2,
                    title: this.i18n.interests_and_hobbies.hobbies.cosplay.title,
                    description: this.i18n.interests_and_hobbies.hobbies.cosplay.description,
                    iconSVG: `assets/images/icons/SVG/cosplay.svg`,
                    iconPNG: `assets/images/icons/PNG/cosplay.png`,
                    collapsed: true,
                    content: {
                        view: this.i18n.interests_and_hobbies.hobbies.cosplay.content.view,
                        description: this.i18n.interests_and_hobbies.hobbies.cosplay.content.description
                    }
                },
                {
                    id: 3,
                    title: this.i18n.interests_and_hobbies.hobbies.create.title,
                    description: this.i18n.interests_and_hobbies.hobbies.create.description,
                    iconSVG: `assets/images/icons/SVG/create.svg`,
                    iconPNG: `assets/images/icons/PNG/create.png`,
                    collapsed: true,
                    content: {
                        view: this.i18n.interests_and_hobbies.hobbies.create.content.view,
                        description: this.i18n.interests_and_hobbies.hobbies.create.content.description
                    }
                },
                {
                    id: 4,
                    title: this.i18n.interests_and_hobbies.hobbies.drawing.title,
                    description: this.i18n.interests_and_hobbies.hobbies.drawing.description,
                    iconSVG: `assets/images/icons/SVG/drawing.svg`,
                    iconPNG: `assets/images/icons/PNG/drawing.png`,
                    collapsed: true,
                    content: {
                        view: this.i18n.interests_and_hobbies.hobbies.drawing.content.view,
                        description: this.i18n.interests_and_hobbies.hobbies.drawing.content.description
                    }
                },
                {
                    id: 5,
                    title: this.i18n.interests_and_hobbies.hobbies.edit.title,
                    description: this.i18n.interests_and_hobbies.hobbies.edit.description,
                    iconSVG: `assets/images/icons/SVG/edit.svg`,
                    iconPNG: `assets/images/icons/PNG/edit.png`,
                    collapsed: true,
                    content: {
                        view: this.i18n.interests_and_hobbies.hobbies.edit.content.view,
                        description: this.i18n.interests_and_hobbies.hobbies.edit.content.description
                    }
                },
                {
                    id: 6,
                    title: this.i18n.interests_and_hobbies.hobbies.games.title,
                    description: this.i18n.interests_and_hobbies.hobbies.games.description,
                    iconSVG: `assets/images/icons/SVG/games.svg`,
                    iconPNG: `assets/images/icons/PNG/games.png`,
                    collapsed: true,
                    content: {
                        view: this.i18n.interests_and_hobbies.hobbies.games.content.view,
                        description: this.i18n.interests_and_hobbies.hobbies.games.content.description
                    }
                },
                {
                    id: 7,
                    title: this.i18n.interests_and_hobbies.hobbies.piano.title,
                    description: this.i18n.interests_and_hobbies.hobbies.piano.description,
                    iconSVG: `assets/images/icons/SVG/piano.svg`,
                    iconPNG: `assets/images/icons/PNG/piano.png`,
                    collapsed: true,
                    content: {
                        view: this.i18n.interests_and_hobbies.hobbies.piano.content.view,
                        description: this.i18n.interests_and_hobbies.hobbies.piano.content.description
                    }
                },
                {
                    id: 8,
                    title: this.i18n.interests_and_hobbies.hobbies.read.title,
                    description: this.i18n.interests_and_hobbies.hobbies.read.description,
                    iconSVG: `assets/images/icons/SVG/read.svg`,
                    iconPNG: `assets/images/icons/PNG/read.png`,
                    collapsed: true,
                    content: {
                        view: this.i18n.interests_and_hobbies.hobbies.read.content.view,
                        description: this.i18n.interests_and_hobbies.hobbies.read.content.description
                    }
                },
                {
                    id: 9,
                    title: this.i18n.interests_and_hobbies.hobbies.writing.title,
                    description: this.i18n.interests_and_hobbies.hobbies.writing.description,
                    iconSVG: `assets/images/icons/SVG/writing.svg`,
                    iconPNG: `assets/images/icons/PNG/writing.png`,
                    collapsed: true,
                    content: {
                        view: this.i18n.interests_and_hobbies.hobbies.writing.content.view,
                        description: this.i18n.interests_and_hobbies.hobbies.writing.content.description
                    }
                },
            ],
            eventBus.$on('att-idioma', async(option) => {
                this.selectedOption = option;
                this.expandedAll = false
                setTimeout(() => {
                    this.i18n = this.$i18n.about
                    console.log(this.i18n)
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
                        collapsed: true,
                        content: {
                            view: this.i18n.interests_and_hobbies.hobbies.programming.content.view,
                            description: this.i18n.interests_and_hobbies.hobbies.programming.content.description
                        }
                    },
                    {
                        id: 1,
                        title: this.i18n.interests_and_hobbies.hobbies.anime.title,
                        description: this.i18n.interests_and_hobbies.hobbies.anime.description,
                        iconSVG: `assets/images/icons/SVG/anime.svg`,
                        iconPNG: `assets/images/icons/PNG/anime.png`,
                        collapsed: true,
                        content: {
                            view: this.i18n.interests_and_hobbies.hobbies.anime.content.view,
                            description: this.i18n.interests_and_hobbies.hobbies.anime.content.description
                        }
                    },
                    {
                        id: 2,
                        title: this.i18n.interests_and_hobbies.hobbies.cosplay.title,
                        description: this.i18n.interests_and_hobbies.hobbies.cosplay.description,
                        iconSVG: `assets/images/icons/SVG/cosplay.svg`,
                        iconPNG: `assets/images/icons/PNG/cosplay.png`,
                        collapsed: true,
                        content: {
                            view: this.i18n.interests_and_hobbies.hobbies.cosplay.content.view,
                            description: this.i18n.interests_and_hobbies.hobbies.cosplay.content.description
                        }
                    },
                    {
                        id: 3,
                        title: this.i18n.interests_and_hobbies.hobbies.create.title,
                        description: this.i18n.interests_and_hobbies.hobbies.create.description,
                        iconSVG: `assets/images/icons/SVG/create.svg`,
                        iconPNG: `assets/images/icons/PNG/create.png`,
                        collapsed: true,
                        content: {
                            view: this.i18n.interests_and_hobbies.hobbies.create.content.view,
                            description: this.i18n.interests_and_hobbies.hobbies.create.content.description
                        }
                    },
                    {
                        id: 4,
                        title: this.i18n.interests_and_hobbies.hobbies.drawing.title,
                        description: this.i18n.interests_and_hobbies.hobbies.drawing.description,
                        iconSVG: `assets/images/icons/SVG/drawing.svg`,
                        iconPNG: `assets/images/icons/PNG/drawing.png`,
                        collapsed: true,
                        content: {
                            view: this.i18n.interests_and_hobbies.hobbies.drawing.content.view,
                            description: this.i18n.interests_and_hobbies.hobbies.drawing.content.description
                        }
                    },
                    {
                        id: 5,
                        title: this.i18n.interests_and_hobbies.hobbies.edit.title,
                        description: this.i18n.interests_and_hobbies.hobbies.edit.description,
                        iconSVG: `assets/images/icons/SVG/edit.svg`,
                        iconPNG: `assets/images/icons/PNG/edit.png`,
                        collapsed: true,
                        content: {
                            view: this.i18n.interests_and_hobbies.hobbies.edit.content.view,
                            description: this.i18n.interests_and_hobbies.hobbies.edit.content.description
                        }
                    },
                    {
                        id: 6,
                        title: this.i18n.interests_and_hobbies.hobbies.games.title,
                        description: this.i18n.interests_and_hobbies.hobbies.games.description,
                        iconSVG: `assets/images/icons/SVG/games.svg`,
                        iconPNG: `assets/images/icons/PNG/games.png`,
                        collapsed: true,
                        content: {
                            view: this.i18n.interests_and_hobbies.hobbies.games.content.view,
                            description: this.i18n.interests_and_hobbies.hobbies.games.content.description
                        }
                    },
                    {
                        id: 7,
                        title: this.i18n.interests_and_hobbies.hobbies.piano.title,
                        description: this.i18n.interests_and_hobbies.hobbies.piano.description,
                        iconSVG: `assets/images/icons/SVG/piano.svg`,
                        iconPNG: `assets/images/icons/PNG/piano.png`,
                        collapsed: true,
                        content: {
                            view: this.i18n.interests_and_hobbies.hobbies.piano.content.view,
                            description: this.i18n.interests_and_hobbies.hobbies.piano.content.description
                        }
                    },
                    {
                        id: 8,
                        title: this.i18n.interests_and_hobbies.hobbies.read.title,
                        description: this.i18n.interests_and_hobbies.hobbies.read.description,
                        iconSVG: `assets/images/icons/SVG/read.svg`,
                        iconPNG: `assets/images/icons/PNG/read.png`,
                        collapsed: true,
                        content: {
                            view: this.i18n.interests_and_hobbies.hobbies.read.content.view,
                            description: this.i18n.interests_and_hobbies.hobbies.read.content.description
                        }
                    },
                    {
                        id: 9,
                        title: this.i18n.interests_and_hobbies.hobbies.writing.title,
                        description: this.i18n.interests_and_hobbies.hobbies.writing.description,
                        iconSVG: `assets/images/icons/SVG/writing.svg`,
                        iconPNG: `assets/images/icons/PNG/writing.png`,
                        collapsed: true,
                        content: {
                            view: this.i18n.interests_and_hobbies.hobbies.writing.content.view,
                            description: this.i18n.interests_and_hobbies.hobbies.writing.content.description
                        }
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