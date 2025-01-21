import React from "react";

const BottomFooter = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="bottom-footer bg-color-one py-8">
      <div className="container container-lg">
        <div className="bottom-footer__inner flex-between flex-wrap gap-16 py-16">
          <p className="bottom-footer__text ">
            ©{currentYear} Sam Cellular. All Rights Reserved by Boxity Central
            Indonesia
          </p>
          <div className="flex-align gap-8 flex-wrap">
            <span className="text-heading text-sm">We Are Acepting</span>
            <img
              src="assets/images/thumbs/payment-method.png"
              alt="SamCellular"
              style={{ width: "800px" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomFooter;
