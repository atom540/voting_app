import React from 'react'

const page = () => {
  return (
    <div className="container-item">
    <div className="candidate-info">
      <h2>
        candidate.header<small>#candidate.id</small>
      </h2>
      <p className="slogan">candidate.slogan</p>
    </div>
    <div className="vote-btn-container">
      <button>
        Vote
      </button>
    </div>
  </div>
  )
}

export default page
