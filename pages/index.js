import { useState, useEffect } from 'react'

export default function Home() {
  const [data, setData] = useState(null)
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetch('/api/hello')
        .then((res) => res.json())
        .then((data) => {
          setData(data.name)
          setLoading(false)
        })
  }, [])

  if (isLoading) return <p>Loading...</p>

  return (
      <div>
        <h1>{data}</h1>
      </div>
  )
}