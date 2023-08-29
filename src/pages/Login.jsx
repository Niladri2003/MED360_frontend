import loginImg from "../assets/Images/login.webp"
import Template from "../components/core/Auth/Template"

function Login() {
  return (
    <Template
      title="Welcome Back"
      description1="Health is wealth"
      description2="Better health to future-proof your career."
      image={loginImg}
      formType="login"
    />
  )
}

export default Login
