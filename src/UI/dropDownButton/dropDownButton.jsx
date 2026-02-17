import { useState } from "react";
import styles from "./dropDownButton.module.css";

export default function DropDownButton({ children, className, buttonContent }) {
  const [open, setOpen] = useState(false); //acts as a state memory holder, open is the value white setOpen is a function to change that value, and false is te starting value

  const handleClick = () => {
        setOpen(prev => !prev); // Take whatever the previous value was, and set it to the opposite.
    };

    // if (open === false) { // its kinda like this 
    //   setOpen(true);
    //  } else {
    //   setOpen(false);
    // }    
    
  return (
    <div className={styles.dropDownButtonContainer}>
      <button onClick={handleClick} className={className}> 
        {buttonContent || "label"}
      </button> 

      {open && (
        <div className={styles.dropDownContentContainer}>
            {children}
        </div>
      )}
    </div>
  );
}
