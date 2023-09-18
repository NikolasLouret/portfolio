//* CSS
import styles from "./Technologies.module.css";

//* Components
import ParallaxText from "../../../components/parallax/ParallaxText";

const Technologies = () => {
  return (
    <div className={styles.tech}>
      <ParallaxText baseVelocity={1.5}>
        <ul className={`flex justify_between ${styles.list_tech}`}>
          <li>
            <img src="/icons/git.svg" alt="Git" />
          </li>
          <li>
            <img src="/icons/css3.svg" alt="CSS3" />
          </li>
          <li>
            <img src="/icons/javascript.svg" alt="JavaScript" />
          </li>
          <li>
            <img src="/icons/html.svg" alt="HTML5" />
          </li>
          <li>
            <img src="/icons/mongodb.svg" alt="MongoDB" />
          </li>
          <li>
            <img src="/icons/nodejs.svg" alt="NodeJs" />
          </li>
          <li>
            <img src="/icons/react-icon.svg" alt="ReactJs" />
          </li>
          <li>
            <img src="/icons/java.svg" alt="Java" />
          </li>
          <li>
            <img src="/icons/intellij.svg" alt="IntelliJ IDE" />
          </li>
        </ul>
      </ParallaxText>
    </div>
  );
};

export default Technologies;
