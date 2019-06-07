<template>
    <div class="col-md-9 footer">
        <div class="row w-100">
            <div class="footer__logo">
                <a href="https://viblo.asia">
                    <img src="~/static/logo.png" alt="Logo">
                </a>
            </div>
        </div>
        <div class="row w-100">
            <div
                class="col footer__copyright text-center"
            >
                © {{ dateYear }} Viblo. All rights reserved.
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            const date = new Date()
            const dateYear = date.getFullYear()

            return {
                dateYear
            }
        }
    }
</script>


<style lang="scss">
    .footer {
        margin: 0 auto;
        padding: 20px 0;
        &__logo {
            width: 100px;
            margin-left: 20px;

            img {
                width: 100%;
            }
        }

        &__copyright {
            margin: 0 auto;
        }
    }
</style>
