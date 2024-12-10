import Button from "../shared/Button/Button";

interface HeroProps {
  title: String;
}

const Hero: React.FC<HeroProps> = ({ title }) => {
  return (
    <main className="flex flex-col md:flex-row items-center n">
        <div className="flex flex-col items-center md:items-start">
            <h2 className="uppercase text-secondary-one text-[20px] tracking-[0]">Jr. Full Stack Developer</h2>
            <h1 className="text-4xl md:text-7xl font-semibold bg-clip-text text-transparent bg-gradient-primary my-[10px]">Martin Tercero</h1>
            <p className="text-[15px] tracking-[4%] leading-6 mb-6 text-justify">
                I am a Jr. Full Stack developer with strong knowledge of web
                technologies. I have worked in multi-cultural teams remotely and with clients from Costa Rica, Spanin, USA and Guatemala developing e-commerce, landing pages, corporate web sites and MVPs for small companies.
            </p>
            
            <Button text="Contact Me" link="mailto:martintercero20@hotmail.com"/>
        </div>

        <img src="./martin-animated.png" alt="" />
    </main>
  );
};

export default Hero;
