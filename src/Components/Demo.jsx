import React from 'react';

const Demo=()=>{
    return(
      
        <>
        <div className='col-sm-7 offset-2 mt-5'>
      <h2 className="alert alert-dark text-center" >Login</h2>
      <form>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" name="email" aria-describedby="emailHelp" placeholder='Enter Email Here'  />
      </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" name="password" placeholder='Enter Password Here'  />
  </div>
  
  <button type="button" className="btn btn-dark" >Login</button>
</form>
      </div>
        </>
   
    )
}

export default Demo;