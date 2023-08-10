import styles from 'styles/postHeader.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import ConvertDate from './convertDate';

type PostHeaderProps = {
  title: string,
  subtitle: string,
  publishDate?: string,
  dateISO?: string,
}

const PostHeader = ({title, subtitle, publishDate}: PostHeaderProps) => {
  return (
    <div className={styles.stack}>
      <p className={styles.subtitle}>{subtitle}</p>
      <h1 className={styles.title}>{title}</h1>
      {publishDate && (
        <div className={styles.publish}>
          <FontAwesomeIcon icon={faClock} size="lg" color="var(--gray-25)" />
          <ConvertDate dateISO={publishDate} />
          </div>)}
    </div>
  )
};

export default PostHeader;
