import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const ActivityDetails = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/src/data/activities.json")
      .then(r => r.json())
      .then(d => {
        const found = (d.activities || []).find(x => x.id === id);
        setData(found || null);
      }).catch(e => console.error(e));
  }, [id]);

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center p-8">
        <div className="max-w-3xl">
          <p className="text-gray-600">Loading activity details...</p>
          <div className="mt-4"><Link to="/" className="text-blue-600 underline">Back to Home</Link></div>
        </div>
      </div>
    );
  }

  // order years descending
  const years = Object.keys(data.years || {}).sort((a,b)=> b - a);

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 md:px-20">
      <div className="max-w-5xl mx-auto bg-white p-8 rounded-xl shadow">
        <div className="flex items-start justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold">{data.title}</h1>
            <p className="text-gray-600 mt-2">{data.description}</p>
            {data.villages && data.villages.length > 0 && (
              <div className="mt-4">
                <h4 className="font-semibold">Villages we serve:</h4>
                <ul className="list-disc ml-5 text-gray-700">
                  {data.villages.map(v => <li key={v}>{v}</li>)}
                </ul>
              </div>
            )}
            {data.adoptedVillages && data.adoptedVillages.length > 0 && (
              <div className="mt-4">
                <h4 className="font-semibold">Adopted villages:</h4>
                <ul className="list-disc ml-5 text-gray-700">
                  {data.adoptedVillages.map(v => <li key={v}>{v}</li>)}
                </ul>
              </div>
            )}
            {data.otherServices && (
              <div className="mt-4">
                <h4 className="font-semibold">Other services:</h4>
                <ul className="list-disc ml-5 text-gray-700">
                  {data.otherServices.map(s => <li key={s}>{s}</li>)}
                </ul>
              </div>
            )}
          </div>
          <div className="text-sm">
            <Link to="/" className="text-blue-600 underline">Back to home</Link>
          </div>
        </div>

        <div>
          {years.map(y => (
            <div key={y} className="mb-6">
              <h3 className="text-lg font-semibold">{y}</h3>
              <ul className="list-disc ml-5 mt-2 space-y-1 text-gray-700">
                {(data.years[y]||[]).map((ev, i) => <li key={i}>{ev}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ActivityDetails;
