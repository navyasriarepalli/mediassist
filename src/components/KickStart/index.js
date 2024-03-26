import './index.css'
import Popup from 'reactjs-popup'
import Header from '../Header'
import 'reactjs-popup/dist/index.css'
const KickStart=()=>{
    const onSubmitEvent=event=>{
        event.preventDefault()
    }
    return(
        <div className='last'>
            <div className='first'>
                <h1>Kick off your ACCA Prep journey with IndigoLearn</h1>
                <p className='last-para'>Sign-in and get instant access to our FREE courses.</p>
                <button className="btn-2">SIGN-IN</button>
            </div>
            
            <div className="sec" >
                    <form className="form-cont" onSubmit={onSubmitEvent}>
                        <h1>Aspiring to be an ACCA?</h1>
                        <input type="text" className="each" placeholder="Name"/>
                        <input type="text" className="each" placeholder="Email"/>
                        <input type="text" className="each" placeholder="Password"/>
                        
                        <Popup
                            modal
                            trigger={
                                <button className="btn-3" >Request Callback</button>
                            }
                        >
                            {close => (
                            <div className="modal-cont">
                                <div>
                                <p className="sucess">CallBack Request is Success</p>
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

