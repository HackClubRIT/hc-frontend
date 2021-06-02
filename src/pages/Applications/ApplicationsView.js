import { useEffect, useState } from "react";
import * as api from "../../store/fetch";

const ApplicationsViewPage = () => {
  let [data, dataSet] = useState("");

  const fetchResponse = async () => {
    try {
      const res = await api.get("application/");
      dataSet(res.json);
    } catch (error) {
      alert(error.response);
    }
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
            <div className="paragraph row">
              <div className="col-1-of-2">
                {info.email}
                <br />
                {info.status}
              </div>
              <div className="col-1-of-2">
                <a
                  href={`/auth/application/${info.id}`}
                  className="btn-text"
                >
                  Edit &rarr;
                </a>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default ApplicationsViewPage;
