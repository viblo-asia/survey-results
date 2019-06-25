<template>
    <div class="sidebar">
        <div class="sidebar__logo">
            <img src="~assets/images/logo.png" alt="Logo">
        </div>

        <ul class="sidebar__path">
            <li v-for="(path,index) in defaultPath" :key="index">
                <a
                    v-scroll-to="scroll(path)"
                    :class="{'active': active(path) }"
                    href="#"
                >{{ answerTitle(path) }}</a>

                <ul v-if="path ==='products'" class="sidebar__path-answer">
                    <li v-for="(answerPath,answerPathIndex) in answersPath" :key="answerPathIndex">
                        <a
                            v-scroll-to="scroll(answerPath)"
                            :class="{'active': (active(answerPath) || (currentRouteHash === '#products' && answerPathIndex === 0)) }"
                            href="#"
                        >{{ answerTitle(answerPath) }}</a>
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
    import scroll from "~/mixins/scroll"

    export default {
        mixins: [scroll],

        props: {
            answers: {
                type: Array,
                required: true
            }
        },

        data() {
            const answersPath = this.answers.map(
                o => o.answers.data.find(i => i.question == "product_name").content
            )
            const defaultPath = ["overview", "products"]

            return {
                defaultPath,
                answersPath
            }
        },
        computed: {
            currentRouteHash() {
                return this.$route.hash
            }
        },
        methods: {
            answerTitle(name) {
                return _lowerCase(name)
            },

            active(name) {
                const path = this.formatScrollableId(name)

                return this.currentRouteHash === `#${path}`
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
