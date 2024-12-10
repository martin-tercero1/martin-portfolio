interface LandingProps {
  title: String;
}

const Landing: React.FC<LandingProps> = ({ title }) => {
  return (
    <section className="landing">
    <div className="shape-1"></div>
    <div className="shape-2"></div>
    <div className="shape-3"></div>
    <div className="shape-4"></div>
    <div className="shape-5"></div>
    <div className="shape-6"></div>
    <div className="shape-7">
        <h1>Martin Tercero</h1>
    </div>
    <div className="shape-8">
        <p>Lifelong learner</p>
    </div>
    </section>
  );
};

export default Landing;
