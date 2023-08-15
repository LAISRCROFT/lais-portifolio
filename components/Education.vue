<template>
    <div class="education">
        <div class="row mb-5">
            <div class="col-12">
                <h2 class="h2-title">FORMAÇÃO</h2>
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
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt
                                    quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!</p>
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
                formacoes: [
                    {title: 'ETEC de Sapopemba', data_inicial: '02/2018', data_final: '06/2019', curso: 'Informática', icon: 'pi pi-circle-on', color: '#7576b1', image: 'game-controller.jpg'},
                    {title: 'SAGA', data_inicial: '09/2019', data_final: '10/2019', curso: 'Oficina Unreal Engine', icon: 'pi pi-circle-on', color: '#7576b1', image: 'game-controller.jpg'},
                    {title: 'UNINOVE', data_inicial: '02/2021', data_final: '12/2024', curso: 'Ciência da Computação', icon: 'pi pi-circle-on', color: '#7576b1', image: 'game-controller.jpg'},
                    {title: 'CISCO Academy', data_inicial: '02/2021', data_final: '06/2021', curso: 'Network Essencials Redes de Computadores', icon: 'pi pi-circle-on', color: '#7576b1', image: 'game-controller.jpg'},
                    {title: 'CISCO Academy', data_inicial: '08/2022', data_final: '12/2022', curso: 'Cybersecurity Essecials', icon: 'pi pi-circle-on', color: '#7576b1', image: 'game-controller.jpg'},
                ],
                events2: [
                    "2020", "2021", "2022", "2023"
                ]
            }
        },
        async created() {
            
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