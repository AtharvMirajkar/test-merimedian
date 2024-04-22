import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSmile,
  faCheckSquare,
  faBox,
  faCube,
} from "@fortawesome/free-solid-svg-icons";

const Counter = () => {
  const [counts, setCounts] = useState([
    {
      label: "Happy Clients",
      count: 0,
      target: 450,
      speed: 450,
      icon: faSmile,
    },
    {
      label: "Project Completed",
      count: 0,
      target: 150,
      speed: 150,
      icon: faCheckSquare,
    },
    { label: "Brands", count: 0, target: 300, speed: 300, icon: faBox },
    { label: "Products", count: 0, target: 50, speed: 50, icon: faCube },
  ]);

  useEffect(() => {
    const timers = counts.map((item, index) => {
      const step = Math.ceil(item.target / item.speed);
      return setInterval(() => {
        setCounts((prevCounts) => {
          if (prevCounts[index].count + step >= item.target) {
            clearInterval(timers[index]);
          }
          return prevCounts.map((count, i) => {
            if (i === index) {
              return {
                ...count,
                count: Math.min(count.count + step, item.target),
              };
            }
            return count;
          });
        });
      }, 1);
    });
    return () => {
      timers.forEach((timer) => clearInterval(timer));
    };
  }, [counts]);

  return (
    <div className="counter mt-4 bg-primary text-white d-flex flex-wrap">
      {/* Added flex-wrap class */}
      {counts.map((item, index) => (
        <div className="col-6 col-lg-3 mb-4 mt-4" key={index}>
          <div className="count-data text-center">
            <h6 className="count h2" data-to={item.target}>
              {item.count}
            </h6>
            <p className="m-0px font-w-600">{item.label}</p>
            <FontAwesomeIcon icon={item.icon} size="2x" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Counter;
