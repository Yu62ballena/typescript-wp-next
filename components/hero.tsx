import styles from "styles/hero.module.scss";
import cube from "images/cube.jpg";
import Image from "next/image";

import { HeroProps } from "utils/types";

const Hero = ({ title, subtitle, imageOn = false }: HeroProps) => {
  return (
    <div className={styles.flexContainer}>
      <div className={styles.text}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.subtitle}>{subtitle}</p>
      </div>
      {imageOn && (
        <figure className={styles.figure}>
          <Image 
          className={styles.image} 
          src={cube} 
          alt="" 
          priority
          sizes="(min-width: 1152px) 576px, (min-width: 768px) 50VW, 100VW"
          placeholder="blur"
          />
        </figure>
      )}
    </div>
  );
};

export default Hero;
