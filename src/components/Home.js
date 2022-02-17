import React,{useState,useEffect} from 'react';
import { getAllProducts,deleteProduct } from '../config/Myservice';
import {useNavigate} from 'react-router-dom'
import Addproduct from './Addproduct'
import {Link } from 'react-router-dom'
export default function Home(props) {
  console.log("propsdata."+props.data)
  const [proData,setProData]=useState([]);
  const navigate=useNavigate();
  useEffect(()=>{
    // setProData(props.datalist)
     getAllProducts()
     .then(res=>{
       setProData(res.data);
       console.log(res.data)
     })
  },[])
  const delProduct=(id)=>{
    if(window.confirm("Do u want to delete ?")){
      deleteProduct(id)
      .then(res=>{
       
          alert("Product Deleted")
          getAllProducts()
          .then(res=>{
            setProData(res.data);
            console.log(res.data)
          })
      })
    }
  }
 
  return <div>
      <table className='table table-responsive-xl table-striped mt-5'>
        <thead>
           <tr>
             <th> Sr.no</th>
             <th> Product Name</th>
             <th> Price</th>
             <th> Quantity</th>
             <th> Action</th>
             <th> Action</th>
           </tr>
        </thead>
        <tbody>
           {proData.map((pro,ind)=> 
           <tr key={pro.id}>
              <td>{ind+1}</td>
              <td>{pro.pname}</td>
              <td>{pro.price}</td>
              <td>{pro.quantity}</td>
              <td>
                <button className='btn-info btn-lg' onClick={()=> delProduct(pro.id)}> Delete</button>
              </td>
              <td>
              <Link  to={`/addproduct/${pro.id}`}>update</Link>
              </td>
           </tr>)}
        </tbody>
      </table>
  </div>;
}
