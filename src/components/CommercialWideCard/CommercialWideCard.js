import "./CommercialWideCard.scss";
import { FormattedMessage } from "react-intl";

const CommercialWideCard = (props) => {
  return (
    <div className="wide-card my-20">
      <div className="container-fluid">
        <div className="wide-card__header m-20 mt-25 d-flex">
          <div className="wide-card__title">
            <h2 className="fw-bold">{props.title}</h2>
          </div>
          <div className="wide-card__edit">
            <button className="fw-bold text-info">
              <FormattedMessage
                id="button.edit"
                defaultMessage="تعديل"
              ></FormattedMessage>
              <i className="bi bi-pencil-square text-info mx-5"></i>
            </button>
          </div>
        </div>
        <div className="wide-card__body row m-20">{props.children}</div>
      </div>
    </div>
  );
};

export default CommercialWideCard;
