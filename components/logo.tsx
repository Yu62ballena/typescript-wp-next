import Link from "next/link";
import styles from "styles/logo.module.scss"

type LogoProps = {
  boxOn?: boolean;
};

const Logo = ({ boxOn = false }: LogoProps) => {
  return (
    <>
      <Link href="/" className={boxOn ? styles.box : styles.basic}>
        CUBE
      </Link>
    </>
  );
};

export default Logo;
