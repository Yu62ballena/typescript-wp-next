import styles from "styles/social.module.scss"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faTwitter,
  faFacebookF,
  faGithub,
} from "@fortawesome/free-brands-svg-icons"

type socialProps = {
  iconSize?: string,
}

const Social = ({iconSize = 'initial' }: socialProps) => {
  return (
    <ul 
    className={styles.list} 
    style={{ "--icon-size": iconSize } as React.CSSProperties & { [key: string]: string | number }}
    >
    
      <li>
        <a href="https://twitter.com/">
          <FontAwesomeIcon icon={faTwitter} />
          <span className="sr-only">Twitter</span>
        </a>
      </li>
      <li>
        <a href="https://facebook.com/">
          <FontAwesomeIcon icon={faFacebookF} />
          <span className="sr-only">Facebook</span>
        </a>
      </li>
      <li>
        <a href="https://twitter.com/">
          <FontAwesomeIcon icon={faGithub} />
          <span className="sr-only">Github</span>
        </a>
      </li>
    </ul>
  )
}

export default Social