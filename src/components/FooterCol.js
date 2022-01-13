import React from "react";
import {Link} from 'react-router-dom'

export default function FooterCol({
    heading = 'col heading',
    links = [
        {
            type:"Links",
            title:"Home",
            path:"/home"
        },
        {
            type:"Links",
            title:"About",
            path:"/about"
        },
        {
            type:"Links",
            title:"Projects",
            path:"/projects",
        }
    ]
}) {
    return(
       <><h1 className="footer-heading">{heading}</h1><ul className="ul-footer">
            {links.map((item, index) => (
                <li className="li-footer" key={index}>
                    {item.type === 'Link' ? (
                        <Link to={item.path}>{item.title}</Link>
                    ) : [
                        <a className="a-footer" href={item.path} target='_blank' rel="noreferrer">{item.title}</a>
                    ]}
                </li>
            ))}
        </ul></>
    )
}