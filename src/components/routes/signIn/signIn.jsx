import {
  createUserDocumentFromAuth,
  signInWithGooglePopup,
} from "../../../utils/firebase/firebase";

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    await createUserDocumentFromAuth(user);
  };
  return (
    <>
      <h1>SIGN IN PAGE</h1>
      <button onClick={logGoogleUser}>Sign in with Google Popup </button>
    </>
  );
};

export default SignIn;
