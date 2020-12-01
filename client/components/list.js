import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
import Header from './header'


const List = () => {
  const { userName } = useParams()
  const [value, setValue] = useState([])
  
  useEffect(() => {
    axios.get(`https://api.github.com/users/${userName}/repos`).then((it) => {
      const repositoryName = it.data.map((item) => (item.name))
      setValue(repositoryName)
  })
}, [userName])
  return (
    <div>
      <Header />
      <div className="flex items-center justify-center h-screen">
        <div className="bg-indigo-800 hover:text-red-500 text-white font-bold rounded-lg border shadow-lg p-10">
          <ul>{value.map((repository) => {
            return (
              <li key={repository}>
                <Link to={`${userName}/${repository}`}>{repository}</Link>
              </li>
              )}
            )}
          </ul>
        </div>
      </div>
    </div>
  )
}

List.propTypes = {}

export default React.memo(List)
