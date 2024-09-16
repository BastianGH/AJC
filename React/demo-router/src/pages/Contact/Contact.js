import { Outlet, useNavigate } from "react-router-dom";

export const Contact = () => {
  const navigate = useNavigate();

  const onClick = () => {
    navigate("/");
  };
  return (
    <main>
      <div className="component">Contact</div>
      <Outlet />
      <button onClick={onClick}>Retour Acceuil</button>
    </main>
  );
};
