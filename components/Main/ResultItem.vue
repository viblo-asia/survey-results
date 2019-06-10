<template>
    <div :id="answer.name" class="result-item">
        <div class="result-item__title">
            <a v-scroll-to="scroll(answer.name)" href="#">{{ answerTitle(answer.name) }}</a>
        </div>

        <div v-if="answerDescription" class="result-item__description">
            {{ answerDescription }}
        </div>

        <div class="result-item__result">
            <Chart :data="datacollection" :options="options" class="result-item__result-chart" />
        </div>
    </div>
</template>

<script>
    import _upperCase from "lodash/upperCase"
    import _keys from "lodash/keys"
    import _values from "lodash/values"
    import Chart from "./Chart.vue"
    import scroll from "~/mixins/scroll"

    const descriptions = {
        application_server:
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
        database_server:
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
        deploy_tools:
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
        server_os:
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
        deploy_tools: "",
        proxy_server: "",
        program_language: "",
        framework: "",
        serivce: "",
        database_server: "",
        other_tools: ""
    }

    export default {
        components: {
            Chart
        },

        mixins: [scroll],

        props: {
            answer: {
                required: true,
                type: Object
            }
        },

        data() {
            return {
                descriptions,
                datacollection: {
                    labels: _keys(this.answer.value),
                    datasets: [
                        {
                            label: "Data One",
                            backgroundColor: "#33b679",
                            pointBackgroundColor: "white",
                            borderWidth: 1,
                            pointBorderColor: "#249EBF",
                            data: _values(this.answer.value)
                        }
                    ]
                },
                options: {
                    scales: {
                        yAxes: [
                            {
                                ticks: {
                                    beginAtZero: true
                                },
                                gridLines: {
                                    display: true
                                }
                            }
                        ],
                        xAxes: [
                            {
                                ticks: {
                                    beginAtZero: true
                                },
                                gridLines: {
                                    display: false
                                }
                            }
                        ]
                    },
                    legend: {
                        display: false
                    },
                    tooltips: {
                        enabled: true,
                        mode: "single",
                        callbacks: {
                            label: function(tooltipItems, data) {
                                return tooltipItems.xLabel + " %"
                            }
                        }
                    },
                    responsive: true,
                    maintainAspectRatio: false,

                }
            }
        },

        computed: {
            answerDescription() {
                return this.descriptions[this.answer.name] || null
            }
        },

        methods: {
            answerTitle(name) {
                return _upperCase(name)
            },

            active(path) {
                return this.$route.hash === `#${path}`
            }
        }
    }
</script>


<style lang="scss">
    .result-item {
        margin-bottom: 50px;

        &__title {
            text-align: center;
            border-bottom: 1px solid black;
            margin-bottom: 20px;
        }

        &__description {
            margin-bottom: 10px;
        }

        &__result {
            position: relative;

            &-chart {
                max-width: 600px;
                margin: 20px auto;
            }
        }
    }
</style>
