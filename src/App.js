import React, { useState } from 'react'
import 'bulma/css/bulma.min.css';
import Header from './components/Header'
import EventSignUpForm from './components/EventSignUpForm';
import EventSignUpList from './components/EventSignUpList';

const App = () => {

  const [userSignedIn, setUserSignedIn] = useState(false);

  return (
    <div>
      <Header
        isSignedIn={userSignedIn}
        handleSignInClick={() => setUserSignedIn(true)}
        handleSignOutClick={()=> setUserSignedIn(false)}
      />

      <div className = 'section'>
        <div className = 'container'>
          <h1 className = 'title is-size-1'>Welcome to the Event sign up app</h1>
          {
            userSignedIn && <EventSignUpList />
          }
          {
            !userSignedIn && <EventSignUpForm />
          }
        </div>
      </div>
    </div>
  )
}

export default App
