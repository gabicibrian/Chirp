import '../css/Dashboard.css';
import CardSnapshot from '../components/CardSnapshot';
import ssValorant from '../assets/snapshot-valorant.png';
import ssCeleste from '../assets/snapshot-celeste.png';
//import liquidVector from '../assets/liquid.svg';

const Dashboard = () =>{
    return(
            <div className='dashboard-container'>
                < CardSnapshot size='horizontal' imgPath = {ssValorant} poster='madison' caption='quick valo<3' profileView={false} user1='lola.pallooza' comment1='NAUUUUR' user2='spideys_wife' comment2='tirate un ace'/>
                < CardSnapshot size='mid' imgPath = {ssValorant} poster='madison' caption='quick valo<3aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa' profileView={false}/>
                < CardSnapshot size='mid' imgPath = {ssValorant} poster='madison' caption='quick valo<3aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa' profileView={false}/>
                < CardSnapshot size='square' imgPath = {ssValorant} poster='madison' caption='quick valo<3aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa' profileView={false}/>
                < CardSnapshot size='vertical' imgPath = {ssCeleste} poster='madison' caption='quick valo<3aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa' profileView={false}/>
            
                < CardSnapshot size='horizontal' imgPath = {ssValorant} poster='madison' caption='quick valo<3aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa' profileView={false} user1='lola.pallooza' comment1='NAUUUUR' user2='spideys_wife' comment2='tirate un ace'/>
                < CardSnapshot size='mid' imgPath = {ssValorant} poster='madison' caption='quick valo<3aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa' profileView={false}/>
                < CardSnapshot size='mid' imgPath = {ssValorant} poster='madison' caption='quick valo<3aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa' profileView={false}/>
                < CardSnapshot size='square' imgPath = {ssValorant} poster='madison' caption='quick valo<3aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa' profileView={false}/>
                < CardSnapshot size='vertical' imgPath = {ssCeleste} poster='madison' caption='quick valo<3aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa' profileView={false}/>
        </div>
    )

}

export default Dashboard;