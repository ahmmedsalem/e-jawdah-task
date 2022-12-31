import CommercialWideCard from "../CommercialWideCard/CommercialWideCard";
import { FormattedMessage } from "react-intl";

const CommercialActivities = () => {
  return (
    <CommercialWideCard
      title={
        <FormattedMessage
          id="commercialActivities.title"
          defaultMessage="الأنشطة التجارية"
        ></FormattedMessage>
      }
    >
      <p className="fw-bold">
        <FormattedMessage
          id="activites.title"
          defaultMessage="الانشطة المختارة"
        ></FormattedMessage>
      </p>
      <div className="col-3">
        <div className="inner-card bg-white p-10 shadow-sm hover:shadow-none">
          <p className="fw-bold">
            التخزين في الموانئ و المناطق الجمركية او الحرة
          </p>
        </div>
      </div>
      <div className="col-3">
        <div className="inner-card bg-white p-10 shadow-sm">
          <p className="fw-bold">
            التخزين في مستودعات صوامع الغلال و الدقيق و مخازن الأغذية و المنتجات
            الزراعية
          </p>
        </div>
      </div>
      <div className="col-3">
        <div className="inner-card bg-white p-10 shadow-sm">
          <p className="fw-bold">
            المخازن العامة التي تضم مجموعة متنوعة من السلع
          </p>
        </div>
      </div>
      <div className="col-3">
        <div className="inner-card bg-white p-10 shadow-sm">
          <p className="fw-bold">مخازن الوقود و المواد الكيميائية</p>
        </div>
      </div>
    </CommercialWideCard>
  );
};

export default CommercialActivities;
