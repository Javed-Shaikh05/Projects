import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function Kotak811CaseStudy() {
  return (
    <>
      <Head>
      <title>Clinic Plus × Retail Storefronts | Case Study | PDSN</title>
<meta name="description" content="Clinic Plus drove mom-focused branding with local DOOH in Nashik." />
<meta property="og:title" content="Clinic Plus × Retail Storefronts | Case Study | PDSN" />
<meta property="og:description" content="How Clinic Plus enhanced trust and brand recall through local digital screens." />
<meta property="og:image" content="/images/casestudy-clinicplus.jpg" />
<meta property="og:url" content="https://yourdomain.com/case-studies/clinic-plus" />

      </Head>

      <Header />
      <main className="max-w-5xl mx-auto px-6 py-16 text-gray-800">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">Kotak 811 × Coffee Cafés</h1>
        <Image
          src="/images/casestudy-kotak811.jpg"
          alt="Kotak 811 DOOH Campaign"
          width={1000}
          height={500}
          className="rounded-lg shadow mb-8"
        />
        <p className="mb-4">
          Kotak 811 wanted to promote its digital banking services by connecting with youth in casual, high-footfall areas. We identified 18 high-performing coffee cafés in Pune as DOOH targets.
        </p>
        <p className="mb-4">
          Each outlet displayed motion-led creatives on wall screens featuring a preloaded “811 Points Coffee Card.” Tabletop cards directed customers to scan a QR code and download the app to activate rewards.
        </p>
        <ul className="list-disc list-inside mb-6">
          <li>🟢 37% increase in app downloads from cafés</li>
          <li>🟢 12% engagement rate via QR scan</li>
          <li>🟢 80% of viewers recalled brand message within 2 days</li>
        </ul>
        <p className="font-semibold">Solution: Café-based DOOH + reward-linked storytelling.</p>
      </main>
      <Footer />
    </>
  );
}
