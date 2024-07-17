import { Button } from "flowbite-react";
import { AiFillGoogleCircle } from "react-icons/ai";
import { GoogleAuthProvider, signInWithPopup, getAuth } from "firebase/auth";
import { app } from "../firebase";
import { useDispatch } from "react-redux";
import { signInSuccess } from "../redux/user/userSlice";
import { useNavigate } from "react-router-dom";

export default function OAuth() {
  const auth = getAuth(app);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleGoogleClick = async () => {
    const provider = new GoogleAuthProvider();
    provider.setCustomParameters({ prompt: "select_account" });
    try {
      const googleResults = await signInWithPopup(auth, provider);
      const res = await fetch("/api/auth/google", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: googleResults.user.displayName,
          email: googleResults.user.email,
          googlePhotoUrl: googleResults.user.photoURL,
        }),
      });
      console.log(googleResults);
      const data = await res.json();
      if (res.ok) {
        dispatch(signInSuccess(data));
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <Button
        className="w-full"
        type="button"
        gradientDuoTone="pinkToOrange"
        outline
        onClick={handleGoogleClick}
      >
        <AiFillGoogleCircle className="w-5 h-5 mr-1.5" />
        Continue with Google
      </Button>
    </div>
  );
}
