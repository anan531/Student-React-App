import React from 'react'
import Navigation from './Navigation'

const AddStudent = () => {
  return (
    <div>
<Navigation/>
<div className="container">
    <div className="row g-3">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

<div className="container">
    <div className="row g-3">
        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

<label htmlFor="" className="form-label">Admission No</label>
<input type="text" className="form-control" />

        </div>
        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

<label htmlFor="" className="form-label">Full Name</label>
<input type="text" className="form-control" />

        </div>
        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

<label htmlFor="" className="form-label">DOB</label>
<input type="date" className="form-control" />

        </div>
        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

<label htmlFor="" className="form-label">Gender</label>
<select name="" id="" className="form-control">
    <option className="options">Male</option>
    <option className="options">Female</option>
    <option className="options">Others</option>
</select>

</div>
        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

<label htmlFor="" className="form-label">Class</label>
<input type="text" className="form-control" />

        </div>
        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

<label htmlFor="" className="form-label">Section</label>
<input type="type" className="form-control" />

        </div>
        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

<label htmlFor="" className="form-label">Parent name</label>
<input type="type" className="form-control" />

        </div>
        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

<label htmlFor="" className="form-label">Contact no</label>
<input type="tel" className="form-control" />

        </div>
        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

<label htmlFor="" className="form-label">Email Address</label>
<input type="type" className="form-control" />

        </div>
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

<label htmlFor="" className="form-label">Address</label>
<textarea name="" id="" className="form-control"></textarea>
        </div>
        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

<button className="btn btn-dark">SUBMIT</button>

        </div>
    </div>
</div>

        </div>
    </div>
</div>

    </div>
  )
}

export default AddStudent