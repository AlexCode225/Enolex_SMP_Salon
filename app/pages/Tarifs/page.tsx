
import GetQuote from "@/components/GetQuote";
import { ButtonTop } from "@/components/store/ButtonTop";
import Footer from "@/components/Footer";

export default function Tarifs() {
  const tarifs = [
    {
      title: "Norwood 1",
      sessions: "2-3 Sessions recommended",
      description: "Minor recessions, small thinning spots.",
      perSession: "R1,500 – R3,600",
      allSessions: "R3,000 – R9,000",
      imageBefore: "/images/norwood1-before.jpg",
      imageAfter: "/images/norwood1-after.jpg",
    },
    {
      title: "Norwood 2",
      sessions: "3 Sessions recommended",
      description: "Noticeable recession at temples.",
      perSession: "R3,600 – R4,600",
      allSessions: "R9,000 – R12,000",
      imageBefore: "/images/norwood2-before.jpg",
      imageAfter: "/images/norwood2-after.jpg",
    },
    // ...repeat for Norwood 3–7
  ];

  return (
    <div className="min-h-screen bg-gray-200 text-black p-6">
     <GetQuote/>
      <h1 className="text-4xl font-bold text-center mb-10">Nos Tarifs</h1>

      <p className="text-center max-w-2xl mx-auto mb-6">
        Transparent Pricing — Determine your Norwood scale to estimate your treatment cost.
      </p>
      <p className="text-sm text-gray-600 text-center mb-10">
        Disclaimer: Pricing listed below is a rough indication only. Final pricing is quoted individually for each client based on their specific needs, current level of hair loss, and hair density.
      </p>

      <div className="space-y-12">
        {tarifs.map((item, idx) => (
          <div
            key={idx}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
          >
            {/* Images */}
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <img
                src={item.imageBefore}
                alt={`${item.title} before`}
                className="w-full md:w-1/2 rounded-lg shadow"
              />
              <img
                src={item.imageAfter}
                alt={`${item.title} after`}
                className="w-full md:w-1/2 rounded-lg shadow"
              />
            </div>

            {/* Pricing Info */}
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">{item.title}</h2>
              <p className="text-gray-700">{item.sessions}</p>
              <p className="text-gray-600">{item.description}</p>
              <div className="bg-gray-100 p-4 rounded-lg">
                <p className="font-medium">Estimated Per Session: {item.perSession}</p>
                <p className="font-medium">Estimated All Sessions: {item.allSessions}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <button className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition">
          Book a Consultation
        </button>
      </div>
      <div>
        <Footer/>
       <ButtonTop/>
      </div>
    </div>
  );
}
