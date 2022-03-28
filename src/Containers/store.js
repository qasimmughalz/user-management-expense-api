import {createStore, store} from 'redux'
import { AllReducers } from './AllReducers'

 const Store = createStore(AllReducers)


export default Store