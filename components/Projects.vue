<template>
    <div class="projects">
        <div class="row mb-5">
            <div class="col-12">
                <h2 class="h2-title">{{ projects.title }}</h2>
            </div>
        </div>
        <div class="row align-items-center mb-5 div-projects">
            <div class="col-10 offset-1 col-xxl-8 offset-xxl-2 div-text">
                <p>{{ projects.description }}</p>
            </div>
            <div class="offset-1 col-10 col-for-projects mb-5 mt-5 d-none d-lg-block" :class="{ 'text-end': i % 2 != 0 }" v-for="(project, i) in projects.projects" :key="i">
                <div class="row" :class="{ 'd-flex justify-content-end': i % 2 != 0 }" >
                    <div class="offset-xxl-1 col-xxl-11 mb-4">
                        <h2>{{ project.title }}</h2>
                    </div>
                    <div :class="{'col-9 col-xxl-8': project.typeImage == 2, 'col-7 col-xxl-6': project.typeImage == 1 }" v-if="i % 2 != 0" class="div-details offset-0 mt-0">
                        <div class="row h-100">
                            <div class="col-12">
                                <div class="row">
                                    <div class="col-12">
                                        <p>{{ project.description }}</p>
                                    </div>
                                    <div class="col-12 col-table-ferramentas">
                                        <table class="table mb-0 table-ferramentas">
                                            <thead>
                                                <tr>
                                                    <th class="th-1">Frontend</th>
                                                    <th class="th-2">Backend</th>
                                                    <th class="th-3">Banco de dados</th>
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
                            <div class="col-12 col-icons d-flex align-items-end justify-content-end">
                                <a :href="`${project.repositoryGitHub}`" target="_blank">
                                    <i class="pi pi-github icon-github mr-3" v-tooltip.top="`Clique para ir ao GitHub do projeto`" v-if="project.repositoryGitHub"></i>
                                </a>
                                <a :href="`${project.link}`" target="_blank">
                                    <i class="pi pi-globe icon-globe" v-tooltip.top="`Clique para ir ao site hospedado`" v-if="project.link"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="div-screenshot" :class="{'col-3': project.typeImage == 2, 'col-5': project.typeImage == 1, 'offset-xxl-1': i % 2 == 0}">
                        <img :src="require(`@/${project.screenshot}`)" class="screenshot" :style="`width: ${project.width}%`"/>
                    </div>
                    <div :class="{'col-9 col-xxl-8': project.typeImage == 2, 'col-7 col-xxl-6': project.typeImage == 1 }" v-if="i % 2 == 0" class="div-details offset-0 mt-0">
                        <div class="row h-100">
                            <div class="col-12">
                                <div class="row">
                                    <div class="col-12">
                                        <p>{{ project.description }}</p>
                                    </div>
                                    <div class="col-12 col-table-ferramentas">
                                        <table class="table mb-0 table-ferramentas">
                                            <thead>
                                                <tr>
                                                    <th class="th-1">Frontend</th>
                                                    <th class="th-2">Backend</th>
                                                    <th class="th-3">Banco de dados</th>
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
                            <div class="col-12 col-icons d-flex align-items-end justify-content-start mt-4 mt-xl-0">
                                <a :href="`${project.repositoryGitHub}`" target="_blank">
                                    <i class="pi pi-github icon-github mr-3" v-tooltip.top="`Clique para ir ao GitHub do projeto`" v-if="project.repositoryGitHub"></i>
                                </a>
                                <a :href="`${project.link}`" target="_blank">
                                    <i class="pi pi-globe icon-globe" v-tooltip.top="`Clique para ir ao site hospedado`" v-if="project.link"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-11 col-for-projects mb-5 mt-5 d-block d-lg-none" v-for="(project, i) in projects.projects" :key="i">
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
                                                    <th class="th-1">Frontend</th>
                                                    <th class="th-2">Backend</th>
                                                    <th class="th-3">Banco de dados</th>
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
                                    <i class="pi pi-github icon-github mr-3" v-tooltip.top="`Clique para ir ao GitHub do projeto`" v-if="project.repositoryGitHub"></i>
                                </a>
                                <a :href="`${project.link}`" target="_blank">
                                    <i class="pi pi-globe icon-globe" v-tooltip.top="`Clique para ir ao site hospedado`" v-if="project.link"></i>
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
            projects: {
                "title": "Projetos",
                "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In faucibus nibh urna, maximus molestie felis laoreet ut. Proin aliquam interdum lectus. Aenean urna lacus, consectetur sit amet posuere id, suscipit congue purus.",
                "projects": [
                    {
                        "title": "WorldBooks",
                        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In faucibus nibh urna, maximus molestie felis laoreet ut. Proin aliquam interdum lectus. Aenean urna lacus, consectetur sit amet posuere id, suscipit congue purus. Duis nisl leo, convallis sed mi eget, auctor facilisis ante. Maecenas in nulla ac massa suscipit pretium sed vel magna. Mauris in sem risus.",
                        "screenshot": "assets/images/screenshots/wb_desktop_login_screenshot.jpg",
                        "ferramentas": {
                            "frontend": "Quasar JS",
                            "backend": "Laravel",
                            "database": "MySQL"
                        },
                        "link": "https://worldbooks.serratedevs.com.br/#/",
                        "repositoryGitHub": "https://github.com/brunoserrate/worldsbook",
                        "typeImage": 1,
                        "width": 95,
                        "width_md": 100
                    },
                    {
                        "title": "WorldBooks Mobile",
                        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In faucibus nibh urna, maximus molestie felis laoreet ut. Proin aliquam interdum lectus. Aenean urna lacus, consectetur sit amet posuere id, suscipit congue purus. Duis nisl leo, convallis sed mi eget, auctor facilisis ante. Maecenas in nulla ac massa suscipit pretium sed vel magna. Mauris in sem risus.",
                        "screenshot": "assets/images/screenshots/wb_mobile_login_screenshot.jpg",
                        "ferramentas": {
                            "frontend": "Flutter",
                            "backend": "Laravel",
                            "database": "MySQL"
                        },
                        "link": "",
                        "repositoryGitHub": "https://github.com/LAISRCROFT/wb-flutter-v1",
                        "typeImage": 2,
                        "width": 70,
                        "width_md": 50
                    }
                ]
            }
        };
    },
    mounted() {
        
    },
    async created() {
        // eventBus.$on('att-idioma', async(option) => {
        //     this.selectedOption = option;
        //     setTimeout(() => {
                
        //     }, 500)
        // });
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