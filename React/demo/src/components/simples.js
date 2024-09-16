// Divers composant fonctionnels

function Simple1() {
  return <p>Simple composant fonctionnel</p>;
}

function Simple2(props) {
  return <p>Message : {props.message}</p>;
}

function Simple3(props) {
  return (
    <p>
      Formation: {props.training}
      <br />
      Niveau: <strong>{props.lvl}</strong>
      <br />
      Durée: {props.duration} jours
    </p>
  );
}

function Simple4(props) {
  if (props.accessible === true) {
    return <p>Accès autorisé</p>;
  } else {
    return <p>Accès refusé</p>;
  }
}

function Simple5(props) {
  const { operand1, operand2, operator } = props;
  let result = 0;
  let operation = "";

  if (operator === "add") {
    result = operand1 + operand2;
    operation = "+";
  } else if (operator === "sub") {
    result = operand1 - operand2;
    operation = "-";
  } else if (operator === "mul") {
    result = operand1 * operand2;
    operation = "x";
  } else if (operator === "div") {
    result = operand1 / operand2;
    operation = "/";
  } else {
    //result = 0;
    return <div>Opération non réalisable</div>;
  }

  let style = { color: "orange" };

  if (result < 0) {
    style.color = "red";
  }
  return (
    <div>
      <span>{operand1}</span>
      <span>{operation}</span>
      <span>{operand2}</span>
      <span>=</span>
      <span style={style}>{result}</span>
    </div>
  );
}

function Simple6({ data }) {
  const { n1, n2 } = data;

  return (
    <p>
      {n1} + {n2} = {n1 + n2}
    </p>
  );
}

export { Simple1, Simple2, Simple3, Simple4, Simple5, Simple6 };
