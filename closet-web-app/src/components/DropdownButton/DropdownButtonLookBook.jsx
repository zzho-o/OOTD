import React, { useState } from "react";
import styles from "../DropdownButton/DropdownButton.module.css";
import downIcon from "../../assets/icons/ClothDetail_card/downIcon.png";
import upIcon from "../../assets/icons/ClothDetail_card/upIcon.png";

const DropdownButtonLookBook = ({ itemList, firstData, setClosetName }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectData, setSelectData] = useState(firstData);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const listClick = item => {
    setSelectData(item);
    setClosetName(item);
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.dropdown}>
      <div onClick={toggleDropdown} className={styles.dropdown_button}>
        <p>{selectData}</p>
        {isOpen ? (
          <img src={upIcon} alt="upIcon" className={styles.upDownIcon} />
        ) : (
          <img src={downIcon} alt="downIcon" className={styles.upDownIcon} />
        )}
      </div>
      {isOpen && (
        <ul className={styles.dropdown_menu}>
          {itemList.map((item, index) => (
            <li
              key={index}
              onClick={() => listClick(item)}
              className={styles.dropdown_item}
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DropdownButtonLookBook;
