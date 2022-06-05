import { useState } from 'preact/hooks'
import React from 'react'

function IncreDecr() {


  const [incrVal, setIncrVal] = useState(0)
  const incVal = () => {
    setIncrVal(incrVal + 1)
  }
  const decVal = () => {
    setIncrVal(incrVal - 1)
  }

  return (
    <div>
          <div><p>Enter Number Of Pharmacists</p></div>
          <div>
              <div><button onClick={incVal}>+</button></div>
              <div>{incrVal }</div>
              <div><button onClick={decVal}>-</button></div>
          </div>
    </div>
  )
}

export default IncreDecr
