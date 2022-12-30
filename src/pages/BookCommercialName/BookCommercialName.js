import { useState, useContext } from "react";
import { Context } from "../../components/Wrapper/Wrapper";
import SectionHeader from "../../components/SectionHeader/SectionHeader";
import Stepper from "../../components/Stepper/Stepper";
import Navbar from "../../layout/Navbar/Navbar";
import "./BookCommercialName.scss";
import BookForm from "./BookForm/BookForm";
import { Link } from "react-router-dom";
import Footer from "../../layout/Footer/Footer";
import { FormattedMessage } from "react-intl";

const BookCommercialName = () => {
  const [nextStep, setnextStep] = useState("1");
  const context = useContext(Context);

  const saveFormHandler = (formData) => {
    const name =
      formData.commercialType +
      " " +
      formData.commercialName +
      " " +
      formData.commercialTypeFor;
    const json = [
      {
        id: Math.random().toString(),
        commercialName: name,
        commercialStatus: "سجل قائم",
        commercialType: "سجل رئيسيى",
        isFavorite: true,
        isActive: true,
        isDeleted: false,
        commercialInfo: {
          type: "مؤسسة",
          expirationDate: "22/02/2021",
          uniformNumber: 143000,
          commercialNumber: 5435234,
        },
      },
    ];
    console.log(json);
    setnextStep("2");
  };

  return (
    <div className="commercial">
      <div className="container commercial__container">
        <div className="row">
          <div className="col-12">
            <Navbar></Navbar>
            <div className="book-name bg-light p-25">
              <div className="container">
                <section className="book-name__stepper-wrapper bg-white p-25">
                  <SectionHeader
                    title={
                      context.locale === "en"
                        ? "Book Commercial Name Request"
                        : "طلب حجز اسم تجاري"
                    }
                    color={"#212529"}
                  ></SectionHeader>
                  <Stepper isNext={nextStep}></Stepper>
                </section>
                {nextStep === "1" && (
                  <BookForm onSaveForm={saveFormHandler}></BookForm>
                )}
                {nextStep === "2" && (
                  <div className="text-center mt-50">
                    <p className="fs-3 fw-bold mb-25">
                      <i className="bi bi-check-circle-fill align-middle text-success mx-10"></i> 
                       <FormattedMessage
                        id="success.message"
                        defaultMessage="تم حجز الاسم بنجاح"
                      ></FormattedMessage>
                    </p>
                    <Link to="/">
                      <button className="btn btn-primary mx-10 p-15">
                        <FormattedMessage
                        id="button.goToList"
                        defaultMessage="قائمة السجلات التجارية"
                      ></FormattedMessage>
                      </button>
                    </Link>
                    <button
                      className="btn btn-outline-info p-15"
                      onClick={() => setnextStep("1")}
                    >
                      <FormattedMessage
                        id="button.back"
                        defaultMessage="عودة"
                      ></FormattedMessage>
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BookCommercialName;
