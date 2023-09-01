<template>
    <div class="skills">
        <div class="row mb-5">
            <div class="col-12">
                <h2 class="h2-title">{{ i18n.title }}</h2>
            </div>
        </div>
        <div class="row flex align-items-center justify-content-center mb-5 div-skills">
            <div class="col-8 offset-0 div-text">
                <p>
                    {{ i18n.description }}
                </p>
            </div>
            <div class="col-12 col-knobs mt-5">
                <div class="row flex col-row-knobs">
                    <div class="col-12 title-knobs mb-4">
                        <h2>
                            {{ i18n.skills.labels.linguagens_programacao }}
                        </h2>
                    </div>
                    <div class="col-6 col-md-4 col-lg-2 col-xl-1 knobs" v-for="(language, i) in skills.linguagens_programacao" :key="i">
                        <div class="row">
                            <div class="col-12 d-flex justify-content-center cols-knobs-label">
                                <p>{{ language.label }}</p>
                            </div>
                            <div class="col-12 d-flex justify-content-center cols-knobs-value">
                                <Knob v-model="language.value" valueColor="#7576b1" rangeColor="#FFF" readonly />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row flex col-row-knobs">
                    <div class="col-12 title-knobs mb-4 mt-5">
                        <h2>
                            {{ i18n.skills.labels.design }}
                        </h2>
                    </div>
                    <div class="col-6 col-md-4 col-lg-2 col-xl-1 knobs" v-for="(design, index) in skills.design" :key="index">
                        <div class="row">
                            <div class="col-12 d-flex justify-content-center cols-knobs-label">
                                <p>{{ design.label }}</p>
                            </div>
                            <div class="col-12 d-flex justify-content-center cols-knobs-value">
                                <Knob v-model="design.value" valueColor="#a166b2" rangeColor="#FFF" readonly />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row flex col-row-knobs col-row-knobs-2 mt-5">
                    <div class="col-12 title-knobs-frameworks mt-5 d-flex justify-content-center">
                        <h2 style="text-transform: uppercase;">
                            {{ i18n.skills.labels.frameworks }}
                        </h2>
                    </div>
                    <div class="col-12">
                        <div class="row">
                            <div class="col-12 col-xl-4 col-xxl-3 offset-xl-1 row-frameworks-alinhamento">
                                <div class="row">
                                    <div class="col-12 title-knobs mb-4 mt-5">
                                        <h2>
                                            Front-end
                                        </h2>
                                    </div>
                                    <div class="col-12 d-flex justify-content-center col-frameworks">
                                        <div class="row row-frameworks">
                                            <div class="col-12 frameworks-knobs" v-for="(skill, index) in skills.frameworks.frontend" :key="index">
                                                <div class="div-knobs-frameworks">
                                                    <table class="table mb-0 table-frameworks">
                                                        <thead>
                                                            <tr>
                                                                
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td class="td-1" style="width: 40% !important;"><span class="mr-5 mb-0">{{ skill.label }} </span></td>
                                                                <td class="td-2" ><i class="pi pi-circle-on" :class="{ 'icon-rating-frameworks-score': icon <= skill.value2, 'icon-rating-frameworks': icon > skill.value2 }" v-for="icon in 10"></i></td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 col-xl-3 col-xxl-4 row-frameworks-alinhamento row-frameworks-alinhamento-2">
                                <div class="row">
                                    <div class="col-12 title-knobs mb-4 mt-5">
                                        <h2>
                                            Back-end
                                        </h2>
                                    </div>
                                    <div class="col-12 d-flex justify-content-center col-frameworks">
                                        <div class="row row-frameworks">
                                            <div class="col-12 frameworks-knobs" v-for="(skill, index) in skills.frameworks.backend" :key="index">
                                                <div class="div-knobs-frameworks">
                                                    <table class="table mb-0 table-frameworks">
                                                        <thead>
                                                            <tr>
                                                                
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td class="td-1" style="width: 20% !important;"><span class="mr-5 mb-0">{{ skill.label }} </span></td>
                                                                <td class="td-2" ><i class="pi pi-circle-on" :class="{ 'icon-rating-frameworks-score': icon <= skill.value2, 'icon-rating-frameworks': icon > skill.value2 }" v-for="icon in 10"></i></td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 col-xl-3 row-frameworks-alinhamento">
                                <div class="row">
                                    <div class="col-12 title-knobs mb-4 mt-5">
                                        <h2>
                                            Mobile
                                        </h2>
                                    </div>
                                    <div class="col-12 d-flex justify-content-center col-frameworks">
                                        <div class="row row-frameworks">
                                            <div class="col-12 frameworks-knobs" v-for="(skill, index) in skills.frameworks.mobile" :key="index">
                                                <div class="div-knobs-frameworks">
                                                    <table class="table mb-0 table-frameworks">
                                                        <thead>
                                                            <tr>
                                                                
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td class="td-1" style="width: 17% !important;"><span class="mr-5 mb-0">{{ skill.label }} </span></td>
                                                                <td class="td-2" ><i class="pi pi-circle-on" :class="{ 'icon-rating-frameworks-score': icon <= skill.value2, 'icon-rating-frameworks': icon > skill.value2 }" v-for="icon in 10"></i></td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row flex col-row-knobs col-row-knobs-2 mt-5">
                    <div class="col-12 title-knobs-frameworks mt-5 d-flex justify-content-center">
                        <h2>
                            {{ i18n.skills.labels.banco_de_dados }}
                        </h2>
                    </div>
                    <div class="offset-1 offset-lg-0 col-10 offset-xl-0 col-xl-7 offset-xxl-0 mt-5 col-banco-dados">
                        <div class="row d-flex justify-content-center">
                            <div class="col-12 col-md-6" v-for="(banco, i) in skills.banco_de_dados" :key="i">
                                <div class="row mb-3">
                                    <div class="col-12">
                                        <h2>{{ banco.label }}</h2>
                                    </div>
                                    <div class="col-12">
                                        <ProgressBar :value="banco.value" :showValue="true" class="progress-bar-banco-de-dados">
                                            {{ banco.value }}
                                        </ProgressBar>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row flex col-row-knobs col-row-knobs-2 mt-5">
                    <div class="col-12 title-knobs-frameworks mt-5 d-flex justify-content-center">
                        <h2>
                            {{ i18n.skills.labels.hardware_e_infraestrutura }}
                        </h2>
                    </div>
                    <div class="offset-1 offset-lg-0 col-10 offset-xl-0 col-xl-7 offset-xxl-0 mt-5 col-banco-dados">
                        <div class="row">
                            <div class="col-12 col-md-6" v-for="(hardware, i) in skills.hardware_e_infraestrutura" :key="i">
                                <div class="row mb-3">
                                    <div class="col-12">
                                        <h2>{{ hardware.label }}</h2>
                                    </div>
                                    <div class="col-12">
                                        <ProgressBar :value="hardware.value" :showValue="true" class="progress-bar-banco-de-dados">
                                            {{hardware.value}}
                                        </ProgressBar>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row flex col-row-knobs col-row-knobs-2 mt-5">
                    <div class="col-12 title-knobs-frameworks mt-5 d-flex justify-content-center">
                        <h2>
                            {{ i18n.skills.labels.outros_idiomas }}
                        </h2>
                    </div>
                    <div class="col-12 mt-5 col-banco-dados">
                        <div class="row d-flex justify-content-center">
                            <div class="col-6 col-md-4 col-lg-2 col-xl-1 knobs" v-for="(skill, index) in skills.outros_idiomas" :key="index">
                                <div class="row">
                                    <div class="col-12 d-flex justify-content-center cols-knobs-label">
                                        <p>{{ skill.label }}</p>
                                    </div>
                                    <div class="col-12 d-flex justify-content-center cols-knobs-value">
                                        <Chart type="doughnut" :data="skill.chartData" :options="skill.chartOptions" :width="135" :height="135" offset="2"/>
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
        name: 'Skills',
        data() {
            return {
                i18n: {},
                selectedOption: '',
                skills: {},
            }
        },
        async created() {
            this.i18n = this.$i18n.skills
            this.skills = this.$i18n.skills.skills

            eventBus.$on('att-idioma', async(option) => {
                this.selectedOption = option;
                setTimeout(() => {
                    this.i18n = this.$i18n.skills
                    this.skills = this.$i18n.skills.skills
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
    @import '~/assets/scss/components/Skills.scss';
</style>