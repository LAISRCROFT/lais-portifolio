<template>
    <div class="hobbies">
        <div class="row">
            <div class="offset-1 offset-xxl-2 col-10 col-xxl-8 mt-1">
                <div class="row organiza-row-hobbies" id="section_up">
                    <Transition name="slide-fade">
                        <div class="col-12 align-switchs mb-4" v-if="!showGallery && !showAnimes && !showGames && !showArtists">
                            <span class="mr-1">{{ i18n.interests_and_hobbies.switches.color }}</span><InputSwitch v-model="color" class="mr-4"/><br >
                            <span class="mr-1">{{ i18n.interests_and_hobbies.switches.expand_all }}</span><InputSwitch v-model="expandedAll"/>
                        </div>
                    </Transition>
                    <Transition name="slide-fade" >
                        <div class="row d-flex justify-content-center" v-if="!showGallery && !showAnimes && !showGames && !showArtists">
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
                                    <Button :label="imagem.content.description" class="p-button-link" v-show="imagem.content.view" @click="showContent(i, imagem)" />
                                </Panel>
                            </div>
                        </div>
                    </Transition>
                    
                    <!-- CONTENTS -->
                    <div class="galerias" id="scroll_galery">
                        <Galleria :value="images_galery" :activeIndex.sync="activeIndexThumb" :responsiveOptions="responsiveOptions" :numVisible="7" containerStyle="max-width: 850px"
                            :circular="true" :fullScreen="true" :showItemNavigators="true" :showThumbnails="false" :visible.sync="displayCustom">
                            <template #item="slotProps">
                                <Card style="border-radius: 4%;">
                                    <template #content style="display: flex; justify-content: center;">
                                        <img :src="require(`@/${slotProps.item.itemImageSrc}`)" :alt="slotProps.item.alt" style="width: 67vh; border-radius: 4%;" />                                        
                                    </template>
                                    <template #footer>
                                        <span style="font-family: 'Poppins';" class="text-center">{{ slotProps.item.alt }}</span>
                                    </template>
                                </Card>
                            </template>
                        </Galleria>

                        <div v-if="showGallery" class="grid d-none d-md-block">
                            <div class="row text-center d-flex align-items-center">
                                <div class="col-12 text-end mb-5">
                                    <Button icon="pi pi-arrow-left" class="p-button-rounded button-back" @click="showGallery = false;" />
                                </div>
                                <div v-for="(image, index) of images_galery" class="col-3" :key="index">
                                    <img :src="require(`@/${image.thumbnailImageSrc}`)" :alt="image.alt" @click="imageClick(index)" class="image-gallery" v-tooltip.top="image.title"/>                                    
                                </div>
                            </div>
                        </div>
                        <div class="col-12 text-end mb-2 d-block d-md-none" v-if="showGallery">
                            <Button icon="pi pi-arrow-left" class="p-button-rounded button-back" @click="showGallery = false;" />
                        </div>
                        <div class="card card-galery d-block d-md-none" v-if="showGallery"> 
                            <Carousel :value="images_galery" :numVisible="1" :numScroll="1" style="max-width: 100%; margin-top: 2em">
                                <template #item="slotProps">
                                    <div class="product-item">
                                        <div class="product-item-content">
                                            <div class="mb-3">
                                                <img :src="require(`@/${slotProps.data.thumbnailImageSrc}`)" class="product-image" style="width: 100%;" />
                                            </div>
                                        </div>
                                    </div>
                                </template>
                            </Carousel>
                        </div>
                    </div>

                    <div class="animes" v-if="showAnimes">
                        <div class="row d-flex justify-content-center" id="scroll_animes">
                            <div class="col-12 text-end mb-2">
                                <Button icon="pi pi-arrow-left" class="p-button-rounded button-back" @click="showAnimes = false;" />
                            </div>
                            <div class="col-6 mb-2 d-md-flex align-items-center d-none" v-for="(anime, index) in images_animes" :key="index">
                                <div v-if="anime.top % 2 != 0" class="d-flex align-items-center justify-content-end w-100">
                                    <Chip :label="anime.title" class="chip-animes-left"/>
                                    <Avatar :image="require(`@/${anime.itemImageSrc}`)" class="avatar-animes" size="xlarge" shape="circle" v-tooltip.top="`#${anime.top}`"/>
                                </div>
                                <div v-if="anime.top % 2 == 0" class="d-flex align-items-center">
                                    <Avatar :image="require(`@/${anime.itemImageSrc}`)" class="avatar-animes" size="xlarge" shape="circle" v-tooltip.top="`#${anime.top}`"/>
                                    <Chip :label="anime.title" class="chip-animes"/>
                                </div>
                            </div>
                            <div class="mb-2 d-flex d-md-none align-items-center" v-for="(anime, index) in images_animes" :key="index">
                                <Avatar :image="require(`@/${anime.itemImageSrc}`)" class="avatar-animes-mobile" size="xlarge" shape="circle" v-tooltip.top="`#${anime.top}`"/>
                                <Chip :label="anime.title" class="chip-animes-mobile"/>
                            </div>
                        </div>
                    </div>

                    <div class="games" v-if="showGames">
                        <div class="row d-flex justify-content-center" id="scroll_games">
                            <div class="col-12 text-end mb-2">
                                <Button icon="pi pi-arrow-left" class="p-button-rounded button-back" @click="showGames = false;" />
                            </div>
                            <div class="col-6 mb-2 d-md-flex align-items-center d-none" v-for="(game, index) in images_games" :key="index">
                                <div v-if="game.top % 2 != 0" class="d-flex align-items-center justify-content-end w-100">
                                    <Chip :label="game.title" class="chip-animes-left"/>
                                    <Avatar :image="require(`@/${game.itemImageSrc}`)" class="avatar-animes" size="xlarge" shape="circle" v-tooltip.top="`#${game.top}`"/>
                                </div>
                                <div v-if="game.top % 2 == 0" class="d-flex align-items-center">
                                    <Avatar :image="require(`@/${game.itemImageSrc}`)" class="avatar-animes" size="xlarge" shape="circle" v-tooltip.top="`#${game.top}`"/>
                                    <Chip :label="game.title" class="chip-animes"/>
                                </div>
                            </div>
                            <div class="mb-2 d-flex d-md-none align-items-center" v-for="(game, index) in images_games" :key="index">
                                <Avatar :image="require(`@/${game.itemImageSrc}`)" class="avatar-animes-mobile" size="xlarge" shape="circle" v-tooltip.top="`#${game.top}`"/>
                                <Chip :label="game.title" class="chip-animes-mobile"/>
                            </div>
                        </div>
                    </div>

                    <div class="artists" v-if="showArtists">
                        <div class="row d-flex justify-content-center" id="scroll_artists">
                            <div class="col-12 text-end mb-2">
                                <Button icon="pi pi-arrow-left" class="p-button-rounded button-back" @click="showArtists = false;" />
                            </div>
                            <div class="col-12 col-md-6 mb-5 d-flex align-items-center" v-for="(artist, index) in images_artists" :key="index">
                                <Avatar :image="require(`@/${artist.itemImageSrc}`)" class="avatar-artists" size="xlarge" shape="circle"/>
                                <div class="card card-artists">
                                    <div class="row">
                                        <div class="col-12">
                                            <h1>#{{artist.top}} {{ artist.title }}</h1>
                                        </div>
                                        <div class="col-12 d-flex justify-content-end mb-4">
                                            <Chip :label="genero" class="chip-generos" v-for="(genero, i) in artist.generos" :key="i"/>
                                        </div>
                                        <div class="col-6 d-flex justify-content-end best-album mb-3">
                                            <div class="row">
                                                <div class="col-12">
                                                    <h2>{{ i18n.interests_and_hobbies.bestAlbum }}</h2>
                                                </div>
                                                <div class="col-12 d-flex justify-content-end">
                                                    <Chip :label="artist.bestAlbum" class="chip-bests-album"/>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-6 d-flex justify-content-start best-music mb-3">
                                            <div class="row">
                                                <div class="col-12">
                                                    <h2>{{ i18n.interests_and_hobbies.bestMusic }}</h2>
                                                </div>
                                                <div class="col-12">
                                                    <Chip :label="artist.bestMusic" class="chip-bests-music"/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
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
                        "thumbnailImageSrc": "assets/images/drawings/1.jpg",
                        "alt": "Essa é a minha OC para a minha obra",
                        "title": "My OC"
                    },
                    {
                        "itemImageSrc": "assets/images/drawings/2.jpg",
                        "thumbnailImageSrc": "assets/images/drawings/2.jpg",
                        "alt": "Lara Croft",
                        "title": "Lara Croft"
                    },
                    {
                        "itemImageSrc": "assets/images/drawings/3.jpg",
                        "thumbnailImageSrc": "assets/images/drawings/3.jpg",
                        "alt": "My OC",
                        "title": "My OC"
                    },
                    {
                        "itemImageSrc": "assets/images/drawings/4.jpg",
                        "thumbnailImageSrc": "assets/images/drawings/4.jpg",
                        "alt": "Personagem de FFXIV",
                        "title": "Personagem de FFXIV"
                    },
                    {
                        "itemImageSrc": "assets/images/drawings/5.jpg",
                        "thumbnailImageSrc": "assets/images/drawings/5.jpg",
                        "alt": "My OC",
                        "title": "My OC"
                    },
                    {
                        "itemImageSrc": "assets/images/drawings/6.jpg",
                        "thumbnailImageSrc": "assets/images/drawings/6.jpg",
                        "alt": "My cats",
                        "title": "My cats"
                    },
                    {
                        "itemImageSrc": "assets/images/drawings/7.jpg",
                        "thumbnailImageSrc": "assets/images/drawings/7.jpg",
                        "alt": "My OC",
                        "title": "My OC"
                    },
                    {
                        "itemImageSrc": "assets/images/drawings/8.jpg",
                        "thumbnailImageSrc": "assets/images/drawings/8.jpg",
                        "alt": "My OC",
                        "title": "My OC"
                    },
                    {
                        "itemImageSrc": "assets/images/drawings/9.jpg",
                        "thumbnailImageSrc": "assets/images/drawings/9.jpg",
                        "alt": "My OC",
                        "title": "My OC"
                    },
                    {
                        "itemImageSrc": "assets/images/drawings/10.png",
                        "thumbnailImageSrc": "assets/images/drawings/10.png",
                        "alt": "My OC",
                        "title": "My OC"
                    },
                    {
                        "itemImageSrc": "assets/images/drawings/11.jpg",
                        "thumbnailImageSrc": "assets/images/drawings/11.jpg",
                        "alt": "My OC",
                        "title": "My OC"
                    },
                    {
                        "itemImageSrc": "assets/images/drawings/12.jpg",
                        "thumbnailImageSrc": "assets/images/drawings/12.jpg",
                        "alt": "My OC",
                        "title": "My OC"
                    },
                ],
                images_animes: [
                    {
                        "itemImageSrc": "assets/images/animes/1.png",
                        "title": "Shingeki no Kyojin",
                        "top": 1
                    },
                    {
                        "itemImageSrc": "assets/images/animes/2.jpg",
                        "title": "Code Geass",
                        "top": 2
                    },
                    {
                        "itemImageSrc": "assets/images/animes/3.jpg",
                        "title": "Noragami",
                        "top": 3
                    },
                    {
                        "itemImageSrc": "assets/images/animes/4.jpg",
                        "title": "FullMetal Alchemist B.",
                        "top": 4
                    },
                    {
                        "itemImageSrc": "assets/images/animes/5.jpg",
                        "title": "Dr. Stone",
                        "top": 5
                    },
                    {
                        "itemImageSrc": "assets/images/animes/6.png",
                        "title": "Akagami no Shirayuki-hime",
                        "top": 6
                    },
                    {
                        "itemImageSrc": "assets/images/animes/7.jpg",
                        "title": "Norn9",
                        "top": 7
                    },
                    {
                        "itemImageSrc": "assets/images/animes/8.jpg",
                        "title": "Kamisama Hajimemashita",
                        "top": 8
                    },
                    {
                        "itemImageSrc": "assets/images/animes/9.jpg",
                        "title": "Spy x Family",
                        "top": 9
                    },
                    {
                        "itemImageSrc": "assets/images/animes/10.jpeg",
                        "title": "Demon Slayer",
                        "top": 10
                    },
                ],
                images_games: [
                    {
                        "itemImageSrc": "assets/images/games/1.jpg",
                        "title": "Tomb Raider",
                        "top": 1
                    },
                    {
                        "itemImageSrc": "assets/images/games/2.jpg",
                        "title": "Resident Evil",
                        "top": 2
                    },
                    {
                        "itemImageSrc": "assets/images/games/3.png",
                        "title": "Chrono Trigger",
                        "top": 3
                    },
                    {
                        "itemImageSrc": "assets/images/games/4.jpg",
                        "title": "To the Moon Series",
                        "top": 4
                    },
                    {
                        "itemImageSrc": "assets/images/games/5.jpg",
                        "title": "Minecraft",
                        "top": 5
                    },
                    {
                        "itemImageSrc": "assets/images/games/6.jpg",
                        "title": "Cat Quest II",
                        "top": 6
                    },
                    {
                        "itemImageSrc": "assets/images/games/7.jpg",
                        "title": "Nier: Automata",
                        "top": 7
                    },
                    {
                        "itemImageSrc": "assets/images/games/8.jpg",
                        "title": "Undertale",
                        "top": 8
                    },
                    {
                        "itemImageSrc": "assets/images/games/9.jpg",
                        "title": "Corpse Party Series",
                        "top": 9
                    },
                    {
                        "itemImageSrc": "assets/images/games/10.jpg",
                        "title": "Terraria",
                        "top": 10
                    },
                    {
                        "itemImageSrc": "assets/images/games/11.jpg",
                        "title": "Elden Ring",
                        "top": 11
                    },
                    {
                        "itemImageSrc": "assets/images/games/12.jpg",
                        "title": "Dying Light II",
                        "top": 12
                    },
                ],
                images_artists: [
                    {
                        "itemImageSrc": "assets/images/artists/1.jpg",
                        "title": "Taylor Swift",
                        "generos": ["Pop", "Country", "Folk"],
                        "bestAlbum": "Reputation",
                        "bestMusic": "August",
                        "top": 1
                    },
                    {
                        "itemImageSrc": "assets/images/artists/2.jpg",
                        "title": "Hiroyuki Sawano",
                        "generos": ["Jazz", "Pop", "Classical"],
                        "bestAlbum": "o1",
                        "bestMusic": "Ninelie",
                        "top": 2
                    },
                    {
                        "itemImageSrc": "assets/images/artists/3.jpg",
                        "title": "Avril Lavigne",
                        "generos": ["Punk", "Pop", "Rock"],
                        "bestAlbum": "Head Above Water",
                        "bestMusic": "I'm With You",
                        "top": 3
                    },
                    {
                        "itemImageSrc": "assets/images/artists/8.jpg",
                        "title": "Aimer",
                        "generos": ["J-pop"],
                        "bestAlbum": "Dawn",
                        "bestMusic": "Last Stardust",
                        "top": 4
                    },
                    {
                        "itemImageSrc": "assets/images/artists/4.jpeg",
                        "title": "Citizen Soldier",
                        "generos": ["Rock"],
                        "bestAlbum": "Scarecrow",
                        "bestMusic": "Bitter",
                        "top": 5
                    },
                    {
                        "itemImageSrc": "assets/images/artists/5.jpg",
                        "title": "Evanescence",
                        "generos": ["Rock", "Metal"],
                        "bestAlbum": "Fallen",
                        "bestMusic": "My Imortal",
                        "top": 6
                    },
                    {
                        "itemImageSrc": "assets/images/artists/6.jpg",
                        "title": "Skillet",
                        "generos": ["Rock"],
                        "bestAlbum": "Awake",
                        "bestMusic": "Awake and Alive",
                        "top": 7
                    },
                    {
                        "itemImageSrc": "assets/images/artists/7.jpg",
                        "title": "BLACKPINK",
                        "generos": ["K-pop"],
                        "bestAlbum": "SQUARE UP",
                        "bestMusic": "DDU-DU DDU-DU",
                        "top": 8
                    },
                    {
                        "itemImageSrc": "assets/images/artists/9.jpg",
                        "title": "Ariana Grande",
                        "generos": ["Pop"],
                        "bestAlbum": "Dangerous Woman",
                        "bestMusic": "Stuck With You",
                        "top": 9
                    },
                    {
                        "itemImageSrc": "assets/images/artists/10.jpg",
                        "title": "AmaLee",
                        "generos": ["Pop"],
                        "bestAlbum": "Rise of the Monarch",
                        "bestMusic": "Villain Vibes",
                        "top": 10
                    }
                ],
                color: false,
                expandedAll: false,
                displayCustom: false,
                gallery: false,
                showGallery: false,
                showAnimes: false,
                showArtists: false,
                showGames: false,
                activeIndex: [],
                activeIndexThumb: 0,
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
                        view: false,
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
                        view: true,
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
                        view: false,
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
                        view: false,
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
                        view: true,
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
                        view: false,
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
                        view: true,
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
                        view: true,
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
                        view: false,
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
                        view: false,
                        description: this.i18n.interests_and_hobbies.hobbies.writing.content.description
                    }
                },
            ]

            for (let i = 0; i < this.hobbies.length; i++) {
                this.activeIndex[i] = null
            }

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
            },
            showContent(i, imagem) {
                if (imagem.id == 4) {
                    this.activeIndex[i] = i
                    this.showGallery = true
                    setTimeout(() => {
                        this.scrollToSection("scroll_galery")
                    }, 800)
                }
                else if (imagem.id == 1) {
                    this.activeIndex[i] = i
                    this.showAnimes = true
                    setTimeout(() => {
                        this.scrollToSection("scroll_animes")
                    }, 800)
                }
                else if (imagem.id == 6) {
                    this.activeIndex[i] = i
                    this.showGames = true
                    setTimeout(() => {
                        this.scrollToSection("scroll_games")
                    }, 800)
                }
                else if (imagem.id == 7) {
                    this.activeIndex[i] = i
                    this.showArtists = true
                    setTimeout(() => {
                        this.scrollToSection("scroll_artists")
                    }, 800)
                }
                this.expandedAll = false
            },
            imageClick(index) {
                this.activeIndexThumb = index;
                this.displayCustom = true;
            },
            
            scrollToSection(sectionId) {
                console.log(sectionId)
                const element = document.getElementById(sectionId);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            },
        },
        mounted() {
            
        }
    }
  </script>
  
<style lang="scss">
@import '~/assets/scss/components/Hobbies.scss';

.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.9s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  transition: all 0.4s cubic-bezier(1, 0.5, 0.8, 1);
  opacity: 0;
}
</style>