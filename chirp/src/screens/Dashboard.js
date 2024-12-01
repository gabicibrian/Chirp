import '../css/Dashboard.css';
import { Outlet } from 'react-router-dom';
//import { motion } from "motion/react";
import { useContext } from 'react';
import { Context } from '../MainContent';
import CardSnapshot from '../components/CardSnapshot';
import ssValorant from '../assets/snapshot-valorant.png';
import ssCeleste from '../assets/snapshot-celeste.png';
import ssRoblox from '../assets/snapshot-roblox.png';

const Dashboard = () =>{
  const [selectedPanel] = useContext(Context);

  //Lista de información de Para Ti
  const dashboardPostsParaTi = [
    { id: "snapshot-1",
      size: "horizontal",
      imgPath: `${ssValorant}`,
      poster: "madison",
      caption: "quick valo<3",
      profileView: false,
      user1: "lola.pallooza",
      comment1: "NAUUUUR",
      user2: "spideys_wife",
      comment2: "tirate un ace",
    },
    { id: "snapshot-2",
      size: "mid",
      imgPath: `${ssValorant}`,
      poster: "madison",
      caption: "quick valo<3",
      profileView: false,
    },
    { id: "snapshot-3",
      size: "mid",
      imgPath: `${ssValorant}`,
      poster: "madison",
      caption: "quick valo<3",
      profileView: false,
    },
    { id: "snapshot-4",
      size: "square",
      imgPath: `${ssValorant}`,
      poster: "madison",
      caption: "quick valo<3",
      profileView: false,
    },
    { id: "snapshot-5",
      size: "vertical",
      imgPath: `${ssCeleste}`,
      poster: "madison",
      caption: "quick valo<3",
      profileView: false,
    },
    { id: "snapshot-6",
      size: "horizontal",
      imgPath: `${ssValorant}`,
      poster: "madison",
      caption: "quick valo<3",
      profileView: false,
    },
    { id: "snapshot-7",
      size: "mid",
      imgPath: `${ssValorant}`,
      poster: "madison",
      caption: "quick valo<3",
      profileView: false,
    },
    { id: "snapshot-8",
      size: "mid",
      imgPath: `${ssValorant}`,
      poster: "madison",
      caption: "quick valo<3",
      profileView: false,
    },
    { id: "snapshot-9",
      size: "square",
      imgPath: `${ssValorant}`,
      poster: "madison",
      caption: "quick valo<3",
      profileView: false,
    },
    { id: "snapshot-10",
      size: "vertical",
      imgPath: `${ssValorant}`,
      poster: "madison",
      caption: "quick valo<3",
      profileView: false,
    },
  ];

  //Lista de información de Mis Amigos
  const dashboardPostsAmigos = [
    {
      size: "horizontal",
      imgPath: `${ssRoblox}`,
      poster: "madison",
      caption: "noche de roblooox",
      profileView: false,
    },
    {
      size: "mid",
      imgPath: `${ssRoblox}`,
      poster: "madison",
      caption: "noche de roblooox",
      profileView: false,
    },
    {
      size: "mid",
      imgPath: `${ssRoblox}`,
      poster: "madison",
      caption: "noche de roblooox",
      profileView: false,
    },
    {
      size: "square",
      imgPath: `${ssRoblox}`,
      poster: "madison",
      caption: "noche de roblooox",
      profileView: false,
    },
    {
      size: "vertical",
      imgPath: `${ssCeleste}`,
      poster: "madison",
      caption: "noche de roblooox",
      profileView: false,
    },
    {
      size: "horizontal",
      imgPath: `${ssRoblox}`,
      poster: "madison",
      caption: "noche de roblooox",
      profileView: false,
    },
    {
      size: "mid",
      imgPath: `${ssRoblox}`,
      poster: "madison",
      caption: "noche de roblooox",
      profileView: false,
    },
    {
      size: "mid",
      imgPath: `${ssRoblox}`,
      poster: "madison",
      caption: "noche de roblooox",
      profileView: false,
    },
    {
      size: "square",
      imgPath: `${ssRoblox}`,
      poster: "madison",
      caption: "noche de roblooox",
      profileView: false,
    },
    {
      size: "vertical",
      imgPath: `${ssRoblox}`,
      poster: "madison",
      caption: "noche de roblooox",
      profileView: false,
    },
  ];

  return (
    <div
      className="dashboard-container"
    >
      
      <div 
        {...selectedPanel!=='para-ti-selected' ? {style:{display: 'none'}} : {}}
        className="dashboard-tab-panel"
        id="para-ti-panel"
        role="tabpanel"
      >
        {dashboardPostsParaTi.map((post) => (
          <CardSnapshot
            id={post.poster}
            size={post.size}
            imgPath={post.imgPath}
            poster={post.poster}
            caption={post.caption}
            profileView={post.profileView}
            user1={post.user1}
            comment1={post.comment1}
            user2={post.user2}
            comment2={post.comment2}
          />
        ))}
      </div>

      <div
        {...selectedPanel!=='mis-amigos-selected' ? {style:{display: 'none'}} : {}}
        className="dashboard-tab-panel"
        id="mis-amigos-panel"
        role="tabpanel"
      >
        {dashboardPostsAmigos.map((post) => (
          <CardSnapshot
            id={post.id}
            size={post.size}
            imgPath={post.imgPath}
            poster={post.poster}
            caption={post.caption}
            profileView={post.profileView}
            user1={post.user1}
            comment1={post.comment1}
            user2={post.user2}
            comment2={post.comment2}
          />
        ))}
      </div>
      <Outlet/>
    </div>
  );
}

export default Dashboard;