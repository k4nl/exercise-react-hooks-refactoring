import React, { useContext } from 'react';
import { Context } from './context/Provider';
import carBlue from './images/carBlue.jpeg';
import carRed from './images/carRed.jpeg';
import carYellow from './images/carYellow.jpeg';

const Cars = () => {
  const { cars, moveCar } = useContext(Context)
  const { redCar, blueCar, yellowCar } = cars;
  return (
    <div>
      <div>
        <img
          className={redCar ? 'car-right' : 'car-left'}
          src={carRed}
          alt="red car"
        />
        <button
          onClick={() => moveCar('redCar', !redCar)}
          type="button"
        >
          Move
      </button>
      </div>
      <div>
        <img
          className={blueCar ? 'car-right' : 'car-left'}
          src={carBlue}
          alt="blue car"
        />
        <button
          onClick={() => moveCar('blueCar', !blueCar)}
          type="button"
        >
          Move
      </button>
      </div>
      <div>
        <img
          className={yellowCar ? 'car-right' : 'car-left'}
          src={carYellow}
          alt="yellow car"
        />
        <button
          onClick={() => moveCar('yellowCar', !yellowCar)}
          type="button"
        >
          Move
      </button>
      </div>
    </div>
  )
}

export default Cars;