import {FC, memo} from 'react'

export interface OptionType {
  value: string
  label: string
  disabled?: boolean
}

interface SelectProps {
  value: string
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void
  options: OptionType[]
}

const SelectComponent: FC<SelectProps> = memo(({value, onChange, options}) => {
  return (
    <select
      className='w-full px-3 py-2 border border-gray-400 text-custom-gray font-semibold bg-white lg:bg-brand lg:text-white rounded shadow-sm sm:text-sm cursor-pointer'
      value={value}
      onChange={onChange}
    >
      {options.map((option, index) => (
        <option
          className='cursor-pointer'
          key={index}
          value={option.value}
          disabled={option.disabled}
        >
          {option.label}
        </option>
      ))}
    </select>
  )
})

export default SelectComponent
