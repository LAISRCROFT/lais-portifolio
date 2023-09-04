<template>
    <div :class="{'contacts': !isDarkMode, 'contacts_dark': isDarkMode}">
        <!-- <div class="row mb-5">
            <div class="col-12">
                <h2 class="h2-title">{{ i18n.title }}</h2>
            </div>
        </div> -->
        <div class="row align-items-center mb-5 div-contacts">
            <div class="col-10 offset-1 col-xxl-8 offset-xxl-2 div-text mb-5">
                <p class="text-center">{{ i18n.description }}</p>
            </div>
            <div class="mt-5 offset-2 col-8 col-icones">
                <div class="row d-flex justify-content-center">
                    <div class="col-5 col-sm-4 col-md-3 mb-5 text-center d-flex justify-content-center" v-for="(contact, i) in contacts" :key="i" >
                        <!-- <img :src="require(`@/${contact.image}`)" class="icons-social-media" v-tooltip.top="`${contact.label}`"/> -->
                        <a :href="`${contact.link}`" target="_blank" v-tooltip.top="`${contact.label}`">
                            <svg
                                class="icons-social-media"
                                v-html="contact.svg"
                            ></svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div class="row align-items-center footer">
            <div class="col-12 text-center">
                <span class="text"><span>©</span> LaísRCroft (Dama) - 2023</span>
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
            isDarkMode: false,
            linearGradientLight: `<linearGradient id="myGradient" x1="0" y1="0" x2="1" y2="1">
                                        <stop offset="0%" stop-color="#562e75" />
                                        <stop offset="100%" stop-color="#6e6edb" />
                                    </linearGradient>`,
            linearGradientDark: `<linearGradient id="myGradientDark" x1="0" y1="0" x2="1" y2="1">
                                        <stop offset="0%" stop-color="#6b6bba" />
                                        <stop offset="100%" stop-color="#9797be" />
                                    </linearGradient>`,
            // contacts: []
        };
    },
    mounted() {
        
    },
    async created() {
        this.i18n = this.$i18n.contacts
        eventBus.$on('att-idioma', async(option) => {
            this.selectedOption = option;
            setTimeout(() => {
                this.i18n = this.$i18n.contacts
            }, 500)
        });
        eventBus.$on('att-darkmode', async (option) => {
            setTimeout(async() => {
                this.isDarkMode = option
                // await this.alterSVGColor()
            }, 500);
        });
    },
    computed: {
        linearGradient() {
            return this.isDarkMode ? this.linearGradientDark : this.linearGradientLight;
        },
        contacts() {
            return [
                {
                    "label": "Github",
                    "link": "https://github.com/LAISRCROFT",
                    "image": `assets/images/icons_social_media/github.svg`,
                    "svg": `<svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24">
                                <defs>
                                    ${this.linearGradient}
                                </defs>
                                <path fill="url(${this.isDarkMode ? '#myGradientDark' : '#myGradient'})" d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                            </svg>`
                },
                {
                    "label": "Facebook",
                    "link": "https://m.facebook.com/lais.rcroft/",
                    "image": `assets/images/icons_social_media/facebook.svg`,
                    "svg": `<svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24">
                                <defs>
                                    ${this.linearGradient}
                                </defs>
                                <path fill="url(${this.isDarkMode ? '#myGradientDark' : '#myGradient'})" d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/>
                            </svg>`
                },
                {
                    "label": "Instagram",
                    "link": "https://instagram.com/damarts_lrc?utm_source=qr&igshid=ZDc4ODBmNjlmNQ==",
                    "image": `assets/images/icons_social_media/instagram.svg`,
                    "svg": `<svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24">
                                <defs>
                                    ${this.linearGradient}
                                </defs>
                                <path fill="url(${this.isDarkMode ? '#myGradientDark' : '#myGradient'})" d="M15.233 5.488c-.843-.038-1.097-.046-3.233-.046s-2.389.008-3.232.046c-2.17.099-3.181 1.127-3.279 3.279-.039.844-.048 1.097-.048 3.233s.009 2.389.047 3.233c.099 2.148 1.106 3.18 3.279 3.279.843.038 1.097.047 3.233.047 2.137 0 2.39-.008 3.233-.046 2.17-.099 3.18-1.129 3.279-3.279.038-.844.046-1.097.046-3.233s-.008-2.389-.046-3.232c-.099-2.153-1.111-3.182-3.279-3.281zm-3.233 10.62c-2.269 0-4.108-1.839-4.108-4.108 0-2.269 1.84-4.108 4.108-4.108s4.108 1.839 4.108 4.108c0 2.269-1.839 4.108-4.108 4.108zm4.271-7.418c-.53 0-.96-.43-.96-.96s.43-.96.96-.96.96.43.96.96-.43.96-.96.96zm-1.604 3.31c0 1.473-1.194 2.667-2.667 2.667s-2.667-1.194-2.667-2.667c0-1.473 1.194-2.667 2.667-2.667s2.667 1.194 2.667 2.667zm4.333-12h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm.952 15.298c-.132 2.909-1.751 4.521-4.653 4.654-.854.039-1.126.048-3.299.048s-2.444-.009-3.298-.048c-2.908-.133-4.52-1.748-4.654-4.654-.039-.853-.048-1.125-.048-3.298 0-2.172.009-2.445.048-3.298.134-2.908 1.748-4.521 4.654-4.653.854-.04 1.125-.049 3.298-.049s2.445.009 3.299.048c2.908.133 4.523 1.751 4.653 4.653.039.854.048 1.127.048 3.299 0 2.173-.009 2.445-.048 3.298z"/>
                            </svg>`
                },
                {
                    "label": "LinkeIn",
                    "link": "https://www.linkedin.com/in/la%C3%ADs-assis-495a05215/",
                    "image": `assets/images/icons_social_media/linkedin.svg`,
                    "svg": `<svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 64 64">
                                <defs>
                                    ${this.linearGradient}
                                </defs>
                                <path fill="url(${this.isDarkMode ? '#myGradientDark' : '#myGradient'})" d="M48,8H16c-4.418,0-8,3.582-8,8v32c0,4.418,3.582,8,8,8h32c4.418,0,8-3.582,8-8V16C56,11.582,52.418,8,48,8z M24,47h-5V27h5 V47z M24.029,23.009C23.382,23.669,22.538,24,21.5,24c-1.026,0-1.865-0.341-2.519-1.023S18,21.458,18,20.468 c0-1.02,0.327-1.852,0.981-2.498C19.635,17.323,20.474,17,21.5,17c1.038,0,1.882,0.323,2.529,0.969 C24.676,18.615,25,19.448,25,20.468C25,21.502,24.676,22.349,24.029,23.009z M47,47h-5V35.887C42,32.788,40.214,31,38,31 c-1.067,0-2.274,0.648-2.965,1.469S34,34.331,34,35.594V47h-5V27h5v3.164h0.078c1.472-2.435,3.613-3.644,6.426-3.652 C44.5,26.5,47,29.5,47,34.754V47z"/>
                            </svg>`
                },
                {
                    "label": "Twitter",
                    "link": "https://twitter.com/_damarts",
                    "image": `assets/images/icons_social_media/twitter.svg`,
                    "svg": `<svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 50 50">
                                <defs>
                                    ${this.linearGradient}
                                </defs>
                                <path fill="url(${this.isDarkMode ? '#myGradientDark' : '#myGradient'})" d="M 50.0625 10.4375 C 48.214844 11.257813 46.234375 11.808594 44.152344 12.058594 C 46.277344 10.785156 47.910156 8.769531 48.675781 6.371094 C 46.691406 7.546875 44.484375 8.402344 42.144531 8.863281 C 40.269531 6.863281 37.597656 5.617188 34.640625 5.617188 C 28.960938 5.617188 24.355469 10.21875 24.355469 15.898438 C 24.355469 16.703125 24.449219 17.488281 24.625 18.242188 C 16.078125 17.8125 8.503906 13.71875 3.429688 7.496094 C 2.542969 9.019531 2.039063 10.785156 2.039063 12.667969 C 2.039063 16.234375 3.851563 19.382813 6.613281 21.230469 C 4.925781 21.175781 3.339844 20.710938 1.953125 19.941406 C 1.953125 19.984375 1.953125 20.027344 1.953125 20.070313 C 1.953125 25.054688 5.5 29.207031 10.199219 30.15625 C 9.339844 30.390625 8.429688 30.515625 7.492188 30.515625 C 6.828125 30.515625 6.183594 30.453125 5.554688 30.328125 C 6.867188 34.410156 10.664063 37.390625 15.160156 37.472656 C 11.644531 40.230469 7.210938 41.871094 2.390625 41.871094 C 1.558594 41.871094 0.742188 41.824219 -0.0585938 41.726563 C 4.488281 44.648438 9.894531 46.347656 15.703125 46.347656 C 34.617188 46.347656 44.960938 30.679688 44.960938 17.09375 C 44.960938 16.648438 44.949219 16.199219 44.933594 15.761719 C 46.941406 14.3125 48.683594 12.5 50.0625 10.4375 Z"/>
                            </svg>`
                },
                {
                    "label": "Wattpad",
                    "link": "https://www.wattpad.com/user/LaisRCroft",
                    "image": `assets/images/icons_social_media/wattpad.svg`,
                    "svg": `<svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 50 50">
                                <defs>
                                    ${this.linearGradient}
                                </defs>
                                <path fill="url(${this.isDarkMode ? '#myGradientDark' : '#myGradient'})" d="M49.88,11.175c-0.22-1.285-1.246-2.388-2.572-2.798c-4.247-1.524-9.962,4.233-13.024,7.864	c0.123-5.312-1.993-7.514-3.432-8.395c-2.394-1.463-5.587-1.021-8.561,1.191c-2.643,2.033-5.454,5.558-7.667,8.852	c0.108-2.815-0.156-5.735-1.759-7.598c-1.244-1.444-3.31-2.188-5.392-1.944c-2.292,0.269-4.247,1.664-5.377,3.849l-0.131,0.268	c-0.267,0.538-0.567,1.144-0.721,1.828C-0.433,18.8-0.934,32.018,2.764,39.288c1.411,2.774,3.302,4.499,5.687,5.142	c0.721,0.144,1.395,0.211,2.028,0.211c5.527,0,7.917-5.171,10.431-10.611c0.489-1.059,0.986-2.134,1.517-3.204	c0.531,6.2,3.686,8.288,5.205,8.939c2.778,1.187,5.989,0.37,8.145-2.038c1.216-1.195,2.174-3.165,3.5-5.891	c1.223-2.514,2.743-5.642,5.051-9.403c1.164-1.896,2.176-3.383,2.989-4.577C49.303,14.937,50.398,13.329,49.88,11.175z"/>
                            </svg>`
                },
                {
                    "label": "DeviantART",
                    "link": "https://www.deviantart.com/laisrcroft/gallery",
                    "image": `assets/images/icons_social_media/deviantart.svg`,
                    "svg": `<svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24">
                                <defs>
                                    ${this.linearGradient}
                                </defs>
                                <path fill="url(${this.isDarkMode ? '#myGradientDark' : '#myGradient'})" d="M20 4.364v-4.364h-4.364l-.435.439-2.179 4.124-.647.437h-7.375v6h4.103l.359.404-4.462 8.232v4.364h4.509l.435-.439 2.174-4.124.648-.437h7.234v-6h-3.938l-.359-.438z"/>
                            </svg>`
                },
            ]
        }
    },
    methods: {
        async alterSVGColor() {
            
        },
    },
    watch: {
        
    }
};
</script>
<style lang="scss">
@import '~/assets/scss/components/Contacts.scss';
@import '~/assets/scss/DarkMode/components/Contacts.scss';

</style>