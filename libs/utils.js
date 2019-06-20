import _findIndex from 'lodash/findIndex'

export function image(imageItem, size) {
    return size
        ? `${process.env.IMAGES_URL}/${size}/${imageItem}`
        : `${process.env.IMAGES_URL}/${imageItem}`
}

export function findContentOfQuestion(answers, question) {
    const index = _findIndex(answers, function(o) {
        return o.question == question
    })

    return index === '-1' ? null : answers[index].content
}
