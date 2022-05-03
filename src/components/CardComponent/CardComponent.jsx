import styles from "./CardComponent.module.css";

const CardComponent = ({ children }) => {
  return <div className={styles.componentContainer}>{children}</div>;
};

export default CardComponent;
