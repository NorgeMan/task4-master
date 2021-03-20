import React from 'react';
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';
import GitHubLogin from 'react-github-login';

const Social = () => {
    const responseFacebook = (response) => {
        console.log(response)
    }

    const responseGoogle = (response) => {
        console.log(response)
    }
    const onRequest = response => console.request(response);
    const onSuccess = response => console.log(response);
    const onFailure = response => console.error(response);

    return (
        <div>

            <FacebookLogin
                appId="344950797211559"
                buttonText="Login"
                autoLoad={false}
                fields="name, email, picture"
                callback={responseFacebook}
            />

            <br/>
            <br/>

            <GoogleLogin
                clientId="664878429364-e19l727v61ikq05ihfgkbu6d697hup6h.apps.googleusercontent.com"
                buttonText="Login with google"
                autoLoad={false}
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={'single_host_origin'}
            />

            <br/>
            <br/>

            <GitHubLogin clientId="2ae392ecd120aea18d5b"
                         onSuccess={onSuccess}
                         onFailure={onFailure}
                         onRequest={onRequest}
                         buttonText="Login with GitHub"
                         redirectUri="https://localhost"
            />

        </div>
    );
};

export default Social;