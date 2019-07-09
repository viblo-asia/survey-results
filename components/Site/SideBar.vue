<template>
    <div class="sidebar">
        <div class="sidebar__logo">
            <img src="~assets/images/logo.png" alt="Logo">
        </div>

        <ul id="main-menu" class="sidebar__path">
            <li>
                <a v-scroll-to="'#overview'" href="#overview" class="menu-item">Overview</a>
            </li>
            <li>
                <a v-scroll-to="'#products'" href="#products" class="menu-item">Products</a>
                <ul class="sidebar__path-answer">
                    <li v-for="(answer, index) in answers" :key="index">
                        <a
                            v-scroll-to="`#survey-${answer.id}`"
                            :href="`#survey-${answer.id}`"
                            class="menu-item"
                        >{{ answer.product_name }}</a>
                    </li>
                </ul>
            </li>
        </ul>
    </div>
</template>

<script>
    import _lowerCase from "lodash/lowerCase"
    import _keys from "lodash/keys"
    import _get from "lodash/get"
    import scrollSpy from "simple-scrollspy"
    import VueScrollTo from 'vue-scrollto'

    export default {
        props: {
            answers: {
                type: Array,
                required: true
            }
        },

        mounted() {
            if(this.$route.hash !== "") {
                VueScrollTo.scrollTo(this.$route.hash, 0, {})
            }
            
            if (process.browser) {
                if (window.attachEvent) {
                    window.attachEvent("onload", this.init())
                } else if (window.addEventListener) {
                    window.addEventListener("load", this.init(), false)
                } else {
                    document.addEventListener("load", this.init(), false)
                }
            }
        },

        destroyed() {
            if (process.browser) {
                window.onload = null
            }
        },

        methods: {
            init() {
                scrollSpy("#main-menu", {
                    sectionClass: ".scrollspy",
                    menuActiveTarget: ".menu-item",
                    offset: -300
                })
            }
        }
    }
</script>

<style lang="scss">
    @import "~assets/sass/variables/color";

    .sidebar {
        padding: 10px 0;

        &__logo {
            max-width: 120px;
            margin: 10px auto;

            img {
                width: 100%;
            }
        }

        &__path {
            &::before {
                border-top: 3px solid $gray-200;
                content: "";
                display: block;
                padding: 3px 0;
                margin: 3px 0;
            }

            li {
                width: 100%;
                a {
                    display: block;
                    color: $black;
                    text-transform: capitalize;
                    padding: 2px 15px 0;
                    border-right: 2px solid $white;
                    width: 100%;
                }
            }

            &-answer {
                margin-left: 20px;
            }

            .active {
                border-right: 2px solid $blue;
                font-weight: bold;
                background: $gray-100;
            }
        }
    }
</style>
