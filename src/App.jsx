import useSWR from "swr"
import './App.css'

function App() {
  const fetcher = (...args) => fetch(args).then((res) => res.json())

  const SWR = () => {
    const { data: countries, error, isValidating } = useSWR('https://restcountries.com/v2/name/pakistan', fetcher)

    if (error) return <div>Fauled to load</div>

    if (isValidating) return <div>Loading...</div>

    return (
      <div>
        {countries && countries.map((country, index) => (
          <img key={index} src={country.flags.png} alt="Flags" width={100} />
        ))}
      </div>
    )
  }
  return (
    <>
      <SWR></SWR>
    </>
  )
}

export default App
