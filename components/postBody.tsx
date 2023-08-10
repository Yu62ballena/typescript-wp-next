import styles from "styles/postBody.module.scss"
import { ChildrenProps } from "utils/types"

const PostBody = ({children}: ChildrenProps) => {
  return (
    <div className={styles.stack}>
      {children}
    </div>
  )
}

export default PostBody