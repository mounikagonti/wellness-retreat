import {useCallback, useReducer} from 'react'
import Card from './Card'
import Button from './Button'
import TextInput from './FormElements/TextInput'

import {convertToUnixTimestamp, debounce} from '../lib/utils'
import SelectComponent from './FormElements/SelectComponent '
import {typeOptions} from '../lib/constants'
import useFetchRetreats from '../Hooks/useFetchRetreats'
import CardSkeleton from './CardSkeleton'

export interface FiltersState {
  date: string
  filter: string
  search: string
  page: number
  limit: number
}

const Retreat: React.FC = () => {
  const [filters, setFilters] = useReducer(
    (prev: FiltersState, next: Partial<FiltersState>): FiltersState => {
      return {...prev, ...next}
    },
    {date: '', filter: '', search: '', page: 1, limit: 3}
  )
  const {data, loading, error} = useFetchRetreats(filters)

  console.log({data, loading, error})

  const handlePrevious = useCallback(() => {
    if (filters?.page > 1) {
      setFilters({page: filters?.page - 1})
    }
  }, [filters?.page])

  const handleNext = useCallback(() => {
    setFilters({page: filters?.page + 1})
  }, [filters?.page])

  const handleInputChange = debounce((newValue: string) => {
    if (newValue.trim() === '') {
      setFilters({search: ''})
    } else {
      setFilters({search: newValue?.toLowerCase()})
    }
  }, 1000)

  const handleSelectDateChange = useCallback((newValue: string) => {
    if (newValue.trim() === '') {
      setFilters({date: ''})
    } else {
      setFilters({date: convertToUnixTimestamp(newValue)?.toString()})
    }
  }, [])

  const handleSelectTypeChange = useCallback(
    (event: React.ChangeEvent<HTMLSelectElement>) => {
      setFilters({filter: event.target.value})
    },
    []
  )

  return (
    <section>
      <div className='p-10 lg:py-5 flex items-center justify-between gap-4 flex-wrap lg:flex-nowrap'>
        <div className='flex items-center justify-between flex-wrap  gap-4 md:flex-nowrap w-full lg:max-w-96'>
          <TextInput type='date' onChange={handleSelectDateChange} />
          <SelectComponent
            value={filters?.filter}
            onChange={handleSelectTypeChange}
            options={typeOptions}
          />
        </div>
        <div className='text-custom-gray font-semibold bg-#EFEFEF lg:bg-brand lg:text-white w-full lg:max-w-96'>
          <TextInput type='text' onChange={handleInputChange} />
        </div>
      </div>
      <section className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-10'>
        {loading
          ? Array.from({length: filters.limit}).map((_, index) => (
              <CardSkeleton key={index} />
            ))
          : data.map((info) => <Card key={info.id} cardInfo={info} />)}
      </section>
      <div className='flex items-center justify-center mt-4'>
        <div className='flex items-center justify-center gap-3'>
          <Button
            disabled={loading || filters?.page <= 1}
            text='Previous'
            onClick={handlePrevious}
          />
          <Button disabled={loading} text='Next' onClick={handleNext} />
        </div>
      </div>
    </section>
  )
}

export default Retreat
