import {FC, useState} from 'react'

interface TextInputProps {
  onChange: (value: string) => void
  type: string
}

const TextInput: FC<TextInputProps> = ({onChange, type = 'text'}) => {
  const [inputValue, setInputValue] = useState('')

  const placeholderMapping: {[key: string]: string} = {
    text: 'Search retreat by title',
    date: 'Filter by date',
    type: 'Filter by type',
  }

  const placeholder = placeholderMapping[type] || 'Enter value'

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value
    setInputValue(newValue)
    onChange(newValue)
  }

  return (
    <input
      type={type}
      className='w-full inline-block px-3 py-2 rounded border-gray-400 text-custom-gray border font-semibold bg-#EFEFEF lg:bg-brand lg:text-white  shadow-sm sm:text-sm lg:placeholder-white placeholder-gray-400'
      placeholder={placeholder}
      value={inputValue}
      onChange={handleChange}
    />
  )
}

export default TextInput
