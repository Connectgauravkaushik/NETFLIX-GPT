import { signOut } from "firebase/auth"
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";
import { useDispatch } from "react-redux";
import { LOGO , ProfileImage } from "../utils/constants";

const Header = () => {

    const navigate = useNavigate();
    const user = useSelector(store => store.user);
    const dispatch = useDispatch();

    const handleSignOut = () => {
        signOut(auth)
        .then(() => {
        
        }).catch((error) => {
            navigate("/Error");
        });
    }

    useEffect(() => {
       const unsubscribe =  onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in,checking authentication 
                const { uid, email, displayName } = user;
                dispatch(
                    addUser(
                        {
                            uid: uid,
                            email: email,
                            displayName: displayName
                        }));
                   navigate('/browse')
            } else {
                // User is signed out
                dispatch(removeUser());
                navigate('/')
            }
        });
       
        return ()=> {
            unsubscribe();
        }

    }, []);

   const handleGptSearchClick = () => {
        //Toggle GPT search button
        
    }

    return (
        <div className="flex justify-between absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-screen">
            <img
                className="w-44"
                src={LOGO} alt="logo"></img>

       {    user && <div className="flex p-2">
               <button className="text-white bg-red-700 rounded-lg font-bold mr-5 w-40 text-xl h-12 " onClick={handleGptSearchClick}>GPT Search</button>
                <img
                    className="w-12 h-12 "
                    src={ProfileImage} alt=""></img>
                <p className="font-bold p-2 my-2 text-white">{user.displayName}</p>
                <button className="font-bold text-white p-4" onClick={handleSignOut}>Sign Out</button>
                
            </div>}
           
        </div>
    );
}

export default Header;