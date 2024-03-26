import './index.css'
import Header from '../Header';
import { HiLightBulb } from "react-icons/hi2";
import { MdGroups2 } from "react-icons/md";
import { RiUserLocationFill } from "react-icons/ri";


const WhyChooseUs=()=>{
    return(
        
        
        <div className='why-main' >
            
        <h1 className='why-head'>Why Choose Us?</h1>
        <div className="why-section">
        <div className="eachSection">
        <HiLightBulb className='why-icon' />
            <h1 className='why-mini-head'>Expert Faculty</h1>
            <p className='why-para'>Our qualified Faculty with significant practical experience guide students every step of the way</p>
        </div>
        <div className="eachSection">
            <MdGroups2  className='why-icon'/>
            <h1 className='why-mini-head'>Complete Success Package</h1>
            <p>Leading Exam Prep Destination with Video classes, Live sessions, Doubt resolution Forums, MCQs, Practice tests, Webinars.</p>
        </div>
        <div className="eachSection">
        <RiUserLocationFill className='why-icon' />
            <h1 className='why-mini-head'>Placements</h1>
            <p>Resume building workshops, mock interviews and placement drives will help you impress the top employers and get your Dream Job.</p>
        </div>
        </div>

        </div>
        
        
    )

}

const Why=()=>{
    return(
        <>
        <Header />
        <WhyChooseUs />
        </>
    )
}


export {WhyChooseUs , Why}
