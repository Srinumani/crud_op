import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "./Redux/UserReducers";
import { useNavigate } from "react-router";



function Create(){
    const [name,setName]=useState("");
    const [email,setMail]=useState("");
    const [address,setAddress]=useState("");
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const users=useSelector((state)=>state.users);

    // useEffect(() => {
    //      handlesubmit();
    //   }, []);

    function handlesubmit(e){
        e.preventDefault();
        dispatch(addUser({id:users[users.length-1].id+1,name,email,address}));
        setMail("");
        setName("");
        navigate("/");
    }
    return(
        <><h1 className="mt-5">Create User Details</h1>
        <div className="d-flex w-80 vh-80 justify-content-center  align-items-center">
                 
            <div className="w-50 border bg-secondary  text-dark p-5">
                  
            <form onSubmit={handlesubmit}>
                <div >
                    <label className="float-start">Enter Name:</label>
                    <input type="text" class="form-control" placeholder="Enter name.."  onChange={(e)=>setName(e.target.value)} />
                </div>
                <div  >
                    <label className="float-start">Enter Email</label>
                    <input type="email" class="form-control" placeholder="Enter mail.." onChange={(e)=>setMail(e.target.value)}/>
                </div>
                <div  >
                    <label className="float-start">Enter address</label>
                    <input type="text" class="form-control" placeholder="Enter mail.." onChange={(e)=>setAddress(e.target.value)}/>
                </div>
                <br/>
   
  <button className="btn btn-info float-start">Submit</button>
</form>


            </div>
        </div>

    
         
        </>
    )
}
export default Create;