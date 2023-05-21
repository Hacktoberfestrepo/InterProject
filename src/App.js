import './App.css';
import Bannerimage from './image/Bannerimage.png';
import Bannerimager from './image/Bannerimager.png';
import baneer1 from './image/baneer1.jpg';
import baneer2 from './image/baneer2.jpg';
import baneer3 from './image/baneer3.jpg';
import baneer4 from './image/baneer4.jpg';
import icon from './image/icon.png';
function App() {
  return (
    <div>
  <div className="banner">
   <div >  <img src={Bannerimage}  className="Bannerimage"alt="Logo"/></div>
   <div > 
    <div className='TextStyle'> Ace Our Single Shot Challenge !<img src={icon} className="bannericon" alt="Logo"/></div>
   <div className='TextStyle2'>Jumpstart Your Career with Our Free Assessment Test: Prove Your Skills and Secure an Internship Today!</div>
   <button className='btn'>Take  A Free Assessment</button>
   <div ><img src={Bannerimager}  className="Bannerimager"/> </div>
   </div>
    </div> 
      <div className='opt'>
     <div className='SecText'>See where our students are interning</div> 
      <div className='Secbanner'>
      <img src={baneer1}   className="baneer1"alt="Logo"/>
      <img src={baneer2}  className="baneer2"alt="Logo"/>
      <img src={baneer3}  className="baneer3"alt="Logo"/>
      <img src={baneer4}  className="baneer4"alt="Logo"/>
      </div>
      </div>
     <div className='leftbox'>
        <div className='textcont'> Content:</div>
        <div className='subcont'>12 lessons• 2hr 3min • </div>
        <div className='dispframe'>
          <div className='frame1'>
            <div className='icon'>1</div>
            <div className='frametext'>Introductory Session (Live class)</div>
            <div className='frametime'>2hr 3min • </div>
          </div>
            <div className='line'></div>
        </div>
        <div className='dispframe'>
          <div className='frame1'>
            <div className='icon'>2</div>
            <div className='frametext'>Getting into the Fundamentals </div>
            <div className='frametime'>2hr 3min • </div>
          </div>
            <div className='line'></div>
        </div>
        <div className='dispframe'>
          <div className='frame1'>
            <div className='icon'>3</div>
            <div className='frametext'>Know your niche</div>
            <div className='frametime'>2hr 3min • </div>
          </div>
            <div className='line'></div>
        </div>
        <div className='dispframe'>
          <div className='frame1'>
            <div className='icon'>4</div>
            <div className='frametext'>The Crux of Search Engine Optimization (SEO) What is SEO?</div>
            <div className='frametime'>2hr 3min • </div>
          </div>
            <div className='line'></div>
        </div>
        <div className='dispframe'>
          <div className='frame1'>
            <div className='icon'>5</div>
            <div className='frametext'>The Key to Keywords</div>
            <div className='frametime'>2hr 3min • </div>
          </div>
            <div className='line'></div>
        </div>
        <div className='dispframe'>
          <div className='frame1'>
            <div className='icon'>6</div>
            <div className='frametext'>Content Marketing - Ensuring the Reach </div>
            <div className='frametime'>2hr 3min • </div>
          </div>
        </div>
          <div className='leftbtn'>View All</div>
      </div>
       <div className='rightwrap'>
        <div className='rightwrapText'>career opportunities :</div>
        <div className='rightwraplist'>
          <ul>
            <li>   Life time access</li>
            <li>   Life time access</li>
            <li>   Life time access</li>
          </ul>
        </div>
      </div>
       <div className='rightwrap1'>
      <div className='rightwrapText'>Skills You Will Learn :</div>
        <div className='rightwraplist1'>
          <ul>
          <li>Content Designing</li>
             <li>Content Adaptation</li>
            <li>  Content Writing as a Career</li>
            <li>  SEO: Understanding search engine optimization (SEO)</li>
          </ul>
        </div>
      </div> 
       <div className='rightwrap2'>
      <div className='rightwrapText'>Course Includes :</div>
        <div className='rightwraplist'>
          <ul>
       <li>  Life time access</li>
            <li>  Certificate of completion</li>
           </ul>
        </div>   
      </div> 
       <button className='botbtn'>Buy Now</button>
      <div className='bottext'>₹1000</div>
      <div className='bottext1'>₹2000 50% offf</div>
      </div> 
  );
}

export default App;


