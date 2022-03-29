


const initialState = {
    id:0,
    details:'',
    amount:0,
    data:[
    ],
    updatebtn:false,
    edit:false,
    ApiData: []

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
                amount:result[0].amount ,
                updatebtn:true   
            }
        case 'UpdateDetailInput':
            return{
                ...state,
                details: action.payload,
                amount:0               
            }
        case 'setUserStates':
               return{
                   ...state,
                    data: state.ApiData[action.payload].record        
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
        case 'setApiDefaultData':
            if(state.current != 0 ){
                return{
                    ...state,
                    current: state.current,
                    ApiData: action.payload    
                }
            }else{
                return{
                    ...state,
                    ApiData: action.payload    
                }
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
                data: myarr,
                updatebtn:false
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
