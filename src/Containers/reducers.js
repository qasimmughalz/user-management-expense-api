


const initialState = {
    id:0,
    details:'',
    amount:0,
    data:[
        
    ],
    edit:false
}


export const ChangeData = (state = initialState, action)=>{
    switch(action.type){
        case 'setUpdateValues':
            const result = state.data.filter((val)=>{
                return val.id === action.payload
            })
          
            return{
                ...state,
                id:result[0].id,
                details: result[0].detail,
                amount:result[0].amount    
            }
        case 'UpdateDetailInput':
            return{
                ...state,
                details: action.payload,
                amount:0               
            }
        case 'setApiDatatoRedux':
        return{
            ...state,
            data: action.payload             
        }
        case 'setDefaultData':
                return{
                    ...state,
                    id:0,
                    details: '',
                    amount:0               
          }
        case 'handleDetailInput':
            console.log('dispatch', action.payload)
            console.log('details before', action.payload)
                return{
                    ...state,
                    details: action.payload
                }
        case 'handleAmountInput':
           console.log('dispatch', action.payload)
           console.log('details before', action.payload)
               return{
                   ...state,
                   amount: action.payload
                }
        case 'AddTransaction':
            return{
                ...state,
                data:[...state.data, action.payload]
            }
        case 'editRecord':
            const check = state.data.map((e)=> e.id).indexOf(state.id)
            console.log('index btao ', check);

            const myarr = [...state.data]
            myarr[check].detail = state.details
            myarr[check].amount = state.amount
            return{
                ...state,
                data: myarr
            }
        case 'DeleteTransaction':
                return{
                    ...state,
                    data: state.data.filter((val)=> val.id != action.payload )
                }
        case 'UpdateTransaction':
                    return{
                        ...state,
                        data: state.data.filter((val)=> val.id != action.payload )
            }
        default:
        return state
    }
}
