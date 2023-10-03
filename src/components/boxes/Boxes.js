import { useEffect } from "react";

const Boxes = (boxes) => {
    useEffect(() => {
        const boxes = document.querySelectorAll('.box');
        const boxesDividers = document.querySelectorAll('.box-divider');
        const checkBoxes = () => {
          const triggerBottom = window.innerHeight / 5 * 4;
    
          boxes.forEach((box) => {
            const boxTop = box.getBoundingClientRect().top;
    
            if (boxTop < triggerBottom) {
              box.classList.add('shown');
            } else {
              box.classList.remove('shown');
            }
          });
          boxesDividers.forEach((boxesDivider) => {
            const boxesDividerTop = boxesDivider.getBoundingClientRect().top;
    
            if (boxesDividerTop < triggerBottom) {
              boxesDivider.classList.add('shown');
            } else {
              boxesDivider.classList.remove('shown');
            }
          });
        };
        
        window.addEventListener('scroll', checkBoxes);
        checkBoxes(); // shows initial box(es)
        
        return () => {
          window.removeEventListener('scroll', checkBoxes);
        };
      }, []);
}

export default Boxes;