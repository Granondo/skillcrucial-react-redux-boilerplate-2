import React from 'react'
import { useParams, Link } from 'react-router-dom'

const Header = () => {
  const { userName, repositoryName } = useParams()
  // const [value, setValue] = useState('')

  return (
    <nav className="flex bg-green-800 items-center text-white font-bold  justify-between flex-wrap p-6">
      <div className="flex flex-shrink-0 text-white mr-6" id="repository-name">
        {userName}
      </div>
      <div>
        <Link id="go-back" to="/">
          Go back
        </Link>
      </div>
      <div>
        {repositoryName && (
          <Link id="go-repository-list" to={`/${userName}`}>
            Go to Repository List
          </Link>
        )}
      </div>
    </nav>
  )
}

export default React.memo(Header)
