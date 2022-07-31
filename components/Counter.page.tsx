import { FC } from "react"
import CounterContainer from "./Counter.container"
import Layout from "./Layout"

type ProsType = {
  tabTitle: string
}

const CounterPage: FC<ProsType> = ({ tabTitle }) => {
  // NOTE: headerやfooterでコンテナをラップしたりするコンポーネント.
  return (
    <Layout tabTitle={tabTitle}>
      <CounterContainer tabTitle={tabTitle} />
    </Layout>
  )
}
export default CounterPage
