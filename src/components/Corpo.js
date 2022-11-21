import SideBar from "../components/SideBar"
import Stories from "../components/Stories"
import Posts from "../components/Posts"

export default function Corpo() {
    return (
        <div class="corpo">
            <div class="esquerda">
                <Stories />
                <Posts />        
        </div>
        <SideBar />      
    </div>
 );
}
