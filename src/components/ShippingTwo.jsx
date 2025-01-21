import React from "react";

const ShippingTwo = () => {
  return (
    <section className="shipping mb-80" id="shipping">
      <div className="container container-lg">
        <div className="row gy-4">
          <div className="col-xxl-3 col-sm-6">
            <div className="shipping-item flex-align gap-16 rounded-16 bg-main-two-50 hover-bg-main-100 transition-2">
              <span className="w-56 h-56 flex-center rounded-circle bg-main-two-600 text-white text-32 flex-shrink-0">
                <i className="ph-fill ph-currency-circle-dollar" />
              </span>
              <div className="">
                <h6 className="mb-0">Kredit Cepat</h6>
                <span className="text-sm text-heading">
                  Mudah hanya dengan KTP
                </span>
              </div>
            </div>
          </div>
          <div className="col-xxl-3 col-sm-6">
            <div className="shipping-item flex-align gap-16 rounded-16 bg-main-two-50 hover-bg-main-100 transition-2">
              <span className="w-56 h-56 flex-center rounded-circle bg-main-two-600 text-white text-32 flex-shrink-0">
                <i className="ph-fill ph-hand-heart" />
              </span>
              <div className="">
                <h6 className="mb-0">100% Kepuasan</h6>
                <span className="text-sm text-heading">
                  Pelayanan terbaik untuk Anda
                </span>
              </div>
            </div>
          </div>
          <div className="col-xxl-3 col-sm-6">
            <div className="shipping-item flex-align gap-16 rounded-16 bg-main-two-50 hover-bg-main-100 transition-2">
              <span className="w-56 h-56 flex-center rounded-circle bg-main-two-600 text-white text-32 flex-shrink-0">
                <i className="ph-fill ph-credit-card" />
              </span>
              <div className="">
                <h6 className="mb-0">Secure Payments</h6>
                <span className="text-sm text-heading">
                  Transaksi terpercaya
                </span>
              </div>
            </div>
          </div>
          <div className="col-xxl-3 col-sm-6">
            <div className="shipping-item flex-align gap-16 rounded-16 bg-main-two-50 hover-bg-main-100 transition-2">
              <span className="w-56 h-56 flex-center rounded-circle bg-main-two-600 text-white text-32 flex-shrink-0">
                <i className="ph-fill ph-chats" />
              </span>
              <div className="">
                <h6 className="mb-0">Dukungan 24/7</h6>
                <span className="text-sm text-heading">
                  Selalu siap membantu Anda
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShippingTwo;
