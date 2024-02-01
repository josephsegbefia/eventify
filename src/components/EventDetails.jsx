import React from 'react'

const EventDetails = () => {
  return (
    <div className = 'card'>
      <div className = 'card-content'>
        <div className = 'media'>
          <div className = 'media-left'>
            <figure className = 'image is-96x96'>
              <img src="https://placedog.net/200/200" alt="Puppy" />
            </figure>
          </div>

          <div className = 'media-content'>
            <p className = 'title is-4'>Puppy petting party</p>
            <p className = 'subtitle is-6'>Come and join in the fun</p>
            <p>
              That's right, just pop your details below and you'll be part of the puppy petting party!!
            </p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default EventDetails
