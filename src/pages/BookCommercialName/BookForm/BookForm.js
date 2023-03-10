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
  const [enteredCommercialType, setEnteredCommercialType] = useState("commercialType.prev.option1");
  const [enteredCommercialTypeFor, setEnteredCommercialTypeFor] =
    useState("commercialType.suff.option1");
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
          title={context.locale === "en" ? "Commercial Name" : "?????????? ??????????????"}
          color={"#212529"}
        ></SectionHeader>

        {/* Checkboxes */}
        <p className="fs-6 fw-bold">
          <FormattedMessage
            id="commercialNameType.label"
            defaultMessage="?????? ?????? ?????????? ??????????????"
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
                defaultMessage="?????? ??????"
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
                defaultMessage="?????? ??????????"
              ></FormattedMessage>
            </label>
          </div>
        </div>
        <div className="row">
          <p className="fs-6 fw-bold">
            <FormattedMessage
              id="commercialType.title"
              defaultMessage="???????? ???????????? ?????????????? ?????????????? ?????????????? ???????? ?????????? ?????? ?????????? ??????????????"
            ></FormattedMessage>
          </p>
          <div className="col-3">
            <div className="book-form__commercial-type">
              <label className="fw-normal mb-10" htmlFor="commercialType">
                <FormattedMessage
                  id="commercialType.prev.label"
                  defaultMessage="?????? ?????????????? '???????????? ??????????????'"
                ></FormattedMessage>
              </label>
              <select
                className="form-select p-10 w-100"
                value={enteredCommercialType}
                onChange={commercialTypeChangeHandler}
                id="commercialType"
                required
              >
                <option defaultValue value={"commercialType.prev.option1"}>
                  <FormattedMessage
                    id="commercialType.prev.option1"
                  ></FormattedMessage>
                </option>
                <option value={"commercialType.prev.option2"}>
                  <FormattedMessage
                    id="commercialType.prev.option2"
                  ></FormattedMessage>
                </option>
                <option value={"commercialType.prev.option3"}>
                  <FormattedMessage
                    id="commercialType.prev.option3"
                  ></FormattedMessage>
                </option>
                <option value={"commercialType.prev.option4"}>
                  <FormattedMessage
                    id="commercialType.prev.option4"
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
                  defaultMessage="?????? ?????????????? '???????????? ??????????????'"
                ></FormattedMessage>
              </label>
              <select
                className="form-select p-10 w-100"
                id="commercialTypeFor"
                value={enteredCommercialTypeFor}
                onChange={commercialTypeForChangeHandler}
                required
              >
                <option defaultValue value={"commercialType.suff.option1"}>
                  <FormattedMessage
                    id="commercialType.suff.option1"
                    defaultMessage="??????????????"
                  ></FormattedMessage>
                </option>
                <option value={"commercialType.suff.option2"}>
                  <FormattedMessage
                    id="commercialType.suff.option2"
                    defaultMessage="??????????????"
                  ></FormattedMessage>
                </option>
                <option value={"commercialType.suff.option3"}>
                  <FormattedMessage
                    id="commercialType.suff.option3"
                    defaultMessage="???????????????????? ??????????????????"
                  ></FormattedMessage>
                </option>
                <option value={"commercialType.suff.option4"}>
                  <FormattedMessage
                    id="commercialType.suff.option4"
                    defaultMessage="?????????????? ????????????????"
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
                defaultMessage="???????? ?????? ?????? ?????????? ??????????????"
              ></FormattedMessage>
            </label>
            <div className="card-example">
              <div className="card-example__column">
                <p className="fw-bold">
                  <FormattedMessage
                    id="exampleCard.prev.name"
                    defaultMessage="???????????? ??????????????"
                  ></FormattedMessage>
                </p>
                <h2>
                  <FormattedMessage
                    id={enteredCommercialType}
                    defaultMessage={enteredCommercialType}
                  ></FormattedMessage>
                </h2>
              </div>
              <div className="card-example__column">
                <p className="fw-bold">
                  <FormattedMessage
                    id="exampleCard.entity.name"
                    defaultMessage="?????? ????????????"
                  ></FormattedMessage>
                </p>
                <h2>
                  {enteredCommercialName.trim().length !== 0 ?  enteredCommercialName : <FormattedMessage
                    id={"exampleCard.project.ownerName"}
                    defaultMessage="?????? ???????? ??????????????"
                  ></FormattedMessage>}
                </h2>
              </div>
              <div className="card-example__column">
                <p className="fw-bold">
                  <FormattedMessage
                    id="exampleCard.suffix.name"
                    defaultMessage="???????????? ??????????????"
                  ></FormattedMessage>
                </p>
                <h2>
                  <FormattedMessage
                    id={enteredCommercialTypeFor}
                    defaultMessage={enteredCommercialTypeFor}
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
                  defaultMessage="?????? ???????????? '?????? ????????????'"
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
                placeholder="???????? ???????? ??????????????"
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
                defaultMessage="?????????? ??????"
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
              defaultMessage="????????????"
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
            defaultMessage="?????????? ??????????"
          ></FormattedMessage>
        </button>
      </Link>
    </>
  );
};

export default BookForm;
