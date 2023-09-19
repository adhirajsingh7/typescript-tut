import React from 'react'

type itemProps<T> = {
    id: number,
    title: string,
    extra : T[]
}


const Item = (props: itemProps<Object>) => {
    console.log(props);
    
  return (
    <div>Item</div>

  )
}

export default Item