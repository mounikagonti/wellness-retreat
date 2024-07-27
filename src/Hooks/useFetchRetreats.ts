import {useEffect, useReducer} from 'react'
import axios from 'axios'
import {Retreat} from '../Components/Card'
import {removeEmptyOrNullProperties} from '../lib/utils'
import {FiltersState} from '../Components/Retreat'


// We can use .env for storing the api base url
axios.defaults.baseURL =
  'https://669f704cb132e2c136fdd9a0.mockapi.io/api/v1/retreats/'

interface useFetchRetreatsState {
  data: Retreat[]
  loading: boolean
  error: string
}

const useFetchRetreats = (filters: FiltersState) => {
  const [retreatsInfo, setRetreatsInfo] = useReducer(
    (
      prev: useFetchRetreatsState,
      next: Partial<useFetchRetreatsState>
    ): useFetchRetreatsState => {
      return {...prev, ...next}
    },
    {data: [], loading: false, error: ''}
  )

  const fetchRetreats = async (): Promise<void> => {
    setRetreatsInfo({loading: true})
    try {
      // Removing unnecessary filters
      const removedFilters = removeEmptyOrNullProperties(filters)

      // Convert numeric values to string
      const filtersAsString: Record<string, string> = Object.entries(
        removedFilters
      ).reduce((acc, [key, value]) => {
        acc[key] = String(value)
        return acc
      }, {} as Record<string, string>)

      // Constructing search params
      const searchParams = new URLSearchParams(filtersAsString)

      // Api call
      const response = await axios.get(`?${searchParams}`)

      // Updating the api response
      setRetreatsInfo({data: response?.data})
    } catch (error: unknown) {
      if (error instanceof Error) {
        setRetreatsInfo({error: error.message})
      } else {
        setRetreatsInfo({error: 'An unknown error occurred.'})
      }
    } finally {
      setRetreatsInfo({loading: false})
    }
  }

  useEffect(() => {
    fetchRetreats()
  }, [filters])

  return retreatsInfo
}

export default useFetchRetreats
