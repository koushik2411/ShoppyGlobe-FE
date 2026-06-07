import React from 'react'
import { Link, useRouteError } from 'react-router-dom'

function NotFound() {

    const error = useRouteError();

  return (
    <div>
        <h1>404</h1>

        <h2>Page Not Found</h2>

        <p>
            Status: {error?.status || "404"}
        </p>

        <p>
            Message: {error?.statusText || error?.message}
        </p>

        <Link to="/">
            <button>Back to Home</button>
        </Link>
    </div>
  )
}

export default NotFound