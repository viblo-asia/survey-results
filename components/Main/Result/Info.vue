<template>
    <div class="product-info">
        <div class="product-info__header">
            <img :src="productLogo" alt="Product Logo">
        </div>

        <div class="product-info__body">
            <div class="product-info__content">
                <div class="product-info__content-side">
                    <img :src="companyLogo" alt="Company Logo">
                </div>
                <div class="product-info__content-main">
                    <div class="product-info__product-name">
                        {{ productName }}
                    </div>

                    <div class="product-info__company-name">
                        {{ companyName }}
                    </div>
                    <div class="product-info__company-url">
                        <a
                            :href=" companyUrl "
                            target="_blank"
                            rel="noopener noreferrer"
                        >{{ companyUrl }}</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
    import { image } from "~/libs/utils"
    import { findContentOfQuestion } from "~/libs/utils"

    export default {
        props: {
            answers: {
                type: Array
            }
        },

        data() {
            return {
                env: process.env.baseUrl
            }
        },
        computed: {
            productName() {
                return findContentOfQuestion(this.answers, "product_name")
            },
            productLogo() {
                return this.imageUrl(
                    findContentOfQuestion(this.answers, "banner_image")
                )
            },
            companyName() {
                return findContentOfQuestion(this.answers, "company_name")
            },
            companyLogo() {
                return this.imageUrl(
                    findContentOfQuestion(this.answers, "company_logo")
                )
            },
            companyUrl() {
                return findContentOfQuestion(this.answers, "company_url")
            }
        },

        methods: {
            imageUrl(imageItem) {
                return imageItem ? image(imageItem) : ""
            }
        }
    }
</script>


<style lang="scss">
    @import "~assets/sass/variables/color";
    .product-info {
        max-width: 400px;
        min-height: 220px;
        background-color: #fff;
        z-index: 9999;
        position: relative;
        -moz-box-shadow: 3px 3px 5px 6px #ccc;
        -webkit-box-shadow: 3px 3px 5px 6px #ccc;
        box-shadow: 3px 3px 5px 6px #ccc;
        -webkit-border-radius: 5px;
        -moz-border-radius: 5px;
        border-radius: 5px;
        &__header {
            height: 115px;
            width: 100%;
            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
                object-position: center;
            }
        }
        &__body {
            display: flex;
            align-items: center;
        }
        &__content {
            width: 100%;
            padding: 10px;
            display: inline-block;
            &-side {
                width: 75px;
                height: 75px;
                overflow: hidden;
                border: 1px solid #fff;
                border-radius: 50%;
                float: left;
                img {
                    height: 100%;
                    width: 100%;
                    object-fit: cover;
                    object-position: center;
                }
            }
            &-main {
                width: 265px;
                float: left;
                margin-left: 15px;
                word-wrap: break-word;
            }
        }

        &__product-name {
            font-weight: bold;
            font-size: 1.2rem;
        }
    }
</style>
