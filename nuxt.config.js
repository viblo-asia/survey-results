import pkg from './package'

require('dotenv').config()

export default {
    mode: 'universal',

    env: {
        baseUrl: process.env.API_HOST || 'https://viblo.asia'
    },
    /*
     ** Headers of the page
     */
    head: {
        title: 'Viblo Technical Stack Survey',

        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: pkg.description }
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

        /*
         ** You can extend webpack config here
         */
        extend(config, ctx) {}
    }
}
