import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Intern Frontend Developer</h4>
                <h4
                  style={{
                    fontWeight: 400,
                  }}
                >
                  Maskcodex
                </h4>
                <h5>August 2021 - October 2021</h5>
              </div>
            </div>
            <p>
              <ul>
                <li>
                  Enhanced foundational skills in HTML, CSS, and JavaScript
                </li>

                <li>
                  Implemented real-world projects with advanced frameworks:
                  VueJS, NuxtJS, and Material UI
                </li>

                <li>Built Backend systems with Firebase and MongoDB</li>

                <li>
                  Transformed Figma designs into Perfect Pixel standard websites
                </li>

                <li>Ensured optimal user experience across all devices</li>
              </ul>
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Fresher Frontend Developer</h4>
                <h4
                  style={{
                    fontWeight: 400,
                  }}
                >
                  Maskcodex
                </h4>
                <h5>October 2021 - January 2022</h5>
              </div>
            </div>
            <p>
              <ul>
                <li>
                  Perfected HTML, CSS, and JavaScript skills for Perfect Pixel
                  standard websites
                </li>

                <li>
                  Expanded knowledge in WordPress and PHP for professional CMS
                  development
                </li>

                <li>
                  Built robust Backend systems with NodeJS, MongoDB, and Docker
                </li>

                <li>Created solid foundations for modern web applications</li>

                <li>Optimized performance and page loading speed</li>
              </ul>
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Freelancer Frontend Developer</h4>{" "}
                <h4
                  style={{
                    fontWeight: 400,
                  }}
                >
                  Startup Company
                </h4>
                <h5>March 2022 - August 2023</h5>
              </div>
            </div>
            <p>
              <ul>
                <li>
                  Specialized in website building with WordPress, PHP, and
                  Elementor
                </li>

                <li>
                  Developed efficient and flexible content management solutions
                </li>

                <li>Created Perfect Pixel interfaces with VueJS and NuxtJS</li>

                <li>Integrated WordPress data into frontend applications</li>

                <li>
                  Used Figma to design websites according to UI/UX standards
                </li>

                <li>
                  Delivered excellent user experiences from design to final
                  product
                </li>
              </ul>
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Junior Frontend Developer</h4>
                <h4
                  style={{
                    fontWeight: 400,
                  }}
                >
                  Gleads VietNam
                </h4>
                <h5>August 2022 - Present</h5>
              </div>
            </div>
            <p>
              <ul>
                <li>
                  Built, managed, and operated CMS with WordPress and PHP on
                  Cpanel
                </li>

                <li>Developed automated data upload systems to AWS</li>

                <li>
                  Built the company's main website using ReactJS and NextJS
                </li>

                <li>Connected data through WordPress GraphQL</li>

                <li>
                  Deployed outsource projects with WordPress, PHP, and Elementor
                </li>

                <li>
                  Ensured quality and consistency according to Perfect Pixel
                  standards
                </li>
              </ul>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
