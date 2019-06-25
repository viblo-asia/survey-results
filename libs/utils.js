import _get from 'lodash/get'
import _find from 'lodash/find'

export function image(imageItem, size) {
    return size
        ? `${process.env.IMAGES_URL}/${size}/${imageItem}`
        : `${process.env.IMAGES_URL}/${imageItem}`
}

export function findContentOfQuestion(answers = [], question) {
    const result = _find(answers, item => item.question === question)
    return _get(result, 'content')
}
