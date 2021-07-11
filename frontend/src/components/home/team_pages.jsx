import React from 'react';
import {AiFillGithub} from "react-icons/ai";
import {FaLinkedin} from 'react-icons/fa';
import {FaAngellist} from 'react-icons/fa'
import {Link} from 'react-router-dom'

export default function TeamInfo(){
    return (
      <div className="teammembers">
        <div className="team-logo">
          <Link to="/">
            <img src={window.logoimg} alt="" />
          </Link>
        </div>
        <h1>Developer Team</h1>
        <div className="team-info">
          <div className="team-members">
            <h3>Ying Chen</h3>
            <div>
              <img src={window.yingImg} alt="" />
            </div>
            <div>
              <a
                href="https://github.com/chen445"
                target="_blank"
                rel="noreferrer"
              >
                <AiFillGithub size={26} style={{color:"black"}}/>
              </a>
              <a
                href="https://www.linkedin.com/in/ychen12"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin size={26} />
              </a>
              <a
                href="https://angel.co/u/ying-chen-43"
                target="_blank"
                rel="noreferrer"
              >
                <FaAngellist size={26} />
              </a>
            </div>
          </div>
          <div className="team-members">
            <h3>Guocong Pan</h3>
            <div>
              <img src={window.PanImg} alt="" />
            </div>
            <div>
              <a
                href="https://github.com/ryan031391"
                target="_blank"
                rel="noreferrer"
              >
                <AiFillGithub size={26} />
              </a>
              <a
                href="https://www.linkedin.com/in/ryan-pan-b032461a6/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin size={26} />
              </a>
              <a
                href="https://angel.co/u/guocong-pan"
                target="_blank"
                rel="noreferrer"
              >
                <FaAngellist size={26} />
              </a>
            </div>
          </div>
          <div className="team-members">
            <h3>Zionette Sanchez-Ferrer</h3>
            <div>
              <img src={window.Zionette} alt="" />
            </div>
            <div>
              <a
                href="https://github.com/ziosanfer"
                target="_blank"
                rel="noreferrer"
              >
                <AiFillGithub size={26} />
              </a>
              <a
                href="https://www.linkedin.com/in/zionette-sanchez-26801a20b/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin size={26} />
              </a>
              <a href="" target="_blank" rel="noreferrer">
                <FaAngellist size={26} />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
}