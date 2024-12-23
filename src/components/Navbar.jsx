import React, { useContext } from 'react'
import PixabayContext from '../Context/PixabayContex'
const Navbar = () => {
    const {fetchImageByCategory,setQuery}=useContext(PixabayContext)
  return (
    <>
    <div className='container text-center my-3'>
    <button onClick={()=>fetchImageByCategory('nature')}type="button" className="btn btn-outline-primary mx-3" >Nature</button>
    <button onClick={()=>fetchImageByCategory('science')}type="button" className="btn btn-outline-danger mx-3" >Science</button>
    <button onClick={()=>fetchImageByCategory('computer')} type="button" className="btn btn-outline-success mx-3" >Compute</button>
    <button onClick={()=>fetchImageByCategory('building')}type="button" className="btn btn-outline-warning mx-3">Building</button>
    <button onClick={()=>fetchImageByCategory('sport')}type="button" className="btn btn-outline-info mx-3">Sports</button>
    <button onClick={()=>fetchImageByCategory('transport')}type="button" className="btn btn-outline-light mx-3">Transport</button>
    <button onClick={()=>fetchImageByCategory('travel')}type="button" className="btn btn-outline-dark mx-3">Travel</button>
    </div>
    <div className="container" style={{width:'800px'}}>
     <input type="text" onChange={(e)=>setQuery(e.target.value)}className="form-control bg-dark text-light"/>
    </div>
    </>
  )
}

export default Navbar