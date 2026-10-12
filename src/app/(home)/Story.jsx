import React from "react";

const Story = () => {
  return (
    <div className="story-area-1 overflow-hidden space">
      <div className="container">
        <div className="row gy-40 justify-content-between flex-row-reverse align-items-center">
          <div className="col-xl-7">
            <div className="story-img-box1">
              <div className="box-wrap d-inline-block">
                <div className="img1">
                  <img src="assets/img/normal/story_1_1.png" alt="img" />
                </div>
                <div className="story-shape1-1 jump-reverse">
                  <img src="assets/img/shape/story_shape1_1.png" alt="img" />
                </div>
                <div className="story-card movingX">
                  <h5 className="box-title">অ্যাডাম ক্রুজ</h5>
                  <p className="box-text">
                    আমাদের সাফল্যের গল্পগুলো আপনার অনুদানের বাস্তব জীবনের প্রভাব
                    এবং যাদের আমরা সাহায্য করি তাদের অদম্য মনোবলকে তুলে ধরে। এই
                    আখ্যানগুলো সহানুভূতির শক্তিকে প্রদর্শন করে।
                  </p>
                  <div
                    className="quote-icon"
                    data-mask-src="assets/img/icon/quote.svg"
                  ></div>
                </div>
                <div className="year-counter">
                  <p className="year-counter_text">
                    বছরের <span>অভিজ্ঞতা</span>
                  </p>
                  <div className="year-counter_number">
                    <span className="counter-number">১৬</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-5">
            <div className="story-wrap1">
              <div className="title-area mb-0">
                <span className="sub-title before-none">সাফল্যের গল্প</span>
                <h2 className="sec-title">
                  আমরা সহযোগী অলাভজনক সংস্থাগুলোকে তহবিল সংগ্রহের সরঞ্জাম ও
                  প্রশিক্ষণ পেতে সাহায্য করি।
                </h2>
                <p className="mt-30">
                  আমাদের সুরক্ষিত অনলাইন অনুদান প্ল্যাটফর্ম আপনাকে দ্রুত এবং
                  নিরাপদে অনুদান দেওয়ার সুযোগ করে দেয়। বিভিন্ন পেমেন্ট পদ্ধতি
                  থেকে বেছে নিন এবং এককালীন সঠিক ব্যবস্থাটি সেট আপ করুন।
                </p>
                <div className="btn-wrap mt-35">
                  <a href="about.html" className="th-btn style-border">
                    আমাদের সাফল্যের গল্প{" "}
                    <i className="fas fa-arrow-up-right ms-2"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Story;
