import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Copy } from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
  viewport: { once: true },
};

const BANK = {
  name: "Sri Sathya Sai Seva Trust",
  acc: "XXXXXXXXXXXX",
  ifsc: "SBIN000XXXX",
  bank: "State Bank of India",
  branch: "Hyderabad",
  upi: "yourtrust@upi",
};

const ContributePage = () => {
  const [lang, setLang] = useState("en");

  const copy = (text) => {
    navigator.clipboard.writeText(text);
    alert("Copied to clipboard");
  };

  const t = {
    en: {
      title: "Contribute to Our Service Mission",
      desc: "Your contribution supports selfless service inspired by Sri Sathya Sai Baba. Every offering helps us serve the needy with love and dignity.",
      cta: "Contribute Now",
      annadaatha: "Annadaatha Sukhibhava Programme",
      annDesc:
        "Daily meals programme for elderly and differently-abled people.",
      bank: "Bank Account Details",
      copy: "Copy",
    },
    te: {
      title: "సేవా కార్యక్రమానికి మీ సహకారం",
      desc: "శ్రీ సత్యసాయి బాబా బోధనల ఆధారంగా నిర్వహిస్తున్న సేవా కార్యక్రమాలకు మీ సహకారం అవసరం. ప్రతి సహాయం ఒక ఆశగా మారుతుంది.",
      cta: "ఇప్పుడు సహకరించండి",
      annadaatha: "అన్నదాత సుఖీభవ కార్యక్రమం",
      annDesc: "వృద్ధులు మరియు దివ్యాంగుల కోసం నిత్య భోజన సేవ.",
      bank: "బ్యాంక్ ఖాతా వివరాలు",
      copy: "కాపీ",
    },
  };

  return (
    <section className="min-h-screen bg-gray-50 py-14 px-6 md:px-20">
      <div className="max-w-6xl mx-auto">
        {/* HEADER */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <div className="flex justify-between mb-4">
            <Link
              to="/"
              className="text-sm bg-blue-500 text-white px-3 py-1 rounded"
            >
              ← Back
            </Link>

            <button
              onClick={() => setLang(lang === "en" ? "te" : "en")}
              className="text-sm bg-gray-200 px-3 py-1 rounded cursor-pointer"
            >
              {lang === "en" ? "తెలుగు" : "English"}
            </button>
          </div>

          <h1 className="text-3xl font-bold mb-3">{t[lang].title}</h1>
          <p className="text-gray-600 max-w-3xl">{t[lang].desc}</p>
        </motion.div>

        {/* ANNADAATHA */}
        <motion.div {...fadeUp} className=" rounded-xl mt-12">
          <h2 className="text-2xl font-semibold mb-2">{t[lang].annadaatha}</h2>
          <p className="text-gray-600 mb-6">{t[lang].annDesc}</p>

          <table className="w-full border">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-3 border">Duration</th>
                <th className="p-3 border">Cost (₹)</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["1 Day", "3,500"],
                ["5 Days", "17,500"],
                ["10 Days", "35,000"],
                ["30 Days", "1,05,000"],
              ].map(([d, c]) => (
                <tr key={d}>
                  <td className="p-3 border">{d}</td>
                  <td className="p-3 border">₹{c}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        {/* BANK DETAILS */}

        {/* <motion.div {...fadeUp} className="bg-white rounded-xl mt-12">
          <h2 className="text-2xl font-semibold mb-6">{t[lang].bank}</h2>

          {[
            ["Account Name", BANK.name],
            ["Account Number", BANK.acc],
            ["IFSC Code", BANK.ifsc],
            ["UPI ID", BANK.upi],
          ].map(([label, value]) => (
            <div key={label} className="flex gap-3 items-center mb-3 ">
              <span>
                <strong>{label}:</strong> {value}
              </span>
              <Copy
              size={20}
              color="black"
                onClick={() => copy(value)}
                className="text-smpx-3 py-1 rounded cursor-pointer"
              >
                {t[lang].copy}
              </Copy>
            </div>
          ))}

           QR 
          <div className="mt-6">
            <p className="font-semibold mb-2">UPI QR Code</p>
            <img
              src="/images/upi-qr-placeholder.png"
              alt="UPI QR"
              className="w-40 h-40 border rounded"
            />
          </div>
        </motion.div> */}

        {/* BANK DETAILS */}
        <motion.div {...fadeUp} className=" mt-12">
          <h2 className="text-2xl font-semibold mb-6">{t[lang].bank}</h2>

          <div className="overflow-x-auto">
            <table className="w-full border border-gray-200 rounded-lg overflow-hidden">
              <tbody>
                {[
                  ["Account Name", BANK.name],
                  ["Account Number", BANK.acc],
                  ["IFSC Code", BANK.ifsc],
                  ["UPI ID", BANK.upi],
                ].map(([label, value]) => (
                  <tr
                    key={label}
                    className=" hover:bg-gray-50"
                  >
                    <td className="py-3 font-medium text-gray-700 w-1/3">
                      {label}
                    </td>
                    <td className="py-3 pl-2 text-gray-800 break-all flex gap-2 items-center">{value}
                   
                      <Copy
                        size={18}
                        className="cursor-pointer text-gray-600 hover:text-blue-600"
                        onClick={() => copy(value)}
                        title={`Copy ${label}`}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* QR CODE */}
          <div className="mt-6">
            <p className="font-semibold mb-2">UPI QR Code</p>
            <img
              src="/images/upi-qr-placeholder.png"
              alt="UPI QR"
              className="w-40 h-40 border rounded"
            />
          </div>
        </motion.div>
      </div>

      {/* WHATSAPP BUTTON */}
      <a
        href="https://wa.me/919849286800"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white px-5 py-3 rounded-full shadow-lg cursor-pointer"
      >
        WhatsApp Us
      </a>
    </section>
  );
};

export default ContributePage;
