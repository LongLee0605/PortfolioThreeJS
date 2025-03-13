import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);
const WorkData = [
  {
    projectName: "Gleads Viet Nam ",
    time: "August 2022 - March 2023",
    img: "../../images/gleads.png",
    feature: "React Js, NextJS, WordPress, GraphQL, PHP, AWS",
    link: "https://gleads.vn/vi",
  },
  {
    projectName: "BBCIncorp ",
    time: "August 2022 - March 2023",
    img: "../../images/bbc.png",
    feature: "React Js, NextJS, WordPress, GraphQL, PHP, AWS",
    link: "https://bbcincorp.com/hk",
  },
  {
    projectName: "Solid and Soft ",
    time: "2024",
    img: "../../images/sofy.png",
    feature: "Elementor, WordPress, GraphQL, PHP",
    link: "https://solidnsoft.com/vn/home/",
  },
  {
    projectName: "Hexagon ",
    time: "2023",
    img: "../../images/solid.png",
    feature: "Elementor, WordPress, GraphQL, PHP",
    link: "https://hexagon.solidnsoft.com",
  },
  {
    projectName: "Dropbox ",
    time: "2023",
    img: "../../images/dropbox.png",
    feature: "Elementor, WordPress, GraphQL, PHP",
    link: "https://dropbox.solidnsoft.com",
  },
  {
    projectName: "Wonderful Lao ",
    time: "2023",
    img: "../../images/lao.png",
    feature: "Elementor, WordPress, GraphQL, PHP",
    link: "https://wonderfullao.com",
  },
  {
    projectName: "TONA SYNTEGRA SOLAR JSC ",
    time: "2023",
    img: "../../images/solar.png",
    feature: "Elementor, WordPress, GraphQL, PHP",
    link: "https://hogiadinh.tss-solar.com",
  },
  {
    projectName: "Ping pong Duy Hung ",
    time: "2023",
    img: "../../images/duyhung.png",
    feature: "Elementor, WordPress, GraphQL, PHP",
    link: "https://bongbanduyhung.com",
  },
  {
    projectName: "Doctor Long ",
    time: "2024",
    img: "../../images/long.png",
    feature: "Elementor, WordPress, GraphQL, PHP",
    link: "https://bacsilong.com",
  },
];
const Work = () => {
  useGSAP(() => {
    let translateX: number = 0;
    function setTranslateX() {
      const box = document.getElementsByClassName("work-box");
      const rectLeft = document
        .querySelector(".work-container")!
        .getBoundingClientRect().left;
      const rect = box[0].getBoundingClientRect();
      const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
      let padding: number =
        parseInt(window.getComputedStyle(box[0]).padding) / 2;
      translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;
    }

    setTranslateX();

    let timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".work-section",
        start: "top top",
        end: "+=35%",
        scrub: 5,
        pin: true,
        pinType: !ScrollTrigger.isTouch ? "transform" : "fixed",
        id: "work",
        snap: {
          snapTo: 1/(WorkData.length-1),
          duration: { min: 0.2, max: 1 },
          delay: 0.1,
          ease: "power1.inOut"
        }
      },
    });

    timeline.to(".work-flex", {
      x: -translateX,
      duration: 3, 
      ease: "none",
    });
    
    timeline.timeScale(0.1);
  }, []);
  
  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {WorkData.map((item, index) => (
            <a href={item.link} target="_blank" className="work-box" key={index}>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{index + 1}</h3>

                  <div>
                    <h4>{item.projectName}</h4>
                    <p>{item.time}</p>
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p>{item.feature}</p>
              </div>
              <WorkImage image={item.img} alt={item.projectName} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;