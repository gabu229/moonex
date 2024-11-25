import React from "react";

interface BackgroundPulseProps {
  width?: string;
  top?: string;
  left?: string;
}

const BackgroundPulse: React.FC<BackgroundPulseProps> = ({
  width = "25vw",
  top = "40%",
  left = "33%",
}) => {
  return (
    <div
      className="absolute transform-gpu overflow-hidden blur-3xl animate-[pulse_5s_ease-in-out_infinite]"
      style={{
        top,
        left,
      }}
      aria-hidden="true"
    >
      <div
        className="relative aspect-square rounded-full opacity-10"
        style={{
          width,
          background:
            "linear-gradient(to top right, var(--gold), var(--gold-light))",
        }}
      ></div>
    </div>
  );
};

export default BackgroundPulse;
