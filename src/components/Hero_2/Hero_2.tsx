interface Hero_2Props {
  title: String;
}

const Hero_2: React.FC<Hero_2Props> = ({ title }) => {
  return (
      <section className=" hero-section">
        <div className="information-container">
          <div className="image-container" id="personal-picture">
            <img src="/img/Prof Pic.webp" loading="eager" alt="Picture of me"/>
          </div>

          <div className="information">
            <h1>Martin Tercero</h1>
            <span>@martin-tercero1</span>

            <p>Lifelong Learner at <a href="https://platzi.com/p/martin_tercero1/">Platzi</a> | Walton Scholar</p>
          </div>
        </div>
      </section>
  );
};

export default Hero_2;
