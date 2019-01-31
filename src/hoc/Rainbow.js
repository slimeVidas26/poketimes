import React from 'react'

const Rainbow = (WrappedComponent)=>{

    const colours = ['red' , 'blue' , 'green' , 'orange' , 'purple'];
    const randomColour = colours[Math.floor(Math.random() * 5)];
    const className = randomColour + '-text';


return (props)=>{
    //console.log(props)
    return(
        <div className = {className}>
            <WrappedComponent {...props} />
        </div>
    )
}
}

export default Rainbow;