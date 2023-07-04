import React from 'react'
import { useState } from 'react'
import { validation } from './validation'

function Form({login}) {
    const [userData, setUserData] = useState({
        email:'',
        password:'',
    })

    const [errors, setErrors] = useState({})

    const handleChange = function(evento){
        const nameProperty = evento.target.name
        const value = evento.target.value
        setErrors(validation({...userData,[nameProperty]:value}))
        setUserData({...userData, [nameProperty]:value})
    }

    function handleSubmit(event){
        event.preventDefault()
        login(userData)
    }

    return (
    <div>
        <form style={{backgroundColor:'rgba(31, 28, 31, 0.8)',border:'5px solid rgba(20, 94, 126, .7)', borderRadius:"9px", margin:"1%"}} onSubmit={handleSubmit}>
            
            <label htmlFor="" style={{color:"white", textShadow:"-1px 1px  10px rgba(0, 255, 0, 1 )", fontSize:17, textAlign:"center"}}>
                email:{"=====>"}
                <input style={{marginLeft:"1%", marginBottom:".5%"}} type='text' value={userData.email} name='email' onChange={handleChange}/>
            <br/>
            <span style={{color:"white", border:'2px solid rgba(185, 41, 112 , .7)',borderRadius:"9px", textShadow:"-1px 1px  10px rgba(0, 255, 0, 1 )", fontSize:18, textAlign:"center" }}>{errors.email}</span>
            </label>
            <br/>

            <label htmlFor="" style={{color:"white", textShadow:"-1px 1px  10px rgba(0, 255, 0, 1 )", fontSize:17, textAlign:"center"}}>password:{"==>"} 
                <input style={{marginLeft:"2%", marginBottom:".5%", marginTop:"2%"}} type='password' value={userData.password} name='password' onChange={handleChange}/>
            <br/>
            <span style={{color:"white", border:'2px solid rgba(185, 41, 112 , .7)',borderRadius:"9px", textShadow:"-1px 1px  10px rgba(0, 255, 0, 1 )", fontSize:18, textAlign:"center"}}>{errors.password}</span>
            </label>
            <br/>

            <button style={{marginTop:"1.5%"}} type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default Form