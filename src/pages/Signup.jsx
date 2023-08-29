import signupImg from "../assets/Images/signup.webp"
import Template from "../components/core/Auth/Template"

function Signup() {
  return (
    <Template
      title="Join the millions to better health with MED360 for free"
      description1="Health is wealth"
      description2="Better health to future-proof your career"
      image={signupImg}
      formType="signup"
    />
  )
}

export default Signup
