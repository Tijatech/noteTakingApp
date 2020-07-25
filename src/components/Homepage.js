import React, { Component } from 'react';
import Logo from "../images/logo.png"
import img1 from "../images/img1.png"
import img2 from "../images/img2.png"
import img3 from "../images/img3.png"





class Homepage extends Component {
  
  render(){
    return (
     <div id="app">
         <header>
             <div className="logo">
                <img src={Logo} alt="3Sixty"/>
             </div>
             <div id="signBtn">
                 <button>Login</button>
                 <button>Sign Up</button>
             </div>
         </header>
         <main id="homepage">
             <div className="left">
                <h1>
                    You can't really manage time, but you can take 
                    small steps that counts on a long run.
                </h1>
                <ul>
                    <li>Track your daily activities</li>
                    <li>Save important notes and code  snippets you're likely to reuse</li>
                    <li>Keep a diary of your daily activities</li>
                </ul>
                <div className="getStarted">
                    <button>
                        Get Started
                    </button>
                </div>
             </div>
             <div className="right flex flex-col ai-c">
                <div className="mb-6 flex p-relative">
                    <div className="bgCon">

                    </div>
                    <div>
                        
                        <img src={img1} alt="Track Todos" />
                        <p>track your TODOS status</p>
                    </div>
                </div>
                <div className="flex justify-se w-100">
                    <div className="p-relative">
                        <div className="bgCon">

                        </div>
                        <img src={img2} alt="Track Todos" />
                        <p>track your TODOS status</p>
                    </div>
                    <div className="p-relative">
                        <div className="bgCon-bottom">

                        </div>
                        <img src={img3} alt="Track Todos" />
                        <p>track your TODOS status</p>
                    </div>
                </div>
             </div>
         </main>
         <footer>
             <div>
                 All Rights Reserved. 2020 @ayomadewale
             </div>
         </footer>
     </div>
    
  );
  }
  
}

export default Homepage;
