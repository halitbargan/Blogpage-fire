import { useLocation, useNavigate } from "react-router";
import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AccountCircle from '@mui/icons-material/AccountCircle';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import DeleteIcon from '@mui/icons-material/Delete';
import UpdateIcon from '@mui/icons-material/Update';
import { useContext } from "react";
import { BlogContext } from "../context/BlogContext";
import { AuthContext } from "../context/AuthContext";

const Details = () => {
  const location = useLocation();
  const item = location.state.item;

  const navigate = useNavigate();
  const { DeleteBlog } = useContext(BlogContext);
  const { currentUser } = useContext(AuthContext);

  const handleErase = (id) => {
    DeleteBlog(id);
    navigate("/");
  };
  const handleUpdate = () => {
    navigate("/blogform", { state: { item } });
  };

  return (
    <Box
     xs={{ d: "flex" }}
    
    sx={{
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
    height: "100vh",
    }}
   >
     
       <Card sx={{ width: "65%", m: 5, height: 600,cursor:"pointer",backgroundColor:"bisque" }}>
         <div>
         <img
           height="300"
           width="25%"
           src={item?.imageURL}
           alt="img"
           style={{marginTop:"15px"}}

         />
         <Typography sx={{m:0,mt:1,width:"100%"}}>
               <Typography gutterBottom variant="h5" component="div" sx={{textAlign:"center",color:"darkgreen"}}>
                 {item?.title.toUpperCase()}
               </Typography>
               <Typography variant="body2" sx={{textAlign:"center",m:"15px",fontSize:"1rem"}}>
                 {item?.content ?? "No Content"}
               </Typography>
               <Typography gutterBottom variant="span" component="div" sx={{textAlign:"center",m:"15px"}}>
                 {item?.date ?? "No date"}
               </Typography>
             </Typography>
         
           
           <Typography paragraph sx={{textAlign:"center",mt:1,color:"black",fontSize:"16px"}}>
             <AccountCircle/>{item?.author ?? "No email"}
           </Typography>
           </div>
           {item.favorites>0 ?<IconButton aria-label="add to favorites" sx={{textAlign:"left",alignItems:"left",color:"red"}}  >
             <FavoriteIcon/> 
           </IconButton>:<IconButton aria-label="add to favorites" sx={{textAlign:"left",alignItems:"left"}}>
             <FavoriteIcon/> 
           </IconButton>}
           <span>{item?.favorites ?? "0"}</span>
           <IconButton aria-label="add to favorites" sx={{textAlign:"left",alignItems:"left"}}>
             <ChatBubbleOutlineOutlinedIcon />
           </IconButton>
           <span>{item?.comments}</span>
           
           {currentUser.email===item.author && (<div>
            <IconButton sx={{color:"black",fontSize:55}}>
            <DeleteIcon  sx={{color:"black",fontSize:55}} onClick={()=>{handleErase(item.id)}}/>
             </IconButton>
             <IconButton sx={{color:"black",fontSize:55}} >
             <UpdateIcon  sx={{color:"black",fontSize:55}} onClick={handleUpdate}/>
             </IconButton>
           </div>)}
           
     
         
         
       </Card>
       </Box>
  )

};

export default Details;