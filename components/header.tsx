import Logo from "./logo";
import Nav from "./nav";
import Container from "./container";
import styles from "styles/header.module.scss";

const Header = () => {
  return (
    <header>
      <Container large>
        <div className={styles.flexContainer}>
          <Logo boxOn />
          <Nav />
        </div>
      </Container>
    </header>
  );
};

export default Header;
