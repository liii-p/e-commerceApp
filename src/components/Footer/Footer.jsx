import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <div className={styles.Footer}>
      <div className={styles.Footer__text}>
        <h3>Built by Lianna</h3>
        <p>Images taken from Supre.</p>
      </div>
    </div>
  );
};

export default Footer;
