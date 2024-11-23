const PostalData = ({ Name, BranchType, DeliveryStatus, District, Division }) => {
  

  return (
    <div className="postalData">
      <div>
        <span className="dataLabel">Name: </span>
        <span className="dataVal">{Name}</span>
      </div>
      <div>
        <span className="dataLabel">Branch Type: </span>
        <span className="dataVal">{BranchType}</span>
      </div>
      <div>
        <span className="dataLabel">Delivery Status: </span>
        <span className="dataVal">{ DeliveryStatus}</span>
      </div>
      <div>
        <span className="dataLabel">District: </span>
        <span className="dataVal">{District}</span>
      </div>
      <div>
        <span className="dataLabel">Divisionme: </span>
        <span className="dataVal">{Division}</span>
      </div>
    </div>
  );
};


export default PostalData;