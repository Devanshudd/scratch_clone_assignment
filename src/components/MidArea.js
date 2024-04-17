import React, { useState } from "react";
import Icon from "./Icon";
export default function MidArea({
  moveSprite,
  rotateSprite,
  moveSetSprite,
  catPosition,
  catRotation,
  rotateSetSprite,
  bounceCat,
  onSayClick,
  OnPref,
  increaseSize,
  calcPercentageSize,
  onShowCat,
  onHideCat,
}) {
  const [droppedButton, setDroppedButton] = useState(null);
  const [leftrotateButton, setLeftRotateButton] = useState(null);
  const [rightrotateButton, setRightRotateButton] = useState(null);
  const [gotobutton, setGoToButton] = useState(null);
  const [gotoxybutton, setGoToXYButton] = useState(null);
  const [glidebutton, setGlideButton] = useState(null);
  const [pointbutton, setPointButton] = useState(null);
  const [changexbutton, setChangeXButton] = useState(null);
  const [changeybutton, setChangeYButton] = useState(null);
  const [assignxbutton, setAssignXButton] = useState(null);
  const [assignybutton, setAssignYButton] = useState(null);
  const [edgebutton, setEdgeButton] = useState(null);
  const [rbutton, setRButton] = useState(null);
  const [boxxbutton, setBoxXButton] = useState(null);
  const [boxybutton, setBoxYButton] = useState(null);
  const [boxdbutton, setBoxDButton] = useState(null);
  const [saybutton, setSayButton] = useState(null);
  const [thinkbutton, setThinkButton] = useState(null);
  const [thinkbutton1, setThinkButton1] = useState(null);
  const [saybutton1, setSayButton1] = useState(null);
  const [switchbutton, setSwitchButton] = useState(null);
  const [switchbutton1, setSwitchButton1] = useState(null);
  const [costumebutton, setCostumeButton] = useState(null);
  const [backdropbutton, setBackdropButton] = useState(null);
  const [mousepointbutton, setMousePointButton] = useState(null);
  const [sizeincreasebutton, setSizeIncreaseButton] = useState(null);
  const [sizepercentagebutton, setSizePercentageButton] = useState(null);
  const [changecolorbutton, setChangeColorButton] = useState(null);
  const [colorbutton, setColorButton] = useState(null);
  const [cleargraphicbutton, setClearGraphicButton] = useState(null);
  const [showbutton, setShowButton] = useState(null);
  const [hidebutton, setHideButton] = useState(null);
  const [layerbutton, setLayerButton] = useState(null);
  const [costumenbutton, setCostumeNButton] = useState(null);
  const [backdropnbutton, setBackdropNButton] = useState(null);
  const [showsizebutton, setShowSizeButton] = useState(null);
  const [layerbutton1, setLayerButton1] = useState(null);
  const [layer, setLayer] = useState(1);
  const [changecolor, setChangeColor] = useState(25);
  const [color, setColor] = useState(0);
  const [sizepercentage, setSizePercentage] = useState(100);
  const [sizeincrease, setSizeIncrease] = useState(10);
  const [glidexybutton, setGlideXYButton] = useState(null);
  const [inputValue, setInputValue] = useState(10); // Initial value for x4
  const [gotoxValue, setGoToXValue] = useState(0);
  const [gotoyValue, setGoToYValue] = useState(0);
  const [glidexValue, setGlideXValue] = useState(0);
  const [glideyValue, setGlideYValue] = useState(0);
  const [rotationEnabled, setRotationEnabled] = useState(true);
  const [selectedOption, setSelectedOption] = useState("random position");
  const [selectedOption3, setSelectedOption3] = useState("random position");
  const [showOptions, setShowOptions] = useState(false);
  const [glideangle, setGlideAngle] = useState(1);
  const [pointangle, setPointAngle] = useState(0);
  const [changex, setChangeX] = useState(10);
  const [changey, setChangeY] = useState(10);
  const [assignx, setAssignX] = useState(0);
  const [assigny, setAssignY] = useState(0);
  const [wordvalue, setWordValue] = useState("hello!");
  const [wordvalue1, setWordValue1] = useState("hello!");
  const [wordvalue2, setWordValue2] = useState("hiiii!");
  const [timevalue2, setTimeValue2] = useState(0);
  const [wordvalue3, setWordValue3] = useState("hiiii!");
  const [timevalue3, setTimeValue3] = useState(0);
  const [timevalue, setTimeValue] = useState(2);
  const [timevalue1, setTimeValue1] = useState(0);
  const [glidexyangle, setGlideXYAngle] = useState(1);
  const [movementInProgress, setMovementInProgress] = useState(false);
  const [movementInProgress1, setMovementInProgress1] = useState(false);
  const [movementInProgress2, setMovementInProgress2] = useState(false);
  const [showOptions3, setShowOptions3] = useState(false);
  const [showOptions1, setShowOptions1] = useState(false);
  const [selectedOption1, setSelectedOption1] = useState("mouse pointer");
  const [showOptions2, setShowOptions2] = useState(false);
  const [selectedOption2, setSelectedOption2] = useState("Left-Right");
  const [pref, setPref] = useState("");
  const [selectedOption4, setSelectedOption4] = useState("costume 2");
  const [showOptions4, setShowOptions4] = useState(false);
  const [selectedOption5, setSelectedOption5] = useState("backdrop 1");
  const [showOptions5, setShowOptions5] = useState(false);
  const [selectedOption10, setSelectedOption10] = useState("color");
  const [showOptions10, setShowOptions10] = useState(false);
  const [selectedOption11, setSelectedOption11] = useState("color");
  const [showOptions11, setShowOptions11] = useState(false);
  const [selectedOption6, setSelectedOption6] = useState("front");
  const [showOptions6, setShowOptions6] = useState(false);
  const [selectedOption7, setSelectedOption7] = useState("forward");
  const [showOptions7, setShowOptions7] = useState(false);
  const [selectedOption8, setSelectedOption8] = useState("number");
  const [showOptions8, setShowOptions8] = useState(false);
  const [selectedOption9, setSelectedOption9] = useState("number");
  const [showOptions9, setShowOptions9] = useState(false);

  const handleDrop = (event) => {
    // event.preventDefault();
    // const data = event.dataTransfer.getData("move");
    // const data1 = event.dataTransfer.getData("left rotate");
    // const x4Value = event.dataTransfer.getData("x4"); // Retrieve x4 value
    // setDroppedButton(data);
    // setLeftRotateButton(data1);
    // setInputValue(parseInt(x4Value)); // Set x4 value from dropped button
    event.preventDefault();
    const dataType = event.dataTransfer.getData("type");
    const dataValue = event.dataTransfer.getData("value");
    const dataValue1 = event.dataTransfer.getData("value1");
    const dataValue2 = event.dataTransfer.getData("value2");
    if (dataType === "move") {
      setDroppedButton(dataValue);
      setInputValue(parseInt(dataValue));
    } else if (dataType === "lrotate") {
      setLeftRotateButton(dataValue);
    } else if (dataType === "rrotate") {
      setRightRotateButton(dataValue);
    } else if (dataType === "goto") {
      setGoToButton(dataValue);
    } else if (dataType === "gotoxy") {
      setGoToXYButton(dataValue);
      setGoToXValue(parseInt(dataValue));
      setGoToYValue(parseInt(dataValue1));
    } else if (dataType === "glide") {
      setGlideButton(dataValue);
      setGlideAngle(parseInt(dataValue));
    } else if (dataType === "glidexy") {
      setGlideXYButton(dataValue);
      setGlideXYAngle(parseInt(dataValue));
      setGlideXValue(parseInt(dataValue1));
      setGlideYValue(parseInt(dataValue2));
    } else if (dataType === "point") {
      setPointButton(dataValue);
      setPointAngle(parseInt(dataValue));
    } else if (dataType === "mousepoint") {
      setMousePointButton(dataValue);
    } else if (dataType === "changex") {
      setChangeXButton(dataValue);
      setChangeX(parseInt(dataValue));
    } else if (dataType === "setx") {
      setAssignXButton(dataValue);
      setAssignX(parseInt(dataValue));
    } else if (dataType === "changey") {
      setChangeYButton(dataValue);
      setChangeY(parseInt(dataValue));
    } else if (dataType === "sety") {
      setAssignYButton(dataValue);
      setAssignY(parseInt(dataValue));
    } else if (dataType === "edge") {
      setEdgeButton(dataValue);
    } else if (dataType === "setr") {
      setRButton(dataValue);
    } else if (dataType === "boxX") {
      setBoxXButton(dataValue);
    } else if (dataType === "boxY") {
      setBoxYButton(dataValue);
    } else if (dataType === "boxD") {
      setBoxDButton(dataValue);
    } else if (dataType === "sayt") {
      setSayButton(dataValue);
      setWordValue(dataValue);
      setTimeValue(parseInt(dataValue1));
    } else if (dataType === "say") {
      setSayButton1(dataValue);
      setWordValue1(dataValue);
    } else if (dataType === "thinkt") {
      setThinkButton(dataValue);
      setWordValue2(dataValue);
      setTimeValue2(parseInt(dataValue1));
    } else if (dataType === "think") {
      setThinkButton1(dataValue);
      setWordValue3(dataValue);
    } else if (dataType === "switch") {
      setSwitchButton(dataValue);
    } else if (dataType === "costume") {
      setCostumeButton(dataValue);
    } else if (dataType === "switch1") {
      setSwitchButton1(dataValue);
    } else if (dataType === "backdrop") {
      setBackdropButton(dataValue);
    } else if (dataType === "size") {
      setSizeIncreaseButton(dataValue);
      setSizeIncrease(parseInt(dataValue));
    } else if (dataType === "size123") {
      setSizePercentageButton(dataValue);
      setSizePercentage(parseInt(dataValue));
    } else if (dataType === "changec") {
      setChangeColorButton(dataValue);
      setChangeColor(parseInt(dataValue));
    } else if (dataType === "setc") {
      setColorButton(dataValue);
      setColor(parseInt(dataValue));
    } else if (dataType === "clearg") {
      setClearGraphicButton(dataValue);
    } else if (dataType === "show") {
      setShowButton(dataValue);
    } else if (dataType === "hide") {
      setHideButton(dataValue);
    } else if (dataType === "layers") {
      setLayerButton(dataValue);
    } else if (dataType === "layers1") {
      setLayerButton1(dataValue);
      setLayer(parseInt(dataValue));
    } else if (dataType === "costumen") {
      setCostumeNButton(dataValue);
    } else if (dataType === "backdropn") {
      setBackdropNButton(dataValue);
    } else if (dataType === "showsize") {
      setShowSizeButton(dataValue);
    }
  };

  const handleButtonClick = () => {
    moveSprite({ x: parseInt(inputValue), y: 0 });
  };

  const handleChange = (e) => {
    let value = parseInt(e.target.value);
    if (isNaN(value)) value = 0;
    value = Math.max(-999, Math.min(value, 999));
    setInputValue(value);
  };
  const handleInputChange = (e, setter) => {
    let value = parseInt(e.target.value);
    if (isNaN(value)) value = 0;
    value = Math.max(-999, Math.min(value, 999));
    setter(value.toString());
  };
  const handlePointChange = (e) => {
    let value = parseInt(e.target.value);
    if (isNaN(value)) value = 0;
    value = Math.max(-999, Math.min(value, 999));
    setPointAngle(value);
  };
  const handleDragEnd = () => {
    // Reset droppedButton state when dragging ends
    setDroppedButton(null);
  };
  const handleDragEnd1 = () => {
    // Reset droppedButton state when dragging ends
    setLeftRotateButton(null);
  };
  const handleDragEnd2 = () => {
    // Reset droppedButton state when dragging ends
    setRightRotateButton(null);
  };
  const handleDragEnd3 = () => {
    // Reset droppedButton state when dragging ends
    setGoToButton(null);
  };
  const handleDragEnd4 = () => {
    // Reset droppedButton state when dragging ends
    setGoToXYButton(null);
  };
  const handleDragEnd5 = () => {
    // Reset droppedButton state when dragging ends
    setGlideButton(null);
  };
  const handleDragEnd6 = () => {
    // Reset droppedButton state when dragging ends
    setGlideXYButton(null);
  };
  const handleDragEnd7 = () => {
    // Reset droppedButton state when dragging ends
    setPointButton(null);
  };
  const handleDragEnd8 = () => {
    // Reset droppedButton state when dragging ends
    setMousePointButton(null);
  };
  const handleDragEnd9 = () => {
    // Reset droppedButton state when dragging ends
    setChangeXButton(null);
  };
  const handleDragEnd10 = () => {
    // Reset droppedButton state when dragging ends
    setAssignXButton(null);
  };
  const handleDragEnd11 = () => {
    // Reset droppedButton state when dragging ends
    setChangeYButton(null);
  };
  const handleDragEnd12 = () => {
    // Reset droppedButton state when dragging ends
    setAssignYButton(null);
  };
  const handleDragEnd13 = () => {
    // Reset droppedButton state when dragging ends
    setEdgeButton(null);
  };
  const handleDragEnd14 = () => {
    // Reset droppedButton state when dragging ends
    setRButton(null);
  };
  const handleDragEnd15 = () => {
    // Reset droppedButton state when dragging ends
    setBoxXButton(null);
  };
  const handleDragEnd16 = () => {
    // Reset droppedButton state when dragging ends
    setBoxYButton(null);
  };
  const handleDragEnd17 = () => {
    // Reset droppedButton state when dragging ends
    setBoxDButton(null);
  };

  const handleDragEnd18 = () => {
    // Reset droppedButton state when dragging ends
    setSayButton(null);
  };
  const handleDragEnd19 = () => {
    // Reset droppedButton state when dragging ends
    setSayButton1(null);
  };
  const handleDragEnd20 = () => {
    // Reset droppedButton state when dragging ends
    setThinkButton(null);
  };
  const handleDragEnd21 = () => {
    // Reset droppedButton state when dragging ends
    setThinkButton1(null);
  };
  const handleDragEnd22 = () => {
    // Reset droppedButton state when dragging ends
    setSwitchButton(null);
  };
  const handleDragLooksEnd = () => {
    // Reset droppedButton state when dragging ends
    setCostumeButton(null);
  };
  const handleDragLooksEnd1 = () => {
    // Reset droppedButton state when dragging ends
    setSwitchButton1(null);
  };
  const handleDragLooksEnd2 = () => {
    setBackdropButton(null);
  };
  const handleDragLooksEnd3 = () => {
    setSizeIncreaseButton(null);
  };
  const handleDragLooksEnd4 = () => {
    // Reset droppedButton state when dragging ends
    setSizePercentageButton(null);
  };
  const handleDragLooksEnd5 = () => {
    // Reset droppedButton state when dragging ends
    setChangeColorButton(null);
  };
  const handleDragLooksEnd6 = () => {
    // Reset droppedButton state when dragging ends
    setColorButton(null);
  };
  const handleDragLooksEnd7 = () => {
    // Reset droppedButton state when dragging ends
    setClearGraphicButton(null);
  };
  const handleDragLooksEnd8 = () => {
    // Reset droppedButton state when dragging ends
    setShowButton(null);
  };
  const handleDragLooksEnd9 = () => {
    // Reset droppedButton state when dragging ends
    setHideButton(null);
  };
  const handleDragLooksEnd10 = () => {
    // Reset droppedButton state when dragging ends
    setLayerButton(null);
  };
  const handleDragLooksEnd11 = () => {
    // Reset droppedButton state when dragging ends
    setLayerButton1(null);
  };
  const handleDragLooksEnd12 = () => {
    // Reset droppedButton state when dragging ends
    setCostumeNButton(null);
  };
  const handleDragLooksEnd13 = () => {
    // Reset droppedButton state when dragging ends
    setBackdropNButton(null);
  };
  const handleDragLooksEnd14 = () => {
    // Reset droppedButton state when dragging ends
    setShowSizeButton(null);
  };
  const handleRotateLeftClick = () => {
    console.log("rotation cyc:", rotationEnabled);
    if (rotationEnabled) {
      console.log("rotate enabled", rotationEnabled);
      rotateSprite(-15);
    }
  };
  const handleRotateRightClick = () => {
    if (rotationEnabled) {
      rotateSprite(15);
    }
  };
  const handleRandomPosition = (option) => {
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
  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setShowOptions(false);
    if (option === "random position") {
      console.log(option);
    } else if (option === "mouse pointer") {
    }
  };

  const handleGoToClick = (option) => {
    setShowOptions((prevState) => !prevState);
  };

  const handleMoveBtnClick = () => {
    moveSetSprite({ x: parseInt(gotoxValue), y: parseInt(gotoyValue) });
  };

  const handleClick3 = () => {
    onSayClick(wordvalue3, timevalue3, true);
  };

  const handleGlideOnTime = (option) => {
    if (option === "random position") {
      const minX = 1;
      const maxX = 272;
      const minY = 1;
      const maxY = 1086;
      const xx = Math.random() * (maxX - minX) + minX;
      const yy = Math.random() * (maxY - minY) + minY;
      if (!movementInProgress1) {
        setMovementInProgress1(true);
        const durationInSeconds1 = parseInt(glideangle);
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
        const durationInSeconds1 = parseInt(glideangle);
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
  const handleChange6 = (e, setter) => {
    let value = parseInt(e.target.value);
    if (isNaN(value)) value = 0;
    value = Math.max(-999, Math.min(value, 999));
    setter(value.toString());
  };

  const handleChange5 = (e, setter) => {
    let value = parseInt(e.target.value);
    if (isNaN(value)) value = 0;
    value = Math.max(-999, Math.min(value, 999));
    setter(value.toString());
  };
  const handleGoToClick3 = () => {
    setShowOptions3((prevState) => !prevState);
  };
  const handleOptionSelect3 = (option) => {
    setSelectedOption3(option);
    setShowOptions3(false);
    if (option === "random position") {
    } else if (option === "mouse pointer") {
    }
  };
  const handleGoToClick9 = () => {
    setShowOptions9((prevState) => !prevState);
  };

  const handleMoveBtnClick1 = () => {
    if (!movementInProgress) {
      console.log("inside glideeeee");
      setMovementInProgress(true);
      const durationInSeconds = parseInt(glidexyangle);
      const targetX = parseInt(glidexValue);
      const targetY = parseInt(glideyValue);
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

  const handleInputChange1 = (e, setter) => {
    let value = parseInt(e.target.value);
    if (isNaN(value)) value = 0;
    value = Math.max(-999, Math.min(value, 999));
    setter(value.toString());
  };
  const handleRotateClick = () => {
    rotateSetSprite(parseInt(pointangle));
  };

  const handleRandomPositionAngle = (option) => {
    const random = -129;
    rotateSetSprite(random);
    console.log("rn1", random);
  };
  const handleGoToClick1 = () => {
    setShowOptions1((prevState) => !prevState);
  };

  const handleOptionSelect1 = (option) => {
    setSelectedOption1(option);
    setShowOptions1(false);
    if (option === "mouse pointer") {
      handleRandomPositionAngle(option);
    }
  };
  const handleMoveClick1 = () => {
    console.log("change x inside");
    moveSprite({ x: parseInt(changex), y: 0 });
  };
  const handleChange1 = (e, setter) => {
    let value = parseInt(e.target.value);
    if (isNaN(value)) value = 0;
    value = Math.max(-999, Math.min(value, 999));
    setter(value.toString());
  };
  const handleMoveClick2 = () => {
    moveSetSprite({ x: parseInt(assignx), y: 0 });
  };
  const handleChange2 = (e, setter) => {
    let value = parseInt(e.target.value);
    if (isNaN(value)) value = 0;
    value = Math.max(-999, Math.min(value, 999));
    setter(value.toString());
  };
  const handleMoveClick3 = () => {
    moveSprite({ x: 0, y: parseInt(changey) });
  };
  const handleChange3 = (e, setter) => {
    let value = parseInt(e.target.value);
    if (isNaN(value)) value = 0;
    setter(value.toString());
  };
  const handleMoveClick4 = () => {
    moveSetSprite({ x: 0, y: parseInt(assigny) });
  };
  const handleChange4 = (e, setter) => {
    let value = parseInt(e.target.value);
    if (isNaN(value)) value = 0;
    setter(value.toString());
  };
  const handleBounceClick = () => {
    bounceCat();
  };
  const handleRotation = (option) => {
    // console.log("option in handleRotataion fn", option);
    if (option === "Left Right") {
      console.log("inside left right");
    } else if (option === "Don't-rotate") {
      console.log("inside don't rotate");
    } else if (option === "All Around") {
      console.log("inside all around");
    }
  };
  const handleGoToClick2 = () => {
    setShowOptions2((prevState) => !prevState);
  };

  const handleOptionSelect2 = (option) => {
    setSelectedOption2(option);
    setShowOptions2(false);
    if (option === "Left Right") {
      setRotationEnabled(true);
      handleRotation(option);
    } else if (option === "Don't-rotate") {
      console.log("rotateion cycel set to false");
      setRotationEnabled(false);
      handleRotation(option);
    } else if (option === "All Around") {
      setRotationEnabled(true);
      handleRotation(option);
    }
  };

  const handleClick = () => {
    setPref("say");
    OnPref(pref);
    onSayClick(wordvalue, timevalue, true);
  };
  const handleClick1 = () => {
    onSayClick(wordvalue1, timevalue1, true);
  };
  const handleClick2 = () => {
    onSayClick(wordvalue2, timevalue2, true);
  };
  const handleGoToClick4 = () => {
    setShowOptions4((prevState) => !prevState);
  };
  const handleOptionSelect4 = (option) => {
    setSelectedOption4(option);
    setShowOptions4(false);
    if (option === "costume 1") {
    } else if (option === "costume 2") {
    }
  };
  const handleCostume = () => {
    console.log("next costume");
  };
  const handleGoToClick5 = () => {
    setShowOptions5((prevState) => !prevState);
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
  const handleBackdrop = () => {
    console.log("next backdrop");
  };
  const handleIncreaseSize = () => {
    increaseSize(sizeincrease);
  };
  const handleSizeChange = (e) => {
    let value = parseInt(e.target.value);
    if (isNaN(value)) value = 0;
    setSizeIncrease(parseInt(e.target.value));
  };
  const handleDevideSize = () => {
    calcPercentageSize(sizepercentage);
  };
  const handleSizeChange1 = (e) => {
    let value = parseInt(e.target.value);
    if (isNaN(value)) value = 0;
    setSizePercentage(parseInt(e.target.value));
  };
  const handleGoToClick10 = () => {
    setShowOptions10((prevState) => !prevState);
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
  const handleGoToClick11 = () => {
    setShowOptions11((prevState) => !prevState);
  };
  const handleGraphicEffect = () => {
    console.log("Clear Graphic Effects");
  };
  const handleShowCat = () => {
    onShowCat();
  };
  const handleHideCat = () => {
    onHideCat();
  };
  const handleGoToClick6 = () => {
    setShowOptions6((prevState) => !prevState);
  };
  const handleOptionSelect6 = (option) => {
    setSelectedOption6(option);
    setShowOptions6(false);
    if (option === "front") {
      1;
    } else if (option === "back") {
    }
  };
  const handleGoToClick7 = () => {
    setShowOptions7((prevState) => !prevState);
  };
  const handleOptionSelect7 = (option) => {
    setSelectedOption7(option);
    setShowOptions7(false);
    if (option === "forward") {
    } else if (option === "backward") {
    }
  };
  const handleGoToClick8 = () => {
    setShowOptions8((prevState) => !prevState);
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
  const handlePlayDiv = () => {
    if (droppedButton) {
      console.log("move button is in midarea");
      handleButtonClick();
    }
    if (leftrotateButton) {
      console.log("left rotate button is in midarea");
      handleRotateLeftClick();
    }
    if (rightrotateButton) {
      console.log("right rotate button is in midarea");
      handleRotateRightClick();
    }
    if (gotobutton) {
      console.log("go to random position  button is in midarea");
      handleRandomPosition(selectedOption);
    }
    if (gotoxybutton) {
      handleMoveBtnClick();
    }
    if (glidebutton) {
      handleGlideOnTime(selectedOption3);
    }
    if (glidexybutton) {
      handleMoveBtnClick1();
    }
    if (pointbutton) {
      handleRotateClick();
    }
    if (mousepointbutton) {
      handleRandomPositionAngle();
    }
    if (changexbutton) {
      handleMoveClick1();
    }
    if (assignxbutton) {
      handleMoveClick2();
    }
    if (changeybutton) {
      handleMoveClick3();
    }
    if (assignybutton) {
      handleMoveClick4();
    }
    if (edgebutton) {
      handleBounceClick();
    }
    if (rbutton) {
      handleRotation();
    }
    if (saybutton) {
      handleClick();
    }
    if (saybutton1) {
      handleClick1();
    }
    if (thinkbutton) {
      handleClick2();
    }
    if (thinkbutton1) {
      handleClick3();
    }
    if (switchbutton) {
      handleGoToClick4();
    }
    if (costumebutton) {
      handleCostume();
    }
    if (switchbutton1) {
      handleGoToClick5();
    }
    if (backdropbutton) {
      handleBackdrop();
    }
    if (sizeincreasebutton) {
      handleIncreaseSize();
    }
    if (sizepercentagebutton) {
      handleDevideSize();
    }
    if (changecolorbutton) {
      handleGoToClick10();
    }
    if (colorbutton) {
      handleGoToClick11();
    }
    if (cleargraphicbutton) {
      handleGraphicEffect();
    }
    if (showbutton) {
      handleShowCat();
    }
    if (hidebutton) {
      handleHideCat();
    }
    if (layerbutton) {
      handleGoToClick6();
    }
    if (layerbutton1) {
      handleGoToClick7();
    }
  };
  return (
    <div
      className="flex-1 mt-2 ml-1 overflow-auto font-bold"
      onDrop={handleDrop}
      onDragOver={(event) => event.preventDefault()}
    >
      Mid Area
      <div
        className="flex items-center"
        style={{ width: "fit-content", height: "fit-content" }}
      >
        <div
          className="flex flex-row flex-wrap bg-yellow-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
          onClick={handlePlayDiv}
        >
          {"When "}
          <Icon name="flag" size={15} className="text-green-600 mx-2" />
          {"clicked"}
        </div>
      </div>
      {droppedButton && (
        <div
          className="flex items-center"
          style={{ width: "fit-content", height: "fit-content" }}
        >
          <div
            className="bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer rounded shadow-md"
            onClick={handleButtonClick}
            draggable="true"
            onDragEnd={handleDragEnd}
          >
            <span className="mr-1">Move</span>{" "}
            <input
              type="text"
              value={inputValue}
              onChange={handleChange}
              className="border rounded px-1 mr-2 w-8 text-center text-black"
            />{" "}
            <span className="mr-1">steps</span>
          </div>
        </div>
      )}
      {leftrotateButton && (
        <div
          className="flex items-center"
          style={{ width: "fit-content", height: "fit-content" }}
        >
          <div
            className="bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer rounded shadow-md"
            onClick={handleRotateLeftClick}
            disabled={!rotationEnabled}
            draggable="true"
            onDragEnd={handleDragEnd1}
          >
            Rotate Left
          </div>
        </div>
      )}
      {rightrotateButton && (
        <div
          className="flex items-center"
          style={{ width: "fit-content", height: "fit-content" }}
        >
          <div
            className="bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer rounded shadow-md"
            onClick={handleRotateRightClick}
            disabled={!rotationEnabled}
            draggable="true"
            onDragEnd={handleDragEnd2}
          >
            Rotate Right
          </div>
        </div>
      )}
      {gotobutton && (
        <div className="relative">
          <button
            className="bg-blue-500 text-white px-2 py-1 my-2  text-sm cursor-pointer rounded shadow-md"
            draggable="true"
            onDragEnd={handleDragEnd3}
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
      )}
      {gotoxybutton && (
        <div
          className="flex items-center"
          style={{ width: "fit-content", height: "fit-content" }}
        >
          <div
            className="bg-blue-500 w-33 h-auto text-white px-2 py-1 my-2 text-sm cursor-pointer rounded shadow-md"
            onClick={handleMoveBtnClick}
            draggable="true"
            onDragEnd={handleDragEnd4}
          >
            <span className="mr-1">go to</span>
            <span className="mr-1"> x:</span>
            <input
              type="text"
              value={gotoxValue}
              onChange={(e) => handleInputChange(e, setGoToXValue)}
              className="border rounded px-1 mr-2 w-10 text-center text-black"
            />
            <span className="mr-1">y:</span>
            <input
              type="text"
              value={gotoyValue}
              onChange={(e) => handleInputChange(e, setGoToYValue)}
              className="border rounded px-1 mr-2 w-10 text-center text-black"
            />
          </div>
        </div>
      )}
      {glidebutton && (
        <div
          className="flex items-center"
          style={{ width: "fit-content", height: "fit-content" }}
        >
          <div className="relative">
            <button
              className="bg-blue-500 text-white  py-1 my-2  text-sm cursor-pointer rounded shadow-md"
              draggable="true"
              onDragEnd={handleDragEnd5}
            >
              <span onClick={() => handleGlideOnTime(selectedOption3)}>
                Glide
              </span>
              <input
                type="text"
                value={glideangle}
                onChange={(e) => handleChange5(e, setGlideAngle)}
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
        </div>
      )}
      {glidexybutton && (
        <div
          className="flex items-center"
          style={{ width: "fit-content", height: "fit-content" }}
        >
          <div className="relative">
            <button
              className="bg-blue-500 text-white py-1 my-2 text-sm cursor-pointer rounded shadow-md flex items-center"
              onClick={handleMoveBtnClick1}
              draggable="true"
              onDragEnd={handleDragEnd6}
            >
              <span>Glide</span>
              <input
                type="text"
                value={glideangle}
                onChange={(e) => handleChange6(e, setGlideXYAngle)}
                className="border rounded w-4 text-center text-black"
              />
              <span className="ml-1"> secs to</span>
              <div className="flex items-center ml-2">
                <span>x:</span>
                <input
                  type="text"
                  value={glidexValue}
                  onChange={(e) => handleInputChange1(e, setGlideXValue)}
                  className="border rounded px-1 mr-2 w-8 text-center text-black"
                />
                <span className="mr-1">y:</span>
                <input
                  type="text"
                  value={glideyValue}
                  onChange={(e) => handleInputChange1(e, setGlideYValue)}
                  className="border rounded px-1 mr-2 w-8 text-center text-black"
                />
              </div>
            </button>
          </div>
        </div>
      )}
      {pointbutton && (
        <div
          className="flex items-center"
          style={{ width: "fit-content", height: "fit-content" }}
        >
          <div
            className="bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer rounded shadow-md flex items-center"
            onClick={handleRotateClick}
            draggable="true"
            onDragEnd={handleDragEnd7}
          >
            <span className="mr-1">point in direction : </span>
            <input
              type="text"
              value={pointangle}
              onChange={(e) => handlePointChange(e, setPointAngle)}
              className="border rounded px-1 mr-2 w-8 text-center text-black"
            />
          </div>
        </div>
      )}
      {mousepointbutton && (
        <div
          className="flex items-center"
          style={{ width: "fit-content", height: "fit-content" }}
        >
          <div className="relative">
            <button
              className="bg-blue-500 text-white px-1 py-1 my-1  text-sm cursor-pointer rounded shadow-md"
              draggable="true"
              onDragEnd={handleDragEnd8}
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
        </div>
      )}
      {changexbutton && (
        <div
          className="flex items-center"
          style={{ width: "fit-content", height: "fit-content" }}
        >
          <div className="relative">
            <div
              className="bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer rounded shadow-md flex items-center"
              onClick={handleMoveClick1}
              draggable="true"
              onDragEnd={handleDragEnd9}
            >
              <span className="mr-1">change X by :</span>
              <input
                type="text"
                value={changex}
                onChange={(e) => handleChange1(e, setChangeX)}
                className="border rounded px-1 mr-2 w-8 text-center text-black"
              />
            </div>
          </div>
        </div>
      )}
      {assignxbutton && (
        <div
          className="flex items-center"
          style={{ width: "fit-content", height: "fit-content" }}
        >
          <div
            className="bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer rounded shadow-md flex items-center"
            onClick={handleMoveClick2}
            draggable="true"
            onDragEnd={handleDragEnd10}
          >
            <span className="mr-1">set X to :</span>
            <input
              type="text"
              value={assignx}
              onChange={(e) => handleChange2(e, setAssignX)}
              className="border rounded px-1 mr-2 w-8 text-center text-black"
            />
          </div>
        </div>
      )}
      {changeybutton && (
        <div
          className="flex items-center"
          style={{ width: "fit-content", height: "fit-content" }}
        >
          <div
            className="bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer rounded shadow-md flex items-center"
            onClick={handleMoveClick3}
            draggable="true"
            onDragEnd={handleDragEnd11}
          >
            <span className="mr-1">Change Y by:</span>
            <input
              type="text"
              value={changey}
              onChange={(e) => handleChange3(e, setChangeY)}
              className="border rounded px-1 mr-2 w-8 text-center text-black"
            />
          </div>
        </div>
      )}
      {assignybutton && (
        <div
          className="flex items-center"
          style={{ width: "fit-content", height: "fit-content" }}
        >
          <div
            className="bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer rounded shadow-md flex items-center"
            onClick={handleMoveClick4}
            draggable="true"
            onDragEnd={handleDragEnd12}
          >
            <span className="mr-1">Set Y to:</span>
            <input
              type="text"
              value={assigny}
              onChange={(e) => handleChange4(e, setAssignY)}
              className="border rounded px-1 mr-2 w-8 text-center text-black"
            />
          </div>
        </div>
      )}
      {edgebutton && (
        <div
          className="flex items-center"
          style={{ width: "fit-content", height: "fit-content" }}
        >
          <div
            className="bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer rounded shadow-md flex items-center"
            onClick={handleBounceClick}
            draggable="true"
            onDragEnd={handleDragEnd13}
          >
            If on edge, then bounce
          </div>
        </div>
      )}
      {rbutton && (
        <div
          className="flex items-center"
          style={{ width: "fit-content", height: "fit-content" }}
        >
          <div className="relative">
            <button
              className="bg-blue-500 text-white py-1 my-1 text-sm cursor-pointer rounded shadow-md"
              draggable="true"
              onDragEnd={handleDragEnd14}
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
        </div>
      )}
      {boxxbutton && (
        <div
          className="flex items-center"
          style={{ width: "fit-content", height: "fit-content" }}
        >
          <div
            className="bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer rounded shadow-md flex items-center"
            draggable="true"
            onDragEnd={handleDragEnd15}
          >
            X-axis
          </div>
        </div>
      )}
      {boxybutton && (
        <div
          className="flex items-center"
          style={{ width: "fit-content", height: "fit-content" }}
        >
          <div
            className="bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer rounded shadow-md flex items-center"
            draggable="true"
            onDragEnd={handleDragEnd16}
          >
            Y-axis
          </div>
        </div>
      )}
      {boxdbutton && (
        <div
          className="flex items-center"
          style={{ width: "fit-content", height: "fit-content" }}
        >
          <div
            className="bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer rounded shadow-md flex items-center"
            draggable="true"
            onDragEnd={handleDragEnd17}
          >
            Direction
          </div>
        </div>
      )}
      {saybutton && (
        <div
          className="flex items-center"
          style={{ width: "fit-content", height: "fit-content" }}
        >
          <div
            className="bg-purple-700 text-white px-2 py-1 my-2 text-sm cursor-pointer rounded shadow-md"
            onClick={handleClick}
            draggable="true"
            onDragEnd={handleDragEnd18}
          >
            <span className="mr-1">say</span>
            <input
              type="text"
              value={wordvalue}
              onChange={(e) => setWordValue(e.target.value)}
              className="border rounded px-1 mr-2 w-12 text-center text-black"
            />
            <span>for</span>
            <input
              type="text"
              value={timevalue}
              onChange={(e) => setTimeValue(e.target.value)}
              className="border rounded px-1 ml-1 mr-2 w-8 text-center text-black"
            />
            <span>secs</span>
          </div>
        </div>
      )}
      {saybutton1 && (
        <div
          className="flex items-center"
          style={{ width: "fit-content", height: "fit-content" }}
        >
          <div
            className="bg-purple-700 text-white px-2 py-1 my-2 text-sm cursor-pointer rounded shadow-md"
            onClick={handleClick1}
            draggable="true"
            onDragEnd={handleDragEnd19}
          >
            <span className="mr-1">say</span>
            <input
              type="text"
              value={wordvalue1}
              onChange={(e) => setWordValue1(e.target.value)}
              className="border rounded px-1 mr-2 w-12 text-center text-black"
            />
          </div>
        </div>
      )}
      {thinkbutton && (
        <div
          className="flex items-center"
          style={{ width: "fit-content", height: "fit-content" }}
        >
          <div
            className="bg-purple-700 text-white px-2 py-1 my-2 text-sm cursor-pointer rounded shadow-md"
            onClick={handleClick2}
            draggable="true"
            onDragEnd={handleDragEnd20}
          >
            <span className="mr-1">think</span>
            <input
              type="text"
              value={wordvalue2}
              onChange={(e) => setWordValue2(e.target.value)}
              className="border rounded px-1 mr-2 w-12 text-center text-black"
            />
            <span>for</span>
            <input
              type="text"
              value={timevalue2}
              onChange={(e) => setTimeValue2(e.target.value)}
              className="border rounded px-1 ml-1 mr-2 w-8 text-center text-black"
            />
            <span>secs</span>
          </div>
        </div>
      )}
      {thinkbutton1 && (
        <div
          className="flex items-center"
          style={{ width: "fit-content", height: "fit-content" }}
        >
          <div
            className="bg-purple-700 text-white px-2 py-1 my-2 text-sm cursor-pointer rounded shadow-md"
            onClick={handleClick3}
            draggable="true"
            onDragend={handleDragEnd21}
          >
            <span className="mr-1">think</span>
            <input
              type="text"
              value={wordvalue3}
              onChange={(e) => setWordValue3(e.target.value)}
              className="border rounded px-1 mr-2 w-12 text-center text-black"
            />
          </div>
        </div>
      )}
      {switchbutton && (
        <div
          className="flex items-center"
          style={{ width: "fit-content", height: "fit-content" }}
        >
          <div className="relative">
            <button
              className="bg-purple-700 text-white px-2 py-1 my-2  text-sm cursor-pointer rounded shadow-md"
              onClick={handleGoToClick4}
              draggable="true"
              onDragEnd={handleDragEnd22}
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
        </div>
      )}
      {costumebutton && (
        <div
          className="flex items-center"
          style={{ width: "fit-content", height: "fit-content" }}
        >
          <div
            className="bg-purple-700 text-white px-4 py-1 my-2 text-sm cursor-pointer rounded shadow-md"
            onClick={handleCostume}
            draggable="true"
            onDragEnd={handleDragLooksEnd}
          >
            next costume
          </div>
        </div>
      )}
      {switchbutton1 && (
        <div
          className="flex items-center"
          style={{ width: "fit-content", height: "fit-content" }}
        >
          <div className="relative">
            <button
              className="bg-purple-700 text-white  py-1 my-2  text-sm cursor-pointer rounded shadow-md"
              onClick={handleGoToClick5}
              draggable="true"
              onDragEnd={handleDragLooksEnd1}
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
        </div>
      )}
      {backdropbutton && (
        <div
          className="flex items-center"
          style={{ width: "fit-content", height: "fit-content" }}
        >
          <div
            className="bg-purple-700 text-white px-4 py-1 my-2 text-sm cursor-pointer rounded shadow-md"
            onClick={handleBackdrop}
            draggable="true"
            onDragEnd={handleDragLooksEnd2}
          >
            next backdrop
          </div>
        </div>
      )}
      {sizeincreasebutton && (
        <div
          className="flex items-center"
          style={{ width: "fit-content", height: "fit-content" }}
        >
          <div
            className="bg-purple-700 text-white px-2 py-1 my-2  text-sm cursor-pointer rounded shadow-md"
            onClick={handleIncreaseSize}
            draggable="true"
            onDragEnd={handleDragLooksEnd3}
          >
            <span className="mr-1">change size by : </span>
            <input
              type="text"
              value={sizeincrease}
              onChange={handleSizeChange}
              className="border rounded px-1 mr-2 w-8 text-center text-black"
            />
          </div>
        </div>
      )}
      {sizepercentagebutton && (
        <div
          className="flex items-center"
          style={{ width: "fit-content", height: "fit-content" }}
        >
          <div
            className="bg-purple-700 text-white px-2 py-1 my-2  text-sm cursor-pointer rounded shadow-md"
            onClick={handleDevideSize}
            draggable="true"
            onDragEnd={handleDragLooksEnd4}
          >
            <span className="mr-1">set size by : </span>
            <input
              type="text"
              value={sizepercentage}
              onChange={handleSizeChange1}
              className="border rounded px-1 mr-2 w-8 text-center text-black"
            />
            <span>%</span>
          </div>
        </div>
      )}
      {changecolorbutton && (
        <div
          className="flex items-center"
          style={{ width: "fit-content", height: "fit-content" }}
        >
          <div className="relative">
            <button
              className="bg-purple-700 text-white  py-1 my-2  text-sm cursor-pointer rounded shadow-md"
              onClick={handleGoToClick10}
              draggable="true"
              onDragEnd={handleDragLooksEnd5}
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
                value={changecolor}
                onChange={(e) => setChangeColor(e.target.value)}
                className="border rounded px-1 ml-1 mr-2 w-8 text-center text-black"
              />
            </button>
          </div>
        </div>
      )}
      {colorbutton && (
        <div
          className="flex items-center"
          style={{ width: "fit-content", height: "fit-content" }}
        >
          <div className="relative">
            <button
              className="bg-purple-700 text-white  py-1 my-2  text-sm cursor-pointer rounded shadow-md"
              onClick={handleGoToClick11}
              draggable="true"
              onDragEnd={handleDragLooksEnd6}
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
                value={color}
                onChange={(e) => setColor(e.target.value)}
                className="border rounded px-1 ml-1 mr-2 w-8 text-center text-black"
              />
            </button>
          </div>
        </div>
      )}
      {cleargraphicbutton && (
        <div
          className="flex items-center"
          style={{ width: "fit-content", height: "fit-content" }}
        >
          <div
            className="bg-purple-700 text-white px-4 py-1 my-2 text-sm cursor-pointer rounded shadow-md"
            onClick={handleGraphicEffect}
            draggable="true"
            onDragEnd={handleDragLooksEnd7}
          >
            clear graphic effects
          </div>
        </div>
      )}
      {showbutton && (
        <div
          className="flex items-center"
          style={{ width: "fit-content", height: "fit-content" }}
        >
          <div
            className="bg-purple-700 text-white px-4 py-1 my-2 text-sm cursor-pointer rounded shadow-md"
            onClick={handleShowCat}
            draggable="true"
            onDragEnd={handleDragLooksEnd8}
          >
            show
          </div>
        </div>
      )}
      {hidebutton && (
        <div
          className="flex items-center"
          style={{ width: "fit-content", height: "fit-content" }}
        >
          <div
            className="bg-purple-700 text-white px-4 py-1 my-2 text-sm cursor-pointer rounded shadow-md"
            onClick={handleHideCat}
            draggable="true"
            onDragEnd={handleDragLooksEnd9}
          >
            hide
          </div>
        </div>
      )}
      {layerbutton && (
        <div
          className="flex items-center"
          style={{ width: "fit-content", height: "fit-content" }}
        >
          <div className="relative">
            <button
              className="bg-purple-700 text-white px-2 py-1 my-2  text-sm cursor-pointer rounded shadow-md"
              onClick={handleGoToClick6}
              draggable="true"
              onDragEnd={handleDragLooksEnd10}
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
        </div>
      )}
      {layerbutton1 && (
        <div
          className="flex items-center"
          style={{ width: "fit-content", height: "fit-content" }}
        >
          <div className="relative">
            <button
              className="bg-purple-700 text-white px-2 py-1 my-2  text-sm cursor-pointer rounded shadow-md"
              onClick={handleGoToClick7}
              draggable="true"
              onDragEnd={handleDragLooksEnd11}
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
                value={layer}
                onChange={(e) => setLayer(e.target.value)}
                className="border rounded px-1 ml-1 mr-2 w-8 text-center text-black"
              />
              <span className="ml-2">layers</span>
            </button>
          </div>
        </div>
      )}
      {costumenbutton && (
        <div
          className="flex items-center"
          style={{ width: "fit-content", height: "fit-content" }}
        >
          <div
            className="bg-purple-700 text-white px-2 py-1 my-2 text-sm cursor-pointer rounded shadow-md flex items-center"
            onClick={handleGoToClick8}
            draggable="true"
            onDragEnd={handleDragLooksEnd12}
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
        </div>
      )}
      {backdropnbutton && (
        <div
          className="flex items-center"
          style={{ width: "fit-content", height: "fit-content" }}
        >
          <div
            className="bg-purple-700 text-white px-2 py-1 my-2 text-sm cursor-pointer rounded shadow-md flex items-center mr-2"
            onClick={handleGoToClick9}
            draggable="true"
            onDragEnd={handleDragLooksEnd13}
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
        </div>
      )}
      {showsizebutton && (
        <div
          className="flex items-center"
          style={{ width: "fit-content", height: "fit-content" }}
        >
          <div
            className="bg-purple-700 text-white px-2 py-1 my-2 text-sm cursor-pointer rounded shadow-md flex items-center"
            draggable="true"
            onDragEnd={handleDragLooksEnd14}
          >
            size
          </div>
        </div>
      )}
    </div>
  );
}
