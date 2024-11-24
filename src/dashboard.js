import { SearchOutlined } from "@ant-design/icons";
import PostalData from "./postalData";
import { useContext, useState } from "react";
import { postalCodeContext } from "./App";

const Dashboard = () => {
  const {
    postalCode,
    setPostalCode,
    apiStatus,
    setApiStatus,
    officeData,
    setOfficeData,
  } = useContext(postalCodeContext);

  console.log("Dashboard:", postalCode, officeData);

  const [filterInput, setFilterInput] = useState("");
  const { Message, PostOffice, Status } = officeData;
// const { Name, BranchType, DeliveryStatus, District, Division } = data;
  const filteredData = PostOffice?.filter((val) => {
    console.log("filter",val.Name);
    const { Name, BranchType, DeliveryStatus, District, Division } = val
    return (
      Name.toUpperCase().includes(filterInput.toUpperCase()) ||
      BranchType.toUpperCase().includes(filterInput.toUpperCase()) ||
      DeliveryStatus.toUpperCase().includes(filterInput.toUpperCase()) ||
      District.toUpperCase().includes(filterInput.toUpperCase()) ||
      Division.toUpperCase().includes(filterInput.toUpperCase())
    );
  })

  return (
    <div className="dashboardCont">
      <header>
        <div className="postalDescription">
          <div className="pDivDesc">
            <span className="pSpanDesc">Pincode: </span>
            <span className="pSpanDesc"> {postalCode}</span>
          </div>
          <div className="pDivDesc">
            <span className="pSpanDesc">Message: </span>
            <span>{Message}</span>
          </div>
        </div>
        <div className="postalFileterCont">
          <div className="searchIcon">
            <SearchOutlined />
          </div>
          <input
            value={filterInput}
            onChange={(e) => setFilterInput(e.target.value)}
            className="filterBox"
            type="text"
            placeholder="Filter"
          />
        </div>
      </header>
      <main className="postalDataCont">
        {apiStatus === "success" &&
          filteredData?.map((data, i) => {
            const { Name, BranchType, DeliveryStatus, District, Division } =
              data;

            return (
              <PostalData
                key={Name}
                Name={Name}
                BranchType={BranchType}
                DeliveryStatus={DeliveryStatus}
                District={District}
                Division={Division}
              />
            );
          })}

      </main>
    </div>
  );
};

export default Dashboard;
