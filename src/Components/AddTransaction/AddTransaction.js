import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddData , handleDetailInput , handleAmountInput , setDefaultData ,editRecord} from "../../Containers/action";
import { ChangeData } from "../../Containers/reducers";
import Store from "../../Containers/store";
import api from '../../axios/myapi'
import { setApiDefaultData } from "../../Containers/action";

export const AddTransaction = ()=>{

    const statedata = useSelector((state)=> state.ChangeData)
    const dispatch = useDispatch()


    useEffect(()=> {
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



    console.log("Store ApiDta", statedata.ApiData)



     function handleSubmit(e){
        e.preventDefault()

        const result = statedata.data.find((val)=>{
            return val.id === statedata.id
        })

        
        if(result){
            console.log("ID FOUND larkey" , result)
            const mydata = {
                detail:statedata.details,
                amount:statedata.amount
            }  
            const check = async ()=>{
                const resp = await api.put(`/data/${statedata.id}`, mydata)
                console.log('UPdated Data in the Server', resp)
                return resp.data
            }
            check()

        }else{
            const mydata = {
                id:Math.floor(Math.random() * 24),
                detail:statedata.details,
                amount:statedata.amount
            }  
            
            const check = async ()=>{
                const resp = await api.post('/data', mydata)
                console.log('tttt', resp)
                return resp.data
            }
            check()
           
        }
     dispatch(setDefaultData())
    }   



    return(<div>

            <form onSubmit={handleSubmit}>
                <input value={statedata.details} onChange={(e)=>  dispatch(handleDetailInput(e.target.value))} placeholder='Enter the Value' className="form-control my-3" ></input>
                <input value={statedata.amount} onChange={(e)=> dispatch(handleAmountInput(e.target.value))} placeholder='Enter the Amount' className="form-control mb-3" ></input>
                <button className="btn btn-block btn-success" type="submit" value='submit'>{statedata.updatebtn? "Update" : "ADD Record"}</button>
            </form>


    </div>)



}