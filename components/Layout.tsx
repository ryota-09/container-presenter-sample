import { FC, ReactNode } from "react"
import Head from "../node_modules/next/head"

import styles from "../styles/Home.module.css"

type PropsType = {
  tabTitle: string
  children: ReactNode
}

const Layout: FC<PropsType> = ({ tabTitle, children }) => {
  // NOTE: main以外の描画に関わるものを記述するコンポーネント.
  return (
    <div>
      <Head>
        <title>{tabTitle}</title>
      </Head>
      <main className={styles.main}>
        {children}
      </main>
    </div>
  )
}
export default Layout
