import React from "react";
import {ChatEngine} from 'react-chat-engine';
import './App.css';

// main chat app 
const App = ()=>{
    return (
        <ChatEngine
            height='100vh'
            projectID = "a8749bcc-51df-4e92-b9ee-ecec63633220"
            userName=""
            userSecret=""
        />
    )

    }
export default App;