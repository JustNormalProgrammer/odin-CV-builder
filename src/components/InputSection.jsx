import { useImmer } from "use-immer";
import "../styles/inputSection.css";
import { Fragment } from "react";

function GeneralSection({
  isSubmitted,
  inputSet,
  onReset,
  onSubmit,
  onInputChange,
}) {
  const id = 0;
  return (
    <div
      className={
        isSubmitted ? "input-subsection submitted" : "input-subsection"
      }
    >
      <form action="#" id={id} onSubmit={onSubmit} onReset={onReset}>
        <label htmlFor="name">
          Full Name:
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Jan Kowalski"
            value={inputSet[id]["data"].name}
            onChange={(e) => onInputChange(e, id)}
          />
        </label>
        <label htmlFor="email">
          Email:
          <input
            type="email"
            name="email"
            id="email"
            placeholder="expample@gmail.com"
            value={inputSet[id]["data"].email}
            onChange={(e) => onInputChange(e, id)}
          />
        </label>
        <label htmlFor="tel">
          Phone Number:
          <input
            type="tel"
            name="tel"
            id="tel"
            placeholder="123 123 123"
            value={inputSet[id]["data"].tel}
            onChange={(e) => onInputChange(e, id)}
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
function EducationalSection({
  isSubmitted,
  inputSet,
  onReset,
  onSubmit,
  onInputChange,
}) {
  const id = 1;
  return (
    <div
      className={
        isSubmitted ? "input-subsection submitted" : "input-subsection"
      }
    >
      <form action="#" id={id} onSubmit={onSubmit} onReset={onReset}>
        <label htmlFor="schoolName">
          School name:
          <input
            type="text"
            id="schoolName"
            name="schoolName"
            placeholder="University of Wonderland"
            value={inputSet[id]["data"].schoolName}
            onChange={(e) => onInputChange(e, id)}
          />
        </label>
        <label htmlFor="titleOfStudy">
          College Degree:
          <select
            name="titleOfStudy"
            id="titleOfStudy"
            onChange={(e) => onInputChange(e, id)}
            value={inputSet[id]["data"].titleOfStudy}
            style={{ width: "100%", padding: "3px" }}
          >
            <option value="Associate">Associate</option>
            <option value="Bachelor's">Bachelor&apos;s</option>
            <option value="Master's">Master&apos;s</option>
            <option value="Doctoral">Doctoral</option>
          </select>
        </label>
        <label htmlFor="dateOfStudy">
          Date of study:
          <input
            type="date"
            name="dateOfStudy"
            id="dateOfStudy"
            value={inputSet[id]["data"].dateOfStudy}
            onChange={(e) => onInputChange(e, id)}
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
function PracticalExperienceSection({
  isSubmitted,
  onSubmit,
  onReset,
  inputSetArr,
  handleDelete,
  addInputSet,
  onInputChange,
}) {
  const id = 2;

  return (
    <div
      className={
        isSubmitted ? "input-subsection submitted" : "input-subsection"
      }
    >
      <form action="#" id={id} onSubmit={onSubmit} onReset={onReset}>
        {inputSetArr[id].data.map((inputSet, index) => {
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
                  onChange={(e) => onInputChange(e, id, inputSet.id)}
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
                  onChange={(e) => onInputChange(e, id, inputSet.id)}
                />
              </label>
              <label htmlFor={`desc-${inputSet.id}`}>
                Job description:
                <input
                  type="text"
                  name="desc"
                  id={`desc-${inputSet.id}`}
                  value={inputSet.desc}
                  placeholder="Managing software"
                  onChange={(e) => onInputChange(e, id, inputSet.id)}
                />
              </label>
              <label htmlFor={`dateStart-${inputSet.id}`}>
                From:
                <input
                  type="date"
                  name="dateStart"
                  id={`dateStart-${inputSet.id}`}
                  value={inputSet.dateStart}
                  onChange={(e) => onInputChange(e, id, inputSet.id)}
                />
              </label>
              <label htmlFor={`dateEnd-${inputSet.id}`}>
                To:
                <input
                  type="date"
                  name="dateEnd"
                  id={`dateEnd-${inputSet.id}`}
                  value={inputSet.dateEnd}
                  onChange={(e) => onInputChange(e, id, inputSet.id)}
                />
              </label>
              <button
                disabled={inputSetArr[id].data.length === 1}
                onClick={() => handleDelete(inputSet.id)}
              >
                Delete
              </button>
              {inputSetArr[id].data[index + 1] && <hr></hr>}
            </Fragment>
          );
        })}
        <div className="button-group">
          <button type="reset">Reset</button>
          <button type="button" onClick={addInputSet}>
            Add workplace
          </button>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}
export default function InputSection() {
  const initialFormData = [
    { name: "", email: "", tel: "" },
    { schoolName: "", titleOfStudy: "", dateOfStudy: "" },
    [
      {
        id: crypto.randomUUID(),
        companyName: "",
        positionTitle: "",
        desc: "",
        dateStart: "",
        dateEnd: "",
      },
    ],
  ];

  const [formData, updateFormData] = useImmer([
    { id: 0, isSubmitted: false, data: { name: "", email: "", tel: "" } },
    {
      id: 1,
      isSubmitted: false,
      data: { schoolName: "", titleOfStudy: "", dateOfStudy: "" },
    },
    {
      id: 2,
      isSubmitted: false,
      data: [
        {
          id: crypto.randomUUID(),
          companyName: "",
          positionTitle: "",
          desc: "",
          dateStart: "",
          dateEnd: "",
        },
      ],
    },
  ]);
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const { id } = e.target;
    updateFormData((draft) => {
      draft[id].isSubmitted = true;
    });
  };
  const onInputChange = (e, id, inputSetId) => {
    updateFormData((draft) => {
      draft[id].isSubmitted = false;
      if (id !== 2) {
        draft[id]["data"][e.target.name] = e.target.value;
      } else {
        for (let inputSet of draft[id]["data"]) {
          if (inputSetId === inputSet.id) {
            inputSet[e.target.name] = e.target.value;
          }
        }
      }
    });
  };
  const handleFormReset = (e) => {
    const { id } = e.target;
    updateFormData((draft) => {
      draft[id].data = initialFormData[id];
      draft[id].isSubmitted = false;
    });
  };
  const handleAddInputSet = () => {
    updateFormData((draft) => {
      draft[2].isSubmitted = false;
      draft[2]["data"].push({
        id: crypto.randomUUID(),
        companyName: "",
        positionTitle: "",
        desc: "",
        dateStart: "",
        dateEnd: "",
      });
    });
  };
  const handleDeleteInputSet = (id) => {
    updateFormData((draft) => {
      draft[2].isSubmitted = false;
      draft[2]["data"] = draft[2]["data"].filter(
        (inputSet) => inputSet.id !== id
      );
    });
  };
  return (
    <div className="input-container">
      <GeneralSection
        isSubmitted={formData[0].isSubmitted}
        inputSet={formData}
        onReset={handleFormReset}
        onSubmit={handleFormSubmit}
        onInputChange={onInputChange}
      />
      <EducationalSection
        isSubmitted={formData[1].isSubmitted}
        inputSet={formData}
        onReset={handleFormReset}
        onSubmit={handleFormSubmit}
        onInputChange={onInputChange}
      />
      <PracticalExperienceSection
        isSubmitted={formData[2].isSubmitted}
        onSubmit={handleFormSubmit}
        onReset={handleFormReset}
        handleDelete={handleDeleteInputSet}
        onInputChange={onInputChange}
        inputSetArr={formData}
        addInputSet={handleAddInputSet}
      />
    </div>
  );
}
