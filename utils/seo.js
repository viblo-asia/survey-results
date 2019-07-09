import _assign from 'lodash/assign'

export const metaTag = (name, content, attribute = 'name') => ({
    hid: name,
    [attribute]: name,
    content
})

export const defaultSEOData = {
    title: 'Technical Survey Results 2019 | Viblo',
    description: 'Cùng Viblo Survey 2019 khám phá những kỹ thuật, công nghệ đang được sử dụng'
        + 'trong các sản phẩm công nghệ nổi tiếng tại Việt Nam.',
    keywords: 'viblo, viblo survey results, survey results 2019, technical survey results'
}

export const pageSEO = (pageSEOData = {}) => {
    const { title, description, keywords } = _assign({}, defaultSEOData, pageSEOData)

    return [
        metaTag('description', description),
        metaTag('keywords', keywords),

        // Open graph meta tags:
        metaTag('og:url', 'https://viblo.asia/survey-results', 'property'),
        metaTag('og:type', 'website', 'property'),
        metaTag('og:title', title, 'property'),
        metaTag('og:image', 'https://images.viblo.asia/full/48a3650a-1b8c-4fb4-ae05-dcccf76ec139.png', 'property'),
        metaTag('og:description', description, 'property'),

        // Twitter:
        metaTag('twitter:card', 'summary_large_image'),
    ]
}
