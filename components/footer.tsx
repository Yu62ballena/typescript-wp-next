import Logo from "./logo";
import Container from "./container";
import styles from "styles/footer.module.scss";
import Social from "components/social";

const Footer = () => {
  return (
    <footer className={styles.wrapper}>
      <Container>
        <div className={styles.flexContainer}>
          <Logo />
          <Social />
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
