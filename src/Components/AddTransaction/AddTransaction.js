import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddData , handleDetailInput , handleAmountInput , setDefaultData ,editRecord} from "../../Containers/action";
import { ChangeData } from "../../Containers/reducers";
import Store from "../../Containers/store";
import api from '../../axios/myapi'

export const AddTransaction = ()=>{

    const statedata = useSelector((state)=> state.ChangeData)

    

    const dispatch = useDispatch()



     function handleSubmit(e){
        e.preventDefault()


        const result = statedata.data.find((val)=>{
            return val.id === statedata.id
        })

        if(result){
            const mydata = {
                detail:statedata.details,
                amount:statedata.amount
            }  
            const check = async ()=>{
                const resp = await api.post('/data', mydata)
                console.log('tttt', resp)
                return resp.data
            }
            check()
            dispatch(editRecord(mydata))

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
            dispatch(AddData(mydata))

        }

     dispatch(setDefaultData())

    }   



    return(<div>

            <form onSubmit={handleSubmit}>
                <input value={statedata.details} onChange={(e)=>  dispatch(handleDetailInput(e.target.value))} placeholder='Enter the Value' className="form-control my-3" ></input>
                <input value={statedata.amount} onChange={(e)=> dispatch(handleAmountInput(e.target.value))} placeholder='Enter the Amount' className="form-control mb-3" ></input>
                <button className="btn btn-block btn-success" type="submit" value='submit'>Add Data</button>
            </form>


    </div>)



}