import React from 'react'

const ChildComponent2 = ({onSelect}) => {
  return (
    <div style={{backgroundColor:"yellow"}}>
        <h3>Child Component2</h3>
      <button onClick={() => onSelect("Option 2")}>
        Option 2
      </button>
    </div>
  )
}

export default ChildComponent2
