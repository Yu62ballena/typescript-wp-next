import styles from 'styles/posts.module.scss'
import Link from 'next/link'
import { GetAllPostsType } from 'utils/types'
import Image from 'next/image'

const Posts: React.FC<{posts: GetAllPostsType[]}> = ({posts}) => {
  return (
    <div className={styles.gridContainer}>
      {posts.map(({ title, slug, eyecatch}) => (
        <article className={styles.post} key={slug}>
          <Link href={`/blog/${slug}`}>
            <figure>
              <Image 
                style={{width: "100%", height: "auto", objectFit: "cover"}}
                src={eyecatch.url}
                alt=""
                width={eyecatch.width}
                height={eyecatch.height}
                sizes="(min-width: 1152px) 576px, 50vw"
                priority
              />
            </figure>
            <h2>{title}</h2>
          </Link>
        </article>
      ))}
    </div>
  )
}



export default Posts

