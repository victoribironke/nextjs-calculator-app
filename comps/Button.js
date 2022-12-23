const Button = (props) => {
  const isPresentBlue = props.classes.includes("special-blue");
  const isPresentRed = props.classes.includes("special-red");
  let clsFront = "front";
  let clsBack = "back";

  if (isPresentBlue) {
    clsFront = "front special-blue";
    clsBack = "back special-blue-shadow";
  } else if (isPresentRed) {
    clsFront = "front special-red";
    clsBack = "back special-red-shadow";
  }

  return (
    <div className={props.classes}>
      <div className={clsFront}>{props.num}</div>
      <div className={clsBack}></div>
    </div>
  );
};

export default Button;
