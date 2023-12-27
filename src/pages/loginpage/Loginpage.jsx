import image from "../../assets/hero.jpg";
import LoginForm from "./LoginForm.jsx";

export default function Loginpage() {
  return (
    <>
      <div
        className="min-h-screen bg-fixed bg-center bg-cover"
        style={{ backgroundImage: `url(${image})` }}
      >
        <LoginForm />
      </div>
    </>
  );
}
