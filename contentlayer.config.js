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
        tile: { type: 'string', require: true },
        
    },
    computedFields
}))

export default makeSource({
    contentDirPath: "content",
    documentTypes: [Post],
    mdx: {},
})
