<template>
    <div class="app">
        <header class="app-header header">
            <Hero />
        </header>

        <div class="app-container container-fluid">
            <div class="row">
                <Main :answers="answers" class="app-main col" />

                <div class="app-sidebar col-md-3 d-none d-md-block">
                    <SideBar :answers="answers" class="menu sticky-top" />
                </div>
            </div>
        </div>

        <footer class="app-footer container-fluid">
            <Footer />
        </footer>
    </div>
</template>

<script>
    import axios from "~/plugins/axios"
    import Hero from "~/components/Header/Hero.vue"
    import SideBar from "~/components/Site/SideBar.vue"
    import Footer from "~/components/Site/Footer.vue"
    import Main from "~/components/Site/Main.vue"

    export default {
        components: {
            Hero,
            Footer,
            Main,
            SideBar
        },

        data: () => ({
            answers: [],
        }),

        async asyncData() {
            try {
                const { data } = await axios.get('/api/survey')
                return { answers: data.data }
            } catch(e) {
                return { answers: [] }
            }
        }
    }
</script>

<style lang="scss">
    .app {
        &-header {
            background: #7474bf; /* fallback for old browsers */
            background: -webkit-linear-gradient(
                to right,
                #348ac7,
                #7474bf
            ); /* Chrome 10-25, Safari 5.1-6 */
            background: linear-gradient(
                to right,
                #348ac7,
                #7474bf
            ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

            min-height: 300px;
            color: #fff;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        &-main {
            margin: 20px auto;
        }

        &-footer {
            background-color: rgb(241, 245, 250);
            min-height: 100px;
            display: flex;
            align-items: center;
            justify-content: center;
        }
    }
</style>
