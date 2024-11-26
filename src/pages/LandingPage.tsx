import ComparisonTable from "@/components/ComparisonTable";
import { Button } from "@/components/ui/button";
import { ComparisonPoint } from "@/lib/types";
import comparisonData from "@/data/comparisons.json";
import featuresData from "@/data/features.json";
import faqData from "@/data/faqs.json";
import FeatureCard from "@/components/FeatureCard";
import { FAQAccordion } from "@/components/FAQAccordion";
import BackgroundPulse from "@/components/BackgroundPulse";
import AnimatedText from "@/components/AnimatedText";

const data: ComparisonPoint[] = comparisonData;

function LandingPage() {
  return (
    <main className="w-full" id="top">
      <div className="w-full bg-[url('/circles.svg')] bg-no-repeat bg-cover">
        <section className="relative w-full min-h-[50vh] md:min-h-[135vh] py-20 flex flex-col md:flex-row items-start">
          <BackgroundPulse top="0" left="0" />
          <BackgroundPulse top="30%" left="60%" width="40vw" />

          <div className="w-full min-h-[90vh] flex-[2] flex items-center">
            <div className="relative w-full">
              <img
                src="/star-img.svg"
                className="absolute w-10 h-auto left-14 -top-28 animate-[pulse_4s_ease-in-out_infinite]"
              />

              <div className="w-full max-w-[800px]">
                <h1 className="text-4xl md:text-6xl font-bold">
                  Trusted Multi-Chain{" "}
                  <span className="text-[var(--gold)]">DEX</span> Platform
                </h1>
                <p className="text-base md:text-lg my-5 font-light text-gray-300 c-font">
                  <AnimatedText text="Trade, earn, and own crypto on the all-in-one multi-chain DEX" />
                </p>
              </div>
              <div className="w-full text-center sm:text-start flex flex-col sm:flex-row gap-2 sm:gap-5 mt-10">
                <Button size={"lg"}>Connect wallet</Button>
                <Button size={"lg"} variant={"outline"}>
                  Trade crypto
                </Button>
              </div>
            </div>
          </div>
          <div className="w-full md:min-h-[90vh] flex-1 flex justify-end items-center">
            <div className="relative w-full min-h-[1vh]">
              <img
                src="/star-img-ex.svg"
                className="absolute w-10 h-auto left-[25%] -top-28 animate-[pulse_3s_ease-in-out_infinite]"
              />

              <div className="w-8/12 bg-gradient-to-tl hidden md:block from-[var(--gold)] to-80% to-[var(--gold-light)] aspect-square rounded-full"></div>

              <img
                src="/star-img.svg"
                className="absolute w-10 h-auto left-[25%] -bottom-28 hidden md:block animate-[pulse_4s_ease-in-out_infinite]"
              />
            </div>
          </div>
        </section>
      </div>

      <section className="w-full min-h-svh mb-14">
        <div className="w-full mb-10 px-5 md:px-10">
          <h2 className="text-3xl md:text-4xl font-bold">
            Why <span className="text-[var(--gold)]">Moonex</span> ?
          </h2>
        </div>
        <div className="w-full relative mb-20">
          <BackgroundPulse />

          <div className="w-full bg-white/5 p-2 md:p-10 rounded-xl backdrop-blur-md">
            <ComparisonTable data={data} />
          </div>
        </div>

        <div className="w-full mb-10 px-5 md:px-10">
          <h2 className="text-3xl md:text-4xl font-bold md:text-center">
            Our <span className="text-[var(--gold)]">Features</span>
          </h2>
        </div>

        <div className="relative w-full grid sm:grid-cols-2 xl:grid-cols-4 gap-5 md:gap-10 xl:gap-14">
          {featuresData.map((feature, i) => (
            <FeatureCard key={i} feature={feature} />
          ))}
        </div>
      </section>

      <section className="relative w-full min-h-svh flex items-center justify-center">
        <BackgroundPulse top="0" left="80%" />
        <BackgroundPulse top="50%" left="-5%" />

        <div className="w-full max-w-screen-lg bg-white/5 py-5 md:py-10 rounded-xl backdrop-blur-md min-h-[60svh]">
          <h3 className="text-3xl md:text-4xl font-bold text-center">
            <span className="text-[var(--gold)]">FAQs</span>
          </h3>
          <div className="w-full my-5 md:my-10">
            <FAQAccordion data={faqData} />
          </div>
        </div>
      </section>
    </main>
  );
}

export default LandingPage;
