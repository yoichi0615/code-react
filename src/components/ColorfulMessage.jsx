import React from "react";

export const ColorfulMessage = (props) => {
  console.log(props)
  const { color, children } = props
  const contentStyle = {
    color: props.color,
    fontSize: '18px'
  }

  return (
    <p style={contentStyle}>{children}</p>
  )
}
