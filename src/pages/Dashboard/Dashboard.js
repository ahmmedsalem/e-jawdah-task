import Sidebar from "../../layout/Sidebar/Sidebar"
import CommercialRecords from "../CommercialRecords/CommercialRecords";

const Dashboard = () => {

  return (
      <div className="row">
        <div className="col-3">
          <Sidebar></Sidebar>
        </div>
        <div className="col-9">
          <main className="mt-50">
            <CommercialRecords></CommercialRecords>
          </main>
        </div>
      </div>
  );
};

export default Dashboard;
