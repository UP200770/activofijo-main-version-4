import React, { useRef, useEffect } from "react";
import { Document, Page, pdfjs } from "react-pdf"; // Importa react-pdf
import JsBarcode from "jsbarcode";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";

// Configura react-pdf para trabajar con bibliotecas que no son de la comunidad
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const ProductLabel = ({ productCode, onClear }) => {
  const barcodeRef = useRef(null);

  useEffect(() => {
    if (barcodeRef.current) {
      JsBarcode(barcodeRef.current, productCode, {
        format: "CODE128",
        displayValue: false,
        height: 40,
      });
    }
  }, [productCode]);

  return (
    <div>
      <div className="border p-4 text-center d-flex flex-column align-items-center">
        <div className="card ">
          <div className="card-body">
            <div id="etiquetaVantec" className="d-flex flex-column align-items-center">
              <p
                style={{
                  fontSize: "12px",
                  fontWeight: "500",
                  marginBottom: "-11px",
                  padding: "1px",
                }}
              >
                {" "}
                <img
                  style={{ marginBottom: "6px" }}
                  src={require("./VANTEC.png")}
                  alt="2"
                  height={20}
                ></img>
                Vantec Logistics Mexico SA de CV{" "}
              </p>
              <h2
                style={{
                  marginBottom: "-5px",
                  fontSize: "27px",
                  letterSpacing: "1.4px",
                  fontWeight: "700",
                }}
              >
                {productCode}
              </h2>
              <div>
                <svg ref={barcodeRef} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <button onClick={onClear} className="btn btn-danger m-3">
        <i className="fa fa-trash"></i>
      </button>
    </div>
  );
};

export default ProductLabel;
