import styles from "styles/postCategories.module.scss"
import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFolderOpen } from "@fortawesome/free-regular-svg-icons"

type PostCategoriesProps = {
  categories: Array<{
    createdAt?: string | undefined;
    id?: string | undefined;
    publishedAt?: string | undefined;
    slug: string | undefined;
    updatedAt?: string | undefined;
    name: string | undefined;
  }> | undefined;
}

const PostCategories = ({categories}: PostCategoriesProps) => {
  return (
    <div className={styles.flexContainer}>
      <h3 className={styles.heading}>
        <FontAwesomeIcon icon={faFolderOpen} />
        <span className="sr-only">Categories</span>
      </h3>
    <ul className={styles.list}>
      {categories!.map(({name, slug}) => (
        <li key={slug}>
          <Link href={`/blog/category/${slug}`}>
            {name}
          </Link>
        </li>
      ))}
    </ul>
    </div>
  )
}

export default PostCategories