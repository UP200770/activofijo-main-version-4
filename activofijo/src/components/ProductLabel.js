import React, { useRef, useEffect } from "react";
import JsBarcode from "jsbarcode";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";



const ProductLabel = ({ productCode, onClear }) => {
  const barcodeRef = useRef(null);

  useEffect(() => {
    if (barcodeRef.current) {
      JsBarcode(barcodeRef.current, productCode, {
        format: "CODE128",
        displayValue: false,
        height: 20,
      });
    }
  }, [productCode]);

  return (
    <div>
      <div className=" text-center align-items-center">
        <div id="et" className="">
          <div className="">
            <div className="">
              <p
                style={{
                  fontSize: "13px",
                  fontWeight: "700",
                  marginBottom: "-4px",
                  marginTop:"15px",
                  padding: "1px",
                }}
              >
                {" "}
                <img
                  style={{ marginBottom: "-1px",  }}
                  src={require("./VANTEC.png")}
                  alt="2"
                  height={20}
                ></img>
                Vantec Logistics Mexico, SA de CV
              </p>
              <h2
                style={{
                  marginBottom: "-3px",
                  fontSize: "24px",
                  letterSpacing: "1.4px",
                  fontWeight: "700",
                }}
              >
                {productCode}
              </h2>
              <div style={{
                  marginBottom: "3px",
                  fontSize: "24px",
                  letterSpacing: "1.4px",
                  fontWeight: "700",
                }} > 
                <svg ref={barcodeRef} />
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default ProductLabel;
