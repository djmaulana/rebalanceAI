import React from 'react'

const Example = () => {
    const data = {
        method: 'Kmeans-SMOTE',
        url: 'contoh',
    }
    const handleClick = async () => {
        const res = await fetch('api/example', {
            method: 'POST',
            body: JSON.stringify({ data })
        })
        const result = await res.json();
        console.log(result);
    }
    return (
        <button onClick={handleClick}>Click me</button>
    )
}

export default Example