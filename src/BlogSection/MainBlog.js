import React from 'react'
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom'
import BlogHead from './BlogHead'
import BlogHeader from "./Blogheader"
import {DataProvider} from "./DataProvider"

function MainBlog() {
    return (
       <>
      <DataProvider>
       <Router>
           <Switch>
                    <Route exact  path="/MainBlog" component={BlogHeader} />
                        <Route path="/MainBlog/:id" component={BlogHead} />
                       
                    
              
           </Switch>
                </Router>
                </DataProvider>
       </>
    )
}

export default MainBlog
