import loginImg from "../Image/login-image.jpg";

function LoginPage(){
    return(
        <div className="flex h-[calc(100vh-72px)] max-w-[1150px] overflow-hidden">
            <div>
                <img src={loginImg} alt="login-image" />
            </div>

            <div>
                <h2>Login to Keka</h2>
                <input type="text" placeholder="Email or Username"/>
                <button>Continue</button>
            </div>
        </div>
    );
}

export default LoginPage