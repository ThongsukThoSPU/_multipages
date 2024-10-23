import './Home.css'
import stdempimg from '../Home/img/stdempimg.jpg'

function Home() {
    return ( 
    <div className='home-container'>
        <div className="self-img">
         <img src={stdempimg} alt="Self Image" style={{ maxWidth: '100%', height: 'auto' }}  />
      </div>
      <div className="passage-box1">
        <h4>
          <span className="highlight">Name :</span> Thongsuk Thonglamun <br />
          <span className="highlight">Nickname :</span> Heng <br />
          <span className="highlight">Age :</span> 19 <br />
          <span className="highlight">Educational Institution :</span> Sripathum University <br />
          <span className="highlight">Faculty :</span> Information Technology <br />
          <span className="highlight">Department :</span> Computer Science and Software Development Innovation
        </h4>
      </div>
      <div className="passage-box2">
        <h5>
        Hello, my name is Thongsuk, I am currently a student studying Computer Science in Sripratum University, I am steady improving my skills in traditional HTML/CSS/JS and React web application.<br></br> I hope to become a full-stack developer in the future.
        </h5>
      </div>
    </div> );
}

export default Home;