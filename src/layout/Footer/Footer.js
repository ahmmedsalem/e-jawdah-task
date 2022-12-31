import React from "react";
import Logo from "../../assets/images/SDAIA-Logo.webp";
import { FormattedMessage } from "react-intl";
import "./Footer.scss";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="container">
      <div className="footer mt-15">
        <div className="row">
          <div className="col-12">
            <div className="d-flex justify-content-center">
              <p className="text-white me-20">
                <FormattedMessage
                  id="sdaia.copyrights"
                  defaultMessage="تطوير الهيئة السعودية للبيانات و الذكاء الإصطناعي"
                />
              </p>
              <img src={Logo} alt="SDAIA" className="footer__logo me-15" />
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center my-5">
          <hr className="text-white w-50 text-center"></hr>
        </div>
        <div className="row">
          <div className="col-12">
            <p className="text-white text-center">
              <FormattedMessage
                id="app.copyrights"
                defaultMessage="جميع الحقوق محفوظة للمركز السعودي للأعمال الأقتصادية"
              />{" "}
              {year} ©
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
