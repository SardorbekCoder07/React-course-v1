import { useState } from "react";

const messages = [
  "Learn React®️",
  "Apply for jobs",
  "Invest your new income🤑",
];
// What is State in React?
// state bu reactning xotira va shu xotira yangilanganda state UI yangilaydi
// let const var
export default function App() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);
  //   const [test, setTest] = useState({ name: "John" });

  function handlePrevious() {
    if (step > 1) setStep(step - 1);
  }
  function handleNext() {
    if (step < 3) setStep(step + 1);
    // setTest({ name: "Ardian" });
  }

  function handleToggle() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <button
        style={{
          padding: "1rem 2rem",
          background: "none",
          borderRadius: "10px",
          border: "1px solid #7950f2",
          fontSize: "18px",
          fontWeight: "600",
          cursor: "pointer",
        }}
        onClick={handleToggle}
      >
        {isOpen ? "Close" : "Open"}
      </button>

      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? `active` : ""}>1</div>
            <div className={step >= 2 ? `active` : ""}>2</div>
            <div className={step >= 3 ? `active` : ""}>3</div>
          </div>

          <p className="message">
            Step: {messages[step - 1]}
            {/* {test.name} */}
          </p>

          <div className="buttons">
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handlePrevious}
            >
              Previous
            </button>
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handleNext}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </>
  );
}
