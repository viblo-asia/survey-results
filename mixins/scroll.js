export default {
    methods: {
        scroll(name) {
            return {
                el: `#${name}`,
                duration: 500,
                easing: 'ease',
                offset: 0,
                force: true,
                cancelable: true,
                onStart: false,
                onDone: function() {
                    document.location.hash = name
                },
                onCancel: false,
                x: false,
                y: true
            }
        },
    }
}
