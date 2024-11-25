import React, {useState} from "react";
//import { motion, transform } from "motion/react";
import { useParams, Link, useNavigate } from "react-router-dom";
import ssValorant from "../assets/snapshot-valorant.png";
import pfpGatito from '../assets/pfp-gatito.png';
import "../css/ModalSnapshot.css";


const ModalSnapshot = () => {
  const params = useParams();
  const username = localStorage.getItem("user");
  console.log(params.key);
    const [newComment, setNewComment] = useState('');

    const [comments, setComments] = useState([
        { user: "lolita", comment: "no puede ser" },
        { user: "madison", comment: "wiruwiruwiruwiru" },
      ]);

    const publishComment = (e) => {
        e.preventDefault();
    
        if (newComment.trim() === "") return;

        setComments((prevComments) => [
          ...prevComments,
          { user: username, comment: newComment },
        ]);
    
        setNewComment("");
      };
      const [snapClass, setSnapClass] = useState(false);
      const navigate = useNavigate();
  const closeSnapshot = () => {
    setSnapClass(true);
    setTimeout(() => {
      navigate(-1)
    }, 300);
  }

  return (
    <div className="modalsnapshot-container">
      <div
      className={!snapClass ? 'overlay': 'overlay closed'}>

      </div>
      <div
      className={!snapClass ? 'modal-snapshot': 'modal-snapshot closed'}>
        <Link onClick={closeSnapshot}>
          <md-icon-button id="modalsnapshot-close">
            <md-icon>arrow_drop_up</md-icon>
          </md-icon-button>
        </Link>

        <div className="modalsnapshot-title">
          <h1 className="headline">Snapshot</h1>
          <md-icon-button>
            <md-icon>more_vert</md-icon>
          </md-icon-button>
        </div>

        <div className="modalsnapshot-photo">
          <img src={ssValorant} alt=""></img>
        </div>

        <div className="modalsnapshot-caption">
            <img src={pfpGatito} alt=""></img>
          <p className="label">madison:</p>
          <p className="body ellipsis">caption test</p>
          <md-icon-button toggle>
            <md-icon>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#130027"
              >
                <path d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z" />
              </svg>
            </md-icon>
            <md-icon slot="selected">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="#130027"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 21L10.55 19.7C8.86667 18.1833 7.475 16.875 6.375 15.775C5.275 14.675 4.4 13.6875 3.75 12.8125C3.1 11.9375 2.64583 11.1333 2.3875 10.4C2.12917 9.66667 2 8.91667 2 8.15C2 6.58333 2.525 5.275 3.575 4.225C4.625 3.175 5.93333 2.65 7.5 2.65C8.36667 2.65 9.19167 2.83333 9.975 3.2C10.7583 3.56667 11.4333 4.08333 12 4.75C12.5667 4.08333 13.2417 3.56667 14.025 3.2C14.8083 2.83333 15.6333 2.65 16.5 2.65C18.0667 2.65 19.375 3.175 20.425 4.225C21.475 5.275 22 6.58333 22 8.15C22 8.91667 21.8708 9.66667 21.6125 10.4C21.3542 11.1333 20.9 11.9375 20.25 12.8125C19.6 13.6875 18.725 14.675 17.625 15.775C16.525 16.875 15.1333 18.1833 13.45 19.7L12 21ZM12 18.3C13.6 16.8667 14.9167 15.6375 15.95 14.6125C16.9833 13.5875 17.8 12.6958 18.4 11.9375C19 11.1792 19.4167 10.5042 19.65 9.9125C19.8833 9.32084 20 8.73333 20 8.15C20 7.15 19.6667 6.31667 19 5.65C18.3333 4.98333 17.5 4.65 16.5 4.65C15.7167 4.65 14.9917 4.87084 14.325 5.3125C13.6583 5.75417 13.2 6.31667 12.95 7H11.05C10.8 6.31667 10.3417 5.75417 9.675 5.3125C9.00833 4.87084 8.28333 4.65 7.5 4.65C6.5 4.65 5.66667 4.98333 5 5.65C4.33333 6.31667 4 7.15 4 8.15C4 8.73333 4.11667 9.32084 4.35 9.9125C4.58333 10.5042 5 11.1792 5.6 11.9375C6.2 12.6958 7.01667 13.5875 8.05 14.6125C9.08333 15.6375 10.4 16.8667 12 18.3Z" />
                <path d="M12 18.3C13.6 16.8667 14.9167 15.6375 15.95 14.6125C16.9833 13.5875 17.8 12.6958 18.4 11.9375C19 11.1792 19.4167 10.5042 19.65 9.9125C19.8833 9.32084 20 8.73333 20 8.15C20 7.15 19.6667 6.31667 19 5.65C18.3333 4.98333 17.5 4.65 16.5 4.65C15.7167 4.65 14.9917 4.87084 14.325 5.3125C13.6583 5.75417 13.2 6.31667 12.95 7H11.05C10.8 6.31667 10.3417 5.75417 9.675 5.3125C9.00833 4.87084 8.28333 4.65 7.5 4.65C6.5 4.65 5.66667 4.98333 5 5.65C4.33333 6.31667 4 7.15 4 8.15C4 8.73333 4.11667 9.32084 4.35 9.9125C4.58333 10.5042 5 11.1792 5.6 11.9375C6.2 12.6958 7.01667 13.5875 8.05 14.6125C9.08333 15.6375 10.4 16.8667 12 18.3Z" />
              </svg>
            </md-icon>
          </md-icon-button>
        </div>

        <div className="modalsnapshot-comments">

          <div className="modalsnapshot-title">
          <p className="label">Comentarios</p>
          </div>
        


        {comments.map((item, index) => (
          <div className="modalsnapshot-txt" key={index}>
            <img src={pfpGatito} alt=""></img>
            <p className="label">{item.user}:</p>
            <p className="body ellipsis">{item.comment}</p>
          </div>
        ))}
        </div>

        <form onSubmit={publishComment} className="modalsnapshot-postcomment">
          <md-outlined-text-field
            placeholder="Comentar..."
            value={newComment}
            onInput={(e) => setNewComment(e.target.value)}
            ></md-outlined-text-field>

          <md-icon-button type="submit">
            <md-icon>send</md-icon>
          </md-icon-button>
        </form>
      </div>
    </div>
  );
};

export default ModalSnapshot;
