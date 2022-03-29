import React, { useEffect, useState } from "react";
import api from '../../axios/myapi'
import { Link, useNavigate } from "react-router-dom";

export const SignUp = ()=>{

    const navigate = useNavigate()

    const [name, setName]= useState('')
    const [username, setUserName]= useState('')
    const [email, setEmail]= useState('')
    const [pass, setPass]= useState('')
    const [rpass, setRpass]= useState('')

    const [match, setMatch]= useState(false)
    const [spaces, setspaces]= useState(false)


    const data = {
        id: Math.floor(Math.random()* (25-10)+ 10),
        name, 
        username, 
        email,
        password:pass,
        record:[]
    }  
    
    function handleSignUp(e){
        e.preventDefault()


        const send = async ()=> {
            const respones = await api.post('/data', data).catch((e)=> console.log('Posting to API ERROR' , e))
            console.log("Successfullly sent", respones)
            alert("Acc created Successfuly !" , data.name)
            navigate("/login")

            return respones.data

        }

        send()

        setName('');
        setEmail('')
        setPass('')
        setUserName('')
        setRpass('')
        
    }




    useEffect(()=>{ 
        console.log("running")
        if(pass !== rpass){
            setMatch(true)
        }else{
            setMatch(false)
        }

        const check = username.includes(' ')
        if(check){
            setspaces(true)
        }else{
            setspaces(false)
        }
    },[rpass , username])





    return(<div>
        <form onSubmit={handleSignUp}>
            <h1 className="display-4">Sign Up</h1>
            <input value={name} onChange={(e)=> setName(e.target.value)} className="form-control my-3" placeholder="Enter Name"></input>
            <input value={username} onChange={(e)=> setUserName(e.target.value)} className="form-control my-3" placeholder="Enter Username"></input>
             {spaces ? <p className="text-danger">Username cannot contain white Spaces</p> : null }
            <input value={email} onChange={(e)=> setEmail(e.target.value)} className="form-control my-3" placeholder="Enter email"></input>
            <input value={pass} onChange={(e)=> setPass(e.target.value)} className="form-control my-3" placeholder="Enter Password"></input>
            <input value={rpass} onChange={(e)=> setRpass(e.target.value)} className="form-control my-3" placeholder="Re-enter Password"></input>
            {match ? <p className="text-danger">Password does not match</p> : null }
            <button className="btn btn-success" value="submit" type="submit" >Sign Up</button>
            <p className="mt-5 mb-0">Already have the account</p>
            <Link to="/login"> <p className="m-0 p-0" >Login</p></Link>
        
        </form>
    </div>)
}