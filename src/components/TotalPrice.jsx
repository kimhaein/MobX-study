import React from 'react';
import { useObserver } from 'mobx-react';
import userStore from '../useStore';

const TotalPrice = () => {
  const { market } = userStore();
  return useObserver(
    () => (
      <div>
        <hr />
        <p>
          <b>총합: </b> {market.total}원
        </p>
      </div>
    )
  )
};

export default TotalPrice;