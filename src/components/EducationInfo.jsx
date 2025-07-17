export default function EducationInfo({ data, handleChange }) {
  return (
    <div className="section">
      <h2>Educational Experience</h2>
      <input
        name="school"
        placeholder="School Name"
        value={data.school}
        onChange={handleChange}
      />
      <input
        name="studyTitle"
        placeholder="Title of Study"
        value={data.studyTitle}
        onChange={handleChange}
      />
      <input
        name="studyDate"
        placeholder="Date of Study"
        value={data.studyDate}
        onChange={handleChange}
      />
    </div>
  );
}