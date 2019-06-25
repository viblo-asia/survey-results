require('dotenv').config()

export default {
    mode: 'universal',

    env: {
        baseUrl: process.env.API_HOST || 'https://viblo.asia',
        IMAGES_URL: process.env.IMAGES_URL || 'https://images.viblo.asia'
    },

    /*
     ** Headers of the page
     */
    head: {
        title: 'Technical Survey Results | Viblo',

        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: 'Viblo Teachnical Survey Results 2019' }
        ],

        link: [
            {
                rel: 'icon',
                type: 'image/x-icon',
                href: 'https://viblo.asia/favicon.ico'
            }
        ]
    },

    /*
     ** Customize the progress-bar color
     */
    loading: { color: '#fff' },

    /*
     ** Global CSS
     */
    css: ['~/assets/sass/app.scss'],

    /*
     ** Plugins to load before mounting the App
     */
    plugins: [],

    /*
     ** Nuxt.js modules
     */
    modules: ['vue-scrollto/nuxt'],

    /*
     ** Build configuration
     */
    build: {
        transpile: [/^element-ui/],
    },

    router: {
        base: process.env.PUBLIC_PATH || '/survey-results/',
    },

    server: {
        host: process.env.HOST || '0.0.0.0',
        port: process.env.PORT || 3000
    },
}
