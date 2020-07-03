import React from 'react'
import {NavBar, SideBar, Popular, TopRated, UpComing,Action, Adventure, Animation, Comedy, Crime, Documentary, Drama, Family, Fantasy, History, Horror, Music, Mystery, Romance, ScienceFiction, Thriller, TvMovie, War, Western} from './component';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

const App = () => {
    return (
        <>
            <Router>
                <NavBar/>
                <SideBar/>
                <Switch>
                    <Route component={Popular} path='/discover/popular'/>
                    <Route component={TopRated} path='/discover/topRated'/>
                    <Route component={UpComing} path='/discover/upcoming'/>

                    <Route component={Action} path='/genre/action'/>
                    <Route component={Adventure} path='/genre/adventure'/>
                    <Route component={Animation} path='/genre/animation'/>
                    <Route component={Comedy} path='/genre/comedy'/>
                    <Route component={Crime} path='/genre/crime'/>
                    <Route component={Documentary} path='/genre/documentary'/>
                    <Route component={Drama} path='/genre/drama'/>
                    <Route component={Family} path='/genre/family'/>
                    <Route component={Fantasy} path='/genre/fantasy'/>
                    <Route component={History} path='/genre/history'/>
                    <Route component={Horror} path='/genre/horror'/>
                    <Route component={Music} path='/genre/music'/>
                    <Route component={Mystery} path='/genre/mystery'/>
                    <Route component={Romance} path='/genre/romance'/>
                    <Route component={ScienceFiction} path='/genre/sciencefiction'/>
                    <Route component={Thriller} path='/genre/thriller'/>
                    <Route component={TvMovie} path='/genre/tvmovie'/>
                    <Route component={War} path='/genre/war'/>
                    <Route component={Western} path='/genre/western'/>
                </Switch>
            </Router>
        </>
    )
}

export default App;
