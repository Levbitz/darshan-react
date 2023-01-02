const SingleCheat = ({ cheatTitle, cheatDescription, children }) => {
  return (
    <div className="center col l4 s12">
      <h5>{cheatTitle} </h5>
      <h6>{children}</h6>
      <p>{cheatDescription}</p>
    </div>
  );
};

export default SingleCheat;
