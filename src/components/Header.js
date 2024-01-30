import { signOut } from "firebase/auth"
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";
import { useDispatch } from "react-redux";
import { LOGO, ProfileImage, SUPPORTED_LANGUAGES } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {

    const navigate = useNavigate();
    const user = useSelector(store => store.user);
    const dispatch = useDispatch();
    const showGptSearch = useSelector(store => store.gpt.showGptSearch);
                                                        
    const handleSignOut = () => {
        signOut(auth)
            .then(() => {

            }).catch((error) => {
                navigate("/Error");
            });
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
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

        return () => {
            unsubscribe();
        }

    }, []);

    const handleGptSearchClick = () => {
        dispatch(toggleGptSearchView());

    }
    const handleLanguageChange = (e) => {
        dispatch(changeLanguage(e.target.value));
    }

    return (
        <div className=" flex flex-col justify-between md:flex-row  absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-screen ">
            <img
                className="w-44 mx-auto md:mx-0"
                src={LOGO} alt="logo"></img>

            {user && <div className="flex p-2 justify-between">
                {
                    showGptSearch &&
                    (
                        <select className="m-2 p-2 bg-gray-700 text-white w-32" onChange={handleLanguageChange}>
                            {SUPPORTED_LANGUAGES.map(lang => <option key={lang.identifier} value={lang.identifier}>{lang.name}</option>)}
                        </select>

                    )}

                <button className="text-white bg-red-700 rounded-lg font-bold mr-5 w-40 text-xl h-12 " onClick={handleGptSearchClick}>
                    {showGptSearch ? "Home page" : ("GPT Search" )}
                </button>
                
                <img
                    className=" hidden md:block w-12 h-12 "
                    src={ProfileImage} alt=""></img>
                <p className="font-bold p-2 my-2 text-white">{user.displayName}</p>
                <button className="font-bold text-white p-4" onClick={handleSignOut}>Sign Out</button>

            </div>}

        </div>
    );
}

export default Header;