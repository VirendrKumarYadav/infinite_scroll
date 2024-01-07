import React, { memo, useRef, useEffect } from "react";

const Element = (props) => {
  const bg_image = useRef("");

  //     useEffect(() => {
  //   if (bg_image.current) {
  //     bg_image.current.style.backgroundImage = `url('${props.ele_data.urls.small}')`;
  //     bg_image.current.style.backgroundSize = "cover";
  //       bg_image.current.style.backgroundRepeat = "no-repeat";
  //       bg_image.current.style.height = "300px";
  //       bg_image.current.style.width = "400px";

  //   }

  // }, [props]);

  return (
    
      <div className="cursor-pointer font-serif reative border-2">
        <div className="absolute flex flex-col p-2 items-start justify-center">
          <span class="material-symbols-outlined text-white">favorite</span>
          <span className="text-white">{props.ele_data.likes}</span>
        </div>

        <a href={props.ele_data.links.html}>
          <img src={props.ele_data.urls.small} alt="Description" />
        </a>
        <div className=" flex flex-row justify-between  gap">
          <div className="flex text-black gap-2 items-center">
            <img
              src={props.ele_data.user.profile_image.small}
              className="rounded-2xl"
            />
            <a href={props.ele_data.user.portfolio_url}>
              {props.ele_data.user.first_name}
            </a>
          </div>
          <div className="text-black flex ">
            <a
              href={props.ele_data.links.download}
              download={props.ele_data.links.download}
            >
              <span class="material-symbols-outlined">download</span>
            </a>
          </div>
        </div>
      </div>
   
  
  );
};

export default memo(Element);
