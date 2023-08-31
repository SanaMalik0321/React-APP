import Header from "./header";
import User from "./user";
function MainUser (props) {    
    const {userData, setUserData, initialData, setActiveRowColor, activeRowColor} = props;
    return(
        <>
        <Header userData={userData} setUserData={setUserData} initialData={initialData} activeRowColor={activeRowColor} setActiveRowColor={setActiveRowColor}/>
        <User userData={userData} setUserData={setUserData} activeRowColor={activeRowColor} setActiveRowColor={setActiveRowColor}/>
        </>
    )
}
export default MainUser