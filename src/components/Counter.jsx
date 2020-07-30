import React, { useCallback } from 'react';
import { useObserver } from 'mobx-react';
import useStore from '../useStore';

const Counter = () => {
  const { counter } = useStore();

  const increase = useCallback(() => {
    counter.increase();
  }, [counter])

  const descrease = useCallback(() => {
    counter.descrease();
  }, [counter]);

  return useObserver(() => (
    <div>
      <h1>{counter.number}</h1>
      <button onClick={increase}>+</button>
      <button onClick={descrease}>-</button>
    </div>
  ));
}

export default Counter;