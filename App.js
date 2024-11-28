

function App() {
  return (
    
    <>
    <section id="home">
       <header>

    <h1 id="logo"> Online Course</h1>


    <nav id="menu">
        <ol>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#course">Course</a></li>
        <li><a href="#reviews">Reviews</a></li>
        <li><a href="#contact">Contact</a></li>
    </ol>
    </nav>


    <div class="btn">
        <a href="#home">JOIN</a>
        <a href="#home">LOGIN</a>
    </div>
</header>


<div id="title1">
    <div class="content">
            <h1>Online learning<br></br> platform</h1>
            <p><i class="fa fa-bookmark-o" style={{size:'25px',color:'rgb(245, 239, 239)'}}></i> Build skills with courses, certificates, 
            and degrees online from world-class universities and companies</p>
            <div class="join_btn">
                <a href="#home">JOIN FOR FREE</a>
            </div>
    </div>
    <div class="title_logo"> 
        <img src="image\logo.png" alt="title_logo"></img>
    </div>
</div>

</section>

<section id="about">
    

     <header>
        <div class="aboutbox">
            <div><i class="fa fa-book"></i></div>
            <div class="abtcontent">
               <p><b> 90 <sub>+</sub> Courses : <br></br> </b>
                The automated process all your website tasks.</p>
            </div>
        </div>
        <div class="aboutbox">
            <div><i class="material-symbols-outlined">
               
            </i></div>
            <div class="abtcontent">
                <p> <b>Expert instructors : <br></br> </b>
                The automated process all your website tasks.</p>
            </div>
        </div>
        <div class="aboutbox">
            <div><i class="material-symbols-outlined">
               
            </i></div>
            <div class="abtcontent">
                <p><b>Life time access : <br></br></b>
                The automated process all your website tasks.</p>
            </div>
        </div>
     </header>


     <div id="aboutfeature">
        <h1>
            Learn new skills online with top educators
        </h1>

        <p>
            The automated process all your website tasks. Discover tools and techniques to engage effectively with vulnerable children and young people.
        </p>
        
        <ol>
            <li>Techniques to engage effectively with vulnerable children and young people.</li>
            <li>Join millions of people from around the world learning together.</li>
            <li>Join millions of people from around the world learning together. Online learning is as easy and natural.</li>
        </ol>
     </div>

</section>

<section id="course">  
    <header>
      
        <div class="head">
            Our Features Courses
        </div>
       
       <div class="search-bar">
                <input type="text" class="Search-text" placeholder="Search" title="search-bar"></input>
               
                <button class="search-btn">
                   
                    <i class="fa fa-search"></i>
                </button>
       </div>

    </header>
   
    <div class="coursegalary">

        <div class="crsimg">
            <img src="image\webdevelopment.png" alt="web development Course"></img>
            <h5>Web Development</h5>
        </div>
        <div class="crsimg">
            <img src="image\UIUX.png" alt="UI UX Course"></img>
            <h5>UI & UX</h5>
        </div>
        <div class="crsimg">
            <img src="image\AI.png" alt="AI Course"></img>
            <h5>AI</h5>
        </div>
        <div class="crsimg">
            <img src="image\backend.png" alt="backend development Course"></img>
            <h5>Backend Development</h5>
        </div>
        <div class="crsimg">
            <img src="image\frontend.png" alt="frontend development Course"></img>
            <h5>Frontend Development</h5>
        </div>
        <div class="crsimg">
            <img src="image\mysql.png" alt="mysql Course"></img>
            <h5>Mysql</h5>
        </div>
        <div class="crsimg">
            <img src="image\DataAnalysis.png" alt="DataAnalysis Course"></img>
            <h5>Data Analysis</h5>
        </div>
        <div class="crsimg">
            <img src="image\testing.png" alt="testing Course"></img>
            <h5>Testing</h5>
        </div>
        
    </div>
    <div class="morebtn">
        <button>Find Out More</button>
    </div>

</section>


<section id="reviews">
    <header>
        <h1>User Reviews</h1>
    </header>
    <div class="review">
        <div class="users">
            <div class="profile"><img src="/IMAGE/user1.jpg" alt="user1"></img></div>
            <div class="content">Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                 In neque voluptatibus qui tempora id optio officia quam nihil aperiam a.</div>
            <div class="name">John Deo</div>
          
    
        </div>
        <div class="users">
            <div class="profile"><img src="/IMAGE/user2.jpg" alt="user2"></img></div>
            <div class="content">Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                In neque voluptatibus qui tempora id optio officia quam nihil aperiam a.</div>
            <div class="name">William</div>
            
        </div>
        <div class="users">
            <div class="profile"><img src="/IMAGE/user3.jpg" alt="user3"></img></div>
            <div class="content">Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                In neque voluptatibus qui tempora id optio officia quam nihil aperiam a.</div>
            <div class="name">Margaret</div>
           
        </div>
    </div>
</section>


<section id="contact">
   
    <form class="cntfrm">
        <div class="caption">
           <u> Contact Form </u>
        </div>
        <div class="cntrow">
            <div class="col">
                <label for="Name">Name</label>
            </div>
            <div class="col">
                <input type="text" placeholder="Please Enter your Name : " required class="input name" title="Name"></input>
            </div>
        </div>
        <div class="cntrow">
            <div class="col">
                <label for="Email">Email ID</label>
            </div>
            <div class="col">
                <input type="email" placeholder="Please Enter your Email ID : " required class="input email" title="Email ID"></input>
            </div>
        </div>
        <div class="cntrow">
            <div class="col">
                <label for="EmailSub">Email Subject</label>
            </div>
            <div class="col">
                <input type="text" placeholder="Please Enter your Email Subject : " required class="input subject" title="Email Subject"></input>
            </div>
        </div>
        <div class="cntrow">
            <div class="col">
                <label class="message">Message</label>
            </div>
            <div class="col">
                <textarea name="textarea" id="textarea" required class="input message" title="Message"></textarea>
            </div>
        </div>
        <div class="cntrow">
            <div class="col">
                <input class="cntbtn" type="submit" value="Submit" onClick="send()"></input>
            </div>
            <div class="col">
                <input class="cntbtn" type="reset" value="Reset"></input>
            </div>
        </div>

    </form>
</section>
    </>

  );
}

export default App;

