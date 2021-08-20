import React, { createContext, useEffect, useState } from 'react';
import { URL, consumer_key, consumer_secret, featured_Products } from "./api";
import WooCommerceAPI from "woocommerce-api";
import axios from "axios";

export const GlobalContext = createContext();

var WooCommerce = new WooCommerceAPI({
    url: URL,
    consumerKey: consumer_key,
    consumerSecret: consumer_secret,
    wpAPI: true,
    version: 'wc/v3',
    queryStringAuth: true
});
const MainContext = ({ children }) => {
    const cart = JSON.parse(localStorage.getItem('cart'))
    const [state, setState] = React.useState({
        left: false,
    });
    const [products, setProducts] = useState([]);
    const [productDetail, setDetail] = useState({});
    const [backdropOpen, setOpen] = useState(false);
    const [faqDisplay, setDisplay] = useState("one");
    const [blogData, setBlogData] = useState([]);
    const [productCategory, setCategory] = useState([]);
    const [checked, setChecked] = React.useState([]);
    const [brandSearch, SetBrandSearch] = useState('');
    const [cartData, setCartData] = useState(cart && cart);
    const [featuredProductsState, setFeaturedproducts] = useState([]);
    const [categoryInfo, setCategoryInfo] = useState(null);

    useEffect(() => {
        GetProductsFirst();
        // getBlogs();
        featuredProducts();
    }, [])

    // get featured products
    const featuredProducts = async () => {
        const { data } = await axios.get(featured_Products);
        if (data) return setFeaturedproducts(data);
    }

    // Get Products Data from Backkend as per page 20
    const GetProductsFirst = () => {
        startLoading();
        WooCommerce.getAsync(`products?per_page=50&page=1`).then(function (result) {
            if (result) {
                EndLoading();
                return setProducts(JSON.parse(result.toJSON().body));
            }
        });
    }
    // Update state for Products Pagination 
    const gettingChangeProducts = (page) => {
        startLoading();
        WooCommerce.getAsync(`products?per_page=50&page=${page}`).then(function (result) {
            if (result) {
                EndLoading();
                return setProducts(JSON.parse(result.toJSON().body));
            }
        });
    }
    console.log(products)
    // Get Blog Post Data from Bcakend
    const getBlogs = async () => {
        startLoading();
        const URL = `https://firewallforce.se/wp-json/wc/v3/filter?category=router`;
        const { data } = await axios.get(URL);
        if (data) {
            EndLoading();
            setBlogData(data);
        }
    }

    const getAllProductCategories = (category, page) => {
        console.log(category, page);
        // startLoading();
        axios.get(`https://firewallforce.se/wp-json/wc/v3/filter?category=${category}&limit=50&page=${page}`)
            .then(res => {
                if (res.data) {
                    EndLoading();
                    console.log(res.data);
                    setCategory(res.data.Proucts?.products)
                    setCategoryInfo(res.data.categoryInfo);
                }
            })
    }

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setState({ ...state, [anchor]: open });
    };

    const setProductDetail = (product) => {
        setDetail(product);
    }

    const startLoading = () => {
        setOpen(true);
    }

    const EndLoading = () => {
        setOpen(false);
    }

    const faqDisplayChangeFunc = (view) => {
        setDisplay(view);
    }
    // filter checkBox categories
    const handleToggle = (value) => () => {
        if (checked.includes(value)) {
            let IndexOf = checked.indexOf(value);
            let newArray = checked.filter((item, index) => index !== IndexOf);
            setChecked(newArray);
        }
        else {
            setChecked([...checked, value]);
        }
    };

    return <GlobalContext.Provider value={{
        faqDisplay, checked, blogData, productCategory, handleToggle, getAllProductCategories, faqDisplayChangeFunc,
        state, backdropOpen, toggleDrawer, products, setProductDetail, productDetail,
        gettingChangeProducts, cartData, setCartData, categoryInfo,
        brandSearch, SetBrandSearch, featuredProductsState
    }}>
        {children}
    </GlobalContext.Provider>
}

export default MainContext;




import React from 'react';
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import MainContext from "./component/Context/Context";
import Footer from "./component/Footer/Footer";
import Drawer from "./component/Drawer/Drawer";
import Header from "./component/Header/index";
import Home from "./component/Home/index";
import Blog from "./component/Blog/index";
import Architecturer from "./component/Architecturer/index";
import SuccessStory from "./component/SuccessStory/index";
import FAQ from "./component/FAQ/index";
import Resource from './component/Resources/index';
import Eqipments from './component/Eqipments/index';
import Products from './component/Products/index';
import AboutUs from './component/AboutUs/index';
import ContactUs from './component/ContactUs/index'
import Model from './component/Model/index'
import DataCenter from './component/DataCenter/index'
import Brand from './component/Brand/index'
import ProductDetailPage from './component/ProductDetailPage/index'
import Fixed from './component/FixedComp/Fixed';
import Backdrop from "./component/Backdrop/Backdrop";
import Cart from "./component/Cart/Cart";

const App = () => {
    return (
        <MainContext>
            <BrowserRouter>
                <Header />
                <Drawer />
                <Fixed />
                <Backdrop />
                <Switch>
                    <Route exact path="/" exact component={Home} />
                    <Route path="/blog" component={Blog} />
                    <Route path="/solutions" component={Architecturer} />
                    <Route path="/services" component={SuccessStory} />
                    <Route path="/detailpage" component={ProductDetailPage} />
                    <Route path="/faq" component={FAQ} />
                    <Route path="/model" component={Model} />
                    <Route path="/aboutus" component={AboutUs} />
                    <Route path="/contactus" component={ContactUs} />
                    <Route path="/brand" component={Brand} />
                    <Route path="/datacenter" component={DataCenter} />
                    <Route path="/resource" component={Resource} />
                    <Route path="/equipment" component={Eqipments} />
                    <Route path="/products" component={Products} />
                    <Route path="/cart" component={Cart} />
                </Switch>
                <Footer />
            </BrowserRouter>


        </MainContext>
    )
}

export default App;