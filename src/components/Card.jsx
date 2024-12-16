import phone from '../../public/phone-svgrepo-com.svg'
import email from '../../public/email-1-svgrepo-com.svg'
import '../styles/card.css'

function Separator({text}){
    return (
        <div className='separator'>
            <div className="separator-text">{text}</div>
            <div className="line"></div>
        </div>
    )
}

function Contact({text, imgSource}){
    return (
        <div className="contact">
            <img src={imgSource} />
            <div className="contact-text">{text}</div>
        </div>
    )
}
function ContactGroup({text, imgSource}){
    return (
        <div className="contact-group">
            {text.map((value, index) => {
                return <Contact key={index} text={value} imgSource={imgSource[index]}/>
            })}
        </div>
    )
}
function DateConnector({date1, date2}){
    return(
        <div className='date-group'>
            <div>{date1}</div>
            <div className="line-connection"></div>
            <div>{date2}</div>
        </div>
    )
}
export default function Card({formData}){
    let workExperience = formData[2].isSubmitted;
    return(
        <div className='card'>
            <div className="name-header">
                {formData[0].isSubmitted ? formData[0].data.name : "Your name"}
            </div>
            <ContactGroup text={formData[0].isSubmitted ? [formData[0].data.tel, formData[0].data.email] : ['123123123', 'example@gmail.com']} imgSource={[phone, email]}/>
            <Separator text="Education"/>
            <div className="content">
                <div className="main-text">
                    {formData[1].isSubmitted ? formData[1].data.schoolName : "School name"}
                </div>
                <p>Degree: {formData[1].isSubmitted ? formData[1].data.titleOfStudy : "Your degree"}</p>
                <p>Date: {formData[1].isSubmitted ? formData[1].data.dateOfStudy : new Date().toDateString()}</p>
            </div>
            <Separator text="Work Experience"/>
            <div className="content">
            {workExperience && formData[2].data.map((work) => {
                return (
                    <div className="work-info" key={work.id}>
                        <div key={work.id} className="main-text">{work.companyName}</div>
                        <p>{work.positionTitle}</p>
                        <p>{work.desc}</p>
                        <DateConnector date1={work.dateStart} date2={work.dateEnd}/>
                    </div>
                )
            })}
            </div>
        </div>
    )
}