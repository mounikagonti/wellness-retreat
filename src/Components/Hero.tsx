import {FC} from 'react'

const Hero: FC = () => {
  return (
    <section className='bg-secondary h-60vh overflow-hidden rounded-md m-10 p-7 hidden lg:block'>
      <img
        src='https://images.unsplash.com/photo-1506126613408-eca07ce68773?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyMDUzMDJ8MHwxfHNlYXJjaHwyfHxZb2dhJTIwfGVufDF8fHx8MTcyMTc1MzMzNXww&ixlib=rb-4.0.3&q=80&w=1080'
        alt='Woman practicing meditation'
        className='rounded-md w-full object-cover h-40vh'
      />
      <h1 className='text-2xl font-semibold py-3'>Discover Your Inner Peace</h1>
      <p>
        Join us for a series of wellness retreats designed to help you find
        tranquility and rejuvenation.
      </p>
    </section>
  )
}

export default Hero
