<template>
    <div class="product-info">
        <div class="product-info__header" v-bind:style = "{ 'background-image' : 'url(' + (imageUrl(product.banner_image) || imageUrl(product.company_logo)) + ')'}">
        </div>

        <div class="product-info__body">
            <div class="product-info__content">
                <div class="product-info__content-side" v-bind:style = "{ 'background-image': 'url(' + imageUrl(product.company_logo) + ')'}">
                </div>

                <div class="product-info__content-main">
                    <div class="product-info__product-name">
                        {{ product.product_name }}
                    </div>

                    <div class="product-info__company-name">
                        {{ product.company_name }}
                    </div>

                    <div class="product-info__company-url">
                        <a
                            :href="product.company_url"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {{ product.company_url }}
                        </a>
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
            product: {
                type: Object,
                default: () => ({})
            }
        },

        methods: {
            imageUrl(imageItem) {
                return imageItem ? image(imageItem) : ""
            }
        },
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
        box-shadow: 1px 2px 8px 3px rgba(0,0,0,0.2);
        -moz-box-shadow: 1px 2px 8px 3px rgba(0,0,0,0.2);
        -webkit-box-shadow: 1px 2px 8px 3px rgba(0,0,0,0.2);
        box-shadow: 1px 2px 8px 3px rgba(0,0,0,0.2);
        -webkit-border-radius: 5px;
        -moz-border-radius: 5px;
        border-radius: 5px;
        &__header {
            height: 115px;
            width: auto;
            background-repeat: no-repeat;
            background-size: cover;
            background-position: center;
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
                width: 96px;
                height: 96px;
                overflow: hidden;
                border: 1px solid #fff;
                background-repeat: no-repeat;
                background-size: contain;
                background-position: center;
                float: left;
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
