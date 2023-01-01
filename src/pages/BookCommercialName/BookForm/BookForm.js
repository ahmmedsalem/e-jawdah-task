import { useState, useContext } from "react";
import { useDispatch } from "react-redux";
import { Context } from "../../../components/Wrapper/Wrapper";
import CommercialActivities from "../../../components/CommercialActivities/CommercialActivities";
import CommercialList from "../../../components/CommercialList/CommercialList";
import SectionHeader from "../../../components/SectionHeader/SectionHeader";
import ServiceBeneficiary from "../../../components/ServiceBeneficiary/ServiceBeneficiary";
import { Link } from "react-router-dom";
import { addRecord } from "../../../redux/commercialsSlice";
import { FormattedMessage } from "react-intl";
import "./BookForm.scss";

const BookForm = (props) => {
  const context = useContext(Context);

  const [enteredNameType, setEnteredNameType] = useState("");
  const [enteredCommercialType, setEnteredCommercialType] = useState("مركز");
  const [enteredCommercialTypeFor, setEnteredCommercialTypeFor] =
    useState("للتجارة");
  const [enteredCommercialName, setEnteredCommercialName] = useState("");

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    const commercialName = {
      type: enteredNameType,
      commercialType: enteredCommercialType,
      commercialTypeFor: enteredCommercialTypeFor,
      commercialName: enteredCommercialName,
    };

    props.onSaveForm(commercialName);

    setEnteredNameType("");
    setEnteredCommercialType("");
    setEnteredCommercialTypeFor("");
    setEnteredCommercialName("");
  };

  const addRecordHandler = () => {
    if (enteredCommercialName.trim().length === 0) {
      return;
    }
    const commercialRecord = {
      id: Math.random().toString(),
      type: enteredNameType,
      commercialType: enteredCommercialType,
      commercialTypeFor: enteredCommercialTypeFor,
      commercialName: enteredCommercialName,
    };

    dispatch(addRecord(commercialRecord));
    setEnteredCommercialName("");
  };

  const typeNameChangeHandler = (e) => {
    setEnteredNameType(e.target.value);
  };

  const commercialTypeChangeHandler = (e) => {
    setEnteredCommercialType(e.target.value);
  };

  const commercialTypeForChangeHandler = (e) => {
    setEnteredCommercialTypeFor(e.target.value);
  };
  const commercialNameChangeHandler = (e) => {
    setEnteredCommercialName(e.target.value);
  };

  return (
    <>
      <ServiceBeneficiary />
      <CommercialActivities />
      <form onSubmit={submitHandler} className="book-form bg-white mt-20 p-25">
        <SectionHeader
          title={context.locale === "en" ? "Commercial Name" : "الاسم التجارى"}
          color={"#212529"}
        ></SectionHeader>

        {/* Checkboxes */}
        <p className="fs-6 fw-bold">
          <FormattedMessage
            id="commercialNameType.label"
            defaultMessage="حدد نوع الاسم التجارى"
          ></FormattedMessage>
        </p>
        <div
          className="book-form__checkboxes d-flex mb-25"
          onChange={typeNameChangeHandler}
        >
          <div className="form-check book-form__check p-20 border d-flex">
            <input
              required
              className="form-check-input ms-10 me-5"
              type="radio"
              name={enteredNameType}
              id="flexRadioDefault1"
              value={"special"}
              checked={enteredNameType === "special"}
              onChange={(e) => {}}
            />
            <label
              className="form-check-label me-5"
              htmlFor="flexRadioDefault1"
            >
              <FormattedMessage
                id="commercialNameType.customOption"
                defaultMessage="اسم خاص"
              ></FormattedMessage>
            </label>
          </div>
          <div className="form-check book-form__check p-20 border d-flex mx-20">
            <input
              required
              className="form-check-input ms-10 me-5"
              type="radio"
              name={enteredNameType}
              id="flexRadioDefault2"
              value={"recommended"}
              checked={enteredNameType === "recommended"}
              onChange={(e) => {}}
            />
            <label
              className="form-check-label me-5"
              htmlFor="flexRadioDefault2"
            >
              <FormattedMessage
                id="commercialNameType.suggestedOption"
                defaultMessage="اسم مقترح"
              ></FormattedMessage>
            </label>
          </div>
        </div>
        <div className="row">
          <p className="fs-6 fw-bold">
            <FormattedMessage
              id="commercialType.title"
              defaultMessage="اختر الكلمة السابقة والكلمة اللاحقة التى ستضاف إلى الاسم التجارى"
            ></FormattedMessage>
          </p>
          <div className="col-3">
            <div className="book-form__commercial-type">
              <label className="fw-normal mb-10" htmlFor="commercialType">
                <FormattedMessage
                  id="commercialType.prev.label"
                  defaultMessage="نوع المنشأة 'الكلمة السابقة'"
                ></FormattedMessage>
              </label>
              <select
                className="form-select p-10 w-100"
                value={enteredCommercialType}
                onChange={commercialTypeChangeHandler}
                id="commercialType"
                required
              >
                <option defaultValue value={"مركز"}>
                  <FormattedMessage
                    id="commercialType.prev.option1"
                    defaultMessage="مركز"
                  ></FormattedMessage>
                </option>
                <option value={"مؤسسة"}>
                  <FormattedMessage
                    id="commercialType.prev.option2"
                    defaultMessage="مؤسسة"
                  ></FormattedMessage>
                </option>
                <option value={"متجر"}>
                  <FormattedMessage
                    id="commercialType.prev.option3"
                    defaultMessage="متجر"
                  ></FormattedMessage>
                </option>
                <option value={"شركة"}>
                  <FormattedMessage
                    id="commercialType.prev.option4"
                    defaultMessage="شركة"
                  ></FormattedMessage>
                </option>
              </select>
            </div>
          </div>
          <div className="col-3">
            <div className="book-form__commercial-activity">
              <label className="fw-normal mb-10" htmlFor="commercialTypeFor">
                <FormattedMessage
                  id="commercialType.suff.label"
                  defaultMessage="نوع المنشأة 'الكلمة اللاحقة'"
                ></FormattedMessage>
              </label>
              <select
                className="form-select p-10 w-100"
                id="commercialTypeFor"
                value={enteredCommercialTypeFor}
                onChange={commercialTypeForChangeHandler}
                required
              >
                <option defaultValue value={"للتجارة"}>
                  <FormattedMessage
                    id="commercialType.suff.option1"
                    defaultMessage="للتجارة"
                  ></FormattedMessage>
                </option>
                <option value={"للصناعة"}>
                  <FormattedMessage
                    id="commercialType.suff.option2"
                    defaultMessage="للصناعة"
                  ></FormattedMessage>
                </option>
                <option value={"لتكنولوجيا المعلومات"}>
                  <FormattedMessage
                    id="commercialType.suff.option3"
                    defaultMessage="لتكنولوجيا المعلومات"
                  ></FormattedMessage>
                </option>
                <option value={"للإدارة الهندسية"}>
                  <FormattedMessage
                    id="commercialType.suff.option4"
                    defaultMessage="للإدارة الهندسية"
                  ></FormattedMessage>
                </option>
              </select>
            </div>
          </div>
        </div>
        <div className="row mt-15">
          <div className="col-6">
            <label className="fw-normal mb-15" htmlFor="commercialTypeFor">
              <FormattedMessage
                id="exampleCard.label"
                defaultMessage="مثال على شكل الأسم التجاري"
              ></FormattedMessage>
            </label>
            <div className="card-example">
              <div className="card-example__column">
                <p className="fw-bold">
                  <FormattedMessage
                    id="exampleCard.prev.name"
                    defaultMessage="الكلمة السابقة"
                  ></FormattedMessage>
                </p>
                <h2>
                  <FormattedMessage
                    id="exampleCard.center"
                    defaultMessage="مركز"
                  ></FormattedMessage>
                </h2>
              </div>
              <div className="card-example__column">
                <p className="fw-bold">
                  <FormattedMessage
                    id="exampleCard.entity.name"
                    defaultMessage="اسم الكيان"
                  ></FormattedMessage>
                </p>
                <h2>
                  <FormattedMessage
                    id="exampleCard.project.ownerName"
                    defaultMessage="اسم مالك المشروع"
                  ></FormattedMessage>
                </h2>
              </div>
              <div className="card-example__column">
                <p className="fw-bold">
                  <FormattedMessage
                    id="exampleCard.suffix.name"
                    defaultMessage="الكلمة اللاحقة"
                  ></FormattedMessage>
                </p>
                <h2>
                  <FormattedMessage
                    id="exampleCard.suffix.trading"
                    defaultMessage="للتجارة"
                  ></FormattedMessage>
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-15">
          <div className="col-3">
            <div className="book-form__commercial-type">
              <label className="fw-normal mb-10" htmlFor="commercialName">
                <FormattedMessage
                  id="commercialName.label"
                  defaultMessage="اسم المالك 'اسم الكيان'"
                ></FormattedMessage>
              </label>
              <input
                className="form-control p-10 w-200"
                type="text"
                minLength={5}
                maxLength={50}
                id="commercialName"
                required
                value={enteredCommercialName}
                onChange={commercialNameChangeHandler}
                placeholder="احمد صالح المنصور"
              />
            </div>
          </div>
          <div className="col-6 mt-33">
            <button
              className="btn btn-outline-info btn-view"
              onClick={addRecordHandler}
            >
              <i className="bi bi-plus-lg m-5"></i>
              <FormattedMessage
                id="button.addName"
                defaultMessage="إضافة اسم"
              ></FormattedMessage>
            </button>
          </div>
        </div>

        <div className="row">
          <CommercialList />
        </div>
        <div className="d-flex flex-row-reverse">
          <button className="btn btn-info btn-lg d-block" type="submit">
            <FormattedMessage
              id="button.next"
              defaultMessage="التالي"
            ></FormattedMessage>
          </button>
        </div>
      </form>
      <hr className="mt-35"></hr>
      <Link to="/">
        <button
          className="btn-cancel me-auto d-block my-25 mb-50"
          type="submit"
        >
          <i className="bi bi-x-lg text-danger mx-5"></i>
          <FormattedMessage
            id="button.cancel"
            defaultMessage="إلغاء الطلب"
          ></FormattedMessage>
        </button>
      </Link>
    </>
  );
};

export default BookForm;
