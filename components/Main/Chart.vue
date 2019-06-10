<script>
    import { HorizontalBar } from "vue-chartjs"

    export default {
        extends: HorizontalBar,

        props: {
            data: {
                type: Object
            },

            options: {
                type: Object
            }
        },

        mounted() {
            this.renderChart(this.data, this.options)
        }
    }
</script>
