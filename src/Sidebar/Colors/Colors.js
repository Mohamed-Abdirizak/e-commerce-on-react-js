import React from 'react'
import './Colors.css'
import Input from '../../compnonents/Input'
 function Colors({handleChange}) {
  return (
    <div>
      <h2 className='sidebar-title'>Colors</h2>

      <label className="sidebar-label-container">
        <input onChange={handleChange} type="radio" value="" name="test2" />
        <span className="checkmark all" ></span>All
      </label>

      <Input 
      handleChange={handleChange}
      value="blue"
      title="Blue"
      name="test1"
      color="blue"
      />

<Input 
      handleChange={handleChange}
      value="red"
      title="Red"
      name="test1"
      color="Red"
      />
       <Input 
      handleChange={handleChange}
      value="green"
      title="Green"
      name="test1"
      color="green"
      />
    
     <label className='sidebar-label-container'>
      <input type='radio' onChange={ handleChange} value="white" name="test1" />
      <span className='checkmark' style={{backgroundColor: "white",border: "2px solid "
     }}></span> white
     </label>


     
   

      
    </div>
  )
}
export default Colors
