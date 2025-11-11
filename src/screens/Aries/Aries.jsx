import React from "react";

export const Aries = () => {
  const content = {
    title: "Aries",
    subtitle: "The Self-Initiator",
    description: [
      {
        label: 'Core Drive: "I Am."',
        text: "The need to initiate, act, and prove self-existence through direct, independent effort.",
      },
      {
        label: "Detailed Positive:",
        text: "They are pioneers and leaders, full of dynamic courage and enthusiasm. They are often incredibly direct, honest, and have a simple, straightforward view of the world. They inspire others by being unafraid to start new ventures.",
      },
      {
        label: "Detailed Negative (Shadow):",
        text: "Their focus on the self can make them appear selfish or unaware of others' needs. Their speed often leads to impatience, temper outbursts, and a tendency to abandon projects once the initial excitement wanes. They struggle with subtlety and compromise.",
      },
    ],
  };

  return (
    <article
      className="relative w-[1685px] h-[849px] bg-black rounded-[70px] overflow-hidden"
      data-model-id="37:157"
      aria-labelledby="aries-title"
    >
      <img
        className="absolute top-0 left-0 w-[1685px] h-[849px] aspect-[1.94]"
        alt="Beautiful starry constellation background"
        src="https://c.animaapp.com/KENBSkAV/img/beautiful-constellations-planet-1.png"
        role="presentation"
      />

      <div
        className="absolute top-[53px] left-[840px] w-[776px] h-[733px] bg-[#00968f] rounded-[0px_87px_87px_0px]"
        aria-hidden="true"
      />

      <h1
        id="aries-title"
        className="absolute top-[55px] left-0 w-[342px] [font-family:'Marcellus_SC',Helvetica] font-normal text-white text-8xl text-center tracking-[0] leading-[normal] whitespace-nowrap"
      >
        {content.title}
      </h1>

      <img
        className="absolute top-[172px] left-[329px] w-[227px] h-[184px] aspect-[1.24] object-cover"
        alt="Aries zodiac symbol"
        src="https://c.animaapp.com/KENBSkAV/img/10-1@2x.png"
      />

      <img
        className="absolute top-60 left-[127px] w-[716px] h-[609px] aspect-[1.14]"
        alt="Aries constellation diagram"
        src="https://c.animaapp.com/KENBSkAV/img/69130187-616d-4157-9dc9-1afcabc1b612-1.png"
      />

      <section
        className="absolute top-[110px] left-[886px] w-[692px] [font-family:'Judson',Helvetica] font-normal italic text-black text-[32px] tracking-[0] leading-[normal]"
        aria-labelledby="aries-subtitle"
      >
        <h2 id="aries-subtitle" className="sr-only">
          {content.subtitle}
        </h2>
        <p>
          <strong>{content.subtitle}</strong>
        </p>
        {content.description.map((item, index) => (
          <p key={index}>
            <strong>{item.label}</strong> {item.text}
          </p>
        ))}
      </section>
    </article>
  );
};
