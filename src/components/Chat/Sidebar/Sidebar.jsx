import styles from "./styles.module.css";

export const Sidebar = ({ children }) => {
  return <div className={styles.sidebar}>{children}</div>;
};
