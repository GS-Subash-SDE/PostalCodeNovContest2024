import { Button, Flex, Form, Input, Spin } from "antd";
import {  memo, useContext, useState } from "react"
import { postalCodeContext } from "./App";
import { fetchPostalCode } from "./fetchPostalDetails";
import { useNavigate } from "react-router-dom";


const PostalLookUp = () => {
  const {
    postalCode,
    setPostalCode,
    apiStatus,
    setApiStatus,
    officeData,
    setOfficeData,
  } = useContext(postalCodeContext);
  const navig = useNavigate();

  // [
  //   {
  //     Message: "Number of pincode(s) found:1",
  //     Status: "Success",
  //     PostOffice: [
  //       {
  //         Name: "Shenbakkam",
  //         Description: null,
  //         BranchType: "Sub Post Office",
  //         DeliveryStatus: "Delivery",
  //         Circle: "Tamilnadu",
  //         District: "Vellore",
  //         Division: "Vellore",
  //         Region: "Chennai Region",
  //         Block: "Vellore",
  //         State: "Tamil Nadu",
  //         Country: "India",
  //         Pincode: "632008",
  //       },
  //     ],
  //   },
  // ];
  const onFinish = (value) => {
    console.log(value);
    const { postalCod } = value;
    (async function () {
      setApiStatus("pending");
      const { success,data } = await fetchPostalCode(postalCod);
      if (success) {
console.log("Inside PostalLook: ",data[0]);
        setOfficeData(data[0])
        setPostalCode(postalCod)
        setApiStatus("success");
        navig('lookup');
      } else {
        setApiStatus('error');
      }
    })();


  }

  return (
    <div className="postalLookup">
      <h1>Enter Pincode</h1>
      <Form onFinish={onFinish}>
        <Form.Item
          name="postalCod"
          rules={[
            {
              required: true,
              message: "Please Enter Postal code here!",
            },
            {
              min: 6,
              message: "Postal code is less than < 6 digits",
            },
            {
              max: 6,
              message: "Postal code is Greater than > 6 digits",
            },
            {
              pattern: /^\d+$/,
              message: "Input should be a Number!",
            },
          ]}
        >
          <Input
            onClick={(e) => setPostalCode(e.target.value)}
            value={postalCode}
            className="lookupSerach"
            placeholder="Pincode"
          />
        </Form.Item>

        <Form.Item label={null}>
          <Button
            className="btn"
            type="default"
            variant="solid"
            htmlType="submit"
          >
            Lookup
          </Button>
        </Form.Item>
      </Form>
      {apiStatus === "pending" && (
        <Flex className="spinner" align="center" gap="middle">
          <Spin size="small" />
           <Spin />
          <Spin size="large" />
        </Flex>
      )}
    </div>
  );
}

export default memo(PostalLookUp);