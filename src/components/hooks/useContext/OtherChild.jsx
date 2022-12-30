import { useContext, useState } from "react"
import { exampleContext } from "./Parent"

export const OtherChild = () => {
    const [, setState] = useContext(exampleContext)
    const countUp = () => {
        setState((pre) => ++pre)
    }
    return (
      <>
        <h3>OtherChildコンポーネント</h3>
        <div>
            <button onClick={countUp}>+</button>
        </div>
      </>
    )
  }
  