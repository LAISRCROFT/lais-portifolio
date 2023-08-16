<template>
    <div class="education">
        <div class="row mb-5">
            <div class="col-12">
                <h2 class="h2-title">{{ i18n.title }}</h2>
            </div>
        </div>
        <div class="row flex align-items-center justify-content-center">
            <div class="col-12 col-md-8 flex align-items-center justify-content-center">
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
                            </template>
                            <template #subtitle>
                                {{ slotProps.item.curso }} <br />
                                {{slotProps.item.data_inicial}} - {{slotProps.item.data_final}}
                            </template>
                            <template #content>
                                <!-- <img v-if="slotProps.item.image" :src="'demo/images/product/' + slotProps.item.image" :alt="slotProps.item.name" width="200" class="shadow-2" /> -->
                                <p>
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
            this.formacoes = [
                {
                    "title": "ETEC de Sapopemba", 
                    "data_inicial": "02/2018", 
                    "data_final": "06/2019", 
                    "curso": "Computer Technician", 
                    "icon": "pi pi-circle-on", 
                    "color": "#7576b1",
                    "descricao": "I graduated as a Computer Technician at the ETEC Technical School in Sapopemba. I learned several areas of computing, from hardware (computer assembly, networks and infrastructure) to software (web and desktop programming, databases and mobile applications"
                },
                {
                    "title": "SAGA", 
                    "data_inicial": "09/2019", 
                    "data_final": "10/2019", 
                    "curso": "Unreal Engine Workshop", 
                    "icon": "pi pi-circle-on", 
                    "color": "#7576b1",
                    "descricao": "I was curious to understand how the game design part works and I did a workshop on the SAGA art school and I really liked how the creation and development of games works through the Unreal Engine platform."
                },
                {
                    "title": "UNINOVE", 
                    "data_inicial": "02/2021", 
                    "data_final": "12/2024", 
                    "curso": "Bachelor's Degree in Computer Science", 
                    "icon": "pi pi-circle-on", "color": "#7576b1", 
                    "image": "game-controller.jpg",
                    "descricao": "I decided to start college in the computing area and pursue a professional career in IT. I'm developing and improving skills in infrastructure, but mainly programming."
                },
                {
                    "title": "CISCO Academy", 
                    "data_inicial": "02/2021", 
                    "data_final": "06/2021", 
                    "curso": "Network Essencials Computer network", 
                    "icon": "pi pi-circle-on", "color": "#7576b1", 
                    "image": "game-controller.jpg",
                    "descricao": "In one of the semesters at UNINOVE, I took a course on Computer Networks at the CISCO Academy, which added knowledge in networks and helped me with the support where I worked at the time."
                },
                {
                    "title": "CISCO Academy", 
                    "data_inicial": "08/2022", 
                    "data_final": "12/2022", 
                    "curso": "Cybersecurity Essecials", 
                    "icon": "pi pi-circle-on", "color": "#7576b1", 
                    "image": "game-controller.jpg",
                    "descricao": "In one of the semesters at UNINOVE, I took a course on Information Security at the CISCO academy, which helped me to be more aware of systems security and to apply what I had learned in the development of my projects."
                }
            ]

            eventBus.$on('att-idioma', async(option) => {
                this.selectedOption = option;
                setTimeout(() => {
                    console.log("education: ", this.$i18n.education)
                    this.i18n = this.$i18n.education
                    this.formacoes = this.$i18n.education.formacoes
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