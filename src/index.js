import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { LocaleProvider } from 'antd';
import zh_CN from '../node_modules/antd/lib/locale-provider/zh_CN';
import PrimaryLayout from './layout/index';
import Page from './utils/Page';
import './index.scss';
var direction;
if(Page.getPageInfo().index==='frame'){
    direction="/myblog/frame";
}
else if(Page.getPageInfo().index==='css'){
    direction="/myblog/css";
}
else if(Page.getPageInfo().index==='js'){
    direction="/myblog/js";
}
else if(Page.getPageInfo().index==='study'){
    direction="/myblog/study";
}
else{
    direction="/myblog/html";
}
ReactDOM.render(
    <LocaleProvider locale={zh_CN}>
        <Router> 
            <Switch>    
                <Route path="/myblog" component={PrimaryLayout} />
                <Redirect to={direction}/>
            </Switch>
        </Router>
    </LocaleProvider>
    ,document.getElementById('root'));
