import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'
import axios from 'axios'

const ViewPatient = () => {
    const [data, setData] = new useState([])

    const getData = () => {
        axios.get("http://localhost:3001/api/patient/view").then((response) => {
            setData(response.data)
        })
    }
    useEffect(() => { getData() }, [])
  return (
    <div>
        <NavBar/>
        <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">Name</th>
                                    <th scope="col">Age</th>
                                    <th scope="col">Phone</th>
                                    <th scope="col">Address</th>
                                    <th scope="col">Symptoms</th>
                                    <th scope="col">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    data.map(
                                        (value, index) => {
                                            return<tr>
                                            <th scope="row">{value.patientName}</th>
                                            <td>{value.patientAge}</td>
                                            <td>{value.phone}</td>
                                            <td>{value.address}</td>
                                            <td>{value.symptoms}</td>
                                            <td>{value.status}</td>
                                          </tr>


                                        }
                                    )
                                }

                            </tbody>
                        </table>






                    </div>
                </div>
            </div>

    </div>
  )
}

export default ViewPatient