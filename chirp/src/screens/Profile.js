import '../css/index.css';
import '../css/Profile.css';
import CardSnapshot from '../components/CardSnapshot';
import ssRoblox from "../assets/snapshot-roblox.png";
import ProfileCard from '../components/ProfileCard';
import pfpGatito from '../assets/pfp-gatito.png';

const Profile = () => {

    const userProfile = [
        {
            imgPath: `${pfpGatito}`,
        }
    ]

    const username = localStorage.getItem("user");
    
    const mySnapshot = [
        {
            id: "mySnapshot",
            size: "horizontal",
            imgPath: `${ssRoblox}`,
            poster: `${username}`,
            caption: "Roblox y chambrecitos",
            profileView: true,
            users: ["alexa3k", "bridget_pines", "mojojojo", "ms.stacy"],
            comments: [
                "chambrecitos con café",
                "invita mujeeer",
                "que ambiciosa mi amix",
                "la menos rigiosa ..."
            ]
        }
    ]

    return (
        <div className='container-profile'>
            <div className='perfil-general'>
                {userProfile.map((myProfile) =>(
                    <ProfileCard
                        imgPath={myProfile.imgPath}
                    >
                    </ProfileCard>
                ))}
            </div>
            <div>
                {mySnapshot.map((post) =>(
                    <CardSnapshot
                        id={post.id}
                        size={post.size}
                        imgPath={post.imgPath}
                        poster={post.poster}
                        caption={post.caption}
                        profileView={post.profileView}
                        users={post.users}
                        comments={post.comments}>
                    </CardSnapshot>
                ))}
            </div>
        </div>
    );
}

export default Profile;