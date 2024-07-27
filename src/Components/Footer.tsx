import {FC} from 'react'

const Footer: FC = () => {
  return (
    <footer className='px-10 flex items-center justify-center h-16'>
      <p>
        &copy; {new Date().getFullYear()} Wellness Retreats. All rights
        reserved.
      </p>
    </footer>
  )
}

export default Footer
