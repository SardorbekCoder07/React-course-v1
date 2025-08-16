import { useState } from "react";

const Form = ({ onCancel, onAdd }) => {
  const [name, setName] = useState("");
  const [country, setCountry] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = () => {
    if (!name || !country || !date) return alert("Fill all required fields");

    const newDestination = {
      name,
      country,
      date,
      description,
      status: "wishlist",
    };

    onAdd(newDestination);

    setName("");
    setCountry("");
    setDate("");
    setDescription("");
  };

  return (
    <div>
      <input
        className="input"
        placeholder="Destination name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        className="input"
        placeholder="Country"
        value={country}
        onChange={(e) => setCountry(e.target.value)}
      />
      <input
        type="date"
        className="input"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <textarea
        className="input textarea"
        placeholder="Description (optional)"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <div className="btn-group">
        <button className="btn btn-gray" onClick={onCancel}>
          Cancel
        </button>
        <button className="btn" onClick={handleSubmit}>
          Add Destination
        </button>
      </div>
    </div>
  );
};

export default Form;
