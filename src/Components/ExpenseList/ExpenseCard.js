import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { DeleteData , setUpdateValues} from "../../Containers/action";
import api from '../../axios/myapi'

export const ExpenseCard=({id,detail,amount})=>{

    const [delBtn, setDelBtn] = useState(false)
    const [editBtn,setEditBtn]=useState(false)




    const dispatch = useDispatch()

    function handleDelete(id){
        console.log('dispatched')

        const check = async ()=>{
            const result = await api.delete(`/data/${id}`)
            console.log('deleted item',result.data)
            return result.data
        }

        check()


        dispatch(DeleteData(id))
    }

    function handleUpdate(id){
        console.log('chnge wale ki id', id)
        dispatch(setUpdateValues(id))
    }


    return(
    
    <div className="d-flex justify-content-between relative my-3 align-items-center border" onMouseEnter={()=> setDelBtn(true)} onMouseLeave={()=> setDelBtn(false)} >
        {delBtn ? <button className="btn btn-danger" onClick={()=> handleDelete(id)}  >x</button>: null}
        {delBtn ? <button className="btn btn-secondary" onClick={()=> handleUpdate(id)}  >edit</button>: null}
                <p className="m-0 p-2">{id}</p>
                <p className="m-0 p-2">{detail}</p>
                <p className="m-0 p-2">{amount}</p>
    </div>)

}


