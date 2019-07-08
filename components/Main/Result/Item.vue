<template>
    <section>
        <div class="result-item__product-name">
            <VPopover trigger="hover" :delay="{ show: 200, hide: 300 }">
                <a :href="product.product_url" target="_blank">
                    <span>{{ product.product_name }}</span>
                </a>

                <Info slot="popover" :product="product" />
            </VPopover>
        </div>

        <blockquote class="result-item__product-description blockquote">
            <p>
                {{ product.product_description }}
            </p>
        </blockquote>

        <div class="result-item__product-answer">
            <table class="table table-bordered table-striped">
                <tbody>
                    <tr v-for="(answer, index) in filtedAnswers" :key="index">
                        <td class="w-25">
                            {{ formatQuestionName(answer.question) }}
                        </td>
                        <td v-if="answer.question === 'product_url'">
                            <a :href="answer.content" target="_blank">
                                {{ answer.content }}
                            </a>
                        </td>
                        <td v-else>
                            {{ formatAnswer(answer.content) }}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </section>
</template>

<script>
    import _transform from 'lodash/transform'
    import _filter from 'lodash/filter'
    import _includes from 'lodash/includes'
    import _startCase from "lodash/startCase"
    import _findIndex from "lodash/findIndex"
    import { VPopover } from "v-tooltip"
    import { findContentOfQuestion } from "~/libs/utils"
    import Info from "./Info.vue"

    const productInfoFields = [
        "product_name",
        "product_url",
        "product_description",
        "company_name",
        "company_url",
        "banner_image",
        "company_logo"
    ]

    export default {
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
                return _filter(this.answers, answer => {
                    return _includes(['product_name', 'product_url'], answer.question)
                        || !_includes(productInfoFields, answer.question)
                })
            },

            product() {
                const data = _filter(this.answers, answer => _includes(productInfoFields, answer.question))
                const info = _transform(data, (info, item) => {
                    info[item.question] = item.content
                    return info
                }, {})

                return info
            },
        },

        methods: {
            formatQuestionName(text) {
                return _startCase(text)
            },

            formatAnswer(text) {
                return text.split(",").join(", ")
            },

            imageUrl(imageItem) {
                return imageItem ? image(imageItem) : ""
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
