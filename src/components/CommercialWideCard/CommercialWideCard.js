import './CommercialWideCard.scss';

const CommercialWideCard = () => {
    return (
        <div className="wide-card my-20">
            <div className="container-fluid">
                <div className="wide-card__header m-20 mt-25 d-flex">
                    <div className="wide-card__title">
                        <h2 className="fw-bold">تحديد المستفيد من الخدمة</h2>
                    </div>
                    <div className="wide-card__edit">
                        <button className="fw-bold text-info">
                            تعديل
                            <i className="bi bi-pencil-fill text-info"></i>
                        </button>
                    </div>
                </div>
                <div className="wide-card__body row m-20">
                    <div className="col-3">
                        <p className="fw-bold">مفوض عن مالك المؤسسة</p>
                        <div className="inner-card bg-white p-10 shadow hover:shadow-none">
                            <p className="fw-bold">احمد علي الغامدي</p>
                            <p>مفوض عن مالك المؤسسة</p>
                        </div>
                    </div>
                    <div className="col-3">
                        <p className="fw-bold">فئة الأسم التجاري</p>
                        <div className="inner-card bg-white p-10 shadow">
                            <p className="fw-bold">شركات</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CommercialWideCard;