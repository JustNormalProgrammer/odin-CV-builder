import "../styles/inputSection.css";

function GeneralSection() {
  return (
    <div className="input-subsection">
      <form action="">
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
      <form action="">
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
            <option value="associate" selected>
              Associate
            </option>
            <option value="bachelors">Bachelor&apos;s</option>
            <option value="associate">Master&apos;s</option>
            <option value="associate">Doctoral</option>
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
  return (
    <div className="input-subsection">
      <form action="">
        <label htmlFor="company-name"> 
            Company name: 
          <input
            type="text"
            name="company-name"
            id="company-name"
            placeholder="Odin Company"
          />
        </label>
        <div className="button-group">
          <button type="reset">Reset</button>
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
