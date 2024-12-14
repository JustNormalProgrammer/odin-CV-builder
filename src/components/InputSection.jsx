import { useState } from "react";
import "../styles/inputSection.css";
import { Fragment } from "react";

const handleForm = (e) => {
  e.preventDefault();
  console.log(e.target);
}

function GeneralSection() {
  return (
    <div className="input-subsection">
      <form action="#" onSubmit={handleForm}>
        <label htmlFor="name">
          Full Name:
          <input type="text" name="name" id="name" placeholder="Jan Kowalski" />
        </label>
        <label htmlFor="email">
          Email:
          <input
            type="email"
            name="email"
            id="email"
            placeholder="expample@gmail.com"
          />
        </label>
        <label htmlFor="tel">
          Phone Number:
          <input type="tel" name="tel" id="tel" placeholder="123 123 123" />
        </label>
        <div className="button-group">
          <button type="reset">Reset</button>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}
function EducationalSection() {
  return (
    <div className="input-subsection">
      <form action="#" onSubmit={handleForm}>
        <label htmlFor="school-name">
          School name:
          <input
            type="text"
            id="school-name"
            name="school-name"
            placeholder="University of Wonderland"
          />
        </label>
        <label htmlFor="title-of-study">
          College Degree:
          <select
            name="title-of-study"
            id="title-of-study"
            style={{ width: "100%", padding: "3px" }}
          >
            <option value="Associate" >
              Associate
            </option>
            <option value="Bachelor's">Bachelor&apos;s</option>
            <option value="Master's">Master&apos;s</option>
            <option value="Doctoral">Doctoral</option>
          </select>
        </label>
        <label htmlFor="date-of-study">
          Date of study:
          <input type="date" name="date-of-study" id="date-of-study" />
        </label>
        <div className="button-group">
          <button type="reset">Reset</button>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}
function PracticalExperienceSection() {
  const [inputFields, setInputFields] = useState([
    {id: crypto.randomUUID(), companyName: '', positionTitle: '', desc: '', dateStart: '', dateEnd: ''},
  ]);
  const handleInputChange = (id, event) => {
    const newInputFields = inputFields.map(i => {
      if(id === i.id) {
        i[event.target.name] = event.target.value;
      }
      return i;
    })
    setInputFields(newInputFields);
  }
  const handleAddInputSet = () => {
    setInputFields([...inputFields, {id: crypto.randomUUID(), companyName: '', positionTitle: '', desc: '', dateStart: '', dateEnd: ''}])
  }
  const handleDelete = (id) => {
    setInputFields(inputFields.filter(inputSet => inputSet.id !== id));
  }
  return (
    <div className="input-subsection">
      <form action="#" onSubmit={handleForm}>
        {inputFields.map(inputSet => {
          return (
           <Fragment key={inputSet.id}>
             <label htmlFor={`company-name-${inputSet.id}`}>
               Company name:
               <input
                 type="text"
                 name="companyName"
                 id={`company-name-${inputSet.id}`}
                 value={inputSet.companyName}
                 placeholder="Odin Company"
                 onChange={(event) => handleInputChange(inputSet.id, event)}
               />
             </label>
             <label htmlFor={`position-${inputSet.id}`}>
              Position Title: 
              <input 
                type="text"
                name="positionTitle"
                id={`position-${inputSet.id}`}
                value={inputSet.positionTitle}
                placeholder="Senior engineer" 
                onChange={(event) => handleInputChange(inputSet.id, event)}/>
             </label>
             <label htmlFor={`desc-${inputSet.id}`}>
              Job description: 
              <input 
                type="text"
                name="desc"
                id={`desc-${inputSet.id}`}
                value={inputSet.desc}
                placeholder="Managing software" 
                onChange={(event) => handleInputChange(inputSet.id, event)}/>
             </label>
             <label htmlFor={`dateStart-${inputSet.id}`}>
              From:
              <input type="date" name="dateStart" id={`dateStart-${inputSet.id}`} value={inputSet.dateStart} onChange={(event) => handleInputChange(inputSet.id, event)}/>
             </label>
             <label htmlFor={`dateEnd-${inputSet.id}`}>
              To:
              <input type="date" name="dateEnd" id={`dateEnd-${inputSet.id}`} value={inputSet.dateEnd} onChange={(event) => handleInputChange(inputSet.id, event)}/>
             </label>
             <button disabled={inputFields.length === 1} onClick={() => handleDelete(inputSet.id)}>Delete</button>
             <hr></hr>
           </Fragment>
          )
        })}
        <div className="button-group">
          <button type="reset">Reset</button>
          <button onClick={handleAddInputSet}>Add workplace</button>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}
export default function InputSection() {
  return (
    <div className="input-container">
      <GeneralSection />
      <EducationalSection />
      <PracticalExperienceSection/>
    </div>
  );
}
