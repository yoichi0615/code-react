import { useContext } from "react"
import { exampleContext } from "./Parent"

export const GrandChild = () => {
    const [value] = useContext(exampleContext)
    return (
      <>
        <div>From GrandChildコンポーネント</div>
        <div>Parentコンポネで定義：{value}</div>
      </>
    )
  }
  