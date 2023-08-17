<template>
    <div class="education">
        <div class="row mb-5">
            <div class="col-12">
                <h2 class="h2-title">{{ i18n.title }}</h2>
            </div>
        </div>
        <div class="row flex align-items-center justify-content-center mb-5">
            <div class="col-12 col-md-8 flex align-items-center justify-content-center mb-5">
                <Timeline :value="formacoes" align="alternate" class="customized-timeline">
                    <template #marker="slotProps">
                        <span class="custom-marker shadow-2" :style="{backgroundColor: slotProps.item.color}">
                            <i :class="slotProps.item.icon"></i>
                        </span>
                    </template>
                    <template #content="slotProps">
                        <Card class="card-timeline">
                            <template #title>
                                {{slotProps.item.title}}
                                <i class="pi pi-bookmark-fill certificados-icon" v-tooltip.top="icon" v-for="(icon, i) in slotProps.item.certificados"></i>
                                <!-- {{ slotProps.item.certificados }} -->
                            </template>
                            <template #subtitle>
                                <p class="subtitle-education">
                                    {{ slotProps.item.curso }} <br />
                                    {{slotProps.item.data_inicial}} - {{slotProps.item.data_final}}
                                </p>
                            </template>
                            <template #content>
                                <p class="descricao-education">
                                    {{ slotProps.item.descricao }}
                                </p>
                            </template>
                        </Card>
                    </template>
                </Timeline>
            </div>
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
                selectedOption: '',
                formacoes: [],
            }
        },
        async created() {
            this.i18n = this.$i18n.education
            this.formacoes = this.$i18n.education.formacoes

            eventBus.$on('att-idioma', async(option) => {
                this.selectedOption = option;
                setTimeout(() => {
                    console.log("education: ", this.$i18n.education)
                    this.i18n = this.$i18n.education
                    this.formacoes = this.$i18n.education.formacoes
                    console.log(this.formacoes)
                }, 500)
            });
        },
        methods: {
            
        },
        mounted() {
        }
    }
</script>

<style lang="scss" scoped>
    @import '~/assets/scss/components/Education.scss';
</style>