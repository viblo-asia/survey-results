<template>
    <footer class="footer app-footer">
        <div class="row">
            <div class="footer__copyright text-center h-100">
                © {{ dateYear }} Viblo. All rights reserved.
            </div>
        </div>
    </footer>
</template>

<script>
    export default {
        data() {
            const dateYear = new Date().getFullYear()

            return {
                dateYear
            }
        }
    }
</script>

<style lang="scss">
    .footer {
        &__copyright {
            font-size: 1.2rem;
        }
    }
</style>
