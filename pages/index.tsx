import CounterPage from "../components/Counter.page";

type StaticProps = {
  tabTitle: string
}

export default function Home ({ tabTitle }: StaticProps)  {
  return (
    <CounterPage tabTitle={tabTitle} />
  )
}
