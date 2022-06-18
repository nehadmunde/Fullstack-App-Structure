import React from "react";

const Demo = () => {
  return (
    <>
            <form  >
            <div className="col-sm-10 offset-1 mt-5">
            Search : <input type="text" name="searchtxt" placeholder='Serach by name' />
            <button type="button" className='btn btn-dark' >Search</button>
            <br/>
            <h2 className="alert alert-danger text-center">Patient Details</h2>
            <table className="table">
                <thead>
                  <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Name</th>
                    <th scope="col">Age</th>
                    <th scope="col">Adhar Card No.</th>
                    <th scope="col">Dose</th>
                    <th scope="col">Update</th>
                    <th scope="col">Delete</th>
                  </tr>
                </thead>
                <tbody>
  
                </tbody>
              </table>
        </div>
        </form>
    </>
  );
};

export default Demo;
