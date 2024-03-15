import React from 'react'

// Props tanımlanırken, her bir prop için bir tip belirtilmelidir.
// When defining Props, a type must be specified for each prop.
type Props = {
    label: string
    onClick: () => void
    style ?: React.CSSProperties
}

// Props, component içinde kullanılırken, props ismiyle kullanılır.
// When using Props inside the component, it is used with the props name.
const MyButton = (props: Props) => {
  return (
    // Buton componenti
    // Button component
    <input type='button' value={props.label} onClick={props.onClick} style={props.style}/>
  )
}

export default MyButton