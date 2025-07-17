export default function GeneralInfo({ data, handleChange }) {
  return (
    <div className="section">
      <h2>General Information</h2>
      <input
        name="name"
        placeholder="Name"
        value={data.name}
        onChange={handleChange}
      />
      <input
        name="email"
        placeholder="Email"
        value={data.email}
        onChange={handleChange}
      />
      <input
        name="phone"
        placeholder="Phone"
        value={data.phone}
        onChange={handleChange}
      />
    </div>
  );
}