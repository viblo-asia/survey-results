<template>
    <div>
        <section>
            <OverView />
        </section>

        <section v-for="answer in answers" :key="answer.name">
            <ResultItem :answer="answer" />
        </section>
    </div>
</template>

<script>
    import OverView from "~/components/Main/OverView.vue"
    import ResultItem from "~/components/Main/ResultItem.vue"

    export default {
        components: {
            OverView,
            ResultItem
        },

        props: {
            answers: {
                type: Array
            }
        }
    }
</script>
