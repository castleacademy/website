const EllipseLayer = ({
  className,
  scale = "100%",
  blur = false,
  delay = 0,
}: {
  className?: string;
  scale?: string;
  blur?: boolean;
  delay?: number;
  style?: React.CSSProperties;
}) => (
  <div
    // initial={{ y: 50, opacity: 0 }}
    // whileInView={{ opacity: 0.5, y: 0 }}
    // viewport={{ once: false, amount: 0.3 }}
    // transition={{
    //     duration: 1,
    //     delay,
    //     ease: 'easeOut',
    // }}
    className={`absolute left-1/2 aspect-square w-[105vw] -translate-x-1/2 ${blur ? "blur-3xl" : ""} ${className}`}
    style={{
      transform: `scale(${scale})`,
      borderRadius: "50%",
    }}
  />
);

export const BackgroundEllipse = () => {
  return (
    <>
      <EllipseLayer
        className="z-0 bg-gradient-to-b from-[#11BEF9]/10 to-white -top-[20%]"
        scale="100%"
        delay={0.4}
      />
      <EllipseLayer
        className="-top-[20%] z-0 bg-gradient-to-b from-[#11BEF9]/2 via-white to-white"
        scale="90%"
        delay={0.2}
      />
      {/*<EllipseLayer
        className="-top-[5%] z-0 bg-gradient-to-b from-[#11BEF9]/2 to-white"
        scale="80%"
        delay={0}
      />*/}
      <div className="absolute h-full w-full bg-gradient-to-t from-white via-white/85 to-transparent"></div>
    </>
  );
};
