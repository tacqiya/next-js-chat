import React, { useContext } from "react";
import { Context, ContextProvider } from '../context'
import { useRouter } from "next/router";
import axios from 'axios';
//892b281d-7220-4b40-b504-c2223554283c
export default function Auth() {
  const {username, secret, setUsername, setSecret } = useContext(Context)
  const router = useRouter()

  function onSubmit(e) {
    e.preventDefault()
    if(username.length === 0 || secret.length === 0) return
    axios.put(
      'https://api.chatengine.io/users/',
      {username, secret},
      {headers: {"Private-key": '892b281d-7220-4b40-b504-c2223554283c'}}
    ).then((r) => router.push("/chats"));
  }
  return (
    <div className="background">
      <div className="auth-container">
        <form className="auth-form" onSubmit={(e) => onSubmit(e)}>
          <div className="auth-title">NextJS Chat</div>
          <div className="input-container">
            <input type="text" className="text-input" placeholder="Email" onChange={(e) => setUsername(e.target.value)} />
          </div>
          <div className="input-container">
            <input type="password" className="text-input" placeholder="Password" onChange={(e) => setSecret(e.target.value)} />
          </div>
          <button type="submit" className="submit-button">Login / Sign Up</button>
        </form>
      </div>
    </div>
  );
}
