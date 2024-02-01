import "bootstrap/dist/css/bootstrap.min.css";
const Spinner = () => {
  return (
    <div
      className="d-flex justify-content-center"
      style={{ margin: "100px 0px" }}
    >
      <div
        className="spinner-border"
        style={{ width: "5rem", height: "5rem" }}
        role="status"
      ></div>
    </div>
  );
};
export default Spinner;
