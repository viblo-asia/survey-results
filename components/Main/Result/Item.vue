<template>
    <div :id="formatScrollableId(productName)" class="result-item">
        <div class="result-item__product-name">
            <VPopover trigger="hover" :delay="{ show: 200, hide: 300 }">
                <a :href="productUrl" target="_blank">{{ productName }}</a>

                <template slot="popover">
                    <Info :answers="productSideInfo" />
                </template>
            </VPopover>
        </div>
        <blockquote class="result-item__product-description blockquote">
            <p>{{ productDescription }}</p>
        </blockquote>

        <div class="result-item__product-answer">
            <table class="table table-bordered table-striped">
                <tbody>
                    <tr v-for="(answer, index) in filtedAnswers" :key="index">
                        <td>{{ formatQuestionName(answer.question) }}</td>
                        <td>{{ formatAnswer(answer.content) }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
    import _filter from 'lodash/filter'
    import _includes from 'lodash/includes'
    import _startCase from "lodash/startCase"
    import _findIndex from "lodash/findIndex"
    import scroll from "~/mixins/scroll"
    import { VPopover } from "v-tooltip"
    import { findContentOfQuestion } from "~/libs/utils"
    import Info from "./Info.vue"

    const filtedQuestion = [
        "product_name",
        "product_url",
        "product_description",
        "company_name",
    ]

    const filtedQuestionFull = [
        "product_name",
        "product_url",
        "product_description",
        "banner_image",
        "company_name",
        "company_url",
        "company_logo"
    ]

    export default {
        mixins: [scroll],

        components: {
            VPopover,
            Info,
        },

        props: {
            item: {
                required: true,
                type: Object
            }
        },

        data() {
            return {
                answers: this.item.answers.data
            }
        },

        computed: {
            filtedAnswers() {
                return _filter(this.answers, item => _includes(filtedQuestion, item.question))
            },

            productSideInfo() {
                return _filter(this.answers, item => _includes(filtedQuestionFull, item.question))
            },

            productDescription() {
                return findContentOfQuestion(this.answers, "product_description")
            },

            productName() {
                return findContentOfQuestion(this.answers, "product_name")
            },

            productUrl() {
                return findContentOfQuestion(this.answers, "product_url")
            }
        },

        methods: {
            formatQuestionName(text) {
                return _startCase(text)
            },

            formatAnswer(text) {
                return text.split(",").join(", ")
            }
        }
    }
</script>


<style lang="scss">
    .result-item {
        &__product {
            &-name {
                border-bottom: 5px solid #dddddd;
                padding: 10px 30px;
                margin-bottom: 20px;
                a {
                    display: block;
                    text-transform: capitalize;
                    font-size: 1.3rem;
                    font-weight: 500;
                }
            }
            &-answer {
                padding: 10px;
            }

            &-description {
                padding: 25px;
                background-color: #f6f6f6;
                font-size: 1rem;
            }
        }
    }
</style>
