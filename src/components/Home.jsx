import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <div style={{display:'flex', justifyContent:'center' , alignItems:'center', flexDirection:'column'}}>
            <h1>

                Upload the Jokes and books image and name into Firebase Database
            </h1>

            <div style={{display:'flex' , gap:'50px'}}>
            <Link to='/jokes' style={{
                textDecoration: 'none',
                fontSize:'30px',
                color:'#000',
                fontWeight:'bold'
            }}>
                Jokes
            </Link>
            <Link to='/books' style={{
                textDecoration: 'none',
                fontSize:'30px',
                color:'#000',
                fontWeight:'bold'
            }}>
                Books
            </Link> 
            </div>

        </div>
    </div>
  )
}

export default Home
