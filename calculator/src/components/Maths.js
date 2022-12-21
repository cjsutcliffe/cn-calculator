const Maths = ({ handleClick }) => {
    const mathsButtons = ["+", "-", "*", "/"];
    return (
      <div>
        {mathsButtons.map((aButton) => (
          <button className="mathsButtons" onClick={handleClick} key={aButton}>
            {aButton}
          </button>
        ))}
      </div>
    );
  };
  
  export default Maths;