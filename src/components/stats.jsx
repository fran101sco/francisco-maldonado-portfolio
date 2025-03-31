import React, { useState, useEffect } from 'react';
import { stats } from '../Data';
import parse from 'html-react-parser';

const Stats = () => {
  const [errorsFixed, setErrorsFixed] = useState(0);

  useEffect(() => {
    let count = 0;
    const interval = setInterval(() => {
      count += Math.floor(Math.random() * 50);
      if (count > 1999) {
        setErrorsFixed("nan∞");
        clearInterval(interval);
      } else {
        setErrorsFixed(count);
      }
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {stats.map(({ no, title }, index) => {
        return (
          <div className="stats-box" key={index}>
            <h3 className="stats-no">
              {title.includes("Errores solucionados") ? errorsFixed : no}
            </h3>
            <p className="stats-title">{parse(title)}</p>
          </div>
        );
      })}
    </>
  );
};

export default Stats;
