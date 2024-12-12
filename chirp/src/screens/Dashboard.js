import '../css/Dashboard.css';
import { Outlet } from 'react-router-dom';
//import { motion } from "motion/react";
import { useContext } from 'react';
import { Context } from '../MainContent';
import CardSnapshot from '../components/CardSnapshot';
import { dashboardPostsAmigos, dashboardPostsParaTi } from "../components/SnapshotConfig";

const Dashboard = () =>{
  const [selectedPanel] = useContext(Context);

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
            id={post.id}
            size={post.size}
            imgPath={post.imgPath}
            poster={post.poster}
            caption={post.caption}
            profileView={false}
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
            profileView={false}
          />
        ))}
      </div>
      <Outlet/>
    </div>
  );
}

export default Dashboard;