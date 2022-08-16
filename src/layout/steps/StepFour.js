import { IconContext } from "react-icons";
import { FaCheckCircle } from "react-icons/fa";

const StepFour = () => {
  return (
    <>
      <main>
        <span className="success-tick">
          <IconContext.Provider
            value={{
              size: "46px",
              color: "var(--accent)",
            }}
          >
            <FaCheckCircle />
          </IconContext.Provider>
        </span>
        <h2 className="main-title final-step">Congratulations, Eren!</h2>
        <span className="mute-text">
          You have completed onboarding, you can start using the Eden!
        </span>
      </main>
    </>
  );
};

export default StepFour;
