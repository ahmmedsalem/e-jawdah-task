import LicenseCardInfo from "../LicenseCardInfo/LicenseCardInfo";
import "./LicenseCard.scss";

const LicenseCard = (props) => {
  return (
    <div className="col-4">
      <div className="license-card card p-25 mb-25">
        <header className="license-card__header">
          <h5 className="mb-10 fw-bold">{props.item.licenseName}</h5>
          <img
            src={require(`../../assets/images/${props.item.icon}`)}
            className="license-card__icon"
            alt="icon"
          />
        </header>
        <div className="license-card__body my-20">
            <LicenseCardInfo stats={props.item.licenseStats}></LicenseCardInfo>
        </div>
      </div>
    </div>
  );
};

export default LicenseCard;
