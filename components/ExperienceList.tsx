"use client";

import { useEffect, useState } from "react";

type Experience = {
  _id: string;
  company: string;
  title: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
};

export default function ExperienceList() {
  const [items, setItems] = useState<Experience[]>([]);

  useEffect(() => {
    fetch("/api/experience")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);

  return (
    <div>
      {items.map((e) => (
        <div key={e._id}>
          <div>{e.company}</div>
          <div>{e.title}</div>
          <div>{e.location}</div>
          <div>
            {e.startDate} - {e.endDate}
          </div>
          <div>{e.description}</div>
          <hr />
        </div>
      ))}
    </div>
  );
}
