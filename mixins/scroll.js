import _snakeCase from 'lodash/snakeCase'

export default {
    methods: {
        scroll(name) {
            const path = _snakeCase(name)
            return {
                el: `#${path}`,
                duration: 500,
                easing: 'ease',
                offset: 0,
                force: true,
                cancelable: true,
                onStart: false,
                onDone: function() {
                    document.location.hash = path
                },
                onCancel: false,
                x: false,
                y: true
            }
        },

        formatScrollableId(name) {
            return _snakeCase(name)
        }
    }
}
