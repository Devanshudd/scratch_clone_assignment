import React, { useState,useRef } from "react";
import Icon from "./Icon";

export default function Sidebar({ moveSprite, rotateSprite , bounceCat, onCheckboxChange, OnPref ,onSayClick, onShowCat, onHideCat, increaseSize,divideSize}) {
  const [isCurrentTab, setCurrentTab] = useState(true);
  const [selectedOption, setSelectedOption] = useState("random position");
  const [showOptions, setShowOptions] = useState(false);
  const [showOptions3, setShowOptions3] = useState(false);
  const [selectedOption3, setSelectedOption3] = useState("random position");
  const [selectedOption1, setSelectedOption1] = useState("random position");
  const [showOptions1, setShowOptions1] = useState(false);
  const [x, setX] = useState(0);
  const [x2, setX2] = useState(0);
  const [x1, setX1] = useState(10);
  const [x3, setX3] = useState(0);
  const [y3, setY3] = useState(0);
  const [y, setY] = useState(0);
  const [angle, setAngle] = useState("0");
  const [sizeInput, setSizeInput] = useState(10);
  const [sizeInput1, setSizeInput1] = useState(100);
  const [angle1, setAngle1] = useState("1");
  const [angle2, setAngle2] = useState("1");
  const prevX2 = useRef(x2);
  const [y1, setY1] = useState(10);
  const [y2, setY2] = useState(0);
  const prevy2 = useRef(y2);
  const [selectedOption2, setSelectedOption2] = useState("Left-Right");
  const [showOptions2, setShowOptions2] = useState(false);
  const [selectedOption4, setSelectedOption4] = useState("costume 2");
  const [showOptions4, setShowOptions4] = useState(false);
  const [selectedOption5, setSelectedOption5] = useState("backdrop 1");
  const [showOptions5, setShowOptions5] = useState(false);
  const [selectedOption6, setSelectedOption6] = useState("front");
  const [showOptions6, setShowOptions6] = useState(false);
  const [selectedOption7, setSelectedOption7] = useState("forward");
  const [showOptions7, setShowOptions7] = useState(false);
  const [selectedOption8, setSelectedOption8] = useState("number");
  const [showOptions8, setShowOptions8] = useState(false);
  const [selectedOption9, setSelectedOption9] = useState("number");
  const [showOptions9, setShowOptions9] = useState(false);
  const [selectedOption10, setSelectedOption10] = useState("color");
  const [showOptions10, setShowOptions10] = useState(false);
  const [selectedOption11, setSelectedOption11] = useState("color");
  const [showOptions11, setShowOptions11] = useState(false);
  const [rotationEnabled, setRotationEnabled] = useState(true);
  const [flag,setFlag] = useState(1);
  const [messageText, setMessageText] = useState("hello!");
  const [durationValue, setDurationValue] = useState(2);
  const [messageText1, setMessageText1] = useState("hello!");
  const [durationValue1, setDurationValue1] = useState(0);
  const [messageText2, setMessageText2] = useState("hmm..");
  const [durationValue2, setDurationValue2] = useState(2);
  const [messageText3, setMessageText3] = useState("hmm..");
  const [durationValue3, setDurationValue3] = useState(0);
  const [durationValue4, setDurationValue4] = useState(1);
  const [durationValue5, setDurationValue5] = useState(25);
  const [durationValue6, setDurationValue6] = useState(0);
  const[pref,setPref]=useState("");

  const handleGraphicEffect = ()=>{
    console.log("Clear Graphic Effects");
  }
  const handleSizeChange = (e) => {
    let value = parseInt(e.target.value);
    if (isNaN(value)) value = 0;
    setSizeInput(parseInt(e.target.value));
  };
  const handleSizeChange1= (e) => {
    let value = parseInt(e.target.value);
    if (isNaN(value)) value = 0;
    setSizeInput1(parseInt(e.target.value));
  };

  const handleIncreaseSize = () => {
    console.log("Increasing size by:", sizeInput);
    increaseSize(sizeInput);
  };
  const handleDevideSize = () => {
    console.log("Divide size by:", sizeInput1);
    divideSize(sizeInput1);
  };


  const handleShowCat = () => {
    onShowCat();
  };

  const handleHideCat = () => {
    onHideCat();
  };
  

  const handleClick = () => {
    setPref("say");
    OnPref(pref);
    onSayClick(messageText, durationValue,true);
  };
  
  const handleClick1 = () => {
    onSayClick(messageText1, durationValue1,true);
  };
  const handleCostume = () => {
    console.log("next costume")
  };
  const handleBackdrop = () => {
    console.log("next backdrop")
  };


  const handleClick2 = () => {
    onSayClick(messageText2, durationValue2,true);
  };
  
  const handleClick3 = () => {
    onSayClick(messageText3, durationValue3,true);
  };

  const handleCheckboxClick = (checkboxName, isChecked) => {
    onCheckboxChange(checkboxName, isChecked);
  };

  const handleBounceClick = () => {
    bounceCat();
  };

  const handleGoToClick2 = () => {
    setShowOptions2((prevState) => !prevState);
  };

  const handleChange = (e, setter) => {
    let value = parseInt(e.target.value); // Parse input value as integer
    // Limit the value to the range -999 to 999
    if (isNaN(value)) value = 0; // Set default value if input is not a number
    value = Math.max(-999, Math.min(value, 999));
    setter(value.toString());
    // rotateSprite(value); // Rotate the sprite to the specified angle
  };

  const handleChange7 = (e, setter) => {
    let value = parseInt(e.target.value); // Parse input value as integer
    // Limit the value to the range -999 to 999
    if (isNaN(value)) value = 0; // Set default value if input is not a number
    value = Math.max(-999, Math.min(value, 999));
    console.log("New size:", value);
    setter(value.toString());
    // rotateSprite(value); // Rotate the sprite to the specified angle
  };

  const handleChange1 = (e, setter) => {
    let value = parseInt(e.target.value); // Parse input value as integer
    // Limit the value to the range -999 to 999
    if (isNaN(value)) value = 0; // Set default value if input is not a number
    value = Math.max(-999, Math.min(value, 999));
    setter(value.toString());
    // rotateSprite(value); // Rotate the sprite to the specified angle
  };
   const handleChange2 = (e, setter) => {
    let value = parseInt(e.target.value); // Parse input value as integer
    // Limit the value to the range -999 to 999
    if (isNaN(value)) value = 0; // Set default value if input is not a number
    value = Math.max(-999, Math.min(value, 999));
    setter(value.toString());
    // rotateSprite(value); // Rotate the sprite to the specified angle
  };


  const handleChange3 = (e, setter) => {
    let value = parseInt(e.target.value);
    if (isNaN(value)) value = 0;
    setter(value.toString());
  };

  const handleChange4 = (e, setter) => {
    let value = parseInt(e.target.value);
    if (isNaN(value)) value = 0;
    setter(value.toString());
  };

  const handleChange5 = (e, setter) => {
    let value = parseInt(e.target.value); // Parse input value as integer
    // Limit the value to the range -999 to 999
    if (isNaN(value)) value = 0; // Set default value if input is not a number
    value = Math.max(-999, Math.min(value, 999));
    setter(value.toString());
    // rotateSprite(value); // Rotate the sprite to the specified angle
  };
  const handleChange6 = (e, setter) => {
    let value = parseInt(e.target.value); // Parse input value as integer
    // Limit the value to the range -999 to 999
    if (isNaN(value)) value = 0; // Set default value if input is not a number
    value = Math.max(-999, Math.min(value, 999));
    setter(value.toString());
    // rotateSprite(value); // Rotate the sprite to the specified angle
  };

  const handleRotateClick = () => {
    // Rotate the sprite with the updated angle
    rotateSprite(parseInt(angle));
  };

  const handleInputChange = (e, setter) => {
    // Parse input value as integer
    let value = parseInt(e.target.value);
    // Ensure the value is within the range from -999 to 999
    if (isNaN(value)) value = 0;
    value = Math.max(-999, Math.min(value, 999));
    // Set the state with the updated value
    setter(value.toString());
  };
  const handleInputChange1 = (e, setter) => {
    // Parse input value as integer
    let value = parseInt(e.target.value);
    // Ensure the value is within the range from -999 to 999
    if (isNaN(value)) value = 0;
    value = Math.max(-999, Math.min(value, 999));
    // Set the state with the updated value
    setter(value.toString());
  };

  const handleMoveBtnClick = () => {
    // Move the sprite with the updated x and y values
    moveSprite({ x: parseInt(x), y: parseInt(y) });
  };
  const handleMoveBtnClick1 = () => {
    // Move the sprite with the updated x and y values
    moveSprite({ x: parseInt(x), y: parseInt(y) });
  };

  const handleTabClick = () => {
    setCurrentTab(!isCurrentTab);
  };

  const handleMoveClick = () => {
    // Call the moveSprite function with the appropriate parameters
    moveSprite(10); // You can adjust the step size as needed
  };
  const handleMoveClick1 = () => {
    // Move the sprite along the x-axis by the specified value
    moveSprite({ x: parseInt(x1), y: 0 });
  };

  const handleMoveClick2 = () => {
     // Move the sprite along the x-axis by the specified value only if the value has changed
     if (x2 !== prevX2.current) {
      moveSprite({ x: parseInt(x2), y: 0 });
      // Update the previous value of x1 to the current value
      prevX2.current = x2;
    }
  };


  const handleMoveClick3 = () => {
    moveSprite({ x: 0, y: parseInt(y1) });
  };

  const handleMoveClick4 = () => {
    // moveSprite({ x: parseInt(x2), y: parseInt(y2) });
    if (y2 !== prevy2.current) {
      moveSprite({ x: 0, y: parseInt(y2) });
      // Update the previous value of x1 to the current value
      prevy2.current = y2;
    }
  };
  const handleRotateLeftClick = () => {
    if (rotationEnabled) {
      if (selectedOption2 === "Left Right") {
        console.log("Inside")
        if (catRotation > 180) {
          console.log("Rotate left from 180 to -165");
          rotateSprite(-165);
        } else {
          console.log("Rotate left by -15");
          rotateSprite(-15);
        }
      } else {
        console.log("Rotate left by -15 (default)");
        rotateSprite(-15); // Default behavior if rotation style is not "Left Right"
      }
    }
  };
  
  const handleRotateRightClick = () => {
    if (rotationEnabled) {
      if (selectedOption2 === "Left Right") {
        if (rotateSprite > 180) {
          console.log("Rotate right from -180 to 165");
          rotateSprite(165);
        } else {
          // console.log("Rotate right by 15");
          // rotateSprite(15);
        }
      } 
      else {
        console.log("Rotate right by 15 (default)");
        rotateSprite(15); // Default behavior if rotation style is not "Left Right"
      }
    }
    else 
    {
      setFlag(0);
      // rotateSprite(15,flag)
    }
  };

  
  const handleGoToClick3 = () => {
    setShowOptions3((prevState) => !prevState);
  };

  const handleGoToClick = () => {
    setShowOptions((prevState) => !prevState);
  };
  const handleGoToClick1 = () => {
    setShowOptions1((prevState) => !prevState);
  };
  const handleGoToClick4 = () => {
    setShowOptions4((prevState) => !prevState);
  };
  const handleGoToClick5 = () => {
    setShowOptions5((prevState) => !prevState);
  };
  const handleGoToClick6 = () => {
    setShowOptions6((prevState) => !prevState);
  };
  const handleGoToClick7 = () => {
    setShowOptions7((prevState) => !prevState);
  };
  const handleGoToClick8 = () => {
    setShowOptions8((prevState) => !prevState);
  };
  const handleGoToClick9 = () => {
    setShowOptions9((prevState) => !prevState);
  };
  const handleGoToClick10 = () => {
    setShowOptions10((prevState) => !prevState);
  };
  const handleGoToClick11 = () => {
    setShowOptions11((prevState) => !prevState);
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setShowOptions(false);
    // Perform action based on selected option
    if (option === "random position") {
      // Perform action for Option 1
    } else if (option === "mouse pointer") {
      // Perform action for Option 2
    }
  };
  const handleOptionSelect3 = (option) => {
    setSelectedOption3(option);
    setShowOptions3(false);
    // Perform action based on selected option
    if (option === "random position") {
      // Perform action for Option 1
    } else if (option === "mouse pointer") {
      // Perform action for Option 2
    }
  };

  const handleOptionSelect1 = (option) => {
    setSelectedOption1(option);
    setShowOptions1(false);
    // Perform action based on selected option
    if (option === "random position") {
      // Perform action for Option 1
    } else if (option === "mouse pointer") {
      // Perform action for Option 2
    }
  };

  const handleOptionSelect2 = (option) => {
    setSelectedOption2(option);
    setShowOptions2(false);
    // Perform action based on selected option
    if (option === "Left Right") {
      setRotationEnabled(true);
      
    } else if (option === "Don't-rotate") {
      setRotationEnabled(false);
    } else if (option === "All Around") {
      setRotationEnabled(true);
    }
  };

  const handleOptionSelect4 = (option) => {
    setSelectedOption4(option);
    setShowOptions4(false);
    // Perform action based on selected option
    if (option === "costume 1") {
      // Perform action for Option 1
    } else if (option === "costume 2") {
      // Perform action for Option 2
    }
  };
  const handleOptionSelect6 = (option) => {
    setSelectedOption6(option);
    setShowOptions6(false);
    // Perform action based on selected option
    if (option === "front") {
      // Perform action for Option 1
    } else if (option === "back") {
      // Perform action for Option 2
    }
  }; 
  const handleOptionSelect7 = (option) => {
    setSelectedOption7(option);
    setShowOptions7(false);
    // Perform action based on selected option
    if (option === "forward") {
      // Perform action for Option 1
    } else if (option === "backward") {
      // Perform action for Option 2
    }
  };
  const handleOptionSelect8 = (option) => {
    setSelectedOption8(option);
    setShowOptions8(false);
    // Perform action based on selected option
    if (option === "number") {
      // Perform action for Option 1
    } else if (option === "name") {
      // Perform action for Option 2
    }
  };
  const handleOptionSelect9 = (option) => {
    setSelectedOption9(option);
    setShowOptions9(false);
    // Perform action based on selected option
    if (option === "number") {
      // Perform action for Option 1
    } else if (option === "name") {
      // Perform action for Option 2
    }
  };
  const handleOptionSelect10 = (option) => {
    setSelectedOption10(option);
    setShowOptions10(false);
    // Perform action based on selected option
    if (option === "color") {
      // Perform action for Option 1
    } else if (option === "fisheye") {
      // Perform action for Option 2
    }
    else if (option === "whiri") {
      // Perform action for Option 2
    }
    else if (option === "fisheye") {
      // Perform action for Option 2
    }
    else if (option === "pixelate") {
      // Perform action for Option 2
    }
    else if (option === "mosaic") {
      // Perform action for Option 2
    }
    else if (option === "brightness") {
      // Perform action for Option 2
    }
    else if (option === "ghost") {
      // Perform action for Option 2
    }
    
  };

  const handleOptionSelect11 = (option) => {
    setSelectedOption11(option);
    setShowOptions11(false);
    // Perform action based on selected option
    if (option === "color") {
      // Perform action for Option 1
    } else if (option === "fisheye") {
      // Perform action for Option 2
    }
    else if (option === "whiri") {
      // Perform action for Option 2
    }
    else if (option === "fisheye") {
      // Perform action for Option 2
    }
    else if (option === "pixelate") {
      // Perform action for Option 2
    }
    else if (option === "mosaic") {
      // Perform action for Option 2
    }
    else if (option === "brightness") {
      // Perform action for Option 2
    }
    else if (option === "ghost") {
      // Perform action for Option 2
    }
    
  };
  const handleOptionSelect5 = (option) => {
    setSelectedOption5(option);
    setShowOptions5(false);
    // Perform action based on selected option
    if (option === "backdrop 1") {
      // Perform action for Option 1
    } else if (option === "next backdrop") {
      // Perform action for Option 2
    }
    else if (option === "previous backdrop") {
      // Perform action for Option 2
    }
    else if (option === "random backdrop") {
      // Perform action for Option 2
    }
  };


  return (
    <div className="w-60 flex-none h-full overflow-y-auto flex flex-col items-start p-2 border-r border-gray-200">
      <div className="font-bold">Events</div>
      <div className="flex flex-row justify-between items-center my-2">
        <div
          className={`cursor-pointer rounded-full py-1 px-3 mr-2 ${
            isCurrentTab ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700"
          }`}
          onClick={handleTabClick}
        >
          Motion
        </div>
        <div
          className={`cursor-pointer rounded-full py-1 px-3 ml-2 ${
            !isCurrentTab ? "bg-purple-700 text-white" : "bg-gray-200 text-gray-700"
          }`}
          onClick={handleTabClick}
        >
          Looks
        </div>
      </div>

      {/* Render Buttons based on selected tab */}
      {isCurrentTab ? (
        <>
          <div className="flex flex-row flex-wrap bg-yellow-500 text-white px-2 py-1 my-2 text-sm cursor-pointer">
            When <Icon name="flag" size={15} className="text-green-600 mx-2" />
            clicked
          </div>
          <div className="flex flex-row flex-wrap bg-yellow-500 text-white px-2 py-1 my-2 text-sm cursor-pointer">
            When this sprite clicked
          </div>
          <div
            className="bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer rounded shadow-md"
            onClick={handleMoveClick}
          >
            Move 10 steps
          </div>
          <div
            className="bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer rounded shadow-md"
            onClick={handleRotateLeftClick} disabled={!rotationEnabled}
          >
            Rotate Left
          </div>
          <div
            className="bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer rounded shadow-md"
            onClick={handleRotateRightClick} disabled={!rotationEnabled}
          >
            Rotate Right
          </div>
          <div className="relative">
            <button
              className="bg-blue-500 text-white px-2 py-1 my-2  text-sm cursor-pointer rounded shadow-md"
              onClick={handleGoToClick}
            >
              Go to {selectedOption} <span>&#9660;</span>
        
            {showOptions && (
                <div className="absolute bg-blue-500 text-white mt-1 py-2 rounded shadow-md z-10">
                  <div
                    className="cursor-pointer px-4 py-2 hover:bg-blue-900"
                    onClick={() => handleOptionSelect("random position")}
                  >
                    random position
                  </div>
                  <div
                    className="cursor-pointer px-4 py-2 hover:bg-blue-900"
                    onClick={() => handleOptionSelect("mouse pointer")}
                  >
                    mouse pointer
                  </div>
                </div>
              )}
            </button>
          </div>
          <div className="bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer rounded shadow-md flex items-center"  onClick={handleMoveBtnClick}>
            <span className="mr-1">x:</span>
            <input
              type="text"
              value={x}
              onChange={(e) => handleInputChange(e, setX)}
              className="border rounded px-1 mr-2 w-8 text-center text-black"
            />
            <span className="mr-1">y:</span>
            <input
              type="text"
              value={y}
              onChange={(e) => handleInputChange(e, setY)}
              className="border rounded px-1 mr-2 w-8 text-center text-black"
            />
          </div>
          <div className="relative">
            <button
              className="bg-blue-500 text-white  py-1 my-2  text-sm cursor-pointer rounded shadow-md"
              onClick={handleGoToClick3}
            >
             <span>Glide</span><input
              type="text"
              value={angle1}
              onChange={(e) => handleChange5(e, setAngle1)}
              className="border rounded   w-4 text-center text-black"
              />  <span>secs to {selectedOption3} <span>&#9660;</span></span>
              {showOptions3 && (
                <div className="absolute bg-blue-500 text-white mt-2 py-2 rounded shadow-md z-10">
                  <div
                    className="cursor-pointer px-4 py-2 hover:bg-blue-900"
                    onClick={() => handleOptionSelect3("random position")}
                  >
                    random position
                  </div>
                  <div
                    className="cursor-pointer px-4 py-2 hover:bg-blue-900"
                    onClick={() => handleOptionSelect3("mouse pointer")}
                  >
                    mouse pointer
                  </div>
                </div>
              )}
            </button>
          </div>
          <div className="relative">
            <button className="bg-blue-500 text-white py-1 my-2 text-sm cursor-pointer rounded shadow-md flex items-center" onClick={handleMoveBtnClick1}> 
              <span>Glide</span>
              <input
                type="text"
                value={angle2}
                onChange={(e) => handleChange6(e, setAngle2)}
                className="border rounded w-4 text-center text-black"
              />
              <span className="ml-1"> secs to</span>
              <div className="flex items-center ml-2">
                <span>x:</span>
                <input
                  type="text"
                  value={x3}
                  onChange={(e) => handleInputChange1(e, setX3)}
                  className="border rounded px-1 mr-2 w-8 text-center text-black"
                />
                <span className="mr-1">y:</span>
                <input
                  type="text"
                  value={y3}
                  onChange={(e) => handleInputChange1(e, setY3)}
                  className="border rounded px-1 mr-2 w-8 text-center text-black"
                />
              </div>
            </button>
          </div>

          <div className="bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer rounded shadow-md flex items-center" onClick={handleRotateClick}>
             <span className="mr-1">point in direction : </span>
             <input
              type="text"
              value={angle}
              onChange={(e) => handleChange(e, setAngle)}
              className="border rounded px-1 mr-2 w-8 text-center text-black"
              />
          </div>              
          <div className="relative">
            <button
              className="bg-blue-500 text-white px-1 py-1 my-1  text-sm cursor-pointer rounded shadow-md"
              onClick={handleGoToClick1}
            >
              point towards {selectedOption1} <span>&#9660;</span>
              {showOptions1 && (
                <div className="absolute bg-blue-500 text-white mt-1 py-2 rounded shadow-md">
                  <div
                    className="cursor-pointer px-4 py-2 hover:bg-blue-900"
                    onClick={() => handleOptionSelect1("random position")}
                  >
                    random position
                  </div>
                  <div
                    className="cursor-pointer px-4 py-2 hover:bg-blue-900"
                    onClick={() => handleOptionSelect1("mouse pointer")}
                  >
                    mouse pointer
                  </div>
                </div>
              )}
            </button>
          </div>
          <div className="bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer rounded shadow-md flex items-center"
               onClick={handleMoveClick1} >
              <span className="mr-1">change X by :</span>
              <input
                type="text"
                value={x1}
                onChange={(e) => handleChange1(e, setX1)}
                className="border rounded px-1 mr-2 w-8 text-center text-black"
              />
          </div>
          <div
              className="bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer rounded shadow-md flex items-center"
              onClick={handleMoveClick2}
            >
            <span className="mr-1">set X to :</span>
            <input
              type="text"
              value={x2}
              onChange={(e) => handleChange2(e, setX2)}
              className="border rounded px-1 mr-2 w-8 text-center text-black"
            />
          </div>
          <div className="bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer rounded shadow-md flex items-center" onClick={handleMoveClick3}>
            <span className="mr-1">Change Y by:</span>
            <input
              type="text"
              value={y1}
              onChange={(e) => handleChange3(e, setY1)}
              className="border rounded px-1 mr-2 w-8 text-center text-black"
            />
          </div>
          <div className="bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer rounded shadow-md flex items-center" onClick={handleMoveClick4}>
            <span className="mr-1">Set Y to:</span>
            <input
              type="text"
              value={y2}
              onChange={(e) => handleChange4(e, setY2)}
              className="border rounded px-1 mr-2 w-8 text-center text-black"
            />
          </div>
          <div className="bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer rounded shadow-md flex items-center"  onClick={handleBounceClick}>
          If on edge, then bounce
          </div>
          <div className="relative">
            <button
              className="bg-blue-500 text-white py-1 my-1 text-sm cursor-pointer rounded shadow-md"
              onClick={handleGoToClick2}
            >
              Set Rotation Style : {selectedOption2} <span>&#9660;</span>
              {showOptions2 && (
                <div className="absolute bg-blue-500 text-white mt-2 py-2 rounded shadow-md">
                  <div
                    className="cursor-pointer px-4 py-2 hover:bg-blue-900"
                    onClick={() => handleOptionSelect2("Left Right")}
                  >
                    Left-Right
                  </div>
                  <div
                    className="cursor-pointer px-1 py-2 hover:bg-blue-900"
                    onClick={() => handleOptionSelect2("Don't-rotate")}
                  >
                    Don't Rotate
                  </div>
                  <div
                    className="cursor-pointer px-4 py-2 hover:bg-blue-900"
                    onClick={() => handleOptionSelect2("All Around")}
                  >
                    All Around
                  </div>
                </div>
              )}
            </button>
          </div>
          <div>
            <label className="flex items-center">
              <input
                type="checkbox"
                onChange={(e) => handleCheckboxClick("xAxis", e.target.checked)}
                className="mr-2 form-checkbox text-blue-500"
              />
              <div className="bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer rounded shadow-md flex items-center">
              X-axis
                </div>
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                onChange={(e) => handleCheckboxClick("yAxis", e.target.checked)}
                className="mr-2 form-checkbox text-blue-500"
              />
              <div className="bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer rounded shadow-md flex items-center">
              Y-axis
                </div>
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                onChange={(e) => handleCheckboxClick("direction", e.target.checked)}
                className="mr-2 form-checkbox text-blue-500"
              />
              <div className="bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer rounded shadow-md flex items-center">
              Direction
                </div>
            </label>
          </div>
         





        </>
      ) : (
        <>
          {/* New Buttons */}
          {/* Add your new buttons here */}
          <div className="bg-purple-700 text-white px-2 py-1 my-2 text-sm cursor-pointer rounded shadow-md" onClick={handleClick}>
            <span className="mr-1">say</span>
            <input
              type="text"
              value={messageText}
              onChange={(e) => setMessageText(e.target.value)}
              className="border rounded px-1 mr-2 w-12 text-center text-black"
            />
            <span>for</span>
            <input
              type="text"
              value={durationValue}
              onChange={(e) => setDurationValue(e.target.value)}
              className="border rounded px-1 ml-1 mr-2 w-8 text-center text-black"
            />
            <span>secs</span>
          </div>

          <div className="bg-purple-700 text-white px-2 py-1 my-2 text-sm cursor-pointer rounded shadow-md" onClick={handleClick1}>
            <span className="mr-1">say</span>
            <input
              type="text"
              value={messageText1}
              onChange={(e) => setMessageText1(e.target.value)}
              className="border rounded px-1 mr-2 w-12 text-center text-black"
            />
          </div>


          <div className="bg-purple-700 text-white px-2 py-1 my-2 text-sm cursor-pointer rounded shadow-md" onClick={handleClick2}>
            <span className="mr-1">think</span>
            <input
              type="text"
              value={messageText2}
              onChange={(e) => setMessageText2(e.target.value)}
              className="border rounded px-1 mr-2 w-12 text-center text-black"
            />
            <span>for</span>
            <input
              type="text"
              value={durationValue2}
              onChange={(e) => setDurationValue2(e.target.value)}
              className="border rounded px-1 ml-1 mr-2 w-8 text-center text-black"
            />
            <span>secs</span>
          </div>

          <div className="bg-purple-700 text-white px-2 py-1 my-2 text-sm cursor-pointer rounded shadow-md" onClick={handleClick3}>
            <span className="mr-1">think</span>
            <input
              type="text"
              value={messageText3}
              onChange={(e) => setMessageText3(e.target.value)}
              className="border rounded px-1 mr-2 w-12 text-center text-black"
            />
          </div>

          <div className="relative">
            <button
              className="bg-purple-700 text-white px-2 py-1 my-2  text-sm cursor-pointer rounded shadow-md"
              onClick={handleGoToClick4}
            >
              Switch costume to {selectedOption4} <span>&#9660;</span>
        
            {showOptions4 && (
                <div className="absolute bg-purple-700 text-white mt-1 py-2 rounded shadow-md z-10">
                  <div
                    className="cursor-pointer px-4 py-2 hover:bg-purple-900"
                    onClick={() => handleOptionSelect4("costume 1")}
                  >
                    costume 1
                  </div>
                  <div
                    className="cursor-pointer px-4 py-2 hover:bg-purple-900"
                    onClick={() => handleOptionSelect4("costume 2")}
                  >
                    costume 2
                  </div>
                </div>
              )}
            </button>
          </div>
          <div className="bg-purple-700 text-white px-4 py-1 my-2 text-sm cursor-pointer rounded shadow-md" onClick={handleCostume}>next costume</div>
          <div className="relative">
            <button
              className="bg-purple-700 text-white  py-1 my-2  text-sm cursor-pointer rounded shadow-md"
              onClick={handleGoToClick5}
            >
              Switch backdrop to {selectedOption5} <span>&#9660;</span>
        
            {showOptions5 && (
                <div className="absolute bg-purple-700 text-white mt-1 py-2 rounded shadow-md z-10">
                  <div
                    className="cursor-pointer px-4 py-2 hover:bg-purple-900"
                    onClick={() => handleOptionSelect5("backdrop 1")}
                  >
                    backdrop 1
                  </div>
                  <div
                    className="cursor-pointer px-4 py-2 hover:bg-purple-900"
                    onClick={() => handleOptionSelect5("next backdrop")}
                  >
                    next backdrop
                  </div>
                  <div
                    className="cursor-pointer px-4 py-2 hover:bg-purple-900"
                    onClick={() => handleOptionSelect5("previous backdrop")}
                  >
                    previous backdrop
                  </div>
                  <div
                    className="cursor-pointer  py-2 hover:bg-purple-900"
                    onClick={() => handleOptionSelect5("random backdrop")}
                  >
                    random backdrop
                  </div>
                </div>
              )}
            </button>
          </div>
          <div className="bg-purple-700 text-white px-4 py-1 my-2 text-sm cursor-pointer rounded shadow-md" onClick={handleBackdrop}>next backdrop</div>
          <div className="bg-purple-700 text-white px-2 py-1 my-2  text-sm cursor-pointer rounded shadow-md" onClick={handleIncreaseSize}>
             <span className="mr-1">change size by : </span>
             <input
              type="text"
              value={sizeInput}
              onChange={handleSizeChange}
              className="border rounded px-1 mr-2 w-8 text-center text-black"
              />
          </div>  
          <div className="bg-purple-700 text-white px-2 py-1 my-2  text-sm cursor-pointer rounded shadow-md" onClick={handleDevideSize}>
             <span className="mr-1">set size by : </span>
             <input
              type="text"
              value={sizeInput1}
              onChange={handleSizeChange1}
              className="border rounded px-1 mr-2 w-8 text-center text-black"
              />
              <span>%</span>
          </div>  
          <div className="relative">
              <button
                className="bg-purple-700 text-white  py-1 my-2  text-sm cursor-pointer rounded shadow-md"
                onClick={handleGoToClick10}
                >
               change {selectedOption10} <span>&#9660;</span>
          
                {showOptions10 && (
                  <div className="absolute bg-purple-700 text-white mt-1 py-2 rounded shadow-md z-10">
                    <div
                      className="cursor-pointer px-1 py-2 hover:bg-purple-900"
                      onClick={() => handleOptionSelect10("color")}
                    >
                      color
                    </div>
                    <div
                      className="cursor-pointer px-4 py-2 hover:bg-purple-900"
                      onClick={() => handleOptionSelect10("fisheye")}
                    >
                      fisheye
                    </div>
                    <div
                      className="cursor-pointer px-4 py-2 hover:bg-purple-900"
                      onClick={() => handleOptionSelect10("whiri")}
                    >
                      whiri
                    </div>
                    <div
                      className="cursor-pointer px-4 py-2 hover:bg-purple-900"
                      onClick={() => handleOptionSelect10("pixelate")}
                    >
                      pixelate
                    </div>
                    <div
                      className="cursor-pointer px-4 py-2 hover:bg-purple-900"
                      onClick={() => handleOptionSelect10("mosaic")}
                    >
                      mosaic
                    </div>
                    <div
                      className="cursor-pointer px-4 py-2 hover:bg-purple-900"
                      onClick={() => handleOptionSelect10("brightness")}
                    >
                      brightness
                    </div>
                    <div
                      className="cursor-pointer px-4 py-2 hover:bg-purple-900"
                      onClick={() => handleOptionSelect10("ghost")}
                    >
                      ghost
                    </div>
                  </div>
                )}
                <span className="ml-2">effect by </span>
                <input
                type="text"
                value={durationValue5}
                onChange={(e) => setDurationValue5(e.target.value)}
                className="border rounded px-1 ml-1 mr-2 w-8 text-center text-black"
               />
              </button>
          </div>
          <div className="relative">
              <button
                className="bg-purple-700 text-white  py-1 my-2  text-sm cursor-pointer rounded shadow-md"
                onClick={handleGoToClick11}
                >
               set {selectedOption11} <span>&#9660;</span>
          
                {showOptions11 && (
                  <div className="absolute bg-purple-700 text-white mt-1 py-2 rounded shadow-md z-10">
                    <div
                      className="cursor-pointer px-1 py-2 hover:bg-purple-900"
                      onClick={() => handleOptionSelect11("color")}
                    >
                      color
                    </div>
                    <div
                      className="cursor-pointer px-4 py-2 hover:bg-purple-900"
                      onClick={() => handleOptionSelect11("fisheye")}
                    >
                      fisheye
                    </div>
                    <div
                      className="cursor-pointer px-4 py-2 hover:bg-purple-900"
                      onClick={() => handleOptionSelect11("whiri")}
                    >
                      whiri
                    </div>
                    <div
                      className="cursor-pointer px-4 py-2 hover:bg-purple-900"
                      onClick={() => handleOptionSelect11("pixelate")}
                    >
                      pixelate
                    </div>
                    <div
                      className="cursor-pointer px-4 py-2 hover:bg-purple-900"
                      onClick={() => handleOptionSelect11("mosaic")}
                    >
                      mosaic
                    </div>
                    <div
                      className="cursor-pointer px-4 py-2 hover:bg-purple-900"
                      onClick={() => handleOptionSelect11("brightness")}
                    >
                      brightness
                    </div>
                    <div
                      className="cursor-pointer px-4 py-2 hover:bg-purple-900"
                      onClick={() => handleOptionSelect11("ghost")}
                    >
                      ghost
                    </div>
                  </div>
                )}
                <span className="ml-2">effect by </span>
                <input
                type="text"
                value={durationValue6}
                onChange={(e) => setDurationValue6(e.target.value)}
                className="border rounded px-1 ml-1 mr-2 w-8 text-center text-black"
               />
              </button>
          </div>
          <div className="bg-purple-700 text-white px-4 py-1 my-2 text-sm cursor-pointer rounded shadow-md" onClick={handleGraphicEffect}>clear graphic effects</div>
          <div className="bg-purple-700 text-white px-4 py-1 my-2 text-sm cursor-pointer rounded shadow-md" onClick={handleShowCat}>show</div>
          <div className="bg-purple-700 text-white px-4 py-1 my-2 text-sm cursor-pointer rounded shadow-md" onClick={handleHideCat}>hide</div>
          <div className="relative">
            <button
              className="bg-purple-700 text-white px-2 py-1 my-2  text-sm cursor-pointer rounded shadow-md"
              onClick={handleGoToClick6}
            >
              go to {selectedOption6} <span>&#9660;</span>
        
            {showOptions6 && (
                <div className="absolute bg-purple-700 text-white mt-1 py-2 rounded shadow-md z-10">
                  <div
                    className="cursor-pointer px-4 py-2 hover:bg-purple-900"
                    onClick={() => handleOptionSelect6("front")}
                  >
                    front
                  </div>
                  <div
                    className="cursor-pointer px-4 py-2 hover:bg-purple-900"
                    onClick={() => handleOptionSelect6("back")}
                  >
                    back
                  </div>
                </div>
              )}
              <span className="ml-2">layer</span>
            </button>
          </div>
          <div className="relative">
              <button
                className="bg-purple-700 text-white px-2 py-1 my-2  text-sm cursor-pointer rounded shadow-md"
                onClick={handleGoToClick7}
                >
                go to {selectedOption7} <span>&#9660;</span>
          
                {showOptions7 && (
                  <div className="absolute bg-purple-700 text-white mt-1 py-2 rounded shadow-md z-10">
                    <div
                      className="cursor-pointer px-4 py-2 hover:bg-purple-900"
                      onClick={() => handleOptionSelect7("forward")}
                    >
                      forward
                    </div>
                    <div
                      className="cursor-pointer px-4 py-2 hover:bg-purple-900"
                      onClick={() => handleOptionSelect7("backward")}
                    >
                      backward
                    </div>
                  </div>
                )}
                <input
                type="text"
                value={durationValue4}
                onChange={(e) => setDurationValue4(e.target.value)}
                className="border rounded px-1 ml-1 mr-2 w-8 text-center text-black"
               />
                <span className="ml-2">layers</span>
              </button>
          </div>
          <div>
          <label className="flex items-center">
            <input
              type="checkbox"
              onChange={(e) => handleCheckboxClick("xAxis", e.target.checked)}
              className="mr-2 form-checkbox text-purple-700"
            />
            <div className="bg-purple-700 text-white px-2 py-1 my-2 text-sm cursor-pointer rounded shadow-md flex items-center" onClick={handleGoToClick8}>
              costume {selectedOption8} <span>&#9660;</span>
              {showOptions8 && (
                <div className="absolute bg-purple-700 text-white mt-1 py-2 rounded shadow-md z-10">
                  <div
                    className="cursor-pointer px-4 py-2 hover:bg-purple-900"
                    onClick={() => handleOptionSelect8("number")}
                  >
                    number
                  </div>
                  <div
                    className="cursor-pointer px-4 py-2 hover:bg-purple-900"
                    onClick={() => handleOptionSelect8("name")}
                  >
                    name
                  </div>
                </div>
              )}
            </div>
          </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                onChange={(e) => handleCheckboxClick("yAxis", e.target.checked)}
                className="mr-2 form-checkbox text-purple-700"
              />
              <div className="bg-purple-700 text-white px-2 py-1 my-2 text-sm cursor-pointer rounded shadow-md flex items-center mr-2" onClick={handleGoToClick9}>
                              backdrop {selectedOption9} <span>&#9660;</span>
                    {showOptions9 && (
                      <div className="absolute bg-purple-700 text-white mt-1 py-2 rounded shadow-md z-10">
                        <div
                          className="cursor-pointer px-4 py-2 hover:bg-purple-900"
                          onClick={() => handleOptionSelect9("number")}
                        >
                          number
                        </div>
                        <div
                          className="cursor-pointer px-4 py-2 hover:bg-purple-900"
                          onClick={() => handleOptionSelect9("name")}
                        >
                          name
                        </div>
                      </div>
                    )}
              </div>
            </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      onChange={(e) => handleCheckboxClick("direction", e.target.checked)}
                      className="mr-2 form-checkbox text-purple-700"
                    />
                    <div className="bg-purple-700 text-white px-2 py-1 my-2 text-sm cursor-pointer rounded shadow-md flex items-center">
                    size
                      </div>
                  </label>
          </div>
          

          </>
        )}
      </div>
      



  );
}
