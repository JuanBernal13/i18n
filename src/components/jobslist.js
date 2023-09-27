import React, { useState } from "react";
import Job from "./job";
import { FormattedMessage } from 'react-intl';
import './jobslist.css';
const JobsList = () => {
  const [offers] = useState([
    {
      id: "0001",
      name: "Manager",
      company: "Schneider Electric",
      salary: 4.5,
      city: "Bogotá, Colombia",
      date: "2019-03-26",
      views: 1250
    },
    {
      id: "0002",
      name: "Software Engineer",
      company: "Google Inc.",
      salary: 20,
      city: "Palo Alto, CA, USA",
      date: "2019-03-27",
      views: 1250
    },
    {
      id: "0003",
      name: "Nurse",
      company: "Clínica La Aurora",
      salary: 1,
      city: "Cali, Colombia",
      date: "2019-03-28",
      views: 1250
    },
  ]);

  return (
    <div>
      <table className="table">
        <thead>
          <FormattedMessage id="tableHeaderClass">
            {tableHeaderClass => (
              <tr className={tableHeaderClass}>
                <th scope="col">
                  <FormattedMessage id="Number" defaultMessage="#" />
                </th>
                <th scope="col">
                  <FormattedMessage id="Position" defaultMessage="Position" />
                </th>
                <th scope="col">
                  <FormattedMessage id="Company" defaultMessage="Company" />
                </th>
                <th scope="col">
                  <FormattedMessage id="Salary" defaultMessage="Salary" />
                </th>
                <th scope="col">
                  <FormattedMessage id="City" defaultMessage="City" />
                </th>
                <th scope="col">
                  <FormattedMessage id="PublicationDate" defaultMessage="Publication Date" />
                </th>
                <th scope="col">
                  <FormattedMessage id="Views" defaultMessage="Views" />
                </th>
              </tr>
            )}
          </FormattedMessage>
        </thead>
        <tbody>
          {offers.map((offer, i) => (
            <Job key={i} offer={offer} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default JobsList;