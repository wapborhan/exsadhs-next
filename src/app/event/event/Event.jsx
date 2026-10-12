const Event = () => {
  return (
    <section
      className="space bg-auto"
      data-bg-src="assets/img/bg/event_bg_3.png"
    >
      <div className="container">
        <div className="title-area text-center">
          <span className="sub-title">
            <span className="shape"></span> ইভেন্ট
          </span>
        </div>
        <div className="row gy-4">
          <div className="col">
            <div className="tab-content shedule-table-area">
              <div
                className="tab-pane fade show active"
                id="nav-one"
                role="tabpanel"
                aria-labelledby="nav-one-tab"
              >
                <div className="shedule-table">
                  <div className="table-column">
                    <div className="th">ক্রঃ</div>
                    <div className="td">০১</div>
                    <div className="td">০২ </div>
                    <div className="td">০৩</div>
                    <div className="td">০৪</div>
                    <div className="td">০৫</div>
                    <div className="td">০৬</div>
                    <div className="td">০৭</div>
                  </div>
                  <div className="table-column">
                    <div className="th">ইভেন্ট</div>
                    <div className="td">মোরগ লড়াই</div>
                    <div className="td">হাঁড়িভাঙ্গা</div>
                    <div className="td">হাঁটার সময় হাঁসের মতো হাঁটা</div>
                    <div className="td">তিন পায়ে দৌড়ানো</div>
                    <div className="td">ঝুড়িতে বল ফেলো</div>
                    <div className="td">হাসতে মানা</div>
                    <div className="td">লেবু চামচ দৌড়</div>
                  </div>
                  <div className="table-column">
                    <div className="th">নিয়ম</div>
                    <div className="td">-</div>
                    <div className="td">-</div>
                    <div className="td">
                      বসে বসে হাঁটার প্রতিযোগিতা, হাসির খোরাক প্রচুর!
                    </div>
                    <div className="td">
                      দুইজনের একটি করে পা বেঁধে দেওয়া হয়, একসাথে দৌড়াতে হয়।
                    </div>
                    <div className="td">
                      চোখ বাঁধা অবস্থায় নির্দিষ্ট দূরত্ব থেকে ঝুড়িতে বল ফেলতে
                      হবে।
                    </div>
                    <div className="td">
                      একজন নানা অদ্ভুত মুখভঙ্গি করে হাসানোর চেষ্টা করবে, বাকিদের
                      হাসলে বাদ
                    </div>
                    <div className="td">
                      চামচে লেবু নিয়ে দৌড়াতে হবে-লেবু পড়লে শুরু থেকে শুরু।{" "}
                    </div>
                  </div>
                  {/* <div className="table-column">
                    <div className="th">ইচ্ছুক?</div>
                    <div className="td">
                      <button className="vs-btn">আমি খেলবো</button>
                    </div>
                    <div className="td">
                      <button className="vs-btn">আমি খেলবো</button>
                    </div>
                    <div className="td">
                      <button className="vs-btn">আমি খেলবো</button>
                    </div>
                    <div className="td">
                      <button className="vs-btn">আমি খেলবো</button>
                    </div>
                    <div className="td">
                      <button className="vs-btn">আমি খেলবো</button>
                    </div>
                    <div className="td">
                      <button className="vs-btn">আমি খেলবো</button>
                    </div>
                    <div className="td">
                      <button className="vs-btn">আমি খেলবো</button>
                    </div>
                  </div> */}
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="nav-two"
                role="tabpanel"
                aria-labelledby="nav-two-tab"
              >
                <div className="shedule-table">
                  <div className="table-column">
                    <div className="th">Time</div>
                    <div className="td">
                      <i className="fa-light fa-clock"></i> 9:00 - 10:00 AM
                    </div>
                    <div className="td">
                      <i className="fa-light fa-clock"></i> 8:00 - 10:00 PM
                    </div>
                    <div className="td">
                      <i className="fa-light fa-clock"></i> 6:00 - 10:00 AM
                    </div>
                    <div className="td">
                      <i className="fa-light fa-clock"></i> 2:00 - 04:00 PM
                    </div>
                    <div className="td">
                      <i className="fa-light fa-clock"></i> 9:00 - 10:00 AM
                    </div>
                  </div>
                  <div className="table-column">
                    <div className="th">Bands</div>
                    <div className="td">Club Media Hip</div>
                    <div className="td">Live Pop Workout</div>
                    <div className="td">Band classNameic</div>
                    <div className="td">Rock & Roll Pops</div>
                    <div className="td">Flok Reuze Hits</div>
                  </div>
                  <div className="table-column">
                    <div className="th">Artists</div>
                  </div>
                  <div className="table-column">
                    <div className="th">Stages</div>
                    <div className="td">Main Stage</div>
                    <div className="td">Stage - 2</div>
                    <div className="td">Stage - 3</div>
                    <div className="td">Stage - 4</div>
                    <div className="td">Stage - 5</div>
                  </div>
                  <div className="table-column">
                    <div className="th">Ticket</div>
                    <div className="td">
                      <a href="shop.html" className="vs-btn">
                        BUY TICKET
                      </a>
                    </div>
                    <div className="td">
                      <a href="shop.html" className="vs-btn">
                        BUY TICKET
                      </a>
                    </div>
                    <div className="td">
                      <a href="shop.html" className="vs-btn">
                        BUY TICKET
                      </a>
                    </div>
                    <div className="td">
                      <a href="shop.html" className="vs-btn">
                        BUY TICKET
                      </a>
                    </div>
                    <div className="td">
                      <a href="shop.html" className="vs-btn">
                        BUY TICKET
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="nav-three"
                role="tabpanel"
                aria-labelledby="nav-three-tab"
              >
                <div className="shedule-table">
                  <div className="table-column">
                    <div className="th">Time</div>
                    <div className="td">
                      <i className="fa-light fa-clock"></i> 9:00 - 10:00 AM
                    </div>
                    <div className="td">
                      <i className="fa-light fa-clock"></i> 8:00 - 10:00 PM
                    </div>
                    <div className="td">
                      <i className="fa-light fa-clock"></i> 6:00 - 10:00 AM
                    </div>
                    <div className="td">
                      <i className="fa-light fa-clock"></i> 2:00 - 04:00 PM
                    </div>
                    <div className="td">
                      <i className="fa-light fa-clock"></i> 9:00 - 10:00 AM
                    </div>
                  </div>
                  <div className="table-column">
                    <div className="th">Bands</div>
                    <div className="td">Club Media Hip</div>
                    <div className="td">Live Pop Workout</div>
                    <div className="td">Band classNameic</div>
                    <div className="td">Rock & Roll Pops</div>
                    <div className="td">Flok Reuze Hits</div>
                  </div>
                  <div className="table-column">
                    <div className="th">Artists</div>
                  </div>
                  <div className="table-column">
                    <div className="th">Stages</div>
                    <div className="td">Main Stage</div>
                    <div className="td">Stage - 2</div>
                    <div className="td">Stage - 3</div>
                    <div className="td">Stage - 4</div>
                    <div className="td">Stage - 5</div>
                  </div>
                  <div className="table-column">
                    <div className="th">Ticket</div>
                    <div className="td">
                      <a href="shop.html" className="vs-btn">
                        BUY TICKET
                      </a>
                    </div>
                    <div className="td">
                      <a href="shop.html" className="vs-btn">
                        BUY TICKET
                      </a>
                    </div>
                    <div className="td">
                      <a href="shop.html" className="vs-btn">
                        BUY TICKET
                      </a>
                    </div>
                    <div className="td">
                      <a href="shop.html" className="vs-btn">
                        BUY TICKET
                      </a>
                    </div>
                    <div className="td">
                      <a href="shop.html" className="vs-btn">
                        BUY TICKET
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="nav-four"
                role="tabpanel"
                aria-labelledby="nav-four-tab"
              >
                <div className="shedule-table">
                  <div className="table-column">
                    <div className="th">Time</div>
                    <div className="td">
                      <i className="fa-light fa-clock"></i> 9:00 - 10:00 AM
                    </div>
                    <div className="td">
                      <i className="fa-light fa-clock"></i> 8:00 - 10:00 PM
                    </div>
                    <div className="td">
                      <i className="fa-light fa-clock"></i> 6:00 - 10:00 AM
                    </div>
                    <div className="td">
                      <i className="fa-light fa-clock"></i> 2:00 - 04:00 PM
                    </div>
                    <div className="td">
                      <i className="fa-light fa-clock"></i> 9:00 - 10:00 AM
                    </div>
                  </div>
                  <div className="table-column">
                    <div className="th">Bands</div>
                    <div className="td">Club Media Hip</div>
                    <div className="td">Live Pop Workout</div>
                    <div className="td">Band classNameic</div>
                    <div className="td">Rock & Roll Pops</div>
                    <div className="td">Flok Reuze Hits</div>
                  </div>
                  <div className="table-column">
                    <div className="th">Artists</div>
                  </div>
                  <div className="table-column">
                    <div className="th">Stages</div>
                    <div className="td">Main Stage</div>
                    <div className="td">Stage - 2</div>
                    <div className="td">Stage - 3</div>
                    <div className="td">Stage - 4</div>
                    <div className="td">Stage - 5</div>
                  </div>
                  <div className="table-column">
                    <div className="th">Ticket</div>
                    <div className="td">
                      <a href="shop.html" className="vs-btn">
                        BUY TICKET
                      </a>
                    </div>
                    <div className="td">
                      <a href="shop.html" className="vs-btn">
                        BUY TICKET
                      </a>
                    </div>
                    <div className="td">
                      <a href="shop.html" className="vs-btn">
                        BUY TICKET
                      </a>
                    </div>
                    <div className="td">
                      <a href="shop.html" className="vs-btn">
                        BUY TICKET
                      </a>
                    </div>
                    <div className="td">
                      <a href="shop.html" className="vs-btn">
                        BUY TICKET
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Event;
