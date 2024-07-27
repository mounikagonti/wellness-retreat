import {FC} from 'react'

interface ButtonProps {
  text: string
  onClick: () => void
  disabled?: boolean // Making disabled optional and providing a default value later
}

const Button: FC<ButtonProps> = ({text, onClick, disabled = false}) => {
  return (
    <button
      className={`outline-none border-none bg-[#1B3252] text-white py-2 px-4 rounded-md ${
        disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'
      }`}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  )
}
export default Button
