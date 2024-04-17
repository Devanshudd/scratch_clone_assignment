import React, { useState, useRef } from "react";

export default function Sidebar({
  rotateSetSprite,
  moveSetSprite,
  catPosition,
  moveSprite,
  rotateSprite,
  bounceCat,
  onLookCheckboxChange,
  onCheckboxChange,
  OnPref,
  onSayClick,
  onShowCat,
  onHideCat,
  increaseSize,
  calcPercentageSize,
}) {
  const [isCurrentTab, setCurrentTab] = useState(true);
  const [selectedOption, setSelectedOption] = useState("random position");
  const [showOptions, setShowOptions] = useState(false);
  const [showOptions3, setShowOptions3] = useState(false);
  const [selectedOption3, setSelectedOption3] = useState("random position");
  const [selectedOption1, setSelectedOption1] = useState("mouse pointer");
  const [showOptions1, setShowOptions1] = useState(false);
  const [x, setX] = useState(0);
  const [x2, setX2] = useState(0);
  const [x1, setX1] = useState(10);
  const [x3, setX3] = useState(0);
  const [x4, setX4] = useState(10);
  const [y3, setY3] = useState(0);
  const [y, setY] = useState(0);
  const [angle, setAngle] = useState("0");
  const [sizeInput, setSizeInput] = useState(10);
  const [sizeInput1, setSizeInput1] = useState(100);
  const [angle1, setAngle1] = useState("1");
  const [angle2, setAngle2] = useState("1");
  const [y1, setY1] = useState(10);
  const [y2, setY2] = useState(0);
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
  const [pref, setPref] = useState("");
  const [movementInProgress, setMovementInProgress] = useState(false);
  const [movementInProgress1, setMovementInProgress1] = useState(false);
  const [movementInProgress2, setMovementInProgress2] = useState(false);

  const handleRotation = (option) => {
    if ((option = "Left Right")) {
      console.log("inside left right");
    } else if ((option = "Don't-rotate")) {
      console.log("inside don't rotate");
    } else if ((option = "All Around")) {
      console.log("inside all around");
    }
  };

  const handleGraphicEffect = () => {
    console.log("Clear Graphic Effects");
  };

  const handleSizeChange = (e) => {
    let value = parseInt(e.target.value);
    if (isNaN(value)) value = 0;
    setSizeInput(parseInt(e.target.value));
  };

  const handleSizeChange1 = (e) => {
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
    calcPercentageSize(sizeInput1);
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
    onSayClick(messageText, durationValue, true);
  };

  const handleClick1 = () => {
    onSayClick(messageText1, durationValue1, true);
  };

  const handleCostume = () => {
    console.log("next costume");
  };

  const handleBackdrop = () => {
    console.log("next backdrop");
  };

  const handleClick2 = () => {
    onSayClick(messageText2, durationValue2, true);
  };

  const handleClick3 = () => {
    onSayClick(messageText3, durationValue3, true);
  };

  const handleCheckboxClick = (checkboxName, isChecked) => {
    onCheckboxChange(checkboxName, isChecked);
  };
  const handleCheckboxClick1 = (checkboxName, isChecked) => {
    onLookCheckboxChange(checkboxName, isChecked);
  };

  const handleBounceClick = () => {
    bounceCat();
  };
  const handleSetRotation = (event) => {
    event.dataTransfer.setData("type", "setr");
    event.dataTransfer.setData("value", "setr");
  };
  const handleCheckboxX = (event) => {
    event.dataTransfer.setData("type", "boxX");
    event.dataTransfer.setData("value", "boxX");
  };
  const handleCheckboxY = (event) => {
    event.dataTransfer.setData("type", "boxY");
    event.dataTransfer.setData("value", "boxY");
  };
  const handleCheckboxD = (event) => {
    event.dataTransfer.setData("type", "boxD");
    event.dataTransfer.setData("value", "boxD");
  };
  const handleSayTime = (event) => {
    event.dataTransfer.setData("type", "sayt");
    event.dataTransfer.setData("value", messageText);
    event.dataTransfer.setData("value1", durationValue.toString());
  };
  const handleSayTime1 = (event) => {
    event.dataTransfer.setData("type", "say");
    event.dataTransfer.setData("value", messageText1);
  };
  const handleThinkTime = (event) => {
    event.dataTransfer.setData("type", "thinkt");
    event.dataTransfer.setData("value", messageText2);
    event.dataTransfer.setData("value1", durationValue2.toString());
  };
  const handleThinkTime1 = (event) => {
    event.dataTransfer.setData("type", "think");
    event.dataTransfer.setData("value", messageText3);
  };
  const handleSwitch = (event) => {
    event.dataTransfer.setData("type", "switch");
    event.dataTransfer.setData("value", "switch");
  };
  const handleSwitchCostume = (event) => {
    event.dataTransfer.setData("type", "costume");
    event.dataTransfer.setData("value", "costume");
  };
  const handleSwitchBackdrop = (event) => {
    event.dataTransfer.setData("type", "switch1");
    event.dataTransfer.setData("value", "switch1");
  };
  const handleSwitchBackdrop1 = (event) => {
    event.dataTransfer.setData("type", "backdrop");
    event.dataTransfer.setData("value", "backdrop");
  };
  const handleSize = (event) => {
    event.dataTransfer.setData("type", "size");
    event.dataTransfer.setData("value", sizeInput.toString());
  };
  const handlePercentageSize = (event) => {
    console.log("Inside hendlePercentage");
    event.dataTransfer.setData("type", "size123");
    event.dataTransfer.setData("value", sizeInput1.toString());
  };
  const handleChangeColor = (event) => {
    event.dataTransfer.setData("type", "changec");
    event.dataTransfer.setData("value", durationValue5.toString());
  };
  const handleSetColor = (event) => {
    event.dataTransfer.setData("type", "setc");
    event.dataTransfer.setData("value", durationValue6.toString());
  };
  const handleClearGraphics = (event) => {
    event.dataTransfer.setData("type", "clearg");
    event.dataTransfer.setData("value", "clearg");
  };
  const handleShow = (event) => {
    event.dataTransfer.setData("type", "show");
    event.dataTransfer.setData("value", "show");
  };
  const handleHide = (event) => {
    event.dataTransfer.setData("type", "hide");
    event.dataTransfer.setData("value", "hide");
  };
  const handleLayers = (event) => {
    event.dataTransfer.setData("type", "layers");
    event.dataTransfer.setData("value", "layers");
  };
  const handleLayers1 = (event) => {
    event.dataTransfer.setData("type", "layers1");
    event.dataTransfer.setData("value", durationValue4.toString());
  };
  const handleCostumeNumber = (event) => {
    event.dataTransfer.setData("type", "costumen");
    event.dataTransfer.setData("value", "costumen");
  };
  const handleBackdropNumber = (event) => {
    event.dataTransfer.setData("type", "backdropn");
    event.dataTransfer.setData("value", "backdropn");
  };
  const handleShowSize = (event) => {
    event.dataTransfer.setData("type", "showsize");
    event.dataTransfer.setData("value", "showsize");
  };
  const handleGoToClick2 = () => {
    setShowOptions2((prevState) => !prevState);
  };

  const handleChange = (e) => {
    let value = parseInt(e.target.value);
    if (isNaN(value)) value = 0;
    value = Math.max(-999, Math.min(value, 999));
    setX4(value);
    console.log("x4 in sidebar.js:", x4);
  };

  const handleChange7 = (e, setter) => {
    let value = parseInt(e.target.value);
    if (isNaN(value)) value = 0;
    value = Math.max(-999, Math.min(value, 999));
    console.log("New size:", value);
    setter(value.toString());
  };

  const handleChange1 = (e, setter) => {
    let value = parseInt(e.target.value);
    if (isNaN(value)) value = 0;
    value = Math.max(-999, Math.min(value, 999));
    setter(value.toString());
  };
  const handleChange2 = (e, setter) => {
    let value = parseInt(e.target.value);
    if (isNaN(value)) value = 0;
    value = Math.max(-999, Math.min(value, 999));
    setter(value.toString());
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
    let value = parseInt(e.target.value);
    if (isNaN(value)) value = 0;
    value = Math.max(-999, Math.min(value, 999));
    setter(value.toString());
  };
  const handleChange6 = (e, setter) => {
    let value = parseInt(e.target.value);
    if (isNaN(value)) value = 0;
    value = Math.max(-999, Math.min(value, 999));
    setter(value.toString());
  };

  const handleRotateClick = () => {
    rotateSetSprite(parseInt(angle));
  };

  const handleInputChange = (e, setter) => {
    let value = parseInt(e.target.value);
    if (isNaN(value)) value = 0;
    value = Math.max(-999, Math.min(value, 999));
    setter(value.toString());
  };
  const handleInputChange1 = (e, setter) => {
    let value = parseInt(e.target.value);
    if (isNaN(value)) value = 0;
    value = Math.max(-999, Math.min(value, 999));
    setter(value.toString());
  };

  const handleMoveBtnClick = () => {
    moveSetSprite({ x: parseInt(x), y: parseInt(y) });
  };
  const handleMoveBtnClick1 = () => {
    if (!movementInProgress) {
      setMovementInProgress(true);
      const durationInSeconds = parseInt(angle2);
      const targetX = parseInt(x3);
      const targetY = parseInt(y3);
      const dx = (targetX - catPosition.x) / (durationInSeconds * 1000);
      const dy = (targetY - catPosition.y) / (durationInSeconds * 1000);
      let currentTime = 0;
      const moveInterval = setInterval(() => {
        const newX = catPosition.x + dx * currentTime;
        const newY = catPosition.y + dy * currentTime;
        moveSetSprite({ x: newX, y: newY });
        currentTime += 1;
        if (currentTime >= durationInSeconds * 1000) {
          clearInterval(moveInterval);
          setMovementInProgress(false);
        }
      }, 1);
    }
  };

  const handleTabClick = () => {
    setCurrentTab(!isCurrentTab);
  };

  // const handleDragStart = (event) => {
  //   // Pass the button component as data
  //   const buttonComponent = document.getElementById("moveButton");
  //   event.dataTransfer.setData("move", buttonComponent.outerHTML);
  //   event.dataTransfer.setData("x4", x4); // Pass x4 value as data
  // };
  // const handleDragLeftRotate = (event) => {
  //   // Pass the button component as data
  //   const buttonComponent1 = document.getElementById("leftRotateButton");
  //   event.dataTransfer.setData("left rotate", buttonComponent1.outerHTML);
  // };

  const handleDragStart = (event) => {
    // Pass the button component as data
    event.dataTransfer.setData("type", "move");
    event.dataTransfer.setData("value", x4.toString()); // Pass x4 value as data
  };

  const handleDragLeftRotate = (event) => {
    // Pass the button component as data
    event.dataTransfer.setData("type", "lrotate");
    event.dataTransfer.setData("value", "leftRotate"); // Assuming a placeholder value for left rotate
  };
  const handleDragRightRotate = (event) => {
    // Pass the button component as data
    event.dataTransfer.setData("type", "rrotate");
    event.dataTransfer.setData("value", "rightRotate"); // Assuming a placeholder value for left rotate
  };
  const handleDragGoTo = (event) => {
    // Pass the button component as data
    event.dataTransfer.setData("type", "goto");
    event.dataTransfer.setData("value", "Goto"); // Assuming a placeholder value for left rotate
  };
  const handleDragGoToXY = (event) => {
    // Pass the button component as data
    event.dataTransfer.setData("type", "gotoxy");
    event.dataTransfer.setData("value", x.toString());
    event.dataTransfer.setData("value1", y.toString()); // Assuming a placeholder value for left rotate
  };
  const handleDragGlide = (event) => {
    // Pass the button component as data
    event.dataTransfer.setData("type", "glide");
    event.dataTransfer.setData("value", angle1.toString()); // Assuming a placeholder value for left rotate
  };
  const handleDragGlideXY = (event) => {
    // Pass the button component as data
    event.dataTransfer.setData("type", "glidexy");
    event.dataTransfer.setData("value", angle2.toString());
    event.dataTransfer.setData("value1", x3.toString());
    event.dataTransfer.setData("value2", y3.toString());
  };
  const handlePointDir = (event) => {
    event.dataTransfer.setData("type", "point");
    event.dataTransfer.setData("value", angle.toString());
  };

  const handleMousePoint = (event) => {
    event.dataTransfer.setData("type", "mousepoint");
    event.dataTransfer.setData("value", "mousepoint");
  };
  const handleChangeX = (event) => {
    event.dataTransfer.setData("type", "changex");
    event.dataTransfer.setData("value", x1.toString());
  };
  const handleSetX = (event) => {
    event.dataTransfer.setData("type", "setx");
    event.dataTransfer.setData("value", x2.toString());
  };
  const handleChangeY = (event) => {
    event.dataTransfer.setData("type", "changey");
    event.dataTransfer.setData("value", y1.toString());
  };
  const handleSetY = (event) => {
    event.dataTransfer.setData("type", "sety");
    event.dataTransfer.setData("value", y2.toString());
  };
  const handleEdge = (event) => {
    event.dataTransfer.setData("type", "edge");
    event.dataTransfer.setData("value", "edge");
  };

  const handleMoveClick = () => {
    moveSprite({ x: parseInt(x4), y: 0 });
  };
  const handleMoveClick1 = () => {
    moveSprite({ x: parseInt(x1), y: 0 });
  };

  const handleMoveClick2 = () => {
    moveSetSprite({ x: parseInt(x2), y: 0 });
  };

  const handleMoveClick3 = () => {
    moveSprite({ x: 0, y: parseInt(y1) });
  };

  const handleMoveClick4 = () => {
    moveSetSprite({ x: 0, y: parseInt(y2) });
  };
  const handleRotateLeftClick = () => {
    if (rotationEnabled) {
      rotateSprite(-15);
    }
  };

  const handleRotateRightClick = () => {
    if (rotationEnabled) {
      rotateSprite(15);
    }
  };

  const handleGoToClick3 = () => {
    setShowOptions3((prevState) => !prevState);
  };

  const handleGlideOnTime = (option) => {
    console.log("Devanshu:", option);
    if (option === "random position") {
      const minX = 1;
      const maxX = 272;
      const minY = 1;
      const maxY = 1086;
      const xx = Math.random() * (maxX - minX) + minX;
      const yy = Math.random() * (maxY - minY) + minY;
      console.log("x:", x, "\n", "y:", y);
      if (!movementInProgress1) {
        setMovementInProgress1(true);
        const durationInSeconds1 = parseInt(angle1);
        const targetX = parseInt(xx);
        const targetY = parseInt(yy);
        const dx = (targetX - catPosition.x) / (durationInSeconds1 * 1000);
        const dy = (targetY - catPosition.y) / (durationInSeconds1 * 1000);
        let currentTime = 0;
        const moveInterval = setInterval(() => {
          const newX = catPosition.x + dx * currentTime;
          const newY = catPosition.y + dy * currentTime;
          moveSetSprite({ x: newX, y: newY });
          currentTime += 1;
          if (currentTime >= durationInSeconds1 * 1000) {
            clearInterval(moveInterval);
            setMovementInProgress1(false);
          }
        }, 1);
      }
    } else if (option === "mouse pointer") {
      const xx = -10;
      const yy = 117;
      console.log("x:", x, "\n", "y:", y);
      if (!movementInProgress2) {
        setMovementInProgress2(true);
        const durationInSeconds1 = parseInt(angle1);
        const targetX = parseInt(xx);
        const targetY = parseInt(yy);
        const dx = (targetX - catPosition.x) / (durationInSeconds1 * 1000);
        const dy = (targetY - catPosition.y) / (durationInSeconds1 * 1000);
        let currentTime = 0;
        const moveInterval = setInterval(() => {
          const newX = catPosition.x + dx * currentTime;
          const newY = catPosition.y + dy * currentTime;
          moveSetSprite({ x: newX, y: newY });
          currentTime += 1;
          if (currentTime >= durationInSeconds1 * 1000) {
            clearInterval(moveInterval);
            setMovementInProgress2(false);
          }
        }, 1);
      }
    }
  };

  const handleRandomPosition = (option) => {
    console.log("Devanshu:", option);
    if (option === "random position") {
      const minX = 1;
      const maxX = 272;
      const minY = 1;
      const maxY = 1086;
      const x = Math.random() * (maxX - minX) + minX;
      const y = Math.random() * (maxY - minY) + minY;
      console.log("x:", x, "\n", "y:", y);
      moveSetSprite({ x: x, y: y });
    } else if (option === "mouse pointer") {
      console.log("inside mouse pointer");
      moveSetSprite({ x: -10, y: 117 });
    }
  };
  const handleRandomPositionAngle = (option) => {
    const random = -129;
    rotateSetSprite(random);
    console.log("rn1", random);
  };

  const handleGoToClick = (option) => {
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

  const handleGoToClick12 = () => {
    setShowOptions8((prevState) => !prevState);
  };
  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setShowOptions(false);
    if (option === "random position") {
      console.log(option);
    } else if (option === "mouse pointer") {
    }
  };
  const handleOptionSelect3 = (option) => {
    setSelectedOption3(option);
    setShowOptions3(false);
    if (option === "random position") {
    } else if (option === "mouse pointer") {
    }
  };

  const handleOptionSelect1 = (option) => {
    setSelectedOption1(option);
    setShowOptions1(false);
    if (option === "mouse pointer") {
      handleRandomPositionAngle(option);
    }
  };

  const handleOptionSelect2 = (option) => {
    setSelectedOption2(option);
    setShowOptions2(false);
    if (option === "Left Right") {
      setRotationEnabled(true);
      handleRotation(option);
    } else if (option === "Don't-rotate") {
      setRotationEnabled(false);
      handleRotation(option);
    } else if (option === "All Around") {
      setRotationEnabled(true);
      handleRotation(option);
    }
  };

  const handleOptionSelect4 = (option) => {
    setSelectedOption4(option);
    setShowOptions4(false);
    if (option === "costume 1") {
    } else if (option === "costume 2") {
    }
  };
  const handleOptionSelect6 = (option) => {
    setSelectedOption6(option);
    setShowOptions6(false);
    if (option === "front") {
      1;
    } else if (option === "back") {
    }
  };
  const handleOptionSelect7 = (option) => {
    setSelectedOption7(option);
    setShowOptions7(false);
    if (option === "forward") {
    } else if (option === "backward") {
    }
  };
  const handleOptionSelect8 = (option) => {
    setSelectedOption8(option);
    setShowOptions8(false);
    if (option === "number") {
    } else if (option === "name") {
    }
  };
  const handleOptionSelect9 = (option) => {
    setSelectedOption9(option);
    setShowOptions9(false);
    if (option === "number") {
    } else if (option === "name") {
    }
  };
  const handleOptionSelect10 = (option) => {
    setSelectedOption10(option);
    setShowOptions10(false);
    if (option === "color") {
    } else if (option === "fisheye") {
    } else if (option === "whiri") {
    } else if (option === "fisheye") {
    } else if (option === "pixelate") {
    } else if (option === "mosaic") {
    } else if (option === "brightness") {
    } else if (option === "ghost") {
    }
  };

  const handleOptionSelect11 = (option) => {
    setSelectedOption11(option);
    setShowOptions11(false);

    if (option === "color") {
    } else if (option === "fisheye") {
    } else if (option === "whiri") {
    } else if (option === "fisheye") {
    } else if (option === "pixelate") {
    } else if (option === "mosaic") {
    } else if (option === "brightness") {
    } else if (option === "ghost") {
    }
  };
  const handleOptionSelect5 = (option) => {
    setSelectedOption5(option);
    setShowOptions5(false);

    if (option === "backdrop 1") {
    } else if (option === "next backdrop") {
    } else if (option === "previous backdrop") {
    } else if (option === "random backdrop") {
    }
  };

  return (
    <div className="w-60 flex-none h-full overflow-y-auto flex flex-col items-start p-2 border-r border-gray-200">
      <div className="font-bold">Events</div>
      <div className="flex flex-row justify-between items-center my-2">
        <div
          className={`cursor-pointer rounded-full py-1 px-3 mr-2 ${
            isCurrentTab
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-700"
          }`}
          onClick={handleTabClick}
        >
          Motion
        </div>
        <div
          className={`cursor-pointer rounded-full py-1 px-3 ml-2 ${
            !isCurrentTab
              ? "bg-purple-700 text-white"
              : "bg-gray-200 text-gray-700"
          }`}
          onClick={handleTabClick}
        >
          Looks
        </div>
      </div>

      {isCurrentTab ? (
        <>
          <div
            className="bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer rounded shadow-md"
            onClick={handleMoveClick}
            draggable="true"
            onDragStart={handleDragStart}
            id="moveButton"
          >
            <span className="mr-1">Move</span>{" "}
            <input
              type="text"
              onChange={handleChange}
              value={x4}
              className="border rounded px-1 mr-2 w-8 text-center text-black"
            />{" "}
            <span className="mr-1">steps</span>
          </div>

          <div
            className="bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer rounded shadow-md"
            onClick={handleRotateLeftClick}
            disabled={!rotationEnabled}
            draggable="true"
            onDragStart={handleDragLeftRotate}
            id="leftRotateButton"
          >
            Rotate Left
          </div>
          <div
            className="bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer rounded shadow-md"
            onClick={handleRotateRightClick}
            draggable="true"
            disabled={!rotationEnabled}
            onDragStart={handleDragRightRotate}
          >
            Rotate Right
          </div>
          <div className="relative">
            <button
              className="bg-blue-500 text-white px-2 py-1 my-2  text-sm cursor-pointer rounded shadow-md"
              draggable="true"
              onDragStart={handleDragGoTo}
            >
              <span onClick={() => handleRandomPosition(selectedOption)}>
                {" "}
                go to{" "}
              </span>{" "}
              <span
                className="bg-white text-black px-1"
                onClick={handleGoToClick}
              >
                {" "}
                {selectedOption}&#9660;
              </span>
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
          <div
            className="bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer rounded shadow-md flex items-center"
            onClick={handleMoveBtnClick}
            draggable="true"
            onDragStart={handleDragGoToXY}
          >
            <span className="mr-1">go to</span>
            <span className="mr-1"> x:</span>
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
              draggable="true"
              onDragStart={handleDragGlide}
            >
              <span onClick={() => handleGlideOnTime(selectedOption3)}>
                Glide
              </span>
              <input
                type="text"
                value={angle1}
                onChange={(e) => handleChange5(e, setAngle1)}
                className="border rounded   w-4 text-center text-black"
              />{" "}
              <span>
                secs to{" "}
                <span
                  className="bg-white text-black"
                  onClick={handleGoToClick3}
                >
                  {selectedOption3} &#9660;
                </span>
              </span>
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
            <button
              className="bg-blue-500 text-white py-1 my-2 text-sm cursor-pointer rounded shadow-md flex items-center"
              onClick={handleMoveBtnClick1}
              draggable="true"
              onDragStart={handleDragGlideXY}
            >
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

          <div
            className="bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer rounded shadow-md flex items-center"
            onClick={handleRotateClick}
            draggable="true"
            onDragStart={handlePointDir}
          >
            <span className="mr-1">point in direction : </span>
            <input
              type="text"
              value={angle}
              onChange={(e) => handleChange7(e, setAngle)}
              className="border rounded px-1 mr-2 w-8 text-center text-black"
            />
          </div>
          <div className="relative">
            <button
              className="bg-blue-500 text-white px-1 py-1 my-1  text-sm cursor-pointer rounded shadow-md"
              draggable="true"
              onDragStart={handleMousePoint}
            >
              <span onClick={handleRandomPositionAngle}>point towards</span>{" "}
              <span
                className="bg-white text-black px-1"
                onClick={handleGoToClick1}
              >
                {selectedOption1}&#9660;
              </span>
              {showOptions1 && (
                <div className="absolute bg-blue-500 text-white mt-1 py-2 rounded shadow-md">
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
          <div
            className="bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer rounded shadow-md flex items-center"
            onClick={handleMoveClick1}
            draggable="true"
            onDragStart={handleChangeX}
          >
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
            draggable="true"
            onDragStart={handleSetX}
          >
            <span className="mr-1">set X to :</span>
            <input
              type="text"
              value={x2}
              onChange={(e) => handleChange2(e, setX2)}
              className="border rounded px-1 mr-2 w-8 text-center text-black"
            />
          </div>
          <div
            className="bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer rounded shadow-md flex items-center"
            onClick={handleMoveClick3}
            draggable="true"
            onDragStart={handleChangeY}
          >
            <span className="mr-1">Change Y by:</span>
            <input
              type="text"
              value={y1}
              onChange={(e) => handleChange3(e, setY1)}
              className="border rounded px-1 mr-2 w-8 text-center text-black"
            />
          </div>
          <div
            className="bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer rounded shadow-md flex items-center"
            onClick={handleMoveClick4}
            draggable="true"
            onDragStart={handleSetY}
          >
            <span className="mr-1">Set Y to:</span>
            <input
              type="text"
              value={y2}
              onChange={(e) => handleChange4(e, setY2)}
              className="border rounded px-1 mr-2 w-8 text-center text-black"
            />
          </div>
          <div
            className="bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer rounded shadow-md flex items-center"
            onClick={handleBounceClick}
            draggable="true"
            onDragStart={handleEdge}
          >
            If on edge, then bounce
          </div>
          <div className="relative">
            <button
              className="bg-blue-500 text-white py-1 my-1 text-sm cursor-pointer rounded shadow-md"
              draggable="true"
              onDragStart={handleSetRotation}
            >
              <span onClick={handleRotation}>Set Rotation Style :</span>{" "}
              <span className="bg-white text-black " onClick={handleGoToClick2}>
                {selectedOption2}&#9660;
              </span>
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
              <div
                className="bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer rounded shadow-md flex items-center"
                draggable="true"
                onDragStart={handleCheckboxX}
              >
                X-axis
              </div>
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                onChange={(e) => handleCheckboxClick("yAxis", e.target.checked)}
                className="mr-2 form-checkbox text-blue-500"
              />
              <div
                className="bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer rounded shadow-md flex items-center"
                draggable="true"
                onDragStart={handleCheckboxY}
              >
                Y-axis
              </div>
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                onChange={(e) =>
                  handleCheckboxClick("direction", e.target.checked)
                }
                className="mr-2 form-checkbox text-blue-500"
              />
              <div
                className="bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer rounded shadow-md flex items-center"
                draggable="true"
                onDragStart={handleCheckboxD}
              >
                Direction
              </div>
            </label>
          </div>
        </>
      ) : (
        <>
          <div
            className="bg-purple-700 text-white px-2 py-1 my-2 text-sm cursor-pointer rounded shadow-md"
            onClick={handleClick}
            draggable="true"
            onDragStart={handleSayTime}
          >
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

          <div
            className="bg-purple-700 text-white px-2 py-1 my-2 text-sm cursor-pointer rounded shadow-md"
            onClick={handleClick1}
            draggable="true"
            onDragStart={handleSayTime1}
          >
            <span className="mr-1">say</span>
            <input
              type="text"
              value={messageText1}
              onChange={(e) => setMessageText1(e.target.value)}
              className="border rounded px-1 mr-2 w-12 text-center text-black"
            />
          </div>

          <div
            className="bg-purple-700 text-white px-2 py-1 my-2 text-sm cursor-pointer rounded shadow-md"
            onClick={handleClick2}
            draggable="true"
            onDragStart={handleThinkTime}
          >
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

          <div
            className="bg-purple-700 text-white px-2 py-1 my-2 text-sm cursor-pointer rounded shadow-md"
            onClick={handleClick3}
            draggable="true"
            onDragStart={handleThinkTime1}
          >
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
              draggable="true"
              onDragStart={handleSwitch}
            >
              Switch costume to{" "}
              <span className="bg-white text-black ">
                {selectedOption4} &#9660;
              </span>
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
          <div
            className="bg-purple-700 text-white px-4 py-1 my-2 text-sm cursor-pointer rounded shadow-md"
            onClick={handleCostume}
            draggable="true"
            onDragStart={handleSwitchCostume}
          >
            next costume
          </div>
          <div className="relative">
            <button
              className="bg-purple-700 text-white  py-1 my-2  text-sm cursor-pointer rounded shadow-md"
              onClick={handleGoToClick5}
              draggable="true"
              onDragStart={handleSwitchBackdrop}
            >
              Switch backdrop to
              <span className="bg-white text-black">
                {" "}
                {selectedOption5}&#9660;
              </span>
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
          <div
            className="bg-purple-700 text-white px-4 py-1 my-2 text-sm cursor-pointer rounded shadow-md"
            onClick={handleBackdrop}
            draggable="true"
            onDragStart={handleSwitchBackdrop1}
          >
            next backdrop
          </div>
          <div
            className="bg-purple-700 text-white px-2 py-1 my-2  text-sm cursor-pointer rounded shadow-md"
            onClick={handleIncreaseSize}
            draggable="true"
            onDragStart={handleSize}
          >
            <span className="mr-1">change size by : </span>
            <input
              type="text"
              value={sizeInput}
              onChange={handleSizeChange}
              className="border rounded px-1 mr-2 w-8 text-center text-black"
            />
          </div>
          <div
            className="bg-purple-700 text-white px-2 py-1 my-2  text-sm cursor-pointer rounded shadow-md"
            onClick={handleDevideSize}
            draggable="true"
            onDragStart={handlePercentageSize}
          >
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
              draggable="true"
              onDragStart={handleChangeColor}
            >
              change{" "}
              <span className="bg-white text-black">
                {selectedOption10} &#9660;
              </span>
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
              draggable="true"
              onDragStart={handleSetColor}
            >
              set{" "}
              <span className="bg-white text-black">
                {selectedOption11} &#9660;
              </span>
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
          <div
            className="bg-purple-700 text-white px-4 py-1 my-2 text-sm cursor-pointer rounded shadow-md"
            onClick={handleGraphicEffect}
            draggable="true"
            onDragStart={handleClearGraphics}
          >
            clear graphic effects
          </div>
          <div
            className="bg-purple-700 text-white px-4 py-1 my-2 text-sm cursor-pointer rounded shadow-md"
            onClick={handleShowCat}
            draggable="true"
            onDragStart={handleShow}
          >
            show
          </div>
          <div
            className="bg-purple-700 text-white px-4 py-1 my-2 text-sm cursor-pointer rounded shadow-md"
            onClick={handleHideCat}
            draggable="true"
            onDragStart={handleHide}
          >
            hide
          </div>
          <div className="relative">
            <button
              className="bg-purple-700 text-white px-2 py-1 my-2  text-sm cursor-pointer rounded shadow-md"
              onClick={handleGoToClick6}
              draggable="true"
              onDragStart={handleLayers}
            >
              go to{" "}
              <span className="bg-white text-black">
                {" "}
                {selectedOption6}&#9660;
              </span>
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
              draggable="true"
              onDragStart={handleLayers1}
            >
              go to{" "}
              <span className="bg-white text-black">
                {selectedOption7}&#9660;
              </span>
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
                onChange={(e) =>
                  handleCheckboxClick1("costume", e.target.checked)
                }
                className="mr-2 form-checkbox text-purple-700"
              />
              <div
                className="bg-purple-700 text-white px-2 py-1 my-2 text-sm cursor-pointer rounded shadow-md flex items-center"
                onClick={handleGoToClick8}
                draggable="true"
                onDragStart={handleCostumeNumber}
              >
                costume{" "}
                <span className="bg-white text-black px-1 ml-1">
                  {" "}
                  {selectedOption8}&#9660;
                </span>
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
                onChange={(e) =>
                  handleCheckboxClick1("backdrop", e.target.checked)
                }
                className="mr-2 form-checkbox text-purple-700"
              />
              <div
                className="bg-purple-700 text-white px-2 py-1 my-2 text-sm cursor-pointer rounded shadow-md flex items-center mr-2"
                onClick={handleGoToClick9}
                draggable="true"
                onDragStart={handleBackdropNumber}
              >
                backdrop{" "}
                <span className="bg-white text-black px-1 ml-1">
                  {selectedOption9} &#9660;
                </span>
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
                onChange={(e) => handleCheckboxClick1("size", e.target.checked)}
                className="mr-2 form-checkbox text-purple-700"
              />
              <div
                className="bg-purple-700 text-white px-2 py-1 my-2 text-sm cursor-pointer rounded shadow-md flex items-center"
                draggable="true"
                onDragStart={handleShowSize}
              >
                size
              </div>
            </label>
          </div>
        </>
      )}
    </div>
  );
}
