import "./SignIn.css";
const SignIn = () => {
  return <div className="sign-in">
    <div className="'col-1">
      <div className="form-layout">
        <div className="form-container">
          <p className="sign-in-txt"> Sign in with</p>
          <form action="">
            <label>Email address</label>
            <input type='Email' placeholder="Email"/>
            <label>Password</label>
            <input type='password'placeholder='Password'/>
            <button> Sign In</button>
          </form>
        </div>
      </div>
    </div>
  </div>;
};
export default SignIn;
