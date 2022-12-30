import { FormattedMessage } from "react-intl";
import "./LicenseCardInfo.scss";

const LicenseCardInfo = (props) => {
  return (
    <div className="row">
      <div className="col-6">
        <p className="license-info__name">
          <FormattedMessage id="license.dueAmount"></FormattedMessage>
        </p>
        <span className="license-info__badge badge py-5 pt-10 fw-bolder">
          <p>
            {props.stats.dueAmout}{" "}
            <FormattedMessage id="currency.sar"></FormattedMessage>
          </p>
        </span>
      </div>
      <div className="col-6">
        <p className="license-info__name">
          <FormattedMessage id="license.licensesCount"></FormattedMessage>
        </p>
        <p>{props.stats.licensesCount}</p>
      </div>
    </div>
  );
};

export default LicenseCardInfo;
