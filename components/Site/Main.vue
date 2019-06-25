<template>
    <div>
        <div class="mb-5">
            <Entry entry="overview" />
            <section>
                <OverView :projects-total="answers.length" />
            </section>
        </div>

        <div>
            <Entry entry="products" />

            <section v-for="answer in answers" :key="answer.id">
                <ResultItem :item="answer" class="mb-1" />
            </section>
        </div>
    </div>
</template>

<script>
    import OverView from "~/components/Main/OverView.vue"
    import ResultItem from "~/components/Main/Result/Item.vue"
    import Entry from "~/components/Site/Entry.vue"

    export default {
        components: {
            OverView,
            ResultItem,
            Entry
        },

        props: {
            answers: {
                type: Array,
                required: true
            }
        }
    }
</script>
