<template>
    <div class="basic-informations">
        <!-- <p class="basics-infomations"> -->
            <div class="row">
                <div class="col-12 col-md-5 flex align-items-center justify-content-center">
                    <div class="row">
                        <div class="col-12">
                            <b class="metadata-about">Nickname:</b> Dama
                        </div>
                        <div class="col-12">
                            <b class="metadata-about">Name:</b> Lais
                        </div>
                        <div class="col-12">
                            <b class="metadata-about">Gender:</b> Feminine
                        </div>
                        <div class="col-12">
                            <b class="metadata-about">Date of Birth:</b> April 9, 2001
                        </div>
                        <div class="col-12">
                            <b class="metadata-about">Location:</b> Brazil <!--<img src="../assets/images/Flag_of_Brazil.svg.png" class="image-metadata"/>-->
                        </div>
                        <div class="col-12">
                            <b class="metadata-about">Favorite Color:</b> Red
                        </div>
                        <div class="col-12">
                            <b class="metadata-about">Height:</b> 1.63 &nbsp; &nbsp; <b class="metadata-about">Weight:</b> 45.5kg
                        </div>
                    </div>
                </div>
                <div class="col-md-1 d-none d-md-block">
                    <div class="row h-100">
                        <Divider layout="vertical">
                            <!-- <b>OR</b> -->
                        </Divider>
                    </div>
                </div>
                <div class="col-12 d-block d-md-none">
                    <div class="row h-100">
                        <Divider align="center" />
                    </div>
                </div>
                <div class="col-12 col-md-6 flex align-items-center justify-content-center">
                    <div class="row">
                        <div class="col-12">
                            <b class="metadata-about">Favorite artist:</b> Taylor Swift
                        </div>
                        <div class="col-12">
                            <b class="metadata-about">Favorite band:</b> Skillet
                        </div>
                        <div class="col-12">
                            <b class="metadata-about">Music genres:</b> 
                                <Chip label="pop" class="mr-5 custom-chip" />
                                <Chip label="rock" class="mr-5 custom-chip" />
                                <Chip label="alternative" class="mr-5 custom-chip" />
                        </div>
                        <div class="col-12">
                            <b class="metadata-about">Literary genres:</b> 
                                <Chip label="romance" class="mr-5 custom-chip" />
                                <Chip label="horror" class="mr-5 custom-chip" />
                                <Chip label="sci-fi" class="mr-5 custom-chip" />
                        </div>
                        <div class="col-12">
                            <b class="metadata-about">Preferred language:</b> JavaScript
                        </div>
                    </div>
                </div>
            </div>
        <!-- </p> -->
    </div>
  </template>
  
  <script>
    export default {
        name: 'Hobbies',
        data() {
            return {
                
            }
        },
        methods: {
            
        },
        mounted() {
            
        }
    }
  </script>
  
<style lang="scss">
@import '~/assets/scss/components/About.scss';

.custom-chip {
    height: 20px;
    font-size: 0.9em;
    padding-bottom: 4px;
    background: #cdcdf8;
}

</style>