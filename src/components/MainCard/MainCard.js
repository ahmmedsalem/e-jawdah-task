import MainCardInfo from "../MainCardInfo/MainCardInfo";
import {FormattedMessage} from 'react-intl';
import "./MainCard.scss";

const MainCard = (props) => {

  const toggleFavBtn = () => {
    props.onToggleFavBtn(props.item);
  }

  return (
    <section className="main-card d-block card p-15 mb-25">
      <header className="main-card__header d-flex justify-content-between">
        <div className="main-card__heading">
          <h3 className="mb-10 fw-bolder fs-5">{props.item.commercialName}</h3>
          <span className="main-card__badge badge bg-success mx-5 py-10">
            <span> <FormattedMessage id="recordStatus.name" defaultMessage="حالة السجل" />: </span>
            <span>{props.item.commercialStatus}</span>
          </span>
          <span className="main-card__badge badge bg-success py-10">
            <span> <FormattedMessage id="recordType.name" defaultMessage="نوع السجل" />: </span>
            <span>{props.item.commercialType}</span>
          </span>
        </div>
        <div className="main-card__actions">
          <button className={`btn btn-outline-info mx-5 main-card__fav-btn ${props.item.isFavorite && "active"}`}
            disabled={props.item.isDeleted} onClick={toggleFavBtn}>
            <i className="bi bi-star"></i>
          </button>
          <div className="btn-group main-card__edit-btn">
            <button
              className="btn btn-outline-info"
              type="button"
              id="defaultDropdown"
              data-bs-toggle="dropdown"
              data-bs-auto-close="true"
              aria-expanded="false"
            >
              <i className="bi bi-three-dots-vertical"></i>
            </button>
            <ul className="dropdown-menu py-10" aria-labelledby="defaultDropdown">
              <li>
                <a className="dropdown-item py-3 px-10" href="/#">
                  تعديل السجل التجارى
                </a>
              </li>
              <li>
                <a className="dropdown-item py-3 px-10" href="/#">
                  تجديد السجل التجارى
                </a>
              </li>
              <li>
                <a className="dropdown-item py-3 px-10" href="/#">
                  شطب السجل التجارى
                </a>
              </li>
            </ul>
          </div>
        </div>
      </header>
      <div className="main-card__body my-20">
        <MainCardInfo info={props.item.commercialInfo}></MainCardInfo>
      </div>
      <button className="btn btn-outline-info btn-view"><FormattedMessage id="viewRecord" defaultMessage="عرض وادارة السجل" /></button>
    </section>
  );
};

export default MainCard;
