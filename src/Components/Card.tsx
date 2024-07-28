import {FC} from 'react'

export interface Retreat {
  id: string
  title: string
  description: string
  date: number
  location: string
  price: number
  image: string
}
interface CardProps {
  cardInfo: Retreat
}

const Card: FC<CardProps> = ({cardInfo}) => {
  const {id, title, description, date, location, price, image} = cardInfo
  return (
    <div key={id} className='bg-secondary rounded-md overflow-hidden p-4'>
      <img
        src={image}
        alt={title || 'Retreat Image'}
        className='w-full rounded-xl h-36 md:w-52 lg:w-52 object-cover'
      />
      <h3 className='font-semibold text-lg py-2'>{title}</h3>
      <p className='text-sm pb-3 font-semibold'>{description}</p>
      <p className='text-sm py-1 font-semibold'>
        Date: {new Date(date * 1000).toLocaleDateString()}
      </p>
      <p className='text-sm py-1 font-semibold'>Location: {location}</p>
      <p className='text-sm py-1 font-semibold'>Price: ${price}</p>
    </div>
  )
}

export default Card
