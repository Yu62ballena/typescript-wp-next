import styles from "styles/two-column.module.scss";
import { ChildrenProps } from "utils/types";

export const TwoColumn = ({children}: ChildrenProps) => {
  return (
    <div className={styles.flexContainer}>
      {children}
    </div>
  )
};

export const TwoColumnMain = ({children}: ChildrenProps) => {
  return (
    <div className={styles.main}>
      {children}
    </div>
  )
}

export const TwoColumnSidebar = ({children}: ChildrenProps) => {
  return (
    <div className={styles.sidebar}>
      {children}
    </div>
  )
}

