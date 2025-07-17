import { useState } from "react"
import GeneralInfo from "./components/GeneralInfo";
import EducationInfo from "./components/EducationInfo";
import PracticalInfo from "./components/PracticalInfo";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    school: "",
    studyTitle: "",
    studyDate: "",
    company: "",
    position: "",
    responsibilities: "",
    dateFrom: "",
    dateTo: "",
  });

  const [isEditing, setIsEditing] = useState(true);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsEditing(false);
  };

  const handleEdit = () => setIsEditing(true);

  return (
    <div className="App">
      <h1>CV Generator</h1>

      {isEditing ? (
        <form onSubmit={handleSubmit}>
          <GeneralInfo data={formData} handleChange={handleChange} />
          <EducationInfo data={formData} handleChange={handleChange} />
          <PracticalInfo data={formData} handleChange={handleChange} />
          <button type="submit">Submit CV</button>
        </form>
      ) : (
        <div>
          <div className="section">
            <h2>General Information</h2>
            <p><strong>Name:</strong> {formData.name}</p>
            <p><strong>Email:</strong> {formData.email}</p>
            <p><strong>Phone:</strong> {formData.phone}</p>
          </div>

          <div className="section">
            <h2>Educational Experience</h2>
            <p><strong>School:</strong> {formData.school}</p>
            <p><strong>Title of Study:</strong> {formData.studyTitle}</p>
            <p><strong>Date:</strong> {formData.studyDate}</p>
          </div>

          <div className="section">
            <h2>Practical Experience</h2>
            <p><strong>Company:</strong> {formData.company}</p>
            <p><strong>Position:</strong> {formData.position}</p>
            <p><strong>Responsibilities:</strong> {formData.responsibilities}</p>
            <p><strong>From:</strong> {formData.dateFrom}</p>
            <p><strong>To:</strong> {formData.dateTo}</p>
          </div>

          <button onClick={handleEdit}>Edit CV</button>
        </div>
      )}
    </div>
  );
}

export default App
