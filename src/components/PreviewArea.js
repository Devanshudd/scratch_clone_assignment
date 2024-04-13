
import React,{useState,useEffect} from "react";
import CatSprite from "./CatSprite";

export default function PreviewArea({ catSize,flag1,catPosition, catRotation, moveSprite, previewAreaSize, xAxisChecked, yAxisChecked, directionChecked, message, duration,pref,flag,setMessageDisplayed   }) {
  const { width: maxWidth, height: maxHeight } = previewAreaSize;
  const [displayMessage, setDisplayMessage] = useState(null);
  const maxWidth1 = window.innerWidth;
  const maxHeight1 = window.innerHeight;
  const maxSize = Math.min(maxWidth1, maxHeight1);

  // Use the smaller of catSize and maxSize as the actual size
  const size = Math.min(catSize, maxSize);

  console.log("previesize:",previewAreaSize)
  
  console.log("pref:",flag)
  useEffect(() => {
    if (flag && message) {

      setDisplayMessage(message);
  
      // Only set the timeout if duration is greater than 0 and showMessage is true
      if (duration > 0) {
        const timeoutId = setTimeout(() => {
          setDisplayMessage(null);
          // setShowMessage(false); // Hide the message bubble after the duration
          setMessageDisplayed(false);
        }, duration * 1000);
  
        // Clear the timeout when the component unmounts or message changes
        return () => clearTimeout(timeoutId);
      }
    }
  }, [message, duration,flag,setMessageDisplayed]);

  // Calculate maximum X and Y positions
  const maxX = maxWidth - size.width; // Assuming the width of the cat sprite is 100px
  const maxY = maxHeight - size.height; // Assuming the height of the cat sprite is 100px
  console.log(catSize);
  return (
    <div className="flex-none h-full overflow-y-auto p-2">
       <div>
      {/* Render X-axis value if X-axis checkbox is checked */}
     
      {xAxisChecked && 
        <div className="bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer rounded shadow-md flex items-center">
      <p>X-axis value</p>
      </div>
      }
          
      

      {/* Render Y-axis value if Y-axis checkbox is checked */}
      {yAxisChecked &&
       <div className="bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer rounded shadow-md flex items-center">
           <p>Y-axis value</p>
          </div>
       }
          
   {/* Render Direction value if Direction checkbox is checked */}
          
          {directionChecked && 
          <div className="bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer rounded shadow-md flex items-center">
          <p>Direction value</p>
          </div>
          }
          
          {displayMessage &&  (
  <div className="">
    <div className="bg-purple-700 border border-purple-700 rounded-md p-2 shadow-md text-white">
      {/* Add tailwind classes for chat bubble effect */}
        {/* Triangle */}
        <div className="absolute w-0 h-0" style={{ top: 'calc(100% - 10px)', left: '10px', borderBottom: '10px solid transparent', borderRight: '10px solid white', borderTop: '10px solid transparent' }}></div>
        {/* Message */}
        <span className="text-sm">{displayMessage}</span>
      </div>
  </div>
)}
     
    </div>
    {flag1 ? <CatSprite size={size} position={catPosition} rotation={catRotation} moveSprite={moveSprite} maxX={maxX} maxY={maxY} /> : null}
    </div>
  );
}