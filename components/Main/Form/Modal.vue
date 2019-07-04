<template>
    <div>
        <form v-if="!submited" ref="form" @submit="onSubmit">
            <StackModal
                :show="show"
                :modal-class="{'modal-lg':true}"
                :save-button="{visible: false}"
                :cancel-button="{ btnClass: {'d-none': true}}"
                @close="close"
                @save="onSubmit"
            >
                <template slot="modal-header">
                    <div class="modal-header">
                        <h5 class="modal-title">
                            Survey Suggestion
                        </h5>
                        <button
                            type="button"
                            class="close"
                            aria-label="Close"
                            @click.stop="$emit('close')"
                        >
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                </template>
                <div class="container-fluid modal-form">
                    <div class="form-group row">
                        <label
                            for="productName"
                            class="col-sm-3 control-label required"
                        >Product Name:</label>
                        <div class="col-sm-9">
                            <input
                                v-model="form.name"
                                type="text"
                                class="form-control"
                                aria-describedby="productName"
                                placeholder="Product Name"
                                :class="errors.name ? 'is-invalid' : ''"
                                required
                            >
                            <div v-if="errors.name" class="invalid-feedback">
                                {{ errors.name[0] }}
                            </div>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="required col-sm-3" for="productLink">Product Link:</label>

                        <div class="col-sm-9">
                            <input
                                v-model="form.link"
                                type="text"
                                class="form-control"
                                aria-describedby="productLink"
                                placeholder="Product Link"
                                :class="errors.link ? 'is-invalid' : ''"
                                required
                            >
                            <div v-if="errors.link" class="invalid-feedback">
                                {{ errors.link[0] }}
                            </div>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-sm-3" for="emailContact">Email Contact:</label>

                        <div class="col-sm-9">
                            <input
                                v-model="form.email"
                                type="email"
                                class="form-control"
                                aria-describedby="emailContact"
                                placeholder="Email Contact"
                                :class="errors.email ? 'is-invalid' : ''"
                            >
                            <div v-if="errors.email" class="invalid-feedback">
                                {{ errors.email[0] }}
                            </div>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-sm-3" for="comment">Comment:</label>
                        <div class="col-sm-9">
                            <textarea
                                v-model="form.comment"
                                placeholder="Comment"
                                class="form-control"
                                :class="errors.comment ? 'is-invalid' : ''"
                            />
                            <div
                                v-if="errors.comment"
                                class="invalid-feedback"
                            >
                                {{ errors.comment[0] }}
                            </div>
                        </div>
                    </div>
                </div>
                <template slot="modal-footer">
                    <div class="modal-footer">
                        <button type="submit" class="btn-primary btn btn-block">
                            Submit
                        </button>
                    </div>
                </template>
            </StackModal>
        </form>

        <stack-modal
            :show="submited"
            title="Survey Suggestion"
            :modal-class="{'modal-lg':true}"
            :save-button="{ visible: false}"
            :cancel-button="{ title:'Close'}"
        >
            <template slot="modal-header">
                <div class="modal-header">
                    <h5 class="modal-title">
                        Survey Suggestion
                    </h5>
                    <button
                        type="button"
                        class="close"
                        aria-label="Close"
                        @click.stop="submited=false"
                    >
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
            </template>
            <div class="alert alert-success" role="alert">
                Cảm ơn những góp ý của bạn về dự án bạn mong muốn hiển thị trong survey.
                Chúng tôi sẽ cố gắng hoàn thiện những thông tin phù hợp với bạn trong thời gian sớm nhất.
            </div>
        </stack-modal>
    </div>
</template>

<script>
    import StackModal from "@innologica/vue-stackable-modal"
    import axios from "~/plugins/axios"

    export default {
        components: {
            StackModal
        },
        props: {
            show: {
                type: Boolean
            }
        },
        data() {
            return {
                form: {
                    name: "",
                    link: "",
                    email: "",
                    comment: ""
                },
                submited: false,
                errors: []
            }
        },
        methods: {
            close() {
                this.clearForm()
                this.$emit("close")
            },

            clearForm() {
                this.form = {
                    name: "",
                    link: "",
                    email: "",
                    comment: ""
                }
            },

            onSubmit(e) {
                e.preventDefault()
                const self = this
                axios
                    .post("/api/survey-suggestion", this.form)
                    .then(() => {
                        self.submited = true
                        self.close()
                    })
                    .catch(error => {
                        self.errors = error.response.data.errors
                    })
            }
        }
    }
</script>

<style lang="scss">
    @import "~@innologica/vue-stackable-modal/src/assets/transitions/translate-fade.scss";

    .modal {
        &-form {
            width: 100%;
        }
        &-title {
            margin: 0 auto;
        }
        &-header {
            width: 100%;
            .close {
                margin-left: 0;
            }
        }

        &-body {
            width: 100%;
            .required:after {
                content: " *";
                color: #e32;
            }
        }
    }
</style>
