import React, { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar";
import MidArea from "./components/MidArea";
import PreviewArea from "./components/PreviewArea";

export default function App() {
  const [catPosition, setCatPosition] = useState({ x: 0, y: 0 });
  const [catRotation, setCatRotation] = useState(0);
  const [previewAreaSize, setPreviewAreaSize] = useState({ width: 0, height: 0 });
  const [xAxisChecked, setXAxisChecked] = useState(false);
  const [yAxisChecked, setYAxisChecked] = useState(false);
  const [directionChecked, setDirectionChecked] = useState(false);
  const [costumeChecked, setCostumeChecked] = useState(false);
  const [backdropChecked, setBackDropChecked] = useState(false);
  const [sizeChecked, setSizedChecked] = useState(false);
  const [message, setMessage] = useState("");
  const [duration, setDuration] = useState(0);
  const[pref,setPref]=useState("");
  const [flag, setFlag] = useState(false); // Add flag state
  const [flag1, setFlag1] = useState(true); // Add flag state
  const [catSize, setCatSize] = useState(100); // Initial size of the cat sprite

  const increaseSize = (amount) => {
    setCatSize((prevSize) => prevSize + amount);
  };
  const divideSize = (percentage) => {
    setCatSize((prevSize) => {
      const newSize = prevSize * (percentage / 100);
      return newSize < 1 ? 1 : newSize;
    });
  };

  const handleSayClick = (msg, dur,fl) => {
    setMessage(msg);
    setDuration(dur);
    setFlag(fl);
  };

  const handlePref = (pr) => {
    setPref(pr);
  }
  const handleCheckboxChange = (checkboxName, isChecked) => {
    if (checkboxName === "xAxis") {
      setXAxisChecked(isChecked);
    } else if (checkboxName === "yAxis") {
      setYAxisChecked(isChecked);
    } else if (checkboxName === "direction") {
      setDirectionChecked(isChecked);
    }
  };

  const handleLookCheckboxChange = (checkboxName, isChecked) => {
    if (checkboxName === "costume") {
      setCostumeChecked(isChecked);
    } else if (checkboxName === "backdrop") {
      setBackDropChecked(isChecked);
    } else if (checkboxName === "size") {
     setSizedChecked(isChecked);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      // Update the size of the PreviewArea when the window is resized
      setPreviewAreaSize({
        width: window.innerWidth / 3, // Adjust this value as needed
        height: window.innerHeight,
      });
    };

    // Set the initial size of the PreviewArea
    handleResize();

    // Listen for window resize events
    window.addEventListener("resize", handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const rotateSprite = (angle) => {
    
    setCatRotation((prevRotation) => prevRotation + angle);
  };

  const rotateSetSprite = (angle) => {
    
    setCatRotation(angle);
  };

  const handleShowCat = () => {
    setFlag1(true);
  };

  const handleHideCat = () => {
    setFlag1(false);
  };

  const moveSprite = (steps) => {

    console.log("Move sprite called with steps:", steps);

    let dx, dy;

    if (typeof steps === "object") {
      // If steps is an object, use its x and y properties directly
      dx = steps.x;
      dy = steps.y;
    } else if (typeof steps === "number") {
      // If steps is a number, calculate dx and dy based on rotation angle
      const angleInRadians = (catRotation * Math.PI) / 180;
      dx = Math.cos(angleInRadians) * steps;
      dy = Math.sin(angleInRadians) * steps;
    }

    // Calculate the new position
    const newPosition = {
      x: catPosition.x + dx,
      y: catPosition.y + dy,
    };

    // Check if the new position exceeds the bounds of the PreviewArea
    const maxX = previewAreaSize.width - 100; // Assuming the width of the cat sprite is 100px
    const maxY = previewAreaSize.height - 100; // Assuming the height of the cat sprite is 100px

    // Limit the new position to the bounds of the PreviewArea
    newPosition.x = Math.min(maxX, Math.max(0, newPosition.x));
    newPosition.y = Math.min(maxY, Math.max(0, newPosition.y));

    // Update the cat's position
    console.log("Updating cat position to:", newPosition);
    setCatPosition(newPosition);
  };


  const moveSetSprite = (steps) => {
    console.log("Move sprite called with steps:", steps);

    let dx, dy;

    if (typeof steps === "object") {
        // If steps is an object, use its x and y properties directly
        dx = steps.x;
        dy = steps.y;
    } else if (typeof steps === "number") {
        // If steps is a number, calculate dx and dy based on rotation angle
        const angleInRadians = (catRotation * Math.PI) / 180;
        dx = Math.cos(angleInRadians) * steps;
        dy = Math.sin(angleInRadians) * steps;
    }

    // Calculate the new position
    const newPosition = {
        x: dx,
        y: dy,
    };

    // Check if the new position is different from the previous position
    if (dx !== catPosition.x || dy !== catPosition.y) {
        // Update the cat's position
        console.log("Updating cat position to:", newPosition);
        setCatPosition(newPosition);
    }
};

  const setMessageDisplayed = (value) => {
    setFlag(value); // Update flag based on the value
  };

 
  const bounceCat = () => {
    // Check if the cat is on the edge and adjust its position if necessary
    // Calculate the maximum x and y coordinates within the preview area
    const previewAreaWidth = window.innerWidth / 3; // Assuming the preview area occupies one-third of the window width
    const previewAreaHeight = window.innerHeight;
    const catWidth = 105; // Assuming the width of the cat sprite is 100px
    const catHeight = 105; // Assuming the height of the cat sprite is 100px
    const maxX = previewAreaWidth - catWidth;
    const maxY = previewAreaHeight - catHeight;

    // Check if the cat is on the edge
    if (catPosition.x <= 0 || catPosition.x >= maxX || catPosition.y <= 0 || catPosition.y >= maxY) {
      // If the cat is on the edge, adjust its position
      const newX = Math.min(Math.max(catPosition.x, 0), maxX);
      const newY = Math.min(Math.max(catPosition.y, 0), maxY);
      setCatPosition({ x: newX-5, y: newY-5 });
    }
  }

  return (
    <div className="bg-blue-100 pt-6 font-sans">
      <div className="h-screen overflow-hidden flex flex-row  ">
        <div className="flex-1 h-screen overflow-hidden flex flex-row bg-white border-t border-r border-gray-200 rounded-tr-xl mr-2">
          <Sidebar moveSprite={moveSprite}  increaseSize={increaseSize} divideSize={divideSize} catPosition={catPosition} moveSetSprite={moveSetSprite} rotateSetSprite={rotateSetSprite}
          rotateSprite={rotateSprite} bounceCat={bounceCat} onCheckboxChange={handleCheckboxChange} onLookCheckboxChange={handleLookCheckboxChange} onSayClick={handleSayClick} OnPref={handlePref}  onShowCat={handleShowCat} onHideCat={handleHideCat}/>
          <MidArea />
        </div>
        <div className="w-1/3 h-screen overflow-hidden flex flex-row bg-white border-t border-l border-gray-200 rounded-tl-xl ml-2">
          <PreviewArea catSize={catSize} setMessageDisplayed={setMessageDisplayed} pref={pref} flag={flag} flag1={flag1} message={message} duration={duration}
           costumeChecked={costumeChecked} backdropChecked={backdropChecked} sizeChecked={sizeChecked} 
           xAxisChecked={xAxisChecked} yAxisChecked={yAxisChecked} directionChecked={directionChecked}  catPosition={catPosition} catRotation={catRotation} moveSetSprite={moveSetSprite} moveSprite={moveSprite} previewAreaSize={previewAreaSize} />
        </div>
      </div>
    </div>
  );
}
