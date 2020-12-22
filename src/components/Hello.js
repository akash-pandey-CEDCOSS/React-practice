import React from 'react';

const Hello = () => {
    // return(
    //     <div>
    //         <h1>Hello from Akash</h1>
    //     </div>
    // )
    return React.createElement('div', { id: "hello", className: "dummyClass" },
        React.createElement('h1', null, 'Hello Kaahs'));
}
export default Hello;