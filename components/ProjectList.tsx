"use client";

import { useEffect, useState } from "react";

type Project = {
  _id: string;
  projectName: string;
  startDate?: string;
  endDate?: string;
  description: string;
  deploymentLink?: string;
  githubLink?: string;
};

export default function ProjectList() {
  const [items, setItems] = useState<Project[]>([]);

  useEffect(() => {
    fetch("/api/project")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);

  return (
    <div>
      {items.map((p) => (
        <div key={p._id}>
          <div>{p.projectName}</div>
          <div>{p.description}</div>
          <div>
            {p.startDate} - {p.endDate}
          </div>

          {p.deploymentLink && (
            <div>
              <a href={p.deploymentLink} target="" rel="">
                Deployment
              </a>
            </div>
          )}

          {p.githubLink && (
            <div>
              <a href={p.githubLink} target="" rel="">
                GitHub
              </a>
            </div>
          )}

          <hr />
        </div>
      ))}
    </div>
  );
}
