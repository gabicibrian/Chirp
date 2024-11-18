import '../css/Dashboard.css';
import { motion } from "motion/react";
import { useOutletContext } from "react-router-dom";
import CardSnapshot from '../components/CardSnapshot';
import ssValorant from '../assets/snapshot-valorant.png';
import ssCeleste from '../assets/snapshot-celeste.png';
import ssRoblox from '../assets/snapshot-roblox.png';

const Dashboard = () =>{
    //const [selectedPanel] = useOutletContext();

    //Lista de información de Para Ti
    const dashboardPostsParaTi = [
      {
        size: "horizontal",
        imgPath: `${ ssValorant }`,
        poster: "madison",
        caption: "quick valo<3",
        profileView: false,
        user1: "lola.pallooza",
        comment1: "NAUUUUR",
        user2: "spideys_wife",
        comment2: "tirate un ace",
      },
      {size: "mid", imgPath: `${ ssValorant }`, poster: "madison", caption: "quick valo<3", profileView: false},
      {size: "mid", imgPath: `${ ssValorant }`, poster: "madison", caption: "quick valo<3", profileView: false},
      {size: "square", imgPath: `${ ssValorant }`, poster: "madison", caption: "quick valo<3", profileView: false},
      {size: "vertical", imgPath: `${ ssCeleste }`, poster: "madison", caption: "quick valo<3", profileView: false},
      {size: "horizontal", imgPath: `${ ssValorant }`, poster: "madison", caption: "quick valo<3", profileView: false},
      {size: "mid", imgPath: `${ ssValorant }`, poster: "madison", caption: "quick valo<3", profileView: false},
      {size: "mid", imgPath: `${ ssValorant }`, poster: "madison", caption: "quick valo<3", profileView: false},
      {size: "square", imgPath: `${ ssValorant }`, poster: "madison", caption: "quick valo<3", profileView: false},
      {size: "vertical", imgPath: `${ ssValorant }`, poster: "madison", caption: "quick valo<3", profileView: false}, 
    ];

    //Lista de información de Mis Amigos
    const dashboardPostsAmigos = [
        {size: "horizontal", imgPath: `${ ssRoblox }`, poster: "madison", caption: "noche de roblooox", profileView: false},
        {size: "mid", imgPath: `${ ssRoblox }`, poster: "madison", caption: "noche de roblooox", profileView: false},
        {size: "mid", imgPath: `${ ssRoblox }`, poster: "madison", caption: "noche de roblooox", profileView: false},
        {size: "square", imgPath: `${ ssRoblox }`, poster: "madison", caption: "noche de roblooox", profileView: false},
        {size: "vertical", imgPath: `${ ssCeleste }`, poster: "madison", caption: "noche de roblooox", profileView: false},
        {size: "horizontal", imgPath: `${ ssRoblox }`, poster: "madison", caption: "noche de roblooox", profileView: false},
        {size: "mid", imgPath: `${ ssRoblox }`, poster: "madison", caption: "noche de roblooox", profileView: false},
        {size: "mid", imgPath: `${ ssRoblox }`, poster: "madison", caption: "noche de roblooox", profileView: false},
        {size: "square", imgPath: `${ ssRoblox }`, poster: "madison", caption: "noche de roblooox", profileView: false},
        {size: "vertical", imgPath: `${ ssRoblox }`, poster: "madison", caption: "noche de roblooox", profileView: false}, 
      ];
    return(
        <motion.div
        initial={{left: '890px'}}
        animate={{left: '0'}}
        exit={{left: '-500px'}}
        transition={{duration: 0.5, ease: 'easeInOut'}}
        className='dashboard-container '>

        <div className='dashboard-tab-panel'
        id="para-ti-panel" role="tabpanel" aria-labelledby="para-ti-tab">

            {dashboardPostsParaTi.map((post) => 
                            < CardSnapshot
                                size={post.size} imgPath = {post.imgPath}
                                poster={post.poster} caption={post.caption}
                                profileView={post.profileView} user1={post.user1}
                                comment1={post.comment1} user2={post.user2}
                                comment2={post.comment2}/>
                                )}
        </div>

        <div className='dashboard-tab-panel'
        id="mis-amigos-panel" role="tabpanel" aria-labelledby="mis-amigos-tab" hidden={true}>

            {dashboardPostsAmigos.map((post) => 
                            < CardSnapshot
                                size={post.size} imgPath = {post.imgPath}
                                poster={post.poster} caption={post.caption}
                                profileView={post.profileView} user1={post.user1}
                                comment1={post.comment1} user2={post.user2}
                                comment2={post.comment2}/>
                                )}
        </div>
        </motion.div>
    )

}

export default Dashboard;