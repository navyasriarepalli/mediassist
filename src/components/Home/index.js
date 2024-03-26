import { useState } from "react";
import { FaSmile } from "react-icons/fa";
import { MdOutlineMenuBook } from "react-icons/md";
import { CiYoutube } from "react-icons/ci";
import { IoMdContacts } from "react-icons/io";
import {Learning} from "../Learning";




import Header from "../Header";
import {WhyChooseUs} from "../WhyChooseUs";
import Eligibility from "../Eligibility";
import {Placements} from "../Placements";
import {KickStart} from "../KickStart";

import Popup from 'reactjs-popup'

import 'reactjs-popup/dist/index.css'
import './index.css'

const Home =()=>{
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
            <div className="main">
                <Header/>
                <div className="fome-cont">
                <div className="descript-cont">
                    <h1>Become ACCA in 18months</h1>

                    <p>Acquire globally recognized accountancy qualification,ACCA (also called as Global CA), and get placed in top MNCs & Big4s.</p>
                    <div className="btn-cont">
                        <button className="btn-1">DOWNLOAD BROCHURE</button>
                        <button className="btn-2">SILVER LEARNING PARTNER</button>
                    </div>
                    <div className="ul">
                        <div className="list-cont">

                        <FaSmile className="home-icon" />
                        <div>
                        
                        <p>3,11,705</p>
                        
                        <p className="para">registered Users</p>
                        </div>
                        

                        </div>

                        <div className="list-cont">

                        <MdOutlineMenuBook  className="home-icon" />
                        <div>
                        <p>92,608</p>
                        
                    
                        
                        <p className="para">Courses Enrolled</p>
                        </div>
                        

                        </div>
                        <div className="list-cont">

                        <CiYoutube className="home-icon" />
                        <div>
                        
                        <p>4,73,76,119</p>
                        
                        <p className="para">Minutes Watched</p>
                        </div>
                        

                        </div>
                        <div className="list-cont">

                        <IoMdContacts className="home-icon" />
                        <div>
                        
                        <p>8 Experts</p>
                        
                        
                        <p className="para">Faculty</p>
                        </div>
                        

                        </div>
                    </div>
                </div>
                <div className="sec " >
                    <form className="form-cont p-5" onSubmit={onSubmitEvent}>
                        <h3>Aspiring to be an ACCA?</h3>
                        <input type="text" className="each" value={name} onChange={onChangeName} placeholder="Name"/>
                        <input type="text" className="each" value={email} onChange={onChangeEmail} placeholder="Email"/>
                        <input type="text" className="each" value={phone} onChange={onChangePhone} placeholder="Password"/>
                        
                        
                        <Popup
                            modal
                            trigger={
                                <button className="btn-3"  >Request Callback</button>
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
                <WhyChooseUs  />
                <Eligibility />
                <Learning />
                <Placements/>
                <KickStart />
            </div>
        )
    

}

export default Home