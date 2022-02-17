import React,{useState,useEffect} from 'react';
import { addProducts ,getProductById,updateProduct} from '../config/Myservice';
import {useNavigate} from 'react-router-dom'
import { useParams } from "react-router-dom";
import '../App.css'
export default function Addproduct() {
    const { id } = useParams();

    const [state,setState]=useState({pname:'',price:'',quantity:''});
    const navigate=useNavigate();
    const handler=(e)=>{
      const {name,value}=e.target;
      setState({...state,[name]:value});
    }
    
    useEffect(()=>{
        console.log("res.data")
        if(id != undefined){
            getProductById(id)
        .then(res=>{
          console.log(res.data)
          setState({pname:res.data.pname,price:res.data.price,quantity:res.data.quantity})
          console.log(state)
        })
        }
     },[])
    const postData=(e)=>{
       e.preventDefault();
       addProducts(state)
       .then(res=>{
           alert("Product Added")
           navigate("/");
       })
       .catch(err=>{
           
       })
    }
    const update =(e)=>{
        updateProduct(id,state)
        .then(res=>{
            alert("Product updated")
            navigate("/");
        })
        .catch(err=>{
            
        })
    }
  return <div className='d-flex justify-content-center align-items-center container_form'>
     <div className='w-100 mt-5 '>
      <form onSubmit={postData}>
      <h2 className='text-center'> Add Products</h2>
          <div className='form-group'>
              <label> Product Name </label>
              <input type="text" name="pname" className='form-control' onChange={handler} value={state.pname}/>
          </div>
          <div className='form-group'>
              <label> Price </label>
              <input type="text" name="price" className='form-control' onChange={handler} value={state.price}/>
          </div>
          <div className='form-group'>
              <label> Quantity </label>
              <input type="text" name="quantity" className='form-control' onChange={handler} value={state.quantity}/>
          </div>
         {!id?
 <input type="submit" value="Add" className='btn btn-success btn-lg text-center'/>
 :
 <input type="button" value="update" className='btn btn-success btn-lg text-center' onClick={update}/>
         }
      </form>
      </div>
  </div>;
}
