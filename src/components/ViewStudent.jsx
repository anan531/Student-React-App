import React, { useState } from 'react'
import Navigation from './Navigation'

const ViewStudent = () => {

    const [data,changeData] = useState(

      [{"S.no":1,"Name":"Kiara","admNo":101,"class":"X"},
        {"S.no":2,"Name":"John","admNo":102,"class":"XI"},
        {"S.no":3,"Name":"Meera","admNo":103,"class":"X"},
        {"S.no":4,"Name":"Riya","admNo":104,"class":"XII"},
        {"S.no":5,"Name":"Shiya","admNo":105,"class":"X"},
        {"S.no":6,"Name":"Merin","admNo":106,"class":"XII"}      
      ]

    )

  return (
    <div>
<Navigation/>
<div className="container">
    <div className="row g-3">



 <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12"></div>
<div className="container">
    <div className="row g-3">



 <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

<table className="table table-light table-striped" >
  <thead>
    <tr>
      <th scope="col">S.NO</th>
      <th scope="col">NAME</th>
      <th scope="col">ADMISSION NO</th>
      <th scope="col">CLASS</th>
    </tr>
  </thead>
  <tbody>
             {data.map(

              (value,index) => {

                return(


    <tr>
      <th scope="row">{value["S.no"]}</th>
      <td>{value.Name}</td>
      <td>{value.admNo}</td>
      <td>{value.class}</td>

    </tr>
                )

              }

            )
            
            
            }

  </tbody>
</table>
</div>
        </div>
    </div>
</div>

</div>
</div>
  )
}

export default ViewStudent