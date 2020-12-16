import React from 'react';
import { Switch, Route } from 'react-router-dom';

//pages
import Home from '../components/pages/home/Home';
import About from '../components/pages/about/About';
import Contact from '../components/pages/contact/Contact';
import GioiThieu from '../components/pages/gioithieu/Gioithieu';
import DieuKhoan from '../components/pages/dieukhoan/dieuKhoan';
import ChatLuong from '../components/pages/chatluong/chatLuong';
import LienHe from '../components/pages/lienhe/lienHe';
import Login from '../components/pages/login/login';





function Router () {
    return (
        <Switch>
            <Route path="/login" component={Login} />
            <Route path="/lienHe" component={LienHe} />
            <Route path="/chatluong" component={ChatLuong} />
            <Route path="/dieukhoan" component={DieuKhoan} />
            <Route path="/gioithieu" component={GioiThieu} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/" component={Home} />
        </Switch>
    );
}
export default Router;