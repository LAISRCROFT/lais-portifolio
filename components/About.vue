<template>
    <div class="about">
        <div class="row mb-5">
            <div class="col-12">
                <h2 class="h2-title">About me</h2>
            </div>
            <div class="col-12 mb-5">
                <div class="row mb-5">
                    <div class="col-10 col-sm-4 col-lg-4 col-xl-3 col-xxl-3 offset-1 offset-lg-1 offset-xl-1 offset-xxl-2 mt-5 mb-4 mb-sm-0 mt-lg-0">
                        <!-- <img src="../assets/images/about/1.jpg" class="foto" /> -->
                        <Galleria 
                            :value="images" 
                            :responsiveOptions="responsiveOptions" 
                            :numVisible="11" 
                            :circular="true"
                            :showThumbnails="false" 
                            :showItemNavigators="true"
                            :showItemNavigatorsOnHover="true"
                            class="galeria d-none d-md-block">
                            <template #item="slotProps">
                                <img :src="slotProps.item.itemImageSrc" style="width: 70%; display: block;" class="foto"/>
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
                            class="galeria d-block d-md-none">
                            <template #item="slotProps">
                                <img :src="slotProps.item.itemImageSrc" style="width: 70%; display: block;" class="foto" @click="displayBasic2 = !displayBasic2"/>
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
                                <img :src="slotProps.item.itemImageSrc" style="width: 70%; display: block;" class="foto" :alt="slotProps.item.alt"/>
                            </template>
                        </Galleria>
                    </div>
                    <div class="col-10 col-sm-6 col-lg-6 col-xl-6 col-xxl-5 mt-5 offset-1 offset-sm-0">
                        <h3>I'Am a Creative Web Designer And Developer</h3>
                        <p class="p-">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla blandit volutpat quam vel volutpat. Donec auctor pellentesque sapien, vulputate commodo magna tempus sit amet. Suspendisse vitae tellus velit. Integer mattis nulla ac porttitor dictum. Quisque egestas mauris a suscipit finibus. Sed ullamcorper consequat risus sed dignissim. Nam libero tortor, gravida at aliquet non, fermentum in odio. Vivamus tempus turpis rhoncus purus cursus ullamcorper. Quisque nec dui et felis dictum placerat ac eget lacus.
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
                        <h3>Interests and Hobbies</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sed ipsum risus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae
                        </p>
                    </div>
                </div>
                <Hobbies />
                <!-- <p>
                    <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseWidthExample" aria-expanded="false" aria-controls="collapseWidthExample">
                        Toggle width collapse
                    </button>
                </p>
                <div style="min-height: 120px;">
                    <div class="collapse collapse-horizontal" id="collapseWidthExample">
                        <div class="card card-body" style="width: 300px;">
                        This is some placeholder content for a horizontal collapse. It's hidden by default and shown when triggered.
                        </div>
                    </div>
                </div> -->
            </div>
        </div>
      
    </div>
  </template>
  
  <script>
    export default {
        name: 'About',
        data() {
            return {
                images: [
                    {
                        "itemImageSrc": "_nuxt/assets/images/about/1.jpg",
                        "alt": "Description for Image 1",
                        "title": "Title 1"
                    },
                    {
                        "itemImageSrc": "_nuxt/assets/images/about/2.jpg",
                        "alt": "Description for Image 2",
                        "title": "Title 2"
                    },
                    {
                        "itemImageSrc": "_nuxt/assets/images/about/3.jpg",
                        "alt": "Description for Image 3",
                        "title": "Title 3"
                    },
                    {
                        "itemImageSrc": "_nuxt/assets/images/about/4.jpg",
                        "alt": "Description for Image 4",
                        "title": "Title 4"
                    },
                    {
                        "itemImageSrc": "_nuxt/assets/images/about/5.png",
                        "alt": "Description for Image 5",
                        "title": "Title 5"
                    },
                    {
                        "itemImageSrc": "_nuxt/assets/images/about/6.png",
                        "alt": "Description for Image 6",
                        "title": "Title 6"
                    },
                    {
                        "itemImageSrc": "_nuxt/assets/images/about/7.png",
                        "alt": "Description for Image 7",
                        "title": "Title 7"
                    },
                    {
                        "itemImageSrc": "_nuxt/assets/images/about/8.png",
                        "alt": "Description for Image 8",
                        "title": "Title 8"
                    },
                    {
                        "itemImageSrc": "_nuxt/assets/images/about/9.jpg",
                        "alt": "Description for Image 9",
                        "title": "Title 9"
                    },
                    {
                        "itemImageSrc": "_nuxt/assets/images/about/10.jpg",
                        "alt": "Description for Image 10",
                        "title": "Title 10"
                    },
                    {
                        "itemImageSrc": "_nuxt/assets/images/about/11.jpg",
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
            }
        }
    }
  </script>
  
<style lang="scss">
@import '~/assets/scss/components/About.scss';

</style>