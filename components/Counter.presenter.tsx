import { FC } from "react";

type PropsType = {
  count: number;
  increment: () => void;
  decrement: () => void;
}

const CounterPresenter: FC<PropsType> = ({ count, increment, decrement }) => {
  // NOTE: 表示に関わるものを記述する。ロジックは記述しない。
  return (
    <div>
      <h1>シンプルカウンター</h1>
      <br />
      <button type="button" onClick={decrement}>-</button>
      <span>count: {count}</span>
      <button type="button" onClick={increment}>+</button>
    </div>
    
  )
}
export default CounterPresenter
