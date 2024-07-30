import { combineReducers } from 'redux'
import  AuthReducer   from './auth/auth'
import  TestiReducer  from './testimonial/testimonial'

const rootReducer = combineReducers({
 
auth_reducer:AuthReducer,
TestiReducer :TestiReducer 

})

export default rootReducer
