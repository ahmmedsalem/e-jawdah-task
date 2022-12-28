import "./Stepper.scss";

const Stepper = (props) => {
  return (
    <div className="stepper-wrapper">
      <div className="stepper-wrapper__first-step d-inline-block">
        <button className={`btn stepper-wrapper__btn ${props.isNext === "1" && 'active'}`}>1</button>
        <span className="fw-bold me-10">ادخال بيانات الطلب</span>
      </div>
      <div className="stepper-wrapper__spreator mx-10 d-inline-block"></div>
      <div className="stepper-wrapper__second-step d-inline-block">
        <button className={`btn stepper-wrapper__btn ${props.isNext === "2" && 'active'}`}>2</button>
        <span className="fw-bold me-10">ارسال الطلب</span>
      </div>
    </div>
  );
};

export default Stepper;
