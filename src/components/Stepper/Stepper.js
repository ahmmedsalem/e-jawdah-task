import "./Stepper.scss";
import { FormattedMessage } from "react-intl";

const Stepper = (props) => {
  return (
    <div className="stepper-wrapper">
      <div className="stepper-wrapper__first-step d-inline-block">
        <button
          className={`btn stepper-wrapper__btn ${
            props.isNext === "1" && "active"
          }`}
        >
          1
        </button>
        <span className={`mx-10 ${props.isNext === "1" && "fw-bold "}`}>
          <FormattedMessage
            id="bookCommercialName.step1"
            defaultMessage="ادخال بيانات الطلب"
          ></FormattedMessage>
        </span>
      </div>
      <div className="stepper-wrapper__spreator mx-10 d-inline-block"></div>
      <div className="stepper-wrapper__second-step d-inline-block">
        <button
          className={`btn stepper-wrapper__btn ${
            props.isNext === "2" && "active"
          }`}
        >
          2
        </button>
        <span className={`mx-10 ${props.isNext === "2" && "fw-bold "}`}>
          <FormattedMessage
            id="bookCommercialName.step2"
            defaultMessage="ارسال الطلب"
          ></FormattedMessage>
        </span>
      </div>
    </div>
  );
};

export default Stepper;
