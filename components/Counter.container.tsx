import { useCounter } from "./Counter.hooks"
import CounterPresenter from "./Counter.presenter"

type ProsType = {
  tabTitle: string
}

const CounterContainer = ({ tabTitle }) => {
  // NOTE: ロジックを渡すコンポーネント.
  const { count, increment, decrement } = useCounter();
  return (
    <CounterPresenter count={count} increment={increment} decrement={decrement} />
  )
}
export default CounterContainer
