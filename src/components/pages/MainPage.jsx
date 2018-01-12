import React from "react";
import VisibleGoodsList from "./../../containers/VisibleGoodsList";
import styles from "./../../styles/components/content.css";

const MainPage = props => (
  <div className={styles.inner}>
    <VisibleGoodsList {...props} />
  </div>
);

export default MainPage;
