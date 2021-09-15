import React, { createContext, useState } from 'react';

const Context = createContext();

const Provider = ( { children }) => {
  const [ cars, setCars ] = useState({ redCar: false, blueCar: false, yellowCar: false });
 
  const moveCar = (car, side) => {
    setCars({
      ...cars,
      [car]: side,
    });
  };

  const context = { cars, moveCar };

    return (
      <Context.Provider value={context}>
        {children}
      </Context.Provider>
    );
};

export {Context, Provider };
