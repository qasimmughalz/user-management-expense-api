export const AddData = (details)=>{
    return{
        type:'AddTransaction',
        payload:details
    }
}


export const DeleteData = (id)=>{
    return{
        type:'DeleteTransaction',
        payload:id
    }
}




export const setUpdateValues = (id)=>{
    return{
        type:'setUpdateValues',
        payload:id
    }
}




export const handleDetailInput = (detail)=>{
    return{
        type:'handleDetailInput',
        payload:detail
    }
}

export const handleAmountInput = (amount)=>{
    return{
        type:'handleAmountInput',
        payload:amount
    }
}


export const setDefaultData = ()=>{
    return{
        type:'setDefaultData'
      
    }
}

export const editRecord = (data)=>{
    return{
        type:'editRecord',
        payload:data
      
    }
}


export const setApiDatatoRedux = (data)=>{
    return{
        type:'setApiDatatoRedux',
        payload:data
      
    }
}


export const setApiDefaultData = (data)=>{
    return{
        type:'setApiDefaultData',
        payload:data
    }
}


export const setUserStates = (data)=>{
    return{
        type:'setUserStates',
        payload:data
    }
}