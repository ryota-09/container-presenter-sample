import { useState } from "react"

// NOTE: ロジックの本体を記述。
export const useCounter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(prev => prev + 1);
  }

  const decrement = () => {
    setCount(prev => prev - 1);
  }

  return { count, increment, decrement }
}
