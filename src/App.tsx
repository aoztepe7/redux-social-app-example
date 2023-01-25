import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom'

import { Navbar } from './app/Navbar'
import { PostsList } from './features/posts/PostsList'
import { AddPostForm } from './features/posts/AddPostForm'

function App() {
  return (
    <Router>
      <Navbar />
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <React.Fragment>
                <AddPostForm />
                <PostsList />
              </React.Fragment>
            }
          />
        </Routes>
      </div>
    </Router>
  )
}

export default App
