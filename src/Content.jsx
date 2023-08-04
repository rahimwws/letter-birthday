import "./sass/index.scss";
import styled, { keyframes } from "styled-components";
import { fadeInUp, fadeInDown, shake } from "react-animations";

import hacker from "./assets/images/hacker.gif";

import { Link, useLocation, useParams } from "react-router-dom";
import { useState } from "react";
export const Content = () => {
  const FaceInAnimation = keyframes`${fadeInUp}`;
  const FaceDownAnimation = keyframes`${fadeInDown}`;
  const shakeAnimation = keyframes`${shake}`;
  const {name} = useParams()
  
  const FaceInDiv = styled.div`
    animation: 2s ${FaceInAnimation};
  `;
  const FaceDownDiv = styled.div`
    animation: 2s ${FaceDownAnimation};
  `;
  const ShakeDiv = styled.div`
    animation: 1s ${shakeAnimation};
  `;
  return (
    <>
      <div className="container">
        <div className="main-item">
          <div className="block">
            <FaceInDiv>
              <p>Rahim's Party</p>
              <p>
                Dear <span>{name}</span>, I invite you to my
                birthday party
              </p>
            </FaceInDiv>
          </div>
        </div>
        <div className="text">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="33"
            height="34"
            viewBox="0 0 63 64"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M24.7072 4.10276C23.0774 0.904183 19.1633 -0.367599 15.9647 1.26216C12.7661 2.89192 11.4943 6.80606 13.1241 10.0046L22.7749 28.9455L3.83429 38.5962C0.63571 40.2259 -0.636072 44.1401 0.993686 47.3387C2.62344 50.5372 6.53759 51.809 9.73617 50.1793L28.6768 40.5285L38.3275 59.4692C39.9573 62.6678 43.8714 63.9396 47.07 62.3098C50.2686 60.6801 51.5404 56.7659 49.9106 53.5673L40.2599 34.6267L59.2007 24.9758C62.3993 23.3461 63.6711 19.4319 62.0413 16.2333C60.4116 13.0348 56.4974 11.763 53.2989 13.3927L34.358 23.0436L24.7072 4.10276Z"
              fill="#2E67FC"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="31"
            height="33"
            viewBox="0 0 61 63"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M23.6951 3.63915C21.9821 0.484332 18.036 -0.684554 14.8812 1.02837C11.7264 2.7413 10.5575 6.68739 12.2704 9.84222L22.4138 28.5239L3.73235 38.6671C0.577532 40.38 -0.591354 44.3261 1.12158 47.4809C2.8345 50.6358 6.7806 51.8047 9.93542 50.0917L28.6168 39.9485L38.7601 58.6301C40.473 61.7849 44.4191 62.9538 47.5739 61.2409C50.7287 59.5279 51.8976 55.5818 50.1847 52.427L40.0415 33.7455L58.7233 23.6021C61.8781 21.8892 63.047 17.9431 61.3341 14.7882C59.6211 11.6334 55.675 10.4645 52.5202 12.1775L33.8384 22.3209L23.6951 3.63915Z"
              fill="#FE3D7E"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="31"
            height="31"
            viewBox="0 0 61 61"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M30.6607 54.1136C43.7748 54.1136 54.4059 43.4826 54.4059 30.3685C54.4059 17.2545 43.7748 6.62341 30.6607 6.62341C17.5467 6.62341 6.91562 17.2545 6.91562 30.3685C6.91562 43.4826 17.5467 54.1136 30.6607 54.1136ZM30.6607 60.1136C47.0885 60.1136 60.4059 46.7963 60.4059 30.3685C60.4059 13.9408 47.0885 0.623413 30.6607 0.623413C14.233 0.623413 0.915619 13.9408 0.915619 30.3685C0.915619 46.7963 14.233 60.1136 30.6607 60.1136Z"
              fill="#FE3D7E"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M30.6607 54.1136C43.7748 54.1136 54.4059 43.4826 54.4059 30.3685C54.4059 17.2545 43.7748 6.62341 30.6607 6.62341C17.5467 6.62341 6.91562 17.2545 6.91562 30.3685C6.91562 43.4826 17.5467 54.1136 30.6607 54.1136ZM30.6607 60.1136C47.0885 60.1136 60.4059 46.7963 60.4059 30.3685C60.4059 13.9408 47.0885 0.623413 30.6607 0.623413C14.233 0.623413 0.915619 13.9408 0.915619 30.3685C0.915619 46.7963 14.233 60.1136 30.6607 60.1136Z"
              fill="#FE3D7E"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 60 60"
            fill="none"
          >
            <circle
              cx="30.2252"
              cy="30.2375"
              r="26.7451"
              stroke="#FFAD08"
              stroke-width="6"
            />
          </svg>
          <FaceDownDiv>
            <div className="name">
              <p>Sunday</p>
              <p>August 6</p>
              <p>18:00</p>
            </div>
          </FaceDownDiv>
          <FaceDownDiv>
            <div className="address">
              <a href="https://goo.gl/maps/vB8Jgic9nu7pnzRa9">Angar Club</a>{" "}
              <br />
              <a href="tel:+99363927788"> TEL: +993 63-92-77-88</a>
            </div>
          </FaceDownDiv>
        </div>
      </div>
      <FaceDownDiv>
        <div className="game">
          <Link to ="https://fellipeutaka-tictactoe.vercel.app/">
          <h1>Click me</h1>
          </Link>
        </div>
      </FaceDownDiv>
    </>
  );
};
