import React from 'react'

function FunctionClick() {
    function clickHandler() {
        console.log("Button clicked")
    }
    return (
        <div>
            <button onClick={clickHandler}>Click</button>  {/* Whenever you are making function don't pass braces () insted do it like this state
             as mentioned above */}
        </div>
    )
}

export default FunctionClick
