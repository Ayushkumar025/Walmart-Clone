import { auth, provider } from "../../FirebaseConfig";
import { signInWithPopup, signOut } from "firebase/auth";
import React, { useState } from 'react'
import './Login.css'

function Login() {
    const [user, setUser] = useState(null);

    const signInWithGoogle = async () => {
        try {
            const result = await signInWithPopup(auth, provider);
            setUser(result.user);
        } catch (error) {
            console.error("Error signing in with Google", error);
        }
    };
    return (
        <>
        {/* <button onClick={signInWithGoogle}>options</button> */}
        <section className="login">
            <div className="container">
                <div className="container-1">
                    <div className="logo">
                        <img src="./images/logo.png"></img>
                    </div>
                    <div className="head">
                        <span>Sign in or create your account</span>                
                    </div>
                    <div className="head-2">
                        <div className="first"><span>Not sure if you have an account?</span></div>
                        <div className="second"><span>Enter your email and we’ll check for you.</span></div>
                    </div>
                </div>
                <div className="container-2">
                    <span>Email address</span>
                    <input type="email"></input>
                    <button onClick={signInWithGoogle}>Continue</button>
                    <span className="first">Securing your personal information is our priority.</span>
                    <span className="second">See our privacy measures.</span>
                </div>
            </div>
        </section>
        </>
    )
}

export default Login
