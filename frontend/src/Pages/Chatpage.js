import { Box } from "@chakra-ui/layout";
import { ChatState } from "../Context/ChatProvider"
import SideDrawer from "../components/miscellaneous/SideDrawer"
import Chatbox from "../components/Chatbox";
import MyChats from "../components/MyChats";


const Chatpage = () => {
  const {user}=ChatState()
  
  return (
    <div style={{width:"100%"}}>
     {user && <SideDrawer/>}
     <Box>
          
     </Box>
    </div>
  )
}

export default Chatpage
