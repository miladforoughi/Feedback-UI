import { v4 as uuidv4 } from 'uuid'
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
import { useState } from 'react'
import Header from './components/Header'
import FeedbackList from './components/FeedbackList'
import FeedbackData from './data/FeedbackData'
import FeedbackState from './components/FeedbackState'
import FeedbackForm from './components/FeedbackForm'
import AboutIconLink from './components/AboutIconLink'
import AboutPage from './pages/AboutPage'

function App() {
  const [feedback, setFeedback] = useState(FeedbackData)

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4()
    setFeedback([newFeedback, ...feedback])
  }

  const deleteFeedback = (id) => {
    //
    if (window.confirm('Are you sure you want to delete?')) {
      // setFeedback(feedback.filter((item) => item.id !== id))
      setFeedback((prev) => prev.filter((item) => item.id !== id))
    }
  }

  return (
    <BrowserRouter>
      <Header />
      <div className='container'>
        <Routes>
          <Route
            path='/'
            element={
              <>
                <FeedbackForm handleAdd={addFeedback} />
                <FeedbackState feedback={feedback} />
                <FeedbackList
                  feedback={feedback}
                  handleDelete={deleteFeedback}
                />
              </>
            }
          ></Route>
          <Route path='/about' element={<AboutPage />}></Route>
          <Route path='/post' element={<Post />} />
        </Routes>

        <AboutIconLink />
      </div>
    </BrowserRouter>
  )
}

export default App
