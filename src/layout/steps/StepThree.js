import React, { useState } from "react";
import { IconContext } from "react-icons";
import { HiUserGroup, HiUser } from "react-icons/hi";

const StepThree = () => {
  const [selected, setSelected] = useState();
  const handleCardSelect = (x) => {
    setSelected(x);
  };

  return (
    <>
      <main className="main-title-section">
        <h2 className="main-title">How are you planning to use Eden?</h2>
        <span className="sub-title">
          We'll streamline your setup experience accordingly.
        </span>
      </main>
      <section>
        <div className="step-three-card">
          <div
            className={`card ${selected === 0 ? "border-primary" : ""}`}
            onClick={() => handleCardSelect(0)}
          >
            <div className="card-body">
              <span>
                <IconContext.Provider
                  value={{
                    size: "26px",
                    color: selected === 0 ? "#6548d8" : "black",
                  }}
                >
                  <HiUser />
                </IconContext.Provider>
              </span>
              <h5>For myself</h5>
              <p>
                Write better. Think more clearly. Stay organized.
              </p>
            </div>
          </div>
          <div
            className={`card ${selected === 1 ? "border-primary" : ""}`}
            onClick={() => handleCardSelect(1)}
          >
            <div className="card-body">
              <span>
                <IconContext.Provider
                  value={{
                    size: "26px",
                    color: selected === 1 ? "#6548d8" : "black",
                  }}
                >
                  <HiUserGroup />
                </IconContext.Provider>
              </span>
              <h5 className="">With my team</h5>
              <p className="font-weight-light">
                Wikis, docs, tasks and projects, all in one place.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default StepThree;
