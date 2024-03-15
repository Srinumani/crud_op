import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { updateUser } from "./Redux/UserReducers";


function Edit(){
    const {id}=useParams();
    const users=useSelector((state)=>state.users);
    const existinguser=users.filter(f=>f.id==id);
    const {name,email,address}=existinguser[0];
    const [uname,setName]=useState(name);
    const [uaddress,setAddress]=useState(address);
    const [uemail,setMail]=useState(email);
    const dispatch=useDispatch();
    const navigate=useNavigate();


    function handleUpdate(event){
        event.preventDefault();
        dispatch(updateUser({
            id:id,
            name:uname,
            email:uemail,
            address:uaddress
        }));
        navigate("/");

    }
    
    return(
        <>
        <h1 className="mt-5">Update User Details</h1>
        <div className="d-flex w-80 vh-80 justify-content-center  align-items-center">
                 
            <div className="w-50 border bg-secondary  text-dark p-5">
                  
            <form onSubmit={handleUpdate}>
                <div >
                    <label className="float-start">Enter Name:</label>
                    <input type="text" class="form-control" value={uname} placeholder="Enter name.."  onChange={(e)=>setName(e.target.value)} />
                </div>
                <div  >
                    <label className="float-start">Enter Email:</label>
                    <input type="email" value={uemail} class="form-control" placeholder="Enter mail.." onChange={(e)=>setMail(e.target.value)}/>
                </div>
                <div  >
                    <label className="float-start">Enter  Adress:</label>
                    <input type="text" value={uaddress} class="form-control" placeholder="Enter mail.." onChange={(e)=>setAddress(e.target.value)}/>
                </div>
                
                <br/>
  <button className="btn btn-info float-start">Submit</button>
</form>


            </div>
        </div>

        </>
    )
}
export default Edit;