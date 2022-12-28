import { useContext, useState } from "react";
import MainCard from "../../components/MainCard/MainCard";
import SectionHeader from "../../components/SectionHeader/SectionHeader";
import { Context } from "../../components/Wrapper/Wrapper";
import {FormattedMessage} from 'react-intl';
import "./CommercialRecords.scss";

const CommercialRecords = () => {
  const allRecords = require("../../assets/json/commercialRecords.json");
  const tabsNames = require("../../assets/json/nav.json");
  
  const [active, setActive] = useState("t1");
  let [records, setFilteredRecords] = useState(allRecords.records);
  const context = useContext(Context);

  const selectTab = (tab) => {
    setActive(tab.id);
    let filteredItems = allRecords.records.filter(item => {
      if(tab.id === "t2") {
        return item.commercialType === "سجل فرعى";
      } else if(tab.id === "t3") {
        return item.commercialInfo.type === "مؤسسة";
      } else if(tab.id === "t4") {
        return item.isFavorite;
      } else {
        return item;
      }
    });
    setFilteredRecords(filteredItems);
  };
  const ToggleFavBtnHandler = (item) => {
    let filteredItems = allRecords.records.map(record => {
      if (item.id === record.id) {
        record.isFavorite = !item.isFavorite
        return record;
      } else {
        return record;
      }
    });
    setFilteredRecords(filteredItems);
    setActive("t1");
  };

  const allCommercialRecords = records.map((record) => {
    return <MainCard item={record} key={record.id} onToggleFavBtn={ToggleFavBtnHandler}></MainCard>;
  });

  return (
    <div className="records">
      {/* Header */}
      <SectionHeader title={context.locale === "en" ? "Commercial Lists" : "قائمة السجلات التجارية"}></SectionHeader>

      {/* Tabs */}
      <ul className="nav nav-pills px-0 mb-20 records__tabs">
        {tabsNames.tabs.map((tab) => {
          return (
            <li className="nav-item records__tabs__item" key={tab.id}>
              <a className={`nav-link records__tabs__item__link fw-normal ${active === tab.id && "active fw-bold"}`}
              aria-current="page" href="/#" 
              onClick={() => selectTab(tab)}>
                <FormattedMessage id={`commercial.${tab.name}`} defaultMessage={tab.name} /> {active === tab.id && allCommercialRecords.length}
              </a>
            </li>
          );
        })}
      </ul>

      {/* Cards */}
      {allCommercialRecords}
    </div>
  );
};

export default CommercialRecords;
