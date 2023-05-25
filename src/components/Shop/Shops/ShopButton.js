import React from 'react'

export default function ShopButton() {
   const shops = ["McDonald's", 'KFC', 'Burger King', 'Starbbucks', 'Pizza Hut']

  return (
    <div>
      {shops.map(el => <button className='shopButton'>{el}</button>)}
    </div>
  )
}
