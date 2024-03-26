import './index.css'
import Header from '../Header'

const Placements=()=>{
    return (
        <div>
            <div className='place-cont mb-3'>
                <h1 className='place-head'>100% Placement Assistance by 1FIN</h1>
                <h1 className='place-mini-head' >1.Resume Building:</h1>
                <p className='place-mini-para'>1FIN provides professional guidance to help you create an effective resume to help you create a lasting impression.</p>
                <h1 className='place-mini-head'>2.Career Counselling:</h1>

                <p className='place-mini-para'>We provide career counselling to conducting mock interviews and aptitude tests – we will assist you at every step, all the way, we make you job ready</p>
                <h1 className='place-mini-head'>3.Jobs:</h1>
                <p className='place-mini-para'>We will give you an edge over others with our direct corporate affiliations which will ensure that you are placed right.</p>
            </div>
        </div>
    )
}

const Place=()=>{
    return(
        <>
        <Header />
        <Placements/>
        </>
    )
}

export {Placements,Place}
