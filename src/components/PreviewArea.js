import React, { useState, useEffect } from "react";
import CatSprite from "./CatSprite";

export default function PreviewArea({
  rotateSetSprite,
  catSize,
  costumeChecked,
  backdropChecked,
  sizeChecked,
  flag1,
  catPosition,
  catRotation,
  moveSetSprite,
  moveSprite,
  previewAreaSize,
  xAxisChecked,
  yAxisChecked,
  directionChecked,
  message,
  duration,
  pref,
  flag,
  setMessageDisplayed,
}) {
  const { width: maxWidth, height: maxHeight } = previewAreaSize;
  const [displayMessage, setDisplayMessage] = useState(null);
  const maxWidth1 = window.innerWidth;
  const maxHeight1 = window.innerHeight;
  const maxSize = Math.min(maxWidth1, maxHeight1);

  const size = Math.min(catSize, maxSize);

  console.log("previesize:", previewAreaSize);

  console.log("pref:", flag);
  useEffect(() => {
    if (flag && message) {
      setDisplayMessage(message);
      if (duration > 0) {
        const timeoutId = setTimeout(() => {
          setDisplayMessage(null);
          setMessageDisplayed(false);
        }, duration * 1000);
        return () => clearTimeout(timeoutId);
      }
    }
  }, [message, duration, flag, setMessageDisplayed]);
  const maxX = maxWidth - size.width;
  const maxY = maxHeight - size.height;
  console.log(catSize);
  return (
    <div className="flex-none h-full overflow-y-auto p-2">
      <div>
        {xAxisChecked && (
          <div className="bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer rounded shadow-md flex items-center">
            <p>X-axis value:{catPosition.x}</p>
          </div>
        )}

        {yAxisChecked && (
          <div className="bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer rounded shadow-md flex items-center">
            <p>Y-axis value:{catPosition.y}</p>
          </div>
        )}

        {directionChecked && (
          <div className="bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer rounded shadow-md flex items-center">
            <p>
              Direction value:{" "}
              {catRotation == 360
                ? 360
                : catRotation >= 0
                ? catRotation % 360
                : catRotation % 360}
            </p>
          </div>
        )}

        {costumeChecked && (
          <div className="bg-purple-700 text-white px-2 py-1 my-2 text-sm cursor-pointer rounded shadow-md flex items-center">
            <p>Costume</p>
          </div>
        )}

        {backdropChecked && (
          <div className="bg-purple-700 text-white px-2 py-1 my-2 text-sm cursor-pointer rounded shadow-md flex items-center">
            <p>Backdrop</p>
          </div>
        )}

        {sizeChecked && (
          <div className="bg-purple-700 text-white px-2 py-1 my-2 text-sm cursor-pointer rounded shadow-md flex items-center">
            <p>size: {catSize}</p>
          </div>
        )}

        {displayMessage && (
          <div className="">
            <div className="bg-purple-700 border border-purple-700 rounded-md p-2 shadow-md text-white">
              <div
                className="absolute w-0 h-0"
                style={{
                  top: "calc(100% - 10px)",
                  left: "10px",
                  borderBottom: "10px solid transparent",
                  borderRight: "10px solid white",
                  borderTop: "10px solid transparent",
                }}
              ></div>
              <span className="text-sm">{displayMessage}</span>
            </div>
          </div>
        )}
      </div>
      {flag1 ? (
        <CatSprite
          size={size}
          position={catPosition}
          rotation={catRotation}
          moveSetSprite={moveSetSprite}
          moveSprite={moveSprite}
          maxX={maxX}
          maxY={maxY}
        />
      ) : null}
    </div>
  );
}
