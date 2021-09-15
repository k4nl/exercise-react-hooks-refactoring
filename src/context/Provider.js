import React, { createContext, useState } from 'react';

const Context = createContext();

const Provider = ({ children }) => {
  const [ cars, setCars ] = useState({ redCar: false, blueCar: false, yellowCar: false });
  const [ signal, setSignal ] = useState({ color: 'red' });
 
  const moveCar = (car, side) => {
    setCars({
      ...cars,
      [car]: side,
    });
  };

  const changeSignal = (signalColor) => {
    setSignal({
      ...signal,
      color: signalColor,
    });
  }

  const context = { cars, moveCar, changeSignal, signal };

    return (
      <Context.Provider value={context}>
        {children}
      </Context.Provider>
    );
};

export { Context, Provider };