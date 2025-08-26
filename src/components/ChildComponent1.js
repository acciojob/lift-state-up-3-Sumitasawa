import React from 'react'

const ChildComponent1 = ({onSelect}) => {
  return (
    <div style={{backgroundColor:"brown"}}>
        <h3>Child Component1</h3>
      <button onClick={() => onSelect("Option 1")}>
         Option 1
      </button>
    </div>
  )
}

export default ChildComponent1
