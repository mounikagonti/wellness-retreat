const CardSkeleton: React.FC = () => {
  return (
    <div className='bg-secondary rounded-md overflow-hidden p-4 animate-pulse'>
      <div className='w-full h-36 md:w-52 lg:w-52 bg-gray-300 rounded-xl'></div>
      <div className='mt-4 h-6 bg-gray-300 rounded w-3/4'></div>
      <div className='mt-2 h-4 bg-gray-300 rounded w-1/2'></div>
      <div className='mt-4 h-4 bg-gray-300 rounded w-2/3'></div>
      <div className='mt-2 h-4 bg-gray-300 rounded w-1/4'></div>
      <div className='mt-2 h-4 bg-gray-300 rounded w-1/3'></div>
    </div>
  )
}

export default CardSkeleton
