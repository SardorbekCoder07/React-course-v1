import { useState, useRef } from 'react';
import { AiOutlinePlus, AiOutlineClose } from 'react-icons/ai';

function DynamicInput() {
  const [inputs, setInputs] = useState([{ id: Date.now() }]);
  const inputRefs = useRef([]);

  const handleAddInput = () => {
    const newId = Date.now();
    setInputs(prev => [...prev, { id: newId }]);
  };

  const handleRemoveInput = id => {
    setInputs(prev => prev.filter(input => input.id !== id));
  };

  const handleShowValues = () => {
    const values = inputRefs.current
      .filter(ref => ref)
      .map(input => input.value);

    console.log('Qiymatlar:', values);
    alert('Konsolda ko‘rsatildi: ' + JSON.stringify(values));
  };

  return (
    <div className="dynamic-container">
      <h2 className="dynamic-title">
        useRef 
      </h2>

      {inputs.map((input, index) => (
        <div key={input.id} className="input-row">
          <input
            type="text"
            placeholder={`Input ${index + 1}`}
            className="input-field"
            ref={el => (inputRefs.current[index] = el)}
            onFocus={e => e.target.classList.add('input-focus')}
            onBlur={e => e.target.classList.remove('input-focus')}
          />
          {index === inputs.length - 1 ? (
            <button
              className="circle-btn add-btn"
              onClick={handleAddInput}
              title="Qo'shish"
            >
              <AiOutlinePlus size={20} />
            </button>
          ) : (
            <button
              className="circle-btn remove-btn"
              onClick={() => handleRemoveInput(input.id)}
              title="O'chirish"
            >
              <AiOutlineClose size={20} />
            </button>
          )}
        </div>
      ))}

      <div className="show-btn-wrapper">
        <button onClick={handleShowValues} className="show-btn">
          Qiymatlarni Ko‘rsatish
        </button>
      </div>
    </div>
  );
}

export default DynamicInput;
