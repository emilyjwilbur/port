import React, {useState, useEffect} from "react";
import ProjectItem from '../components/ProjectItem';
import ProjectInfo from '../assets/data/projects';
import styled from "styled-components";
import {MdSearch} from 'react-icons/md';


const ProjectStyles = styled.div`
padding:10rem 0;
.projects_allItems{
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap:5rem;
    margin-top:2rem;
}
.projects_searchBar{
    position: relative;
    width: 300px;
    margin-top: 5rem;
   
}
.projects_searchBar input {
    width: 100%;
    font-size: 18px;
    padding: .8rem;
    border-radius: 6px;
    outline:none;
    border:solid black 2px;
}
.projects_searchBar .searchIcon {
    position: absolute;
    top:20px;
    width: 2rem;
    height: 20px;
    right: 1rem;
}
.projects_searchBar .searchIcon path {
    color: gray;
}
@media only screen and (max-width:768px) {
    .projects_searchBar
    .projects_searchBar form,
    .projects_searchBar input {
        width: 100%;
    }
}
`;




export default function Projects(){

    const [searchText, setSearchText] = useState('');

    const [projectData, setProjectData] = useState(ProjectInfo);

    useEffect(() => {
        if(searchText === '') return;
        setProjectData(() => (
            ProjectInfo.filter( item => (
                item.name.toLowerCase().match(searchText.toLowerCase())
            ))
        ))
    },[searchText])

    function handleChange(e) {
       e.preventDefault();
       setSearchText(e.target.value); 
       if(!e.target.value.length > 0 ){
           setProjectData(ProjectInfo)
       }
    }




    return(
        <ProjectStyles>
        
        <div className="container">
                
                <div className="projects_searchBar">
                    <form>
                        <input type="text" 
                        value={searchText}
                        onChange={handleChange}
                        placeholder='Project name'
                        />
                      <MdSearch className="searchIcon" />
                    </form>
                </div>
                <div className="projects_allItems">
                    {projectData.map( item => (
                        <ProjectItem
                        key={item.id}
                        title={item.name}
                        desc={item.desc}
                        img={item.img}
                        link={item.link}
                        />
                    ) )}
                    
                </div>
            </div>
            </ProjectStyles>
    )
}