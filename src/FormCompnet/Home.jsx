import React from 'react'

const Home = () => {

    const logout = () =>{
        window.localStorage.removeItem('singup')
        window.location.reload()
    }

    const deleteAccount = () =>{
        localStorage.clear()
        window.location.reload()
    }

  return (
    <div>
    <h1>Wellcome TO Home page</h1>
    <h2> {localStorage.getItem('name')} </h2>
    <button onClick={logout} className="logout">LogOut</button>
    <button onClick={deleteAccount} className="delete">Delete</button>
    </div>
  )
}

export default Home




