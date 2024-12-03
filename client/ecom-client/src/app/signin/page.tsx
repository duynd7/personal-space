'use client'
import { getLoginUrl } from "../utils/auth"

const SignIn = () => {
    const handleSignIn = () => {
        window.location.href = getLoginUrl();
    }

    return (
        <div>
            <h1>Sign in</h1>
            <button onClick={handleSignIn}>Sign In with Cognito</button>
        </div>
    )
}

export default SignIn;