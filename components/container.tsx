import styles from "styles/container.module.scss"
import { ChildrenProps } from "utils/types"

const Container = ({children, large = false}: ChildrenProps) => {
  return (
<div className={large ? styles.large : styles.default}>
  {children}
</div>
  )
}

export default Container