import { useEffect, useState } from "react";
import {Treemap} from "d3plus-react";

function App() {
  const [data, setData] = useState([]);
  const [limit, setLimit] = useState(100);
  const [includePeopleTopics, setIncludePeopleTopics] = useState(false);

  useEffect(() => {
    fetch(`https://www.sefaria.org/api/topics?limit=${limit}`)
      .then((res) => res.json())
      .then((res) => {
        if (res) {
          const filteredData = res
          .filter((topic) => includePeopleTopics || !(topic.subclass && topic.subclass === "person"))
          .map((topic) => ({
            title: topic.primaryTitle?.en, 
            numSources: topic.numSources
          }));
  
          setData(filteredData);
        }
      })
      .catch((err) => console.error(err));
  }, [limit, includePeopleTopics]);

  return (
    <>
        <h1>Sefaria Topics Data-Viz</h1>
        <div className="controls">
          <h4 className="centered">Controls</h4>
          <div>
            <span>Adjust the number of topics queried from the API: </span>
            <input
              type="range"
              min="100"
              max="5000"
              value={limit}
              step="100"
              onChange={(e) => setLimit(Number(e.target.value))}
            />
            <span>{limit}</span>
          </div>
          <div>
            <label>
              <input
                type="checkbox"
                checked={includePeopleTopics}
                onChange={() => setIncludePeopleTopics(!includePeopleTopics)}
              />
              Include People Topics
            </label>
          </div>   
        </div>

        <div className="viz">
          {data.length > 0 ? (
          <Treemap config={{
            data: data,
            groupBy: "title",
            sum: "numSources", 
            height: 400,
            width: 1200,
            shapeConfig: {
              label: d => {
                return [d.title];
              },
            },
            tooltipConfig: {
              tbody: (d) => [
                ["Linked Sources:", d.numSources]
              ]
            },
          }} />
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </>
  );
}

export default App;
