const TravelItem = ({
  name,
  country,
  date,
  description,
  status,
  isSelected,
  onSelect,
  onDelete,
  onStatusChange,
}) => {
  return (
    <div>
      <div className="destination">
        <div className="destination-top">
          <div className="destination-info">
            <input type="checkbox" checked={isSelected} onChange={onSelect} />
            <div>
              <h3 className="destination-name">{name}</h3>
              <p className="destination-country">{country}</p>
              <p className="destination-date">{date}</p>
            </div>
          </div>
          <button className="delete-btn" onClick={onDelete}>
            ✕
          </button>
        </div>

        <p className="destination-description">{description}</p>

        <div className="destination-bottom">
          <span className="badge badge-visited">{status}</span>
          <select
            className="status-select"
            value={status}
            onChange={(e) => onStatusChange(e.target.value)}
          >
            <option>wishlist</option>
            <option>planned</option>
            <option>visited</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default TravelItem;
