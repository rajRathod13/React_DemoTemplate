import React, { useEffect } from 'react'
import { useDispatch ,useSelector} from 'react-redux'
import {allLeads, deleteSingleLead} from '../Redux/Lead/action'
import {useNavigate} from 'react-router-dom'
function Leads() {
  const navigate = useNavigate()
  const leadData = useSelector((state)=>state.lead.leadData)
  const isLoading = useSelector((state) => state.lead.isLoading)
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(allLeads())
  },[])

  function handleDelete(item){
    dispatch(deleteSingleLead(item))
  }
  
  if(isLoading){
    return <h1 className="display-6 mb-4">Loading....</h1>
  }
  
  return (
    <>
    <div className="container my-5">
    <table className='table'>
        <thead>
          <tr>
            <th>Sr No.</th>
            <th>Customer Name</th>
            <th>Course Type</th>
            <th>Contact No.</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {leadData &&
            Object.keys(leadData).map ((item,index)=>{
              
              const {courseType,personName,phoneNo} = leadData[item]
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{personName}</td>
                  <td>{courseType}</td>
                  <td>{phoneNo}</td>
                  <td>
                    <button className='btn btn-primary' onClick={()=> navigate(`/leads/${item}`)}>View</button>
                    <button className='btn btn-secondary'onClick={()=>handleDelete(item)}>Delete</button>
                  </td>
                </tr>
              )
            })
          }
        </tbody>
    </table>
          </div>
    </>
  )
}

export default Leads
