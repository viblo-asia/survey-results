<template>
    <div>
        <div id="overview" class="mb-5 scrollspy">
            <section>
                <Entry entry="overview" />
                <OverView :projects-total="answers.length" />
                <Suggestion />
            </section>
        </div>

        <div id="products" class="scrollspy">
            <section>
                <Entry entry="products" />
            </section>
        </div>

        <div
            v-for="answer in answers"
            :id="`survey-${answer.id}`"
            :key="answer.id"
            class="result-item scrollspy"
        >
            <ResultItem :item="answer" class="mb-1" />
        </div>

        <Suggestion />
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
