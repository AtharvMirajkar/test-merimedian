import React, { useEffect } from "react";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faGraduationCap,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import Title from "./Title";

const HistoryTimeLine = () => {
  useEffect(() => {
    document.title = "History - Merimedian";
  }, []);
  return (
    <>
      <Title text="History" />

      <div className="container mb-5">
        <div className="row justify-content-center">
          <div className="col-md-12">
            <VerticalTimeline lineColor={"#7f7a7a"}>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date={<span style={{ color: "black" }}>2011 - present</span>}
                contentStyle={{
                  background: "rgb(33, 150, 243)",
                  color: "#fff",
                }}
                contentArrowStyle={{
                  borderRight: "7px solid  rgb(33, 150, 243)",
                }}
                iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
                icon={<FontAwesomeIcon icon={faBriefcase} />}
              >
                <h3 className="vertical-timeline-element-title h4">
                  Creative Director
                </h3>
                <h4 className="vertical-timeline-element-subtitle h5">
                  Miami, FL
                </h4>
                <p>
                  Creative Direction, User Experience, Visual Design, Project
                  Management, Team Leading
                </p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentArrowStyle={{
                  borderRight: "7px solid  rgb(233, 30, 99)",
                }}
                date="2010 - 2011"
                iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
                icon={<FontAwesomeIcon icon={faBriefcase} />}
              >
                <h3 className="vertical-timeline-element-title h4">
                  Art Director
                </h3>
                <h4 className="vertical-timeline-element-subtitle h5">
                  San Francisco, CA
                </h4>
                <p>
                  Creative Direction, User Experience, Visual Design, SEO,
                  Online Marketing
                </p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentArrowStyle={{
                  borderRight: "7px solid  rgb(233, 30, 99)",
                }}
                date="2008 - 2010"
                iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
                icon={<FontAwesomeIcon icon={faBriefcase} />}
              >
                <h3 className="vertical-timeline-element-title h4">
                  Web Designer
                </h3>
                <h4 className="vertical-timeline-element-subtitle h5">
                  Los Angeles, CA
                </h4>
                <p>User Experience, Visual Design</p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentArrowStyle={{
                  borderRight: "7px solid  rgb(233, 30, 99)",
                }}
                date="2006 - 2008"
                iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
                icon={<FontAwesomeIcon icon={faBriefcase} />}
              >
                <h3 className="vertical-timeline-element-title h4">
                  Web Designer
                </h3>
                <h4 className="vertical-timeline-element-subtitle h5">
                  San Francisco, CA
                </h4>
                <p>User Experience, Visual Design</p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--education"
                contentArrowStyle={{
                  borderRight: "7px solid  rgb(233, 30, 99)",
                }}
                date="April 2013"
                iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
                icon={<FontAwesomeIcon icon={faGraduationCap} />}
              >
                <h3 className="vertical-timeline-element-title h4">
                  Content Marketing for Web, Mobile and Social Media
                </h3>
                <h4 className="vertical-timeline-element-subtitle h5">
                  Online Course
                </h4>
                <p>Strategy, Social Media</p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--education"
                contentArrowStyle={{
                  borderRight: "7px solid  rgb(233, 30, 99)",
                }}
                date="November 2012"
                iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
                icon={<FontAwesomeIcon icon={faGraduationCap} />}
              >
                <h3 className="vertical-timeline-element-title h4">
                  Agile Development Scrum Master
                </h3>
                <h4 className="vertical-timeline-element-subtitle h5">
                  Certification
                </h4>
                <p>Creative Direction, User Experience, Visual Design</p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--education"
                contentArrowStyle={{
                  borderRight: "7px solid  rgb(233, 30, 99)",
                }}
                date="2002 - 2006"
                iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
                icon={<FontAwesomeIcon icon={faGraduationCap} />}
              >
                <h3 className="vertical-timeline-element-title h4">
                  Bachelor of Science in Interactive Digital Media Visual
                  Imaging
                </h3>
                <h4 className="vertical-timeline-element-subtitle h5">
                  Bachelor Degree
                </h4>
                <p>Creative Direction, Visual Design</p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
                icon={<FontAwesomeIcon icon={faStar} />}
              />
            </VerticalTimeline>
          </div>
        </div>
      </div>
    </>
  );
};

export default HistoryTimeLine;
