import { motion } from "framer-motion";

const WhatWeDoCards = ({ services }) => {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {services.map((service, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.05 }}
          viewport={{ once: true }}
          className="bg-white rounded-xl shadow-sm hover:shadow-md transition p-6"
        >
          {/* ICON */}
          {service.icon && (
            <div className="mb-4 h-14 w-14">
              <img
                src={service.icon}
                alt={service.title}
                className="h-full w-full object-contain"
                loading="lazy"
              />
            </div>
          )}

          {/* TITLE */}
          <h3 className="text-lg font-semibold mb-2">{service.title}</h3>

          {/* DESCRIPTION */}
          <p className="text-sm text-gray-600 leading-relaxed">
            {service.description}
          </p>
          <button>
            {service.url && (
              <a
                href={service.url}
                className="mt-4 inline-block text-blue-600 hover:text-blue-800 font-medium"
              >
                Click here to Donate
              </a>
            )}
          </button>
        </motion.div>
      ))}
    </div>
  );
};

export default WhatWeDoCards;
