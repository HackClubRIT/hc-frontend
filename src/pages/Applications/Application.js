import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as api from "../../store/fetch";

const Application = () => {
  let [data, dataSet] = useState("");
  const { id } = useParams();

  const fetchResponse = async () => {
    try {
      const res = await api.get(`application/${id}/`);
      dataSet(res.json);
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    fetchResponse();
  });

  return (
    <div key={data.id} className="container">
      <h1 className="heading-secondary rainbow-text ">{data.name}</h1>
      {data && (
        <div className="application">
          <br />
          <div className="paragraph ">
            <p>EMAIL</p>
            <div className="u-textbox">{data.email}</div>

            <p>CONTACT NO</p>
            <div className="u-textbox">{data.data.contactno}</div>

            <p>YEAR</p>
            <div className="u-textbox">{data.data.year}</div>

            <p>DEPT</p>
            <div className="u-textbox">{data.data.dept}</div>

            <p>GITHUB</p>
            <div className="u-textbox">
              <a href={`${data.data.github}`}>{data.data.github}</a>
            </div>

            <p>Q1</p>
            <div className="u-textbox">{data.data.q1}</div>

            <p>Q2</p>
            <div className="u-textbox">{data.data.q2}</div>

            <p>Q3</p>
            <div className="u-textbox">{data.data.q3}</div>

            <p>Q4</p>
            <div className="u-textbox">{data.data.q4}</div>

            <p>STATUS</p>
            <div className="u-textbox">{data.status}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Application;
