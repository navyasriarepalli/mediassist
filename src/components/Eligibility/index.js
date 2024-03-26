import './index.css'
import { SlBookOpen } from "react-icons/sl";
import { SlCalender } from "react-icons/sl";
import { PiExamLight } from "react-icons/pi";


const Eligibility=()=>{
    return(
        <div className='eligible-main-cont'>
            <div className="eligible-cont">
                <SlBookOpen className='eligible-icon' />
                <div className="eligible-para">
                    <p>Levels</p>
                    <p>Three (13 papaers)</p>
                </div>             
            </div>

            <div className="eligible-cont">
                <SlCalender className='eligible-icon' />
                <div className="eligible-para">
                    <p>Duration</p>
                    <p>6-30 months</p>
                </div>
                        
                        
            </div>

            <div className="eligible-cont">
                <PiExamLight className='eligible-icon' />
                <div className="eligible-para">
                    <p>Exams</p>
                    <p>Quarterly (online)</p>
                </div>
                        
                        
            </div>

            <div className="eligible-cont">
                <SlCalender className='eligible-icon' />
                <div className="eligible-para">
                    <p>Exemptions</p>
                    <p>Upto 9 papers</p>
                </div>
                        
                        
            </div>
            
        </div>
    )
}

export default Eligibility