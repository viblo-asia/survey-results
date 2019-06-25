<template>
    <div class="hero">
        <div class="hero__logo">
            <a href="https://viblo.asia">
                <img src="~assets/images/logo--dark.png" alt="Logo">
            </a>
        </div>

        <div lass="hero__content">
            <span class="hero__content-title">Technical Survey Results</span>
            <br>
            <span class="hero__content-year">2019</span>
        </div>
    </div>
</template>


<style lang="scss">
    .hero {
        text-align: center;

        &__logo {
            max-width: 200px;
            margin: 0 auto;

            img {
                width: 100%;
            }
        }

        &__content {
            &-title {
                font-size: 2rem;
                letter-spacing: 1px;
            }
            &-year {
                font-size: 2.5rem;
            }
        }
    }
</style>
