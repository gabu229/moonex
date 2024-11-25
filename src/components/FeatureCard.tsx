import { Feature } from "@/lib/types";
import iconMap from "./FeatureIcons.map";

interface FeatureProp {
  feature: Feature;
}

function FeatureCard({ feature }: FeatureProp) {
  return (
    <div className="w-full bg-white/5 p-5 md:p-10 rounded-3xl border-white/10 border font-raleway">
      <div className="w-full mb-5">
        <div className="max-w-14 bg-white/10 p-2 aspect-square rounded-full flex justify-center items-center">
          {iconMap[feature.icon] || <span>?</span>}{" "}
        </div>
      </div>
      <div className="w-full font-raleway">
        <p className="text-lg font-semibold line-clamp-1">{feature.title}</p>
        <p className="mt-2 text-base text-gray-300 font-light line-clamp-3">{feature.description}</p>
      </div>
    </div>
  );
}

export default FeatureCard;
