import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate,Link } from "react-router-dom";
import { fetchCoursesData } from "../Redux/Courses/action";

function Courses() {
  const fullData = useSelector((state) => state.allCourses.fullData);
  const navigate = useNavigate()
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCoursesData());
  }, []);
  return (
    <>
      {/* Header */}
      <div
        className="container-fluid page-header py-6 my-6 mt-0 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div className="container text-center">
          <h1 className="display-4 text-white animated slideInDown mb-4">
            Courses
          </h1>
          <nav aria-label="breadcrumb animated slideInDown">
            <ol className="breadcrumb justify-content-center mb-0">
              <li className="breadcrumb-item">
                <Link className="text-white" to="/">
                  Home
                </Link>
              </li>
              <li className="breadcrumb-item">
                <a className="text-white" href="#">
                  Pages
                </a>
              </li>
              <li
                className="breadcrumb-item text-primary active"
                aria-current="page"
              >
                Courses
              </li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Header end */}

      {/* course start */}
      <div className="container-xxl py-6">
        <div className="container">
          <div
            className="text-center mx-auto mb-5 wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ maxWidth: 500 }}
          >
            <h6 className="text-primary text-uppercase mb-2">
              Tranding Courses
            </h6>
            <h1 className="display-6 mb-4">
              Our Courses Upskill You With Driving Training
            </h1>
          </div>
          <div className="row g-4 justify-content-center">
            {Object.keys(fullData).map((item,index) => {
              const {
                assetType,
                courseDuration,
                courseDetail,
                courseFee,
                courseName,
              } = fullData[item];

              return (
                <div
                  className="col-lg-4 col-md-6 wow fadeInUp"
                  data-wow-delay="0.1s"
                  key={index}
                >
                  <div className="courses-item d-flex flex-column bg-light overflow-hidden h-100">
                    <div className="text-center p-4 pt-0">
                      <div className="d-inline-block bg-primary text-white fs-5 py-1 px-4 mb-4">
                        {courseFee}
                      </div>
                      <h5 className="mb-3">{courseName}</h5>
                      <p>{courseDetail}</p>
                      <ol className="breadcrumb justify-content-center mb-0">
                        <li className="breadcrumb-item small">
                          <i className="fa fa-signal text-primary me-2" />
                          {assetType}
                        </li>
                        <li className="breadcrumb-item small">
                          <i className="fa fa-calendar-alt text-primary me-2" />
                          {courseDuration} Week{" "}
                        </li>
                      </ol>
                    </div>
                    <div className="position-relative mt-auto">
                      <img className="img-fluid" src="img/courses-1.jpg" alt="" />
                      <div className="courses-overlay">
                        <button className="btn btn-outline-primary border-2" onClick={()=> navigate ('/appointment')}>
                          Book Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Courses;
