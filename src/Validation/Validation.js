import React from 'react'

const Validation = (props) => {
return(
  <div className="validation">
    <p>{props.message}</p>
    <p>{props.length}</p>
    <p>{props.id}</p>
  </div>
)

}

export default Validation