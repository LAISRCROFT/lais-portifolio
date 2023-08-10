<template>
    <div class="about">
        <div class="row mb-5">
            <div class="col-12">
                <h2 class="h2-title">{{ i18n.title }}</h2>
            </div>
            <div class="col-12 mb-5">
                <div class="row mb-0 mb-md-5">
                    <div class="col-10 col-sm-4 col-lg-4 col-xl-3 col-xxl-3 offset-1 offset-lg-1 offset-xl-1 offset-xxl-2 mt-5 mb-4 mb-sm-0 mt-lg-0">                
                        <Galleria
                            v-if="allImagesLoaded"
                            :value="images"
                            :responsiveOptions="responsiveOptions"
                            :numVisible="11"
                            :circular="true"
                            :showThumbnails="false"
                            :showItemNavigators="true"
                            :showItemNavigatorsOnHover="true"
                            class="galeria d-none d-md-block"
                            >
                            <template #item="slotProps">
                                <img :src="require(`@/${slotProps.item.itemImageSrc}`)" style="width: 70%; display: block;" class="foto" />
                            </template>
                        </Galleria>
                        <div v-else>
                         carregando
                        </div>
                        <Galleria 
                            :value="images" 
                            :responsiveOptions="responsiveOptions" 
                            :numVisible="11" 
                            :circular="true"
                            :showThumbnails="false" 
                            :showItemNavigators="true"
                            :showItemNavigatorsOnHover="true"
                            class="galeria d-block d-md-none">
                            <template #item="slotProps">
                                <img :src="require(`@/${slotProps.item.itemImageSrc}`)" style="width: 70%; display: block;" class="foto" @click="displayBasic2 = !displayBasic2"/>
                            </template>
                        </Galleria>
                        <Galleria 
                            :value="images" 
                            :responsiveOptions="responsiveOptions" 
                            :numVisible="11" 
                            :circular="true"
                            :showThumbnails="false" 
                            :showItemNavigators="true"
                            :showItemNavigatorsOnHover="true"
                            :fullScreen="true"
                            :visible.sync="displayBasic2"
                            class="galeria d-block d-md-none">
                            <template #item="slotProps">
                                <img :src="require(`@/${slotProps.item.itemImageSrc}`)" style="width: 70%; display: block;" class="foto" :alt="slotProps.item.alt"/>
                            </template>
                        </Galleria>
                    </div>
                    <div class="col-10 col-sm-6 col-lg-6 col-xl-6 col-xxl-5 mt-5 offset-1 offset-sm-0">
                        <h3>{{ i18n.introduction }}</h3>
                        <p class="p-about mt-3">
                            {{ i18n.introduction_text }}
                        </p>
                        <Panel 
                            :header="`${i18n.basic_informations_title}`" 
                            :toggleable="true" 
                            :collapsed.sync="isCollapsed"
                            class="panel-informations d-none d-lg-block"
                            >
                            <BasicInformations />
                        </Panel>
                    </div>
                    <div class="col-10 col-sm-10 col-lg-6 col-xl-6 col-xxl-5 mt-5 offset-1 offset-sm-1 d-block d-lg-none">
                        <div class="div-title-basic-informations mb-2">
                            {{ i18n.basic_informations_title }}
                        </div>
                        <p class="basics-infomations">
                            <BasicInformations />
                        </p>
                    </div>
                </div>
                <div class="row">
                    <div class="offset-1 offset-xxl-2 col-10 col-xxl-8 mt-5">
                        <hr />
                    </div>
                </div>
                <div class="row">
                    <div class="offset-1 offset-xxl-2 col-10 col-xxl-8 mt-1">
                        <h3>{{ i18n.interests_and_hobbies.title }}</h3>
                        <p>
                            {{ i18n.interests_and_hobbies.description }}
                        </p>
                    </div>
                </div>
                <Hobbies />
            </div>
        </div>
      
    </div>
  </template>
  
  <script>
    import eventBus from '../plugins/eventBus';

    export default {
        name: 'About',
        data() {
            return {
                images: [
                    {
                        "itemImageSrc": "assets/images/about/1.jpg",
                        "alt": "Description for Image 1",
                        "title": "Title 1"
                    },
                    {
                        "itemImageSrc": "assets/images/about/2.jpg",
                        "alt": "Description for Image 2",
                        "title": "Title 2"
                    },
                    {
                        "itemImageSrc": "assets/images/about/3.jpg",
                        "alt": "Description for Image 3",
                        "title": "Title 3"
                    },
                    {
                        "itemImageSrc": "assets/images/about/4.jpg",
                        "alt": "Description for Image 4",
                        "title": "Title 4"
                    },
                    {
                        "itemImageSrc": "assets/images/about/5.png",
                        "alt": "Description for Image 5",
                        "title": "Title 5"
                    },
                    {
                        "itemImageSrc": "assets/images/about/6.png",
                        "alt": "Description for Image 6",
                        "title": "Title 6"
                    },
                    {
                        "itemImageSrc": "assets/images/about/7.png",
                        "alt": "Description for Image 7",
                        "title": "Title 7"
                    },
                    {
                        "itemImageSrc": "assets/images/about/8.png",
                        "alt": "Description for Image 8",
                        "title": "Title 8"
                    },
                    {
                        "itemImageSrc": "assets/images/about/9.jpg",
                        "alt": "Description for Image 9",
                        "title": "Title 9"
                    },
                    {
                        "itemImageSrc": "assets/images/about/10.jpg",
                        "alt": "Description for Image 10",
                        "title": "Title 10"
                    },
                    {
                        "itemImageSrc": "assets/images/about/11.jpg",
                        "alt": "Description for Image 11",
                        "title": "Title 11"
                    }
                ],
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
                displayBasic2: false,
                allImagesLoaded: false,
                isCollapsed: true,
                selectedOption: '',
                i18n: {}
            }
        },
        async created() {
            this.i18n = this.$i18n.about
            eventBus.$on('att-idioma', async(option) => {
                this.selectedOption = option;
                setTimeout(() => {
                    this.i18n = this.$i18n.about
                }, 500)
            });
        },
        mounted() {
            this.onImageLoad()
        },
        methods: {
            onImageLoad() {
                const allImagesLoaded = this.images.every((image) => {
                    return image;
                });

                if (allImagesLoaded) {
                    this.allImagesLoaded = true;
                }
            }
        }
    }
  </script>
  
<style lang="scss">
@import '~/assets/scss/components/About.scss';

</style>