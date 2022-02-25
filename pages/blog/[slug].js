import styles from '../../styles/Home.module.css'

import { allPosts } from "../../.contentlayer/generated/allPosts.mjs"
import Link from 'next/link'

import MarkdownIt from 'markdown-it'


const BlogPost = ({ post }) => {
    console.log(post)
    

    const md = new MarkdownIt({
        html: true
    })

    const htmlTexto = md.render(post.body.html) 

    return (
        <>
            <main>
                <button>
                    <Link href="/">
                        <p>Home page</p>
                    </Link>
                </button>
                <h1 className={styles.title}>{post.title}</h1>
                <p className={styles.description}>{post.date}</p>
                <section dangerouslySetInnerHTML={{__html: htmlTexto}}></section>
            </main>
        </>
    )
}

export async function getStaticPaths() {
    return {
        paths: allPosts.map(post => ({
            params: {
                slug: post.slug
            },
        })),
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    const post = allPosts.find(post => post.slug === params.slug)
    return {
        props: {
            post
        }
    }
}

export default BlogPost