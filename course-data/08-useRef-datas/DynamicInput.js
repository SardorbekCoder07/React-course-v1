import { AiOutlineClose, AiOutlinePlus } from 'react-icons/ai';

const DynamicInput = () => {
  return (
    <div className="dynamic-container">
      <h2 className="dynamic-title">
        useRef bilan Dinamik Input Qo‘shish va O‘chirish
      </h2>

      <div className="input-row">
        <input
          type="text"
          placeholder="Input-1"
          className="input-field"
        />
        <button className="circle-btn add-btn">
          <AiOutlinePlus />
        </button>
        <button className="circle-btn remove-btn">
          <AiOutlineClose />
        </button>
      </div>

      <div className="show-btn-wrapper">
        <button className="show-btn">Qiymatlarni ko'rsatish</button>
      </div>
    </div>
  );
};

export default DynamicInput;
