import React from "react";

const BottomFooter = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="bottom-footer bg-color-one py-8">
      <div className="container container-lg">
        <div className="bottom-footer__inner flex-between flex-wrap gap-16 py-16">
          <p className="bottom-footer__text">
            © {currentYear} - CV. Sam Bintang Group. All rights reserved.
            Developed by{" "}
            <a
              href="https://bintangtobing.com?utm_medium=footer&utm_source=client-website&utm_campaign=branding-on-samcellular"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#4b4b4b" }}
            >
              <abbr title="Develop by Bintang Tobing">
                Boxity Central Indonesia
              </abbr>
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default BottomFooter;
