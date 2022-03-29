import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link , Navigate, Redirect, useNavigate} from "react-router-dom";
import api from '../../axios/myapi'
import { setApiDefaultData , setUserStates } from "../../Containers/action";
import { ChangeData } from "../../Containers/reducers";


export const Login = ()=>{


    const navigate = useNavigate()

    const [username, setUsername] = useState('')
    const [mypass, setPass] = useState('');

    const statedata = useSelector(state=> state.ChangeData)
    const dispatch = useDispatch()

    
    useEffect((e)=>{
        const check = async ()=>{
            const response = await api.get('/data').catch((e)=> console.log("API FETCH ERROR AT START"))
            if(response){
                 dispatch(setApiDefaultData(response.data))
            }else{
                console.log("loading...")
            }
            return response.data
        }
        check()
    },[])



   

    function handleLogin(e){
        e.preventDefault();

        console.log("submit",statedata)

        if(username === '' || mypass === ''){
            alert("enter kro yrr")
        }
        else{

            const find = statedata.ApiData.find((val)=> val.username === username)

            if(find != undefined){
                if(find.password === mypass){

                    const index = statedata.ApiData.map((val)=> val.username ).indexOf(username)
                    console.log("yeh index pr he ", index)
                    localStorage.setItem("index",index)
                    navigate("/list")
                }else{
                    alert("Pass is wronge");
                }
            }else{

               
                alert("user not found")
            }


        }

        



    }

    return(<div>

                <div>
                    <form onSubmit={handleLogin}>
                        <h1 className="display-4 ">Login</h1>
                        <input value={username} onChange={(e)=> setUsername(e.target.value)}  placeholder="Enter Username" className="form-control my-3"></input>
                        <input  value={mypass} onChange={(e)=> setPass(e.target.value)} placeholder="Enter Password" className="form-control my-3"></input>
                        <button value="login" type="submit" className="btn btn-success">Login</button>
                        <p className="mt-5"> Don't have any Account ?</p> <Link to="/signup">  <p >Sign Up</p> </Link>
                    </form>
                </div>


          </div>)
}
