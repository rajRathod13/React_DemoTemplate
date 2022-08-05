import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux/es/exports";
import {singleLead} from '../Redux/Lead/action'


function ViewLeads() {
  const {item} = useParams()
  // console.log(item)
  const isLoading = useSelector((state) => state.lead.isLoading)
  const dispatch = useDispatch()
  const {courseType,email,message,personAge,personName,phoneNo} = useSelector((state) => state.lead.singleLeadData)
  useEffect(()=> {
    dispatch(singleLead(item))
  },[])

  if(isLoading){
    return <h1>Loading....</h1>
  }
  return (
    <>
      <div className="container my-5 ">
        <div className="row d-flex">
          <div className="col-md-12">
            <div className="card" style={{ width: "18rem" }}>
              <div className="card-body">
                <h3 className="card-title ">Person Name : {personName}</h3>
                <h4 className="card-subtitle mb-2 text-muted">Course Name : {courseType}</h4>
                <h5 className="card-subtitle mb-2 text-muted">Person age: {personAge}</h5>
                <h5 className="card-subtitle mb-2 text-muted">Email Id: {email}</h5>
                <h5 className="card-subtitle mb-2 text-muted">Contact No: {phoneNo}</h5>
                <p className="card-text">
                  {message}
                </p>
                <a href="#" className="card-link">
                  Card link
                </a>
                <a href="#" className="card-link">
                  Another link
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ViewLeads;
