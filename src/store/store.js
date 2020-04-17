import {createStore} from 'redux'
import resultReducer from './resultReducer'

const store=createStore(resultReducer)

export  default store