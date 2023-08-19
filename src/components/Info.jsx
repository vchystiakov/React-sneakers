import React from 'react';
import AppContext from '../pages/context';

const Info = ({ title, image, description }) => {
  const { setCartOpened } = React.useContext(AppContext);

  return (
    <div className="cartEmpty d-flex align-center justify-center flex-column flex">
      <img
        style={{ marginBottom: 100 }}
        width="120px"
        src={image}
        alt="Empty"
      />
      <h2>{title}</h2>
      <p className="opacity-6">{description}</p>
      <button onClick={() => setCartOpened(false)} className="greenButton">
        <img height={18} width={18} src="img/arrow.png" alt="Arrow" />
        Return Back
      </button>
    </div>
  );
};

export default Info;
