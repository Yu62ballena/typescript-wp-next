import styles from "styles/accordion.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleChevronDown } from "@fortawesome/free-solid-svg-icons";
import { ReactNode } from "react";
import { useState, useRef } from "react";

type AccordionType = {
  heading: string;
  children?: ReactNode;
};

const Accordion = ({ heading, children }: AccordionType) => {
  const [textIsOpen, setTextIsOpen] = useState<boolean>(false);

  const toggleText = () => {
    setTextIsOpen((prev) => !prev);
  };

  const refText = useRef<HTMLDivElement | null>(null);


  return (
    <div className={textIsOpen ? styles.open : styles.close}>
      <h3 className={styles.heading}>
        <button onClick={toggleText}>
          {heading}
          <FontAwesomeIcon icon={faCircleChevronDown} className={styles.icon} />
        </button>
      </h3>
      <div
        className={styles.text}
        ref={refText}
        style={{
          ['--text-height' as string] : refText.current
          ? `${refText.current?.scrollHeight}px`
          : '0px',
        }}
      >
        <div className={styles.textInner}>{children}</div>
      </div>
    </div>
  );
};

export default Accordion;
