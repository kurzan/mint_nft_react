import { FC, useState, ReactNode } from "react";
import styles from "./Tabs.module.css";


type TTabsProps = {
  tabs: Array<{
    label: string,
    content: ReactNode
  }>
};

const Tabs: FC<TTabsProps> = ({tabs}) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className={styles.tabs}>
      <div className={styles.tabs_buttons}>
        {tabs.map((tab, index) => (
          <p
            key={index}
            className={activeTab === index ? styles.active : styles.tab_button}
            onClick={() => setActiveTab(index)}
          >
            {tab.label}
          </p>
        ))}
      </div>
      <div className={styles.tab_content}>{tabs[activeTab].content}</div>
    </div>
  );

};

export default Tabs;