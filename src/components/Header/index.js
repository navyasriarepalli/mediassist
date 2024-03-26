import './index.css'
import {withRouter, Link} from 'react-router-dom'
import { FaBookReader } from "react-icons/fa";
import { IoMdContact } from "react-icons/io";
import {Component} from 'react'

class Header extends Component{
    render(){
        return(
        <div className='back'>
            <div className='para-cont'>
                <FaBookReader className='icon-size' />
                <span>IndigoLearn</span>
            </div>
            <div className='mid'>
            <Link to="/" className="linking">
            <p>Home</p>
            </Link>
            <Link to="/whychooseus" className="linking">
            <p>Why Choose Us</p>
            </Link>
            <Link to="/learning" className="linking">
            <p>Learning</p>
            </Link>
            <Link to="/placements" className="linking">
            <p>Placements</p>
            </Link>
            <Link to="/callback" className="linking">
            <p>ContactUs</p>
            </Link>
            </div>
            <div className='btn-cont'>
            <button type="button" className='btnL'>
                <IoMdContact className='icon-size-1' />Login/SignUp
            </button>
            </div>
            
        </div>
        )
    }
}

export default withRouter(Header) 
