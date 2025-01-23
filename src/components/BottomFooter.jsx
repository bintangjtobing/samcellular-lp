import React from "react";

const BottomFooter = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="bottom-footer bg-color-one py-8">
      <div className="container container-lg">
        <div className="bottom-footer__inner flex-between flex-wrap gap-16 py-16">
          <p className="bottom-footer__text ">
            ©{currentYear} CV. Sam Bintang Group. All Rights Reserved by Boxity
            Central Indonesia
          </p>
        </div>
      </div>
    </div>
  );
};

export default BottomFooter;
