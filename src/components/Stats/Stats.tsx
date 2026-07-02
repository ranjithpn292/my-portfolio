import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import {
  Label,
  StatCard,
  Number,
  StatsGrid,
  StatsSection,
} from "./Stats.styles";

const stats = [
  {
    value: 4,
    suffix: "+",
    label: "Years Experience",
  },
  {
    value: 15,
    suffix: "+",
    label: "Enterprise Features",
  },
  {
    value: 20,
    suffix: "+",
    label: "Projects",
  },
  {
    value: 100,
    suffix: "+",
    label: "REST APIs",
  },
];

const Stats = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  return (
    <StatsSection ref={ref}>
      <StatsGrid>
        {stats.map((item, index) => (
          <StatCard
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <Number>
              {inView && (
                <CountUp end={item.value} duration={2} suffix={item.suffix} />
              )}
            </Number>

            <Label>{item.label}</Label>
          </StatCard>
        ))}
      </StatsGrid>
    </StatsSection>
  );
};

export default Stats;
