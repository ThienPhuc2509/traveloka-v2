import React from 'react'

function IncrementButton(props) {
    return (
        <button style={{ marginLeft: '.5rem', borderRadius:'50%', width:'30px',height:'30px',border:'0'}} onClick={props.onClickFunc}>
        +
        </button>
      )
}

export default IncrementButton