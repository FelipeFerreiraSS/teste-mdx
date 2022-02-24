import { defineDocumentType, makeSource } from "contentlayer/source-files"

const computedFields = {
    slug: {
        type: 'string',
        resolve: doc => doc._raw.sourceFileName.replace(/\.mdx$/, '')
    }
}

const Post = defineDocumentType(() => ({
    name: 'Post',
    filePathPattern: 'posts/*.mdx',
    bodyType: 'mdx',
    fields: {
        title: { type: 'string', require: true },
        date: { type: 'string', require: true },
        resume: { type: 'string', require: true }
    },
    computedFields
}))

export default makeSource({
    contentDirPath: "content",
    documentTypes: [Post],
    mdx: {},
})
