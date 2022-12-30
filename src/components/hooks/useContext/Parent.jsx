import { Child } from "./Child"
import { OtherChild } from "./OtherChild"
import { createContext, useState } from "react"

export const exampleContext = createContext()

export const Parent = () => {
  const [state, setState] = useState(0)
  return (
    <>
      <exampleContext.Provider value={[state, setState]}>
        <Child />
        <OtherChild />
      </exampleContext.Provider>
    </>
  )
}
