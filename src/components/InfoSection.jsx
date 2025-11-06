import React from "react";
import { MapPin, Clock, Calendar } from "lucide-react";
import "./InfoSection.css";

const InfoSection = () => {
  const infos = [
    {
      icon: <MapPin size={28} className="info-icon" />,
      title: "Find Us",
      text: (
        <>
          1234 Innovation Drive <br />
          Suite 567 Cityville, State <br />
          89012 Country
        </>
      ),
    },
    {
      icon: <Clock size={28} className="info-icon" />,
      title: "Open Hours",
      text: (
        <>
          Mon To Fri <br />
          9:00 AM - 9:00 PM <br />
          Sat 9:00 AM - 10 PM
        </>
      ),
    },
    {
      icon: <Calendar size={28} className="info-icon" />,
      title: "Reservation",
      text: (
        <>
          +1 (800) 555-1234, <br />
          abc@zealtaste.com
        </>
      ),
    },
  ];

  return (
    <section className="info-section">
      {infos.map((info, i) => (
        <div key={i} className="info-card fade-in-up" style={{ animationDelay: `${i * 0.2}s` }}>
          <div className="icon-circle pulse">{info.icon}</div>
          <h4>{info.title}</h4>
          <p>{info.text}</p>
        </div>
      ))}
    </section>
  );
};

export default InfoSection;
