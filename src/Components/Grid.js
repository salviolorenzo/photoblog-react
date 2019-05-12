import React from 'react';

const Grid = ({ images, setImgWidth }) => {
  return (
    <div className="grid">
      {images.reverse().map((img, index) => {
        let imgWidth = setImgWidth();

        console.log(imgWidth);

        return (
          <div
            key={index}
            className="gridImg"
            style={{
              backgroundImage: `url(./images/${img})`,
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              width: '30%',
              margin: '3px'
            }}
          />
        );
      })}
    </div>
  );
};

export default Grid;
