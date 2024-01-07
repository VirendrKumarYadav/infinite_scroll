import React, { memo } from "react";
import Element from './../Element/Element'


const Section = (props) => {
    
    const loadMoreImages = () => {
        props.loadMore(2);
        console.log("Loading more images");
    };
    

  return (
    <div>
      <div className="flex flex-wrap gap-11 m-3 justify-center items-center">
        {console.log(props.api_data)}
        {props.api_data.length > 0 ? (
          props.api_data.map((e) => <Element ele_data={e} />)
        ) : (
          <div>Loading ......</div>
        )}
      </div>
      <div className="flex justify-center items-center">
        <button className="text-center font-bold font-serif" onClick={loadMoreImages}>More ...</button>
      </div>
    </div>
  );
}

export default memo(Section)
