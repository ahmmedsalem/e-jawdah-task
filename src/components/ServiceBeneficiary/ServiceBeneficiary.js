import CommercialWideCard from "../CommercialWideCard/CommercialWideCard";
import { FormattedMessage } from "react-intl";

const ServiceBeneficiary = () => {
  return (
    <CommercialWideCard
      title={
        <FormattedMessage
          id="serviceBeneficiary.title"
          defaultMessage="تحديد المستفيد من الخدمة"
        ></FormattedMessage>
      }
    >
      <div className="col-3">
        <p className="fw-bold">مفوض عن مالك المؤسسة</p>
        <div className="inner-card bg-white p-10 shadow-sm">
          <p className="fw-bold">احمد علي الغامدي</p>
          <p>مفوض عن مالك المؤسسة</p>
        </div>
      </div>
      <div className="col-3">
        <p className="fw-bold">فئة الأسم التجاري</p>
        <div className="inner-card bg-white p-10 shadow-sm">
          <p className="fw-bold">شركات</p>
        </div>
      </div>
    </CommercialWideCard>
  );
};

export default ServiceBeneficiary;
