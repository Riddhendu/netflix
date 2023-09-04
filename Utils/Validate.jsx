export const validate=(email,password)=>{
const emailvalidate = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)

const passwordValidate  = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password)
 
if(!emailvalidate) return 'Email is Not valid'
if(!passwordValidate) return 'Password is Not valid'

return null
}