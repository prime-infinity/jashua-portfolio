import { useState } from "react";

const About = () => {
  const [toggleList, setToggleList] = useState("tab1");
  const activeList = (value) => (value === toggleList ? "active" : "");
  return (
    <section id="about">
      <div className="container">
        <div className="roww">
          {/* Main Title */}
          <div className="resumo_fn_main_title">
            <h3 className="subtitle">About Me</h3>
            <h3 className="title">Biography</h3>
            <p className="desc">
              {`I’m a UI/UX Designer with 3 years of professional experience in delivering solutions to product problems. I’m from Nigeria and I’ve had the privilege to work with amazing people remotely from roughly 4 continents while freelancing, working on contract and full time roles.`}
            </p>
          </div>
          {/* /Main Title */}
          {/* About Information */}
          <div className="resumo_fn_about_info">
            <div className="about_left">
              <table>
                <tbody>
                  <tr>
                    <th>Name</th>
                    <th>Ogbemudia Jashua</th>
                  </tr>

                  <tr>
                    <th>Address</th>
                    <th>Edo state, Nigeria </th>
                  </tr>
                  <tr>
                    <th>Phone</th>
                    <th>
                      <a href="tel:+234 814 743 8611">+234 814 743 8611</a>
                    </th>
                  </tr>
                  <tr>
                    <th>Email</th>
                    <th>
                      <a href="mailto:Jashuadesigns@gmail.com">
                        Jashuadesigns@gmail.com
                      </a>
                    </th>
                  </tr>
                 
                </tbody>
              </table>
            </div>
            <div className="about_right">
              {/* Download CV Button */}
              <div className="resumo_fn_cv_btn">
                <a href="img/Josh’s Resume.pdf" download>
                  <span className="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      version="1.1"
                      x="0px"
                      y="0px"
                      viewBox="0 0 449.306 449.306"
                      style={{ enableBackground: "new 0 0 449.306 449.306" }}
                      xmlSpace="preserve"
                      className="fn__svg replaced-svg"
                    >
                      <path d="M447.739,251.298l-59.037-126.433c-1.731-3.54-5.484-5.625-9.404-5.224h-50.155c-5.771,0-10.449,4.678-10.449,10.449     c0,5.771,4.678,10.449,10.449,10.449h43.363l48.588,104.49h-59.559c-27.004-0.133-51.563,15.625-62.694,40.229     c-8.062,16.923-25.141,27.698-43.886,27.69h-60.604c-18.745,0.008-35.823-10.767-43.886-27.69     c-11.131-24.604-35.69-40.362-62.694-40.229H29.257l57.469-104.49h33.437c5.771,0,10.449-4.678,10.449-10.449     c0-5.771-4.678-10.449-10.449-10.449H80.457c-3.776-0.358-7.425,1.467-9.404,4.702L2.09,250.776     c-1.209,1.072-1.958,2.569-2.09,4.18v130.09c0.832,29.282,24.524,52.744,53.812,53.29h341.682     c29.289-0.546,52.98-24.008,53.812-53.29v-130.09C449.107,253.622,448.567,252.362,447.739,251.298z M428.408,385.045     c-0.812,17.743-15.16,31.864-32.914,32.392H53.812c-17.754-0.528-32.102-14.648-32.914-32.392V265.927h66.873     c18.745-0.008,35.823,10.767,43.886,27.69c11.131,24.604,35.69,40.362,62.694,40.229h60.604     c27.004,0.133,51.563-15.625,62.694-40.229c8.062-16.923,25.141-27.698,43.886-27.69h66.873V385.045z" />
                    </svg>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      version="1.1"
                      x="0px"
                      y="0px"
                      viewBox="0 0 449.306 449.306"
                      style={{ enableBackground: "new 0 0 449.306 449.306" }}
                      xmlSpace="preserve"
                      className="fn__svg arrow replaced-svg"
                    >
                      <path d="M217.339,252.865c3.706,4.04,9.986,4.31,14.025,0.603c0.21-0.192,0.411-0.394,0.603-0.603l71.053-71.576   c3.462-4.617,2.527-11.166-2.09-14.629c-3.715-2.786-8.824-2.786-12.539,0l-53.29,53.29V21.42   c0-5.771-4.678-10.449-10.449-10.449s-10.449,4.678-10.449,10.449v198.531l-53.29-53.29c-4.617-3.462-11.166-2.527-14.629,2.09   c-2.786,3.715-2.786,8.824,0,12.539L217.339,252.865z" />
                    </svg>
                  </span>
                  <span>Download CV</span>
                </a>
              </div>
              {/* /Download CV Button */}
            </div>
          </div>
          {/* /About Information */}
          {/* Tabs Shortcode */}
          <div className="resumo_fn_tabs">
            {/* Tab: Header */}
            <div className="tab_header">
              <ul>
                <li className={activeList("tab1")}>
                  <a href="#" onClick={() => setToggleList("tab1")}>
                    Experience
                  </a>
                </li>
                <li className={activeList("tab2")}>
                  <a href="#" onClick={() => setToggleList("tab2")}>
                    Education
                  </a>
                </li>
                <li className={activeList("tab3")}>
                  <a href="#" onClick={() => setToggleList("tab3")}>
                    Skills
                  </a>
                </li>
              </ul>
            </div>
            {/* /Tab: Header */}
            {/* Tab: Content */}
            <div className="tab_content">
              {/* #1 tab content */}
              <div id="tab1" className={`tab_item ${activeList("tab1")}`}>
                {/* Boxed List */}
                <div className="resumo_fn_boxed_list">
                  <ul>
                    <li>
                      <div className="item">
                        <div className="item_top">
                          <h5>Frenify LLC</h5>
                          <span>( Sep 2021 - Dec 2021 )</span>
                        </div>
                        <h3>Lead UI/UX Designer</h3>
                        <p>
                        Redesigned and restructured the experience of a freelance product
                        that connects talents in Africa to clients all over the world.{" "}
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="item">
                        <div className="item_top">
                          <h5>Azurestech</h5>
                          <span>( Nov 2020 - Sep 2021 )</span>
                        </div>
                        <h3>Lead UI/UX Designer</h3>
                        <p>
                        Directly collaborated with CEO and Product team to prototype,
                        design and deliver the user interface of a social media application for
                        christians with seamless user experience.{" "}
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="item">
                        <div className="item_top">
                          <h5>Onqoba Agency</h5>
                          <span>( Jan 2020 - Sep 2020 )</span>
                        </div>
                        <h3>UI/UX Designer</h3>
                        <p>
                        Designed mobile UI applications for Fintech, health and ecommerce
                        industries and also worked close to developers to ensure pixel
                        perfect developement.{" "}
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
                {/* /Boxed List */}
              </div>
              {/* /#1 tab content */}
              {/* #2 tab content */}
              <div id="tab2" className={`tab_item ${activeList("tab2")}`}>
                {/* Boxed List */}
                <div className="resumo_fn_boxed_list">
                  <ul>
                    <li>
                      <div className="item">
                        <div className="item_top">
                          <h5>University Of Benin</h5>
                          <span>( 2015 — 2020 )</span>
                        </div>
                        <h3>Bachelor in Petroleum Engineering</h3>
                        
                      </div>
                    </li>
                    <li>
                      <div className="item">
                        <div className="item_top">
                          <h5>The interaction design foundation</h5>
                          <span>( 2020 )</span>
                        </div>
                        <h3>Product | UI/UX Design Membership</h3>
                        
                      </div>
                    </li>
                    
                  </ul>
                </div>
                {/* /Boxed List */}
              </div>
              {/* /#2 tab content */}
              {/* #3 tab content */}
              <div id="tab3" className={`tab_item ${activeList("tab3")}`}>
                {/* Progress Bar */}
                <div className="resumo_fn_progress_bar">
                  <div className="progress_item open" data-value={98}>
                    <div className="item_in">
                      <h3 className="progress_title">Figma</h3>
                      <span
                        className="progress_percent"
                        style={{ right: "2%" }}
                      >
                        92%
                      </span>
                      <div className="bg_wrap">
                        <div className="progress_bg" style={{ width: "98%" }} />
                      </div>
                    </div>
                  </div>
                  <div className="progress_item open" data-value={95}>
                    <div className="item_in">
                      <h3 className="progress_title">Adobe Photoshop</h3>
                      <span
                        className="progress_percent"
                        style={{ right: "5%" }}
                      >
                        95%
                      </span>
                      <div className="bg_wrap">
                        <div className="progress_bg" style={{ width: "95%" }} />
                      </div>
                    </div>
                  </div>
                  
                </div>

                {/* /Progress Bar */}
                {/* Description */}
                <div className="resumo_fn_desc">
                  <p>
                    A freelance creative designer with a love for minimal
                    design, and clean typography.
                  </p>
                </div>
              </div>
              {/* /#2 tab content */}
            </div>
            {/* /Tab: Content */}
          </div>
          {/* /Tabs Shortcode */}
        </div>
      </div>
    </section>
  );
};

export default About;
