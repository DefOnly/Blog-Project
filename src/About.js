import Nav from "./Nav";

const About = () => {
  return (
    <>
      <Nav />
      <main className="About">
        <h2 className="labels">About</h2>
        <p className="labels" style={{ marginTop: "1rem" }}>
          This blog app is a project in the Learn React tutorial series.
        </p>
      </main>
    </>
  );
};

export default About;
