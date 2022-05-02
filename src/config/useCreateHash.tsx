import { useEffect } from 'react';

const useCreateHash = () => {

  const createHashFromArray = (array) => {

    const reduceCallback = (previousValue, currentValue): any => ({
      ...previousValue,
      [`${currentValue.name}-${currentValue.id}`]: {
        ...currentValue,
        selectedQuantity: 0,
      },
    });
  
    return array.reduce(reduceCallback, {});
  };

  

};

export { useCreateHash };
