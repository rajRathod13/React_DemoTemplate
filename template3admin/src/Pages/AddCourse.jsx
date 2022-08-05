import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import {add_course} from '../Redux/AddCourse/action'
import 'react-toastify/dist/ReactToastify.css';
import {toast} from 'react-toastify'

function AddCourse() {
  const notify = (mess) => toast.success(mess);
  const [formValue,setFormValue] = useState({
    courseName : '',
    courseDuration : '',
    courseFee : '',
    assetType : '',
    certificateType : '',
    courseDetail : '',
  })
  function handleChange(e){
    const {name,value} = e.target 
    setFormValue({...formValue,[name]: value})
  }
  const dispatch = useDispatch()
  function addCourse(e){
    e.preventDefault()
    dispatch(add_course(formValue,setFormValue,notify))
  }
  return (

    <div className="container-xxl py-6">
  <div className="container">
    <div className="row g-5">

      <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
        <div className="position-relative overflow-hidden ps-5 pt-5 h-100" style={{minHeight: 400}}>
          <img className="position-absolute w-100 h-100" src="img/about-1.jpg" alt='' style={{objectFit: 'cover'}} />
          <img className="position-absolute top-0 start-0 bg-white pe-3 pb-3" src="img/about-2.jpg" alt='' style={{width: 200, height: 200}} />
        </div>
      </div>
      <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
        <h6 className="text-primary text-uppercase mb-2" onClick={notify}>Add Courses</h6>
        <h1 className="display-6 mb-4">Different Driving Courses</h1>
        <form>
          <div className="row g-3">
            <div className="col-sm-12">
              <div className="form-floating">
                <input type="text" className="form-control border-0 bg-light" id="coursename" placeholder="Gurdian Name"
                name = "courseName"
                value={formValue.courseName}
                onChange={handleChange} />
                <label htmlFor="coursename">Course Name</label>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="form-floating">
                <input type="number" className="form-control border-0 bg-light" id="courseduration" placeholder="Gurdian duration"
                name = "courseDuration"
                value={formValue.courseDuration}
                onChange={handleChange} />
                <label htmlFor="courseduration">Course Duration</label>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="form-floating">
                <input type="number" className="form-control border-0 bg-light" id="coursefee" placeholder="Child fee"
                name='courseFee'
                value={formValue.courseFee}
                onChange={handleChange} />
                <label htmlFor="coursefee">Courses Fee</label>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="form-floating">
                <input type="text" className="form-control border-0 bg-light" id="asset" placeholder="Child asset"
                name='assetType'
                value={formValue.assetType}
                onChange={handleChange} />
                <label htmlFor="asset">Asset Type</label>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="form-floating">
                <input type="text" className="form-control border-0 bg-light" id="certificate" placeholder="Child certificate"
                name='certificateType'
                value={formValue.certificateType}
                onChange={handleChange} />
                <label htmlFor="certificate">Certificate Type</label>
              </div>
            </div>
            <div className="col-12">
              <div className="form-floating">
                <textarea className="form-control border-0 bg-light" placeholder="Leave a message here" id="details" style={{height: 150}} 
                name="courseDetail"
                value={formValue.courseDetail}
                onChange={handleChange} />
                <label htmlFor="details">Course Details</label>
              </div>
            </div>
            <div className="col-12">
              <button className="btn btn-primary w-100 py-3" type="submit" onClick={addCourse}>Add Course</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>

  )
}

export default AddCourse
