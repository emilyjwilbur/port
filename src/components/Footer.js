import React from "react";
import FooterCol from "./FooterCol";

export default function Footer(){

    return(
       <>

<div className="footer">
                <div className="footer_col1">
                    <h1 className="footer_col1_title">Emily Wilbur</h1>
                    <p className="footer-desc">I'm a web developer from Atlanta, Georgia. I make websites that have unique designs and good performance rates.</p>
                    </div>
                    <div className="footer_col2">
                       
                        <FooterCol  heading="" 
                        links={
                           [ 
                            {
                                title:"Home",
                                path:"/",
                                type:'Link'
                            },
                            {
                                title:"About",
                                path:"/about",
                                type:'Link'
                            },
                            {
                                title:"Projects",
                                path:"/projects",
                                type:'Link'
                            },
                            {
                                title:"Contact",
                                path:"/contact",
                                type:'Link'
                            }
                        ]
                        }
                        
                        />
  
                    </div>
                    <div className="footer_col3">
                        <FooterCol 
                            heading="Contact Info"
                            links={
                                [
                                    {
                                        title:"770.286.1039",
                                        path:'tel:7702861039',
                                    },
                                    {
                                        title:"ewilbur94@gmail.com",
                                        path:'mailto:ewilbur94@gmail.com',
                                    },
                                    {
                                        title:"Atlanta, GA",
                                        path:'http://google.com/maps',
                                    }
                                ]
                            }
                        />
                    </div>
                    <div className="footer_col4">
                        <FooterCol 
                         heading="Social Links"
                         links={
                             [
                                 {
                                     title:"LinkedIn",
                                     path:'https://www.linkedin.com/in/emilyjwilbur/',
                                 },
                                 {
                                     title:"GitHub",
                                     path:'https://github.com/emilyjwilbur',
                                 }
                             ]
                         }/>
                    </div>
                </div>
           
           <div className="copyright">
               <div className="container">
                   <p>
                     © 2024 - Emily Wilbur | Made with ♥ in ATL. </p>

               </div>

           </div>

       </>
    )
}