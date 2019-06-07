<template>
    <div class="sidebar">
        <div class="sidebar__logo">
            <img src="~/static/logo.png" alt="Logo">
        </div>

        <no-ssr>
            <ul>
                <li
                    v-for="(path,index) in sideBarPath"
                    :key="index"
                    :class="{'active': active(path)} "
                >
                    <a v-scroll-to="scroll(path)" href="#">{{ answerTitle(path) }}</a>
                </li>
            </ul>
        </no-ssr>
    </div>
</template>

<script>
    import _lowerCase from "lodash/lowerCase"
    import _keys from "lodash/keys"
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
            let answerPath = this.answers.map(o => o.name)
            const customPath = ["overview"]
            const sideBarPath = [customPath, ...answerPath]

            return {
                sideBarPath
            }
        },

        methods: {
            answerTitle(name) {
                return _lowerCase(name)
            },
            active(path) {
                return this.$route.hash === `#${path}`
            }
        }
    }
</script>

<style lang="scss">
    .sidebar {
        padding: 10px 0;

        &__logo {
            max-width: 120px;
            margin: 10px auto;

            img {
                width: 100%;
            }
        }

        ul {
            &::before {
                border-top: 1px solid #d2d3d4;
                content: "";
                display: block;
                padding: 3px 0;
                margin: 3px 0;
            }

            li {
                a {
                    color: black;
                    text-transform: capitalize;
                    font-weight: 500;
                }
                margin-left: 10px;
            }

            .active {
                a {
                    color: red;
                }
            }
        }
    }
</style>
