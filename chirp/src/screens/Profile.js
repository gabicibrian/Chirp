import '../css/index.css';
import '../css/Profile.css';
import CardSnapshot from '../components/CardSnapshot';
import ProfileCard from '../components/ProfileCard';
import pfpGatito from '../assets/pfp-gatito.png';
import { Outlet, useParams, useLocation } from 'react-router-dom';
import { mySnapshot, dashboardPostsAmigos, dashboardPostsParaTi, userList } from '../components/SnapshotConfig';

const Profile = () => {
    const location = useLocation();
    const {id} = useParams();
    const name = localStorage.getItem("name");
    const username = localStorage.getItem("user")


/*
    const myUser = {
        user: name,
        username: username,
      }

    const getUser = () =>{
        if (location.pathname === 'mi-perfil') {
            return myUser;
        } else {
            return userList.find(snapshot => snapshot.username === id);
        }
    }

    const getSnapshot = (i) => {
        if (i.username === username) {
           return mySnapshot 
        } else{
            return dashboardPostsAmigos.find(snapshot => snapshot.poster === i.username)
        }
    }

    const profileUser = getUser();
    let snapshot = getSnapshot(profileUser);
    
    if (!snapshot) {
        snapshot = dashboardPostsParaTi.find(snapshot => snapshot.poster === profileUser.username);
    }
*/
    const userProfile = [
        {
            imgPath: `${pfpGatito}`,
        }
    ]

    return (
        <div className='container-profile'>
            <div className='perfil-general'>
                {userProfile.map((myProfile) =>(
                    <ProfileCard
                        imgPath={myProfile.imgPath}
                        name={name}
                        username={username}
                    >
                    </ProfileCard>
                ))}
            </div>
            <div>
                {mySnapshot.map((post) =>(
                    <CardSnapshot
                        id={post.id}
                        imgPath={post.imgPath}
                        poster={post.poster}
                        caption={post.caption}
                        profileView={true}
                        users={[post.users[0],post.users[1]]}
                        comments={[post.comments[0],post.comments[1]]}>
                    </CardSnapshot>
                ))}
            </div>
            <Outlet />
        </div>
    );
}

export default Profile;