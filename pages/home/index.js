
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import LazyLoad from "react-lazyload";
import LayoutHeader from '../../components/header';
function Home (){
    return(
     
        <section className="container">
             <LayoutHeader/>
            <div className="image_cn" > 
            <div>
            <section className="previous">
              {/* <img src="https://drive.google.com/uc?export=view&id=0B6wwyazyzml-OGQ3VUo0Z2thdmc" /> */}
            previous image
            </section>
            <section className="previous">
             next image
            </section>
         
            </div>
            <div className="center_cn">
            <section className="current">
             current imge
            </section>

          
            </div>
            <div>
            <section className="side_icon">
            Mild
            </section> 
            <section className="side_icon">
            Moderate
            </section> 
            <section className="side_icon">
            Severe
            </section> 
            <section className="side_icon">
            Infected
            </section> 
            <section className="side_icon">
            Skip
            </section> 
            </div>
            
          
</div>
<div className="subtitle">
    <div className="subtitle1">
                <h3 >
                Completed:######
            </h3>
            <h3>
                Remaining:######
            </h3>
            </div>
              <section className="subtitle1">
              <LazyLoad><span className="fa__arrow__faCheckCircle"><FontAwesomeIcon icon={faCheckCircle} /></span></LazyLoad>

			{/* <img title="Menu" alt="menuIcon" src="/static/icons/tick1.png" className="img-responsive header__menuicons__img" /> */}
            </section>
            </div>
            <style>
                {
                    `
                    .fa__arrow__faCheckCircle{font-size:52px;color:white;}
                    
                    .subtitle{
                        display:flex;
                        flex-direction:row;
                        align-items: center;
                        margin-left: 96px;
                    }
                    .previous {
                        border-radius: 25px;
                        background: white;
                        color:black;
                        padding: 20px;
                        width: 200px;
                        height: 150px;
                        margin:10px;
                      }
                      .subtitle1{
                        margin-left: 177px;
                        align-items: center;
                        justify-content: center;
                        display: flex;
                        flex-direction: column;
                      }
                      .image_cn{
                        margin: 10px;
                        display: flex;
                        flex-direction: row;
                        align-items: center;
                        justify-content: center;
                      }
                      .center_cn{
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        flex-direction: column;
                      }
                      .current{
                        border-radius: 25px;
                        background: white;
                        color:black;
                        padding: 20px;
                        width: 300px;
                        height: 312px;
                        margin:10px;
                      }
                      .side_icon{
                            border-radius: 15px;
                            background: white;
                            color:black;
                            padding: 20px;
                            width: 170px;
                            height: 50px;
                            margin:10px;
                      }
                      .arrow{
                        top: 924px;
                        left: 869px;
                        width: 125px;
                        height: 127px;
                        background: #D55C61 0% 0% no-repeat padding-box;
                        border: 0.26458001136779785px solid #000000;
                        opacity: 1;
                      }
                      @media(max-width:768px){
                        .subtitle1 {
                          margin-left: 109px;
                        }
                        .subtitle{
                          margin-left: 0px;
                        }
                      }
                    `
                }
            </style>
        </section>
    )
}
export default Home 