<template>
    <div>
        <div class="alert alert-primary" role="alert">
            Bạn mong muốn được biết thêm về các kỹ thuật, công nghệ đã và đang được áp dụng tại các dự án khác tại Việt Nam?
            <a
                href="#"
                class="alert-link"
                @click.prevent="open"
            >Nhấn vào đây</a> để cho chúng tôi biết tên các dự án mà bạn đang mong chờ được chia sẻ thêm trong survey này.
        </div>

        <Modal :show.sync="visible" @close="close" />
    </div>
</template>


<script>
    import Modal from "./Form/Modal.vue"

    export default {
        components: {
            Modal
        },

        data() {
            return {
                visible: false
            }
        },

        methods: {
            open() {
                this.visible = true
            },

            close() {
                this.visible = false
            }
        }
    }
</script>
