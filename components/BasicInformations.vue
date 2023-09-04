<template>
    <div :class="{'basic-informations': !isDarkMode, 'basic-informations_dark': isDarkMode}">
        <!-- <p class="basics-infomations"> -->
            <div class="row">
                <div class="col-12 col-md-5 flex align-items-center justify-content-center">
                    <div class="row">
                        <!-- <div class="col-12">
                            <b class="metadata-about">{{ i18n.basic_informations_metadata.nickname }}:</b> {{ i18n.basic_informations_data.nickname }}
                        </div> -->
                        <div class="col-12">
                            <b class="metadata-about">{{ i18n.basic_informations_metadata.name }}:</b> {{ i18n.basic_informations_data.name }}
                        </div>
                        <div class="col-12">
                            <b class="metadata-about">{{ i18n.basic_informations_metadata.gender }}:</b> {{ i18n.basic_informations_data.gender }}
                        </div>
                        <div class="col-12">
                            <b class="metadata-about">{{ i18n.basic_informations_metadata.date_birth }}:</b> {{ i18n.basic_informations_data.date_birth }}
                        </div>
                        <div class="col-12">
                            <b class="metadata-about">{{ i18n.basic_informations_metadata.location }}:</b> {{ i18n.basic_informations_data.location }}
                        </div>
                        <div class="col-12">
                            <b class="metadata-about">{{ i18n.basic_informations_metadata.height }}:</b> {{ i18n.basic_informations_data.height }}
                        </div>
                        <div class="col-12">
                            <b class="metadata-about">{{ i18n.basic_informations_metadata.weight }}:</b> {{ i18n.basic_informations_data.weight }}
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
                            <b class="metadata-about">{{ i18n.basic_informations_metadata.nickname }}:</b> {{ i18n.basic_informations_data.nickname }}
                        </div>
                        <div class="col-12">
                            <b class="metadata-about">{{ i18n.basic_informations_metadata.favorite_color }}:</b> {{ i18n.basic_informations_data.favorite_color }}
                        </div>
                        <!-- <div class="col-12">
                            <b class="metadata-about">{{ i18n.basic_informations_metadata.favorite_artists }}:</b> {{ i18n.basic_informations_data.favorite_artists }}
                        </div>
                        <div class="col-12">
                            <b class="metadata-about">{{ i18n.basic_informations_metadata.favorite_bands }}:</b> {{ i18n.basic_informations_data.favorite_bands }}
                        </div> -->
                        <div class="col-12">
                            <b class="metadata-about">{{ i18n.basic_informations_metadata.music_genres }}:</b> 
                                <Chip :label="`${i18n.basic_informations_data.music_genres[0]}`" class="mr-5 custom-chip" />
                                <Chip :label="`${i18n.basic_informations_data.music_genres[1]}`" class="mr-5 custom-chip" />
                                <Chip :label="`${i18n.basic_informations_data.music_genres[2]}`" class="mr-5 custom-chip" />
                        </div>
                        <div class="col-12">
                            <b class="metadata-about">{{ i18n.basic_informations_metadata.literaly_genres }}:</b> 
                                <Chip :label="`${i18n.basic_informations_data.literaly_genres[0]}`" class="mr-5 custom-chip" />
                                <Chip :label="`${i18n.basic_informations_data.literaly_genres[1]}`" class="mr-5 custom-chip" />
                                <Chip :label="`${i18n.basic_informations_data.literaly_genres[2]}`" class="mr-5 custom-chip" />
                        </div>
                        <div class="col-12">
                            <b class="metadata-about">{{ i18n.basic_informations_metadata.preferred_language }}:</b> {{ i18n.basic_informations_data.preferred_language }}
                        </div>
                    </div>
                </div>
            </div>
        <!-- </p> -->
    </div>
</template>
  
<script>
    import eventBus from '../plugins/eventBus';
    export default {
        name: 'Hobbies',
        data() {
            return {
                i18n: {},
                isDarkMode: false,
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
            eventBus.$on('att-darkmode', async (option) => {
                setTimeout(async() => {
                    this.isDarkMode = option
                }, 500);
            });
        },
        methods: {
            
        },
        mounted() {
        }
    }
</script>
  
<style lang="scss" scoped>
@import '~/assets/scss/components/About.scss';
@import '~/assets/scss/DarkMode/components/About.scss';

</style>