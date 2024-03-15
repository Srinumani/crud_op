import { useDispatch, useSelector } from "react-redux";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import { deleteUser } from "./Redux/UserReducers";

function Home(){
    const users=useSelector((state)=>state.users);
    console.log(users);
    const dispatch=useDispatch();

    function handleDelete(id){
        dispatch(deleteUser({id}));

    }

    
    return(
        <>
        <div className="container">
            <h2>Crud Operations With Json Server</h2>
            <Link to="/create"><button className="btn btn-success m-3 float-start w-50%">Create+</button></Link>
            <table className="table">
                <thead>
                    <tr>
                        <td>ID</td>
                        <td>Name</td>
                        <td>Email</td>
                        <td>Action</td>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user,index)=>(
                        <>
                        <tr key={index}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.address}</td>
                            <td>
                                <Link to={`/edit/${user.id}`}><button className="btn btn-primary me-3">Edit</button></Link>
                                <button className="btn btn-danger" onClick={()=>handleDelete(user.id)}>Delete</button>
                            </td>
                        </tr>
                        </>
                       ))}
                </tbody>

            </table>
        </div>
        </>
    )
}
export default Home;