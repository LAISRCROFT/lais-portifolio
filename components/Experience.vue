<template>
    <div :class="{'experience': !isDarkMode, 'experience_dark': isDarkMode}">
        <div class="row my-5">
            <div class="col-12">
                <h2 class="h2-title">{{ i18n.title }}</h2>
            </div>
        </div>
        <div class="row flex align-items-center justify-content-center mb-5 offset-1 col-10 div-painels">
            <Panel :header="exp.title" :toggleable="true" v-for="(exp, i) in i18n.experiences" :key="i" class="mb-3 painel-experiences">
                <div class="card card-tabview">
                    <p class="painel-experiences-title"><b>Função: </b>{{ exp.cargo }}</p>
                    <p class="painel-experiences-subtitle">{{ exp.datas[0] }} - {{ exp.datas[1] }}</p>
                    <!-- <p>{{ exp.description }}</p> -->
                    <TabView class="tabview-custom">
                        <TabPanel>
                            <template #header>
                                <i class="pi pi-sitemap"></i>
                                <span>{{ i18n.labels.funcoes }}</span>
                            </template>
                            <div class="div-chip-experiences-funcoes" v-for="(funcao, index) in exp.funcoes" :key="index">
                                <Chip :label="funcao" icon="pi pi-circle-on" class="mr-5 mb-2 chip-experiences-funcoes"/>
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <template #header>
                                <span>{{ i18n.labels.aprendizado }}</span>
                                <i class="pi pi-star-fill"></i>
                            </template>
                            <div class="row experiences-aprendizado" v-for="(skill, index) in exp.aprendizado" :key="index">
                                <div class="col-12 col-lg-3">
                                    <span class="experiences-aprendizado-span-title">{{ skill.title }}</span>
                                </div>
                                <div class="col-12 col-lg-9">
                                    <ProgressBar :value="skill.score" style="height: .8em"/>
                                </div>
                            </div>
                        </TabPanel>
                        <TabPanel class="tabpanel-comentario">
                            <template #header>
                                <span>{{ i18n.labels.comentario }}</span>
                                <i class="pi pi-bars"></i>
                            </template>
                            <p>{{ exp.comentario.comentario }}</p>
                            <Rating :value="exp.comentario.rating" :readonly="true" :stars="5" :cancel="false" />
                        </TabPanel>
                    </TabView>
                </div>
            </Panel>
        </div>
    </div>
</template>
<script>
    import eventBus from '../plugins/eventBus';
    export default {
        name: 'Education',
        data() {
            return {
                i18n: {},
                isDarkMode: false,
                selectedOption: '',
                active: 0,
                value2: 50,
                experiences: []
            }
        },
        async created() {
            this.i18n = this.$i18n.experiences
            eventBus.$on('att-idioma', async(option) => {
                this.selectedOption = option;
                setTimeout(() => {
                    this.i18n = this.$i18n.experiences
                }, 500)
            });
            eventBus.$on('att-darkmode', async (option) => {
                setTimeout(async() => {
                    this.isDarkMode = option
                }, 500);
            });
        },
        methods: {
            toggle(event) {
                this.$refs.menu.toggle(event);
            },
        },
        mounted() {
        }
    }
</script>

<style lang="scss" scoped>
    @import '~/assets/scss/components/Experience.scss';
    @import '~/assets/scss/DarkMode/components/Experience.scss';

    .tabview-custom {
        i, span {
            vertical-align: middle;
        }

        span {
            margin: 0 .5rem;
        }
    }
</style>