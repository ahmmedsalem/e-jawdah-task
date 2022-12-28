import {FormattedMessage} from 'react-intl';
import "./MainCardInfo.scss";

const MainCardInfo = (props) => {
    return (
        <section className="commercial-info row mt-25">
            <div className="col-3">
                <div className="commercial-info__type">
                    <span><i className="bi bi-building fs-4 text-info mx-5"></i></span>
                    <div>
                    <p className="commercial-info--name mb-5">
                         <FormattedMessage id="instituteType.name" defaultMessage="نوع الكيان التجارى" />
                    </p>
                    <p className="commercial-info--info me-3">{props.info.type}</p>
                    </div>
                </div>
            </div>
            <div className="col-3">
                <div className="commercial-info__date">
                    <span><i className="bi bi-calendar-week fs-4 text-primary mx-5"></i></span>
                    <div>
                        <p className="commercial-info--name mb-5 me-5">
                            <FormattedMessage id="recordExpirationDate.name" defaultMessage="تاريخ الانتهاء" />
                        </p>
                        <p className="commercial-info--info me-3">{props.info.expirationDate}</p>
                    </div>
                </div>
            </div>   
            <div className="col-3">
                <div className="commercial-info__uniform-number">
                    <span>
                        <i className="bi bi-signpost-split-fill fs-4 text-primary mx-5"></i>
                    </span>
                    <div>
                        <p className="commercial-info--name mb-5 me-5">
                            <FormattedMessage id="recordUniformNumber.name" defaultMessage="الرقم الموحد للمنشأة" />
                        </p>
                        <p className="commercial-info--info me-3">{props.info.uniformNumber}</p>
                    </div>
                </div>
            </div>   
            <div className="col-3">
                <div className="commercial-info__commercial-number">
                    <span>
                        <i className="bi bi-file-text fs-4 text-info mx-5"></i>
                    </span>
                    <div>
                        <p className="commercial-info--name mb-5 me-5">
                            <FormattedMessage id="recordCommercialNumber.name" defaultMessage="رقم السجل التجارى" />
                        </p>
                        <p className="commercial-info--info me-3">{props.info.commercialNumber}</p>
                    </div>
                </div>
            </div>      
        </section>
    )
}

export default MainCardInfo;