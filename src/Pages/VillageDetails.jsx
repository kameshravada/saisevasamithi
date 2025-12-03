import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";

const VillageDetails = () => {
  const { id } = useParams();
  const [village, setVillage] = useState(null);

  useEffect(() => {
    fetch("/src/data/villages.json")
      .then(r => r.json())
      .then(list => {
        const found = (list || []).find(v => v.id === id);
        setVillage(found || null);
      }).catch(e => console.error(e));
  }, [id]);

  if (!village) {
    return <div className="min-h-screen flex items-center justify-center p-8"><p>Loading...</p></div>;
  }

  const years = (village["year-events"] || []).map(y => y.year).sort((a,b)=> b - a);

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 md:px-20">
      <div className="max-w-5xl mx-auto bg-white p-6 rounded-xl shadow">
        <div className="flex items-start justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold">{village.villagename}</h1>
            <p className="text-gray-600 mt-2">{village.description}</p>
            <div className="mt-4">
              <h4 className="font-semibold">Photos</h4>
              <div className="grid gap-2 grid-cols-2 md:grid-cols-3 mt-2">
                {(village.photos||[]).map((p,i)=>(
                  <img key={i} src={p} alt={`${village.villagename} ${i+1}`} className="w-full h-36 object-cover rounded-md" />
                ))}
              </div>
            </div>

            <div className="mt-6">
              <h4 className="font-semibold">Daily & Regular Events</h4>
              <div className="mt-2 space-y-4">
                {(village["daily-events"]||[]).map((d, i)=>(
                  <motion.div key={i} initial={{opacity:0,y:6}} animate={{opacity:1,y:0}} className="p-4 bg-gray-50 rounded-md">
                    <h5 className="font-semibold">{d.event}</h5>
                    <p className="text-sm text-gray-700">{d.description}</p>
                    <div className="mt-2 grid grid-cols-2 gap-2">
                      {(d.photos||[]).map((pp,j)=>(<img key={j} src={pp} alt="" className="w-full h-28 object-cover rounded" />))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="mt-6">
              <h4 className="font-semibold">Development Events</h4>
              <div className="mt-2 space-y-4">
                {(village["development-events"]||[]).map((dev,i)=>(
                  <div key={i} className="p-4 bg-gray-50 rounded-md">
                    <h5 className="font-semibold">{dev["event-name"]} — <span className="text-sm text-gray-500">{dev.year}</span></h5>
                    <p className="text-sm text-gray-700">{dev.description}</p>
                    <div className="mt-2 grid grid-cols-2 gap-2">
                      {(dev.photos||[]).map((pp,j)=>(<img key={j} src={pp} alt="" className="w-full h-28 object-cover rounded" />))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="ml-6 w-44 hidden md:block">
            <Link to="/villages" className="text-sm text-blue-600 underline">Back to villages</Link>
            <div className="mt-6">
              <h6 className="font-semibold">Quick links</h6>
              <ul className="text-sm text-gray-600 mt-2 space-y-2">
                <li><a href="#daily" className="underline">Daily Events</a></li>
                <li><a href="#development" className="underline">Development</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-6">
          <h3 className="text-lg font-semibold">Year-wise Events</h3>
          <div className="mt-2 space-y-4">
            {(village["year-events"]||[]).sort((a,b)=> b.year - a.year).map((y,i)=>(
              <div key={i} className="p-4 bg-white rounded-md shadow-sm">
                <h4 className="font-semibold">{y.year}</h4>
                <ul className="list-disc ml-5 mt-2 text-gray-700">
                  {(y.events||[]).map((ev,ii)=>(
                    <li key={ii} className="mb-2">
                      <div className="font-medium">{ev.name}</div>
                      <div className="text-sm text-gray-700">{ev.description}</div>
                      <div className="mt-2 grid grid-cols-2 gap-2">
                        {(ev.photos||[]).map((pp,j)=>(<img key={j} src={pp} className="w-full h-28 object-cover rounded" alt="" />))}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default VillageDetails;
