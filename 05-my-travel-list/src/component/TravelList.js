import { useState } from "react";
import Form from "./Form";
import TravelItem from "./TravelItem";

export function TravelList() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [destinations, setDestinations] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]); // ✅ tanlanganlar

  // Yangi item qo‘shish
  const handleAddDestination = (newDestination) => {
    setDestinations((prev) => [...prev, newDestination]);
    setIsFormOpen(false);
  };

  // Bitta itemni o‘chirish
  const handleDelete = (index) => {
    setDestinations((prev) => prev.filter((_, i) => i !== index));
  };

  // Statusni o‘zgartirish
  const handleStatusChange = (index, newStatus) => {
    setDestinations((prev) =>
      prev.map((item, i) =>
        i === index ? { ...item, status: newStatus } : item
      )
    );
  };

  // ✅ Checkbox o‘zgarishi
  const handleSelect = (index) => {
    setSelectedItems(
      (prev) =>
        prev.includes(index)
          ? prev.filter((i) => i !== index) // agar bor bo‘lsa o‘chiramiz
          : [...prev, index] // agar yo‘q bo‘lsa qo‘shamiz
    );
  };

  // ✅ Tanlanganlarni o‘chirish
  const handleDeleteSelected = () => {
    setDestinations((prev) =>
      prev.filter((_, i) => !selectedItems.includes(i))
    );
    setSelectedItems([]); // tanlanganlarni tozalash
  };

  // ✅ Barchasini tanlash
  const handleSelectAll = () => {
    if (selectedItems.length === destinations.length) {
      setSelectedItems([]); // hammasini bekor qilish
    } else {
      setSelectedItems(destinations.map((_, i) => i)); // hammasini tanlash
    }
  };


  return (
    <div>
      {/* Add Destination Card */}
      <div className="card">
        <h2 className="card-title">Add New Destination</h2>
        {!isFormOpen ? (
          <button className="btn" onClick={() => setIsFormOpen(true)}>
            Add Destination
          </button>
        ) : (
          <Form
            onCancel={() => setIsFormOpen(false)}
            onAdd={handleAddDestination}
          />
        )}
      </div>

      {/* Destination List Card */}
      <div className="card">
        <div className="list-header">
          <h2 className="card-title">
            My Destinations ({destinations.length})
          </h2>
          <div className="select-tools">
            <label className="checkbox-label">
              <input
                type="checkbox"
                onChange={handleSelectAll}
                checked={
                  selectedItems.length === destinations.length &&
                  destinations.length > 0
                }
              />{" "}
              Select All
            </label>
            <button
              className="btn btn-red"
              onClick={handleDeleteSelected}
              disabled={selectedItems.length === 0}
            >
              Delete Selected ({selectedItems.length})
            </button>
          </div>
        </div>

        {/* Destination Items */}
        {destinations.map((item, index) => (
          <TravelItem
            key={index}
            {...item}
            isSelected={selectedItems.includes(index)}
            onSelect={() => handleSelect(index)}
            onDelete={() => handleDelete(index)}
            onStatusChange={(newStatus) => handleStatusChange(index, newStatus)}
          />
        ))}
      </div>
    </div>
  );
}
