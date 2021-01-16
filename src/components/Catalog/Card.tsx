import React from 'react'
import { NavLink } from 'react-router-dom'

export interface CardProps {
  src?: string
  title?: string
  price: string
  id: number
}

const Card = ({
  price,
  id,
  src = 'https://www.tibs.org.tw/images/default.jpg',
  title = 'default image',
}: CardProps) => {
  return (
    <div className='col-4'>
      <div className='card catalog-item-card'>
        <img src={src} className='card-img-top img-fluid' alt={title} />
        <div className='card-body'>
          <p className='card-text'>{title}</p>
          <p className='card-text'>{price}</p>
          <NavLink to={`/products/${id}.html`} className='btn btn-outline-primary'>
            Заказать
          </NavLink>
        </div>
      </div>
    </div>
  )
}

export default Card
