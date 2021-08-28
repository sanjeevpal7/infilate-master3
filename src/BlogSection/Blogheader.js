import React,{useContext} from 'react'
import blog from "../images/blog.jpeg"
import {BrowserRouter as Router,Link} from "react-router-dom"
import "./Blog.css"
import { DataContext } from './DataProvider'
import { useState } from 'react'




 function MainBlog() {
    const [data,setData] = useContext(DataContext)
    const [data1, setData1] = useContext(DataContext)
    const [data2, setData2] = useContext(DataContext)
    const [query,setQuery]=useState()
     
   


    const handleBtn = (event) => {
        let word = event.target.value
        if (word === "Most Recent") {
        setQuery(word)
        }
        else if (word === "Technology") {
            setQuery(word)
        }
      else if (word === "Design") {
            setQuery(word)
        }
     else if (word === "Marketing") {
            setQuery(word)
        }
     else if (word === "Sales") {
            setQuery(word)
        }
     else if (word === "productibvity") {
            setQuery(word)
        }
    
      {/*----   let word = e.target.value;
        if (word === "Most Recent") {
            setData(data)

        }
        else if (word === "Technology") {
            const filtered = data.filter(item => item.title =="Technology");
            setData(filtered)
        }
        else if (word === "Sales") {
            const filtered = data.filter(item => item.title == "Sales");
            setData(filtered)
        }---*/}
    }
 
    return (
        <>
            
            {
                data1.slice(2,3).map((main) =>
                    ((
                <div className="main-blog" key={main.id}>
                    <div className="right-blog">
                        <Link to={`/MainBlog/${main.id}`} >     <img src={`http://netdemo.site/infilate/public/images/${main.media } `} alt="image" /></Link>
                    </div>
                    <div className="left-blog">
                        <h1>
                           {main.title}
                        </h1>
                        <h2>{main.title1}</h2>
                                <p>{main.title2}</p>
                        <div className="blog-author">
                            <img style={{ width: "50px", height: "50px", borderRadius: "50%" }} src="https://images.unsplash.com/photo-1484399172022-72a90b12e3c1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" alt="image" />
                            <h1>by Mara Calvello</h1>
                        </div>
            
                    </div>
           
                </div>
                )))}
            <div className="sub-section">
                {
                    data2.slice(2,4).map((item)=>((
                    <div className="header-blog" key={item.id}>
                        <div className="header-blog-image">
                            <img src={`http://netdemo.site/infilate/public/images/${item.media } `} alt="image" />
                        </div>
                        <div className="blog-headings">
                                <h1>{item.title}</h1>
                                <h2>{item.title1}</h2>
                                <p>{item.title2}</p>
                            <div className="blog-author">
                                <img style={{ width: "50px", height: "50px", borderRadius: "50%" }} src="https://images.unsplash.com/photo-1484399172022-72a90b12e3c1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" alt="image" />
                                <h1>by Mara Calvello</h1>
                            </div>
                        </div>

                    </div>
           

                    )))}
        </div>

        <div className="section-blog">
            <div className="heading-blog">
                <h1 style={{marginLeft:"22px"}}>Filter:</h1>
                <button value="Most Recent" onClick={handleBtn}>Most Recent </button>
                  <button value="Design" onClick={handleBtn}>Design</button>
                 <button value="Marketing" onClick={handleBtn}>Marketing</button>
                  <button value="Productibvity" onClick={handleBtn}>Productivity</button>
                  <button value="Sales" onClick={handleBtn}>Sales</button>
                <button value="Technology" onClick={handleBtn}> Tech</button>
            </div>

            <div className="blog-card-head">
                    { 
                         data.map((item) => ((
                            <div className="blog-card" key={item.id}>
                                <a href={`/MainBlog/${item.id}`}  >   <img src={`http://netdemo.site/infilate/public/images/${item.media } `} className="blog-card-image" alt="image" /> </a>
                                <div className="blog-data">
           
                                    <h1>{item.title}</h1>
                                    <h2>{item.title1}</h2>
                                    <p>{item.title2}</p>
                                    <div className="blog-author">
                                        <img style={{ width: "50px", height: "50px", borderRadius: "50%" }} src="https://images.unsplash.com/photo-1484399172022-72a90b12e3c1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" alt="image" />
          
                                        <h1>by Mara Calvello</h1>
                                    </div>

                                </div>
                            </div>
                        )))
                        || data.filter(item => item.title === `${query}`).map((item) => ((
                            <div className="blog-card" key={item.id}>
                                <Link id="main-blog" to={`/MainBlog/${item.id}`}  >   <img src={`http://netdemo.site/infilate/public/images/${item.media } `} className="blog-card-image" alt="image" /> </Link>
                                <div className="blog-data">
           
                                    <h1>{item.title}</h1>
                                    <h2>{item.title1}</h2>
                                    <p>{item.title2}</p>
                                    <div className="blog-author">
                                        <img style={{ width: "50px", height: "50px", borderRadius: "50%" }} src="https://images.unsplash.com/photo-1484399172022-72a90b12e3c1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" alt="image" />
          
                                        <h1>by Mara Calvello</h1>
                                    </div>

                                </div>
                            </div>
                        )))
                    }
            </div>
                
                </div>
        </>

    )
}

export default MainBlog
