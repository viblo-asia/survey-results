<template>
    <div>
        <div id="overview" class="mb-5">
            <Entry entry="overview" />

            <section class="scrollspy">
                <OverView :projects-total="answers.length" />
                <Suggestion />
            </section>
        </div>

        <div>
            <Entry id="products" entry="products" class="scrollspy" />

            <div v-for="answer in answers" :key="answer.id">
                <ResultItem :item="answer" class="mb-1" />
            </div>
        </div>
    </div>
</template>

<script>
    import OverView from "~/components/Main/OverView.vue"
    import ResultItem from "~/components/Main/Result/Item.vue"
    import Entry from "~/components/Site/Entry.vue"
    import Suggestion from "~/components/Main/Suggestion.vue"

    export default {
        components: {
            OverView,
            ResultItem,
            Entry,
            Suggestion
        },

        props: {
            answers: {
                type: Array,
                required: true
            }
        }
    }
</script>
