export default function PracticalInfo({ data, handleChange }) {
  return (
    <div className="section">
      <h2>Practical Experience</h2>
      <input
        name="company"
        placeholder="Company Name"
        value={data.company}
        onChange={handleChange}
      />
      <input
        name="position"
        placeholder="Position Title"
        value={data.position}
        onChange={handleChange}
      />
      <textarea
        name="responsibilities"
        placeholder="Main Responsibilities"
        value={data.responsibilities}
        onChange={handleChange}
      />
      <input
        name="dateFrom"
        placeholder="Date From"
        value={data.dateFrom}
        onChange={handleChange}
      />
      <input
        name="dateTo"
        placeholder="Date To"
        value={data.dateTo}
        onChange={handleChange}
      />
    </div>
  );
}