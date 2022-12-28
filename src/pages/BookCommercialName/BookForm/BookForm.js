import { useState } from "react";
import { useDispatch } from "react-redux";
import CommercialList from "../../../components/CommercialList/CommercialList";
import SectionHeader from "../../../components/SectionHeader/SectionHeader";
import { addRecord } from "../../../redux/commercialsSlice";
import "./BookForm.scss";

const BookForm = (props) => {
  const [enteredNameType, setEnteredNameType] = useState("");
  const [enteredCommercialType, setEnteredCommercialType] = useState("مركز");
  const [enteredCommercialTypeFor, setEnteredCommercialTypeFor] = useState("للتجارة");
  const [enteredCommercialName, setEnteredCommercialName] = useState("");

  const dispatch = useDispatch();

  const submitHandler = (event) => {
    event.preventDefault();
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

  const addRecordHandler = e => {
    e.preventDefault();
    if (enteredCommercialName.trim().length === 0 ) {
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

    setEnteredNameType("");
    setEnteredCommercialType("");
    setEnteredCommercialTypeFor("");
    setEnteredCommercialName("");
  };

  const typeNameChangeHandler = e => {
    setEnteredNameType(e.target.value);
  };

  const commercialTypeChangeHandler = e => {
    setEnteredCommercialType(e.target.value);
  };

  const commercialTypeForChangeHandler = e => {
    setEnteredCommercialTypeFor(e.target.value);
  };
  const commercialNameChangeHandler = e => {
    setEnteredCommercialName(e.target.value);
  };

  return (
    <form onSubmit={submitHandler} className="book-form bg-white mt-20 p-25">
      <SectionHeader title={"الاسم التجارى"} color={"#212529"}></SectionHeader>

      {/* Checkboxes */}
      <p className="fs-6 fw-bold">حدد نوع الاسم التجارى</p>
      <div
        className="book-form__checkboxes d-flex mb-25"
        onChange={typeNameChangeHandler}
      >
        <div className="form-check book-form__check p-20 border d-flex">
          <input
            required
            className="form-check-input"
            type="radio"
            name={enteredNameType}
            id="flexRadioDefault1"
            value={"special"}
            checked={enteredNameType === "special"}
            onChange={e => {}}
          />
          <label className="form-check-label me-30" htmlFor="flexRadioDefault1">
            اسم خاص
          </label>
        </div>
        <div className="form-check book-form__check p-20 border d-flex me-20">
          <input
            required
            className="form-check-input"
            type="radio"
            name={enteredNameType}
            id="flexRadioDefault2"
            value={"recommended"}
            checked={enteredNameType === "recommended"}
            onChange={e => {}}
          />
          <label className="form-check-label me-30" htmlFor="flexRadioDefault2">
            اسم مقترح
          </label>
        </div>
      </div>
      <div className="row">
        <p className="fs-6 fw-bold">
          اختر الكلمة السابقة والكلمة اللاحقة التى ستضاف إلى الاسم التجارى
        </p>
        <div className="col-3">
          <div className="book-form__commercial-type">
            <label className="fw-normal mb-10" htmlFor="commercialType">
              نوع المنشأة "الكلمة السابقة"
            </label>
            <select
              className="form-select p-10 w-100"
              value={enteredCommercialType}
              onChange={commercialTypeChangeHandler}
              id="commercialType"
              required
            >
              <option defaultValue value={"مركز"}>
                مركز
              </option>
              <option value={"مؤسسة"}>مؤسسة</option>
              <option value={"متجر"}>متجر</option>
              <option value={"شركة"}>شركة</option>
            </select>
          </div>
        </div>
        <div className="col-3">
          <div className="book-form__commercial-activity">
            <label className="fw-normal mb-10" htmlFor="commercialTypeFor">
              نوع المنشأة "الكلمة اللاحقة"
            </label>
            <select
              className="form-select p-10 w-100"
              id="commercialTypeFor"
              value={enteredCommercialTypeFor}
              onChange={commercialTypeForChangeHandler}
              required
            >
              <option defaultValue value={"للتجارة"}>
                للتجارة
              </option>
              <option defaultValue value={"للصناعة"}>
                للصناعة
              </option>
              <option defaultValue value={"لتكنولوجيا المعلومات"}>
                لتكنولوجيا المعلومات
              </option>
              <option defaultValue value={"للإدارة الهندسية"}>
                للإدارة الهندسية
              </option>
            </select>
          </div>
        </div>
      </div>
      <div className="row mt-15">
        <div className="col-6">
          <label className="fw-normal mb-15" htmlFor="commercialTypeFor">
            مثال على شكل الأسم التجاري
          </label>
          <div className="card-example">
            <div className="card-example__column">
              <p>الكلمة السابقة</p>
              <h2>مركز</h2>
            </div>
            <div className="card-example__column">
              <p>اسم الكيان</p>
              <h2>اسم مالك المشروع</h2>
            </div>
            <div className="card-example__column">
              <p className="font-bold">الكلمة اللاحقة</p>
              <h2>للتجارة</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-15">
        <div className="col-3">
          <div className="book-form__commercial-type">
            <label className="fw-normal mb-10" htmlFor="commercialName">
              اسم المالك "اسم الكيان"
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
            إضافة اسم
          </button>
        </div>
      </div>

      <div className="row">
        <CommercialList />
      </div>

      <button className="btn btn-info btn-lg me-auto d-block" type="submit">
        التالى
      </button>
    </form>
  );
};

export default BookForm;
