import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import './NotFoundPage.css'

export default function NotFoundPage() {
  const history = useHistory()
  const [remainingTime, setRemainingTime] = useState(10)

  useEffect(() => {
    var interval = setInterval(() => {
      setRemainingTime((remainingTime) => remainingTime - 1)
    }, 1000)

    setTimeout(() => {
      history.push('/')
    }, 10000)
    return () => clearInterval(interval);
  }, []);

  return (
    <div className='not-found-page-main-container'>
      <div className='not-found-page-info-container'>
        <h1>404!</h1>
        <p>The page you are looking for is deleted or incorrect.</p>
        <p>You will be redirected to home page in {remainingTime} seconds</p>
      </div>
    </div>
  )
}