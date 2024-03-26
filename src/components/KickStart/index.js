import './index.css'
import { useState } from 'react'
import Popup from 'reactjs-popup'
import Header from '../Header'
import 'reactjs-popup/dist/index.css'
const KickStart=()=>{
    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [phone,setPhone]=useState('')
    const [word,setWord]=useState('')
    const onSubmitEvent=event=>{
        event.preventDefault()
        if(name!=="" && (email !=="" && (email.includes("@gmail.com"))) && (phone!=="" && phone.length===10)){
            setWord("CallBack Request is Success");
            setName("")  
            setEmail("")
            setPhone("")

            
        }
        else{
            setWord("Enter a valid information")
            setName("")  
            setEmail("")
            setPhone("")

        }
        
    }

    const onChangeName = (event) => setName(event.target.value);
    const onChangeEmail = (event) => setEmail(event.target.value);
    const onChangePhone = (event) => setPhone(event.target.value);
    return(
        <div className='last'>
            <div className='first'>
                <h1>Kick off your ACCA Prep journey with IndigoLearn</h1>
                <p className='last-para'>Sign-in and get instant access to our FREE courses.</p>
                <button className="btn-2">SIGN-IN</button>
            </div>
            
            <div className="sec mt-3" >
                    <form className="form-cont" onSubmit={onSubmitEvent}>
                        <h1>Aspiring to be an ACCA?</h1>
                        <input type="text" className="each" value={name} onChange={onChangeName} placeholder="Name"/>
                        <input type="text" className="each" value={email} onChange={onChangeEmail} placeholder="Email"/>
                        <input type="text" className="each" value={phone} onChange={onChangePhone} placeholder="Password"/>
                        
                        <Popup
                            modal
                            trigger={
                                <button className="btn-3" >Request Callback</button>
                            }
                        >
                            {close => (
                            <div className="modal-cont">
                                <div>
                                <p className="sucess">{word}</p>
                                </div>
                                <button
                                type="button"
                                className="trigger-button"
                                onClick={() => close()}
                                >
                                Close
                                </button>
                            </div>
                            )}
                        </Popup>
                        


                    </form>
                </div>

        
        </div>
    )
    
}

const Kick=()=>{
    return(
        <>
        <Header />
        <KickStart/>
        </>
    )
}

export {KickStart,Kick}

