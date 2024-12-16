import InputSection from "./components/InputSection";
import Card from "./components/Card";
import { useImmer } from "use-immer";
import "./App.css";

function App() {
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
    <div className="container">
      <InputSection
        formData={formData}
        handleFormReset={handleFormReset}
        handleFormSubmit={handleFormSubmit}
        onInputChange={onInputChange}
        handleDeleteInputSet={handleDeleteInputSet}
        handleAddInputSet={handleAddInputSet}
      />
      <Card formData={formData}/>
    </div>
  );
}

export default App;
