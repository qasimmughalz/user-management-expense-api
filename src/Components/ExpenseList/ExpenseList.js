import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeDat } from "react";
import { ExpenseCard } from "./ExpenseCard";
import api from '../../axios/myapi'
import { setApiDatatoRedux } from "../../Containers/action";


export const ExpenseList = ()=>{



    const dispatch = useDispatch()
    
    useEffect(()=>{

        const retrievedata = async ()=>{
            const response = await api.get('/data').catch((e)=> console.log('our console',e));
            console.log(response)
            if(response){
                dispatch(setApiDatatoRedux(response.data))
            }
        }
        retrievedata()
    },[])
    


    const stateData = useSelector((state)=> state.ChangeData)


    return<>

        {stateData.data.map((val)=>{
            return <ExpenseCard key={val.id} id={val.id} detail={val.detail} amount={val.amount}></ExpenseCard>
        })}
        </>

}