import React from 'react'
import {Route, Switch} from 'react-router-dom'

import Main from './main'
import List from './list'
import TextFromFile from './text-from-file'

const Dummy = () => {
  return (
    <div>
          <Switch>
            <Route exact path='/' component={() => <Main />} />
            <Route exact path='/:userName' component={() => <List />} />
            <Route exact path='/:userName/:repositoryName' component={() => <TextFromFile />} />
          </Switch>
        </div>
  )
}

Dummy.propTypes = {}

export default React.memo(Dummy)
