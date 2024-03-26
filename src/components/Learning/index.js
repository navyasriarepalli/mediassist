import './index.css'
import Header from '../Header'
const Learning=()=>{
    return(
        <div>
            <h1 className='learn-head'>What will you learn in ACCA?</h1>
        <div className='learning'>
            
            <div className='each-cont'>
                <div className='color-cont-1'>
                    <h1>Knowledge</h1>

                </div>
                <ul className='learn-list'>
                    <li>Business and Technology (BT)</li>
                    <li>Management Accounting (MA)</li>
                    <li>Financial Accounting (FA)</li>
                </ul>
                <div className='color-cont-2'>
                    <p>3 papers</p>

                </div>
            </div>

            <div className='each-cont'>
                <div className='color-cont-1'>
                    <h1>Skill Level</h1>

                </div>
                <ul className='learn-list'>
                    <li>Corporate and Business Law (LW)</li>
                    <li>Performance Management (PM)</li>
                    <li>Taxation (TX)</li>
                    <li>Financial Reporting (FR)</li>
                    <li>Audit and Assurance (AA)</li>
                    <li>Financial Management (FM)</li>
                </ul>
                <div className='color-cont-2'>
                    <p>6 papers</p>
                </div>
            </div>

            <div className='each-cont'>
                <div className='color-cont-1'>
                    <h1>Professional Level</h1>

                </div>
                <div className='learn-list'>
                <ul>
                    <p>Compulsory</p>
                    <li>SBL - Strategic Business Leader</li>
                    <li>SBR - Strategic Business Reporting</li>
                </ul>
                <ul>
                    <p>Two out of the following</p>
                    <li>Advanced Financial Management (AFM)</li>
                    <li>Advanced Performance Management (APM)</li>
                    <li>Advanced Taxation (ATX)</li>
                    <li>Advanced Audit and Assurance (AAA)</li>
                </ul>
                </div>
                <div className='color-cont-2'>
                    <p>4 papers</p>

                </div>
            </div>
        </div>
        </div>
    )
}

const Learn=()=>{
    return(
        <>
        <Header />
        <Learning/>
        </>
    )
}

export {Learning,Learn}