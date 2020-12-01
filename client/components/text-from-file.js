import React, {useEffect, useState} from 'react'
// import {render} from 'react-dom'
import ReactMarkdown from 'react-markdown'
import axios from 'axios'
import { useParams } from 'react-router-dom'

import Header from './header'


const TextFromFile = () => {
  const [content, setContent] = useState()
  const { userName, repositoryName } = useParams()
  useEffect(() => {
    axios.get(`https://raw.githubusercontent.com/${userName}/${repositoryName}/master/README.md`).then((it) => {
      setContent(it.data)
    })
  }, [userName, repositoryName])
  return (
    <div>
      <Header />
      <div id='description'>
            <div className='p-10' id="title"><ReactMarkdown source={content} /> </div>
      </div>
    </div>
  )
}

TextFromFile.propTypes = {}

export default React.memo(TextFromFile)
