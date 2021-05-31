import { useEffect, useState } from "react";
import getApplications from "./getApplications";

const ApplicationsViewPage = () => {
  let [data, dataSet] = useState("");

  const fetchResponse = async () => {
    dataSet(await getApplications());
  };

  useEffect(() => {
    fetchResponse();
  }, []);

  return (
    <div className="container">
      <h1 className="heading-secondary rainbow-text ">Applications</h1>
      {data &&
        data.map((info) => (
          <div key={info.id} className="application">
            <h3 className="heading-tertiary">{info.name}</h3>
            <p className="paragraph row">
              <div className="col">
                {info.email}
                <br />
                {info.status}
              </div>
              <div className="col">
                <a
                  href={`/profile/application/${info.id}`}
                  className="btn-text"
                >
                  Edit &rarr; 
                </a>
              </div>
            </p>
          </div>
        ))}
    </div>
  );
};

export default ApplicationsViewPage;
