import React, { useState } from 'react';

const Tab = ({ children }) => {
  const [highlightStyle, setHighlightStyle] = useState({
    left: 0,
    opacity: 0,
  });

  const moveHighlightHandler = (e) => {
    // update highlightstyle to move the highlight
    setHighlightStyle({
      left: e.nativeEvent.layerX - 150,
    });
  };

  const hideHighlightHandler = (e) => {
    setHighlightStyle({
      opacity: 0,
      left: e.nativeEvent.layerX - 150,
    });
  };

  return (
    <div
      className='tab'
      onMouseOut={hideHighlightHandler}
      onMouseMove={moveHighlightHandler}
    >
      <div className='highlight' style={highlightStyle} />
      {children}
    </div>
  );
};

export default Tab;
