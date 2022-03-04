import Firstpage from "../../Component/FirstPage/FirstPage";
import Signin from "../../Component/Signin/Signin";
import Signup from "../../Component/Signup/Signup";
import {BrowserRouter,Routes,Route} from "react-router-dom"
export default function Home(){
    return(
        <>
{/* <Firstpage/> */}
{/* <Signin/> */}
{/* <Signup/> */}
<BrowserRouter>
<Routes>
    <Route path="/" element={<Firstpage/>}> </Route>
     <Route path="/Signin" element={<Signin/>}></Route>
    <Route path="/Signup" element={<Signup/>}></Route></Routes>

</BrowserRouter>

        </>
    )
}