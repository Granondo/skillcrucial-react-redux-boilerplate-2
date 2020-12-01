import React, { useState } from 'react'
// import {Link} from 'react-router-dom'
import Head from './head'
import { history } from '../redux'

const Main = () => {
  const [value, setValue] = useState('')
  const onChange = (e) => {
    setValue(e.target.value)
  }
  const onClick = () => {
    history.push(`/${value}`)
  }
  return (
    <div>
      <Head title="Hello" />
      <div className="flex items-center justify-center h-screen">
        <div className="bg-blue-400 text-white font-bold rounded-lg border shadow-lg p-10">
            <div id="title">Main</div>
            <input className="text-black" id="input-field" type='text'
            value={value}
            onChange={onChange}
            />
            <button className="hover:text-red-500 m-2" id="search-button" 
            type='button' onClick={onClick}>Send</button>
        </div>
      </div>
    </div>
  )
}

Main.propTypes = {}

export default React.memo(Main)
