import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeDat } from "react";
import { ExpenseCard } from "./ExpenseCard";
import api from '../../axios/myapi'
import { setApiDatatoRedux, setDefaultData, setUserStates , setApiDefaultData } from "../../Containers/action";
import { AddTransaction } from "../AddTransaction/AddTransaction";


export const ExpenseList = ()=>{



    const dispatch = useDispatch()

         const index =  localStorage.getItem('index')



    useEffect(()=>{
        const retrievedata = async ()=>{
            const response = await api.get('/data').catch((e)=> console.log('our console',e));
            console.log(response)
            if(response){
                dispatch(setApiDefaultData(response.data))
                dispatch(setUserStates(index))
            }
        }
        retrievedata()
    },[])
    


    const stateData = useSelector((state)=> state.ChangeData)
    console.log( "redux ka data", stateData.data)


    return<>

        {stateData.data.map((val)=>{
            return <ExpenseCard key={val.id} id={val.id} detail={val.detail} amount={val.amount}></ExpenseCard>
        })}

        <AddTransaction></AddTransaction>
        </>

}