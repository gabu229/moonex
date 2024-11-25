import {
  DollarSign,
  PhoneOff,
  ShieldCheck,
  SlidersHorizontal,
} from "lucide-react";

const iconMap: Record<string, JSX.Element> = {
  sliders: <SlidersHorizontal className="" size={30} />,
  phone: <PhoneOff className="" size={30} />,
  currency: <DollarSign className="" size={30} />,
  shield: <ShieldCheck className="" size={30} />,
};

export default iconMap;
