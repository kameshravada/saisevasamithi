import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
  viewport: { once: true },
};

const AboutPage = () => {
  return (
    <section className="min-h-screen bg-gray-50 py-14 px-6 md:px-20">
      <div className="max-w-6xl mx-auto">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 px-6"
        >
          <div className="flex justify-end mb-4">
            <Link
              to={"/"}
              className="text-white text-sm bg-blue-500/70 px-3 py-1 rounded cursor-pointer"
            >
              ← Back
            </Link>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            About Our Service Mission
          </h1>

          <p className="text-gray-600 max-w-3xl">
            Our service journey is rooted in love, selflessness, and the
            spiritual values of service to humanity. We believe that true
            service is worship and compassion is the highest form of devotion.
          </p>
        </motion.div>

        {/* INSPIRATION */}
        <motion.div
          {...fadeUp}
          className="bg-white p-8 rounded-xl shadow-sm mb-12 "
        >
          <h1 className="text-2xl font-semibold mb-6">
            Our Inspiration & Guiding Path
          </h1>

          <div className="grid md:grid-cols-2 gap-10 items-center ">
            {/* TEXT */}
            <div>
              <p className="text-gray-600 leading-relaxed">
                Our work is inspired by the teachings and ideals of Sri Sathya
                Sai Baba, who emphasized love, selfless service, and unity of
                all mankind. Following this sacred path, we believe that serving
                society without expectation is the highest form of spiritual
                practice.
              </p>

              <p className="text-gray-600 leading-relaxed mt-4">
                Every initiative we undertake is driven by the principle of
                uplifting rural communities and empowering individuals to live
                with dignity, health, education, and hope.
              </p>
            </div>

            {/* IMAGE */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex justify-center"
            >
              <img
                src="/images/sai-img.jpg"
                alt="Sri Sathya Sai Baba"
                className="rounded-xl shadow-md object-cover"
              />
            </motion.div>
          </div>
        </motion.div>

        {/* FOUNDER */}
        <motion.div
          {...fadeUp}
          className="bg-white p-8 rounded-xl shadow-sm mb-12"
        >
          <h2 className="text-2xl font-semibold mb-4">Founder & Vision</h2>

          <p className="text-gray-600 leading-relaxed">
            This service mission is led by{" "}
            <strong>Mr. Rawada Sashibhooshan</strong>, a devoted follower of Sri
            Sathya Sai Baba, residing in Hyderabad. Inspired by the path of
            selfless service, he has dedicated his life to improving the living
            conditions of underprivileged and rural communities.
          </p>

          <p className="text-gray-600 leading-relaxed mt-3">
            Under his guidance, several villages have been adopted, focusing on
            holistic development that addresses education, health, sanitation,
            and social well-being.
          </p>
        </motion.div>

        {/* WHAT WE DO */}
        <motion.div {...fadeUp} className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">What We Do</h2>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Village Adoption & Development",
                desc: "Adopting villages to ensure sustainable development through infrastructure improvements, sanitation facilities, clean drinking water, and community support.",
              },
              {
                title: "Education Support",
                desc: "Providing free school bags, stationery, tuition programs, Bala Vikas classes, cultural activities, and inspiration to help students grow academically and morally.",
              },
              {
                title: "Water & Sanitation",
                desc: "Installation of RO water plants, sanitation improvements, and hygiene awareness to promote healthy living conditions.",
              },
              {
                title: "Healthcare Services",
                desc: "Organizing medical camps, veterinary medical camps, free distribution of medicines, and financial support for critical surgeries.",
              },
              {
                title: "Cultural & Value-Based Programs",
                desc: "Encouraging cultural activities, moral education, and spiritual values to nurture character and social harmony.",
              },
              {
                title: "Tribal Village Support",
                desc: "Extending services to tribal villages by addressing basic needs, healthcare access, education, and long-term development.",
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-sm"
              >
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* OUR APPROACH */}
        <motion.div
          {...fadeUp}
          className="bg-white p-8 rounded-xl shadow-sm mb-12"
        >
          <h2 className="text-2xl font-semibold mb-4">Our Approach</h2>

          <p className="text-gray-600 leading-relaxed">
            We believe in hands-on involvement, long-term commitment, and
            community participation. Our approach is not limited to short-term
            aid but focuses on empowering villages to become self-reliant and
            resilient.
          </p>

          <p className="text-gray-600 leading-relaxed mt-3">
            Every service activity is carried out with transparency, humility,
            and respect for the people we serve.
          </p>
        </motion.div>

        {/* COMMITMENT */}
        <motion.div {...fadeUp} className="bg-blue-50 p-8 rounded-xl">
          <h2 className="text-2xl font-semibold mb-4">Our Commitment</h2>

          <p className="text-gray-700 leading-relaxed">
            Guided by love and service, we remain committed to continuing this
            mission for the welfare of society. Our goal is to touch lives,
            inspire hope, and contribute to a compassionate and inclusive world.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutPage;
