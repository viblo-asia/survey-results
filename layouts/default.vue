<template>
    <div class="app">
        <header class="app-header header">
            <Hero />
        </header>

        <div class="app-container container-fluid">
            <nuxt />
        </div>

        <Footer class="container-fluid" />
    </div>
</template>

<script>
    import Hero from '~/components/Header/Hero.vue'
    import Footer from '~/components/Site/Footer.vue'

    export default {
        components: {
            Hero,
            Footer,
        }
    }
</script>
