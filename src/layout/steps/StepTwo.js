const StepTwo = () => {
  return (
    <>
      <main className="main-title-section">
        <h2 className="main-title">Let's set up a home for all your work</h2>
        <span className="sub-title">
          You can always create another workspace later.
        </span>
      </main>
      <section className="workspace-details">
        <div className="form-group">
          <label htmlFor="fullName" className="input-label">
            Workspace Name
          </label>
          <input
            className="form-control input-field step-two"
            type="text"
            placeholder="Eden"
          />
        </div>
        <div className="form-group">
          <label htmlFor="displayName" className="input-label">
            Workspace URL <span className="mute-text">(optional)</span>
          </label>
          <div className="input-group">
            <input
              type="text"
              placeholder="www.eden.com/     Example"
              className="form-control input-field step-two"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default StepTwo;
