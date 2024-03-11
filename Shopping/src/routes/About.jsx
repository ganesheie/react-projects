const About = () => {
  return (
    <main>
      <h1>
        <center> About Shopping Project </center>{" "}
      </h1>
      <div className="items-container embed-responsive embed-responsive-21by9 ">
        <ul>
          <li>how to use Redux and React Router. </li>
          <li>
            This project uses node backend service to get dummy product in to
            the system.
          </li>
          <li>
            You can add new product in the system, which would thene be be
            updated in the loacal json file.
          </li>
        </ul>
      </div>
    </main>
  );
};
export default About;
