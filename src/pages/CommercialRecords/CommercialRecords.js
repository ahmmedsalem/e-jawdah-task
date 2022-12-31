import { useContext, useState } from "react";
import MainCard from "../../components/MainCard/MainCard";
import SectionHeader from "../../components/SectionHeader/SectionHeader";
import { Context } from "../../components/Wrapper/Wrapper";
import { FormattedMessage } from "react-intl";
import "./CommercialRecords.scss";
import LicenseCard from "../../components/LicenseCard/LicenseCard";

const CommercialRecords = () => {
  const allRecords = require("../../assets/json/commercialRecords.json");
  const tabsNames = require("../../assets/json/nav.json");
  const licenses = allRecords.licenses;
  const [active, setActive] = useState("t1");
  const [records, setFilteredRecords] = useState(allRecords.records);
  const context = useContext(Context);

  const selectTab = (tab) => {
    setActive(tab.id);
    let filteredItems = allRecords.records.filter((item) => {
      if (tab.id === "t2") {
        return item.commercialType === "سجل فرعي";
      } else if (tab.id === "t3") {
        return item.commercialInfo.type === "مؤسسة";
      } else if (tab.id === "t4") {
        return item.isFavorite;
      } else {
        return item;
      }
    });
    setFilteredRecords(filteredItems);
  };
  const ToggleFavBtnHandler = (item) => {
    let filteredItems = allRecords.records.map((record) => {
      if (item.id === record.id) {
        record.isFavorite = !item.isFavorite;
        return record;
      } else {
        return record;
      }
    });
    setFilteredRecords(filteredItems);
    setActive("t1");
  };

  const allCommercialRecords = records.map((record) => {
    return (
      <MainCard
        item={record}
        key={record.id}
        onToggleFavBtn={ToggleFavBtnHandler}
      ></MainCard>
    );
  });

  const allLicensesCards = licenses.map((license) => {
    return <LicenseCard item={license} key={license.id}></LicenseCard>;
  });

  return (
    <div className="records ms-15">
      {/* Header */}
      <SectionHeader
        title={
          context.locale === "en"
            ? "Commercial Lists"
            : "قائمة السجلات التجارية"
        }
      ></SectionHeader>

      {/* Tabs */}
      <ul className="nav nav-pills px-0 mb-20 records__tabs">
        {tabsNames.tabs.map((tab) => {
          return (
            <li className="nav-item records__tabs__item" key={tab.id}>
              <a
                className={`nav-link records__tabs__item__link fw-normal ${
                  active === tab.id && "active fw-bold"
                }`}
                aria-current="page"
                href="/#"
                onClick={() => selectTab(tab)}
              >
                <FormattedMessage
                  id={`commercial.${tab.name}`}
                  defaultMessage={tab.name}
                />{" "}
                {active === tab.id && allCommercialRecords.length}
              </a>
            </li>
          );
        })}
      </ul>

      {/* Cards */}
      {allCommercialRecords}
      {/* Header */}
      <SectionHeader
        title={
          context.locale === "en"
            ? "Licenses and Permits Statistics"
            : "إحصائيات الرخص و التصاريح"
        }
      ></SectionHeader>
      {/* Licenses Cards */}
      <div className="row">{allLicensesCards}</div>
    </div>
  );
};

export default CommercialRecords;
