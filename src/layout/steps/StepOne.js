const StepOne = () => {
  return (
    <>
      <main className="main-title-section">
        <h2 className="main-title">Welcome! First things first...</h2>
        <span className="sub-title">
          You can always change them later.
        </span>
      </main>
      <section>
        <div className="form-group">
          <label htmlFor="fullName" className="input-label">
            Full Name
          </label>
          <input
            className="form-control input-field"
            type="text"
            placeholder="Steve Jobs"
          />
        </div>
        <div className="form-group">
          <label htmlFor="displayName" className="input-label">
            Display Name
          </label>
          <input
            className="form-control input-field"
            type="text"
            placeholder="Steve"
          />
        </div>
      </section>
    </>
  );
};

export default StepOne;
