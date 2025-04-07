@import url('https://fonts.googleapis.com/css2?family=K2D:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
*{
    padding: 0;
    margin: 0;
    font-family: 'Poppins', sans-serif;
    box-sizing: border-box;
}


body{
    width: 100%;
    height: 100vh;
    overflow: scroll;
    background: 1;
    background-image: radial-gradient(#e74c3c 1px, transparent 1px);
    background-size: 20px 20px;
    animation: starAnim 60s linear infinite;    
}
@keyframes starAnim {
    from { background-position: 0 0; }
    to { background-position: 1000px 1000px; }
  }
  
 nav {
    width: 100%;
    height: 10vh;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    background-color: #00000071;
}

.nav-container {
    
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 100%;
    cursor: pointer;
}

.logo{
    color: #e74c3c;
    font-size: 2rem;
    font-weight: bold;
}
.logo span{
    color: #e74c3c;
    text-shadow: 0 0 10px #c0392b;
}
.hamburg,
.cancel{
    cursor: pointer;
    position: absolute;
    right: 15px;
    top: 10px;
    color: #e74c3c;
    display: none;
    font-size: clamp(2.5rem, 0.5rem + 5vw, 3rem);
}
.nav-container .links{
    display: flex;
}
.nav-container .links a{
    position: relative;
    font-size: 1.2rem;
    color: #e74c3c;
    margin: 0 20px;
    text-decoration: none;
    font-weight: 550;
    transition: 0.3s linear;
}
.nav-container .links a::before{
    position: absolute;
    content: "";
    bottom: -3px;
    left: 0;
    width: 0%;
    height: 3px;
    background-color: #e74c3c;
    transition: 0.2s linear;
}
.nav-container .links a:hover::before{
    width: 100%;
}
.nav-container .links a:hover{
    color: #ffffff;
}
.dropdown{
    z-index: 100;
    position: absolute;
    top: 0;
    transform: translateY(-500px);
    width: 100%;
    height: auto;
    backdrop-filter: blur(4px) brightness(40%);
    box-shadow:  0 0 20px black;
    transition: 0.2s linear;
}
.dropdown .links a{
    font-weight: bold;
    display: flex;
    color: white;
    text-decoration: none;
    justify-content: center;
    padding: 15px 0;
    align-items: center;
    transition: 0.2s linear;
    cursor: pointer
}
.dropdown .links a:hover{
    background-color: #e74d3c58;
}
section{
    width: 100%;
    height: 100vh;
}
.main-container{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    transform: all 1s ease;
    text-align: center;
}
@keyframes animate {
    0%{
        scale: 1;
    }
    50%{
        scale: 1.05;
    }
    100%{
        scale: 1;
    }
}
.main-container .content{
    color: #e74c3c;
    width: 40%;
    min-height: 100px;
}
.content h1{
    font-size: 50px;
    width: 500;
    background: #000000;
}
.content h1 span{
    color: #ffffff;
    text-shadow: 0  0 10px #e74c3c;;
    width: auto;
}
.content .typewriter{
    font-size: clamp(1rem, 1rem + 5vw, 2.5rem);
    font-weight: 600;
}
.content .typewriter-text{
    color: #ffffff;
    text-shadow: 0 0 10px #e74c3c;
}
.content p{
    font-size: clamp(0.4rem , 0.2rem + 9vw, 1rem);
    margin: 10px 0;
    color: #ccc;
}
.social-links i{
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 3rem;
    height: 3rem;
    background-color: transparent;
    border: 0.2rem solid #e74c3c;
    border-radius: 50%;
    color: #e74c3c;
    margin: 5px 15px;
    font-size: 1.5rem;
    transition: 0.2s linear;
}
.social-links i:hover{
    scale: 1.3;
    color: black;
    background-color: #e74c3c;
    filter: drop-shadow(0 0 10px #e74c3c);
}
.content button{
    width: 50%;
    height: 6vh;
    margin: 30px;
    background-color: #e74c3c;
    color: white;
    border: none;
    outline: none;
    font-size: 120%;
    font-weight: 700;
    border-radius: 5px;
    transition: 0.2s linear;
}
.content button:hover{
    scale: 1.1;
    color: #e74c3c;
    border: 2px solid #e74c3c;
    background-color: transparent;
    font-weight: 700;
    box-shadow: 0 0 40px #e74c3c;
}
@media (max-width:884px) {
    nav .logo{
        position: absolute;
        top: 16px;
        left: 15px;
        font-size: 1.5rem;
    }
    .main-container {
        display: flex;
        flex-direction: column;
    }
    .nav-container .links{
        display: none;
    }
    .hamburg,
    .cancel{
        display: block;
    }
    .main-container .content{
        width: 80%;
    }
    .social-links i{
        width: 2.5rem;
        height: 2.5rem;
        font-size: 1.5rem;
    }
    .main-container .image{
        z-index: -1;
        width: 50%;
        height: 60%;
    }
}
@media (max-width:440px){
    .main-container .image{
        width: 50%;
        height: 60%;
        margin-bottom: 0px;
    }
    .main-container .content{
        width: 80%;
    }
    .main-container button{
        margin-top: 15px;
    }
}
.theme-toggle {
    width: 50px;
    height: 50px;
    position: fixed;
    bottom: 20px;
    left: 20px;
    background-color: transparent;
    border: 3px solid #e74c3c;
    color: #e74c3c;
    padding: 10px;
    border-radius: 50%;
    cursor: pointer;
    z-index: 999;
    transition: all 0.3s ease;
}

.theme-toggle:hover {
    background-color: #e74c3c;
    color: #fff;
}

.main-container,.Habout,.Hskills,.Hworks,.Hcontact {
    
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 1rem;
    text-align: center;
    margin-top: 10px;
}
.section-title {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 0;
    
}

.social-links a {
    margin: 0 10px;
    font-size: 1.5rem;
    color: inherit;
}


.typewriter {
    margin-top: 10px;
}

p.Artibuy {
    color: #ff4500;
    font-family: 'K2D';
}

.Habout {
    color: #e74c3c;
    background: #121212;
    padding: 60px;
    align-items: flex-start; 
    text-align: left;   
    margin-right: 100px;
    border-top-right-radius: 20px; 
    border-bottom-right-radius: 20px;
    transition: all 1s ease;
}
.about{
    height: 0;
    color: #fff;
    font-size: 20px;
    padding: 20px;
    align-items: flex-start; 
    text-align: left;   
    margin-right: 600px; 
    font-family: 'K2D';
    text-align: left;
}

.about::hover {
    scale: 1.1px;
}

.Hskills {
  display: flex;
  gap: 20px;
  font-size: 3rem;
  color: #e74c3c;
  margin-left: 500px;
  margin-right: 500px;
  border-radius: 20px;
}

.skills {
  display: flex;
  gap: 20px;
  font-size: 3rem;
  color: #e74c3c;
  margin: 0;
}


.Hskills .skills {
  justify-content: center;
}

.fa-html5.fa-css3-alt.fa-js.fa-python a{
    display: flex;

}
.fa-html5{
    color: white;
    transition: all  .1s ease;
}

.fa-html5:hover {
    color: #ff4500;
    transform: scale(1.1);
}
.fa-css3-alt{
    color: white;
    transition: all .1s ease;
}
.fa-css3-alt:hover {
    color: #264de4;
    transform: scale(1.1);
}

.fa-js{
    color: white;
    transition: all .1s ease;
}
.fa-js:hover {
    color: #f7df1e;
    transform: scale(1.1);
}

.fa-python{
    color: white;
    transition: all .1s ease;
}
.fa-python:hover {
    color: #4584b6;
    transform: scale(1.1);
}

.Hworks {
    background-color: #121212;
    padding-bottom: 100px;
    padding-top: 20px
    
}
.slider {
  position: relative;
  width: 90%;
  max-width: 600px;
  height: 300px;
  overflow: hidden;
  border-radius: 15px;
  box-shadow: 0 0 20px #e74c3c55;
  margin: 0 auto;
}

.Hcontact{
    color: #ffffff;
    background-color: #121212;
    padding-top: 10px;
    padding-bottom: 40px;
    text-align: left;
    align-items: start;
    padding-left: 60px;
}

.slide {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: opacity 0.5s ease;
}

.slide-controls {
  display: block;
}

.slider-controls {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgb(0, 0, 0);
  color: rgb(0, 0, 0);
  border: none;
  font-size: 28px;
  padding: 10px 14px;
  cursor: pointer;
  border-radius: 50%;
  transition: background 0.3s ease;
  z-index: 2;
}


.slider-btn.prev {
  left: 10px;
}

.slider-btn.next {
  right: 10px;
}

:root {
    --logo-light: #000000;
    --bg-light: #ffffff;
    --text-light: #000000;
    --btn-bg-light: #e74c3c;
    --btn-text-light: #ffffff;

    --logo-dark: #ffffff;
    --bg-dark: #000000;
    --text-dark: #ffffff;
    --btn-bg-dark: #ffffff;
    --btn-text-dark: #000000;
}

body.light-theme {
    background-color: var(--bg-light);
    color: var(--text-light);
}

body.light-theme button {
    background-color: var(--btn-bg-light);
    color: var(--btn-text-light);
}

body.light-theme nav {
    background-color: rgba(0, 0, 0, 0.7);
}

body.light-theme .logo {
    color: var(--logo-light);
}

body.dark-theme {
    background-color: var(--bg-dark);
    color: var(--text-dark);
}

body.dark-theme button {
    background-color: var(--btn-bg-dark);
    color: var(--btn-text-dark);
}

body.dark-theme nav {
    background-color: rgba(0, 0, 0, 0.7);
}

body.dark-theme .logo {
    color: var(--logo-dark);
}


body.light-theme .social-links i:hover {
    background-color: var(--btn-bg-light);
    color: var(--text-light);
}

body.dark-theme .social-links i:hover {
    background-color: var(--btn-bg-dark);
    color: var(--text-dark);
}

.theme-toggle {
    background-color: var(--btn-bg-light);
    border-color: var(--btn-bg-light);
    color: var(--btn-text-light);
}

body.dark-theme .theme-toggle {
    background-color: var(--btn-bg-dark);
    border-color: var(--btn-bg-dark);
    color: var(--btn-text-dark);
}

.theme-toggle:hover {
    background-color: var(--btn-text-light);
    color: var(--btn-bg-light);
}

body.dark-theme .theme-toggle:hover {
    background-color: var(--btn-text-dark);
    color: var(--btn-bg-dark);
}

.section-title {
    color:#e74c3c;
}
