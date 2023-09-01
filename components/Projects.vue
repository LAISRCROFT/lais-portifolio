<template>
    <div class="projects">
        <div class="row mb-5">
            <div class="col-12">
                <h2 class="h2-title">{{ i18n.title }}</h2>
            </div>
        </div>
        <div class="row align-items-center mb-5 div-projects">
            <div class="col-10 offset-1 col-xxl-8 offset-xxl-2 div-text">
                <p class="text-center">{{ i18n.description }}</p>
            </div>
            <!-- Desktop -->
            <div class="col-12 d-none d-lg-block">
                <div class="row">
                    <div class="offset-1 col-10 col-xxl-9 col-for-projects mb-5 mt-5" :class="{ 'text-end': i % 2 != 0 }" v-for="(project, i) in projects" :key="i">
                        <div class="row" :class="{ 'd-flex justify-content-end': i % 2 != 0 }" >
                            <div class="offset-xxl-1 col-xxl-11 mb-4">
                                <h2>{{ project.title }}</h2>
                            </div>
                            <div :class="{'col-9 col-xxl-8': project.typeImage == 2, 'col-7 col-xxl-6': project.typeImage == 1 }" v-if="i % 2 != 0" class="div-details offset-0 mt-0">
                                <div class="row">
                                    <div class="col-12">
                                        <div class="row">
                                            <div class="col-12">
                                                <p>{{ project.description }}</p>
                                            </div>
                                            <div class="col-12 col-table-ferramentas">
                                                <table class="table mb-0 table-ferramentas">
                                                    <thead>
                                                        <tr>
                                                            <th class="th-1">{{ i18n.th_labels.frontend }}</th>
                                                            <th class="th-2">{{ i18n.th_labels.backend }}</th>
                                                            <th class="th-3">{{ i18n.th_labels.database }}</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td class="td-1" ><Chip :label="project.ferramentas.frontend" class="mr-2 custom-chip" /></td>
                                                            <td class="td-2" ><Chip :label="project.ferramentas.backend" class="mr-2 custom-chip" /></td>
                                                            <td class="td-3" ><Chip :label="project.ferramentas.database" class="mr-2 custom-chip" /></td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-12 col-icons d-flex align-items-end justify-content-end mt-5">
                                        <a :href="`${project.repositoryGitHub}`" target="_blank">
                                            <i class="pi pi-github icon-github mr-3" v-tooltip.top="`${i18n.tooltips.github}`" v-if="project.repositoryGitHub"></i>
                                        </a>
                                        <a :href="`${project.link}`" target="_blank">
                                            <i class="pi pi-globe icon-globe" v-tooltip.top="`${i18n.tooltips.link}`" v-if="project.link"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="div-screenshot" :class="{'col-3': project.typeImage == 2, 'col-5': project.typeImage == 1, 'offset-xxl-1': i % 2 == 0}">
                                <img :src="require(`@/${project.screenshot}`)" class="screenshot" :style="`width: ${project.width}%`"/>
                            </div>
                            <div :class="{'col-9 col-xxl-8': project.typeImage == 2, 'col-7 col-xxl-6': project.typeImage == 1 }" v-if="i % 2 == 0" class="div-details offset-0 mt-0">
                                <div class="row">
                                    <div class="col-12">
                                        <div class="row">
                                            <div class="col-12">
                                                <p>{{ project.description }}</p>
                                            </div>
                                            <div class="col-12 col-table-ferramentas">
                                                <table class="table mb-0 table-ferramentas">
                                                    <thead>
                                                        <tr>
                                                            <th class="th-1">{{ i18n.th_labels.frontend }}</th>
                                                            <th class="th-2">{{ i18n.th_labels.backend }}</th>
                                                            <th class="th-3">{{ i18n.th_labels.database }}</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td class="td-1" ><Chip :label="project.ferramentas.frontend" class="mr-2 custom-chip" /></td>
                                                            <td class="td-2" ><Chip :label="project.ferramentas.backend" class="mr-2 custom-chip" /></td>
                                                            <td class="td-3" ><Chip :label="project.ferramentas.database" class="mr-2 custom-chip" /></td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-12 col-icons d-flex align-items-end justify-content-start mt-4">
                                        <a :href="`${project.repositoryGitHub}`" target="_blank">
                                            <i class="pi pi-github icon-github mr-3" v-tooltip.top="`${i18n.tooltips.github}`" v-if="project.repositoryGitHub"></i>
                                        </a>
                                        <a :href="`${project.link}`" target="_blank">
                                            <i class="pi pi-globe icon-globe" v-tooltip.top="`${i18n.tooltips.link}`" v-if="project.link"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Mobile -->
            <div class="col-11 col-for-projects mb-5 mt-5 d-block d-lg-none" v-for="(project, i) in projects" :key="i">
                <div class="row" >
                    <div class="offset-1 col-11 mb-4 text-center">
                        <h2 class="text-center">{{ project.title }}</h2>
                    </div>
                    <div class="div-screenshot offset-1 col-11 d-flex justify-content-center">
                        <img :src="require(`@/${project.screenshot}`)" class="screenshot" :style="`width: ${project.width_md}%`"/>
                    </div>
                    <div class="div-details offset-1 col-11 mt-5">
                        <div class="row h-100">
                            <div class="col-12">
                                <div class="row">
                                    <div class="col-12">
                                        <p>{{ project.description }}</p>
                                    </div>
                                    <div class="col-12 col-table-ferramentas">
                                        <table class="table mb-0 table-ferramentas">
                                            <thead>
                                                <tr class="text-center">
                                                    <th class="th-1">{{ i18n.th_labels.frontend }}</th>
                                                    <th class="th-2">{{ i18n.th_labels.backend }}</th>
                                                    <th class="th-3">{{ i18n.th_labels.database }}</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr class="text-center">
                                                    <td class="td-1" ><Chip :label="project.ferramentas.frontend" class="mr-2 custom-chip" /></td>
                                                    <td class="td-2" ><Chip :label="project.ferramentas.backend" class="mr-2 custom-chip" /></td>
                                                    <td class="td-3" ><Chip :label="project.ferramentas.database" class="mr-2 custom-chip" /></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 col-icons d-flex align-items-end justify-content-center mt-4">
                                <a :href="`${project.repositoryGitHub}`" target="_blank">
                                    <i class="pi pi-github icon-github mr-3" v-tooltip.top="`${i18n.tooltips.github}`" v-if="project.repositoryGitHub"></i>
                                </a>
                                <a :href="`${project.link}`" target="_blank">
                                    <i class="pi pi-globe icon-globe" v-tooltip.top="`${i18n.tooltips.link}`" v-if="project.link"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import eventBus from '../plugins/eventBus'

export default {
    data() {
        return {
            i18n: {},
            selectedOption: '',
            projects: {}
        };
    },
    mounted() {
        
    },
    async created() {
        this.i18n = this.$i18n.projects
        this.projects = this.$i18n.projects.projects
        eventBus.$on('att-idioma', async(option) => {
            this.selectedOption = option;
            setTimeout(() => {
                this.i18n = this.$i18n.projects
                this.projects = this.$i18n.projects.projects
            }, 500)
        });
    },
    methods: {
        
    },
    watch: {
        
    }
};
</script>
<style lang="scss">
@import '~/assets/scss/components/Projects.scss';

</style>