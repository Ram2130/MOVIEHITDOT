import React from "react";
import { NavLink, Link } from "react-router-dom";
import { useAuth, AuthProvider } from "../../context/auth";
import toast from "react-hot-toast";
import SearchInput from "../Form/SearchInput";
import useCategory from "../../hooks/useCategory";
import { useCart } from "../../context/cart";
import { Badge } from "antd";
import WelcomePageBanner from "../../pages/images/WelcomePageBanner.jpg"
import Search from "../../pages/images/Search (1).png"
const Header = () => {
  const [auth, setAuth] = useAuth();
  const [cart] = useCart();
  const categories = useCategory();
  const handleLogout = () => {
    setAuth({
      ...auth,
      user: null,
      token: "",
    });
    localStorage.removeItem("auth");
    toast.success("Logout Successfully");
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg  bg-body-tertiary "   style={{height:"550px"}} >
        

          <div
            style={{
              background: `linear-gradient(0deg, hsl(0deg 0% 0% / 73%) 0%, hsl(0deg 0% 0% / 73%) 35%),url(${WelcomePageBanner})`,
              backgroundSize:"contain" 
            }}
            className="h-[32rem] w-full sm:h-[65vh] xl:h-[80vh] bg-slate-800 relative"
          >
          <div className="container-fluid"    >
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <Link to="/" className="navbar-brand" style={{color:"#dc3545"}}>
            HitMovieDot
            </Link>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
           

           
              <li className="nav-item">
                <NavLink to="/" className="nav-link " style={{color:"#dc3545"}} >
                  Home
                </NavLink>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to={"/categories"}
                  data-bs-toggle="dropdown"
                  style={{color:"#dc3545"}}
                >
                  Categories
                </Link>
                <ul className="dropdown-menu" style={{backgroundColor:"black"}}>
                  <li>
                    <Link className="dropdown-item" to={"/categories"} style={{color:"#dc3545"}}>
                      All Categories
                    </Link>
                  </li>
                  {categories?.map((c) => (
                    <li>
                      <Link
                      style={{color:"#dc3545"}}
                        className="dropdown-item"
                        to={`/category/${c.slug}`}
                      >
                        {c.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>

              {!auth?.user ? (
                <>
                  <li className="nav-item">
                    <NavLink to="/register" className="nav-link" style={{color:"#dc3545"}}>
                      Register
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/login" className="nav-link" style={{color:"#dc3545"}}>
                      Login
                    </NavLink>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item dropdown">
                    <NavLink
                      className="nav-link dropdown-toggle"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      style={{ border: "none" , color:"#dc3545" }}
                    
                    >
                      {auth?.user?.name}
                    </NavLink>
                    <ul className="dropdown-menu" style={{backgroundColor:"black"}}>
                      <li>
                        <NavLink
                          to={`/dashboard/${
                            auth?.user?.role === 1 ? "admin" : "user"
                          }`}
                          className="dropdown-item"
                          style={{color:"#dc3545"}}
                        >
                          Dashboard
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          onClick={handleLogout}
                          to="/login"
                          className="dropdown-item"
                          style={{color:"#dc3545"}}
                        >
                          Logout
                        </NavLink>
                      </li>
                    </ul>
                  </li>
                </>
              )}
              
            </ul>
          </div>

            <div className="grid content-center justify-center h-full justify-items-center" style={{marginTop:"170px"}}>
              <div className="w-10/12 text-center sm:w-11/12 md:w-40rem">
                
       
                  <h1 style={{fontFamily: "Netflix Sans, Helvetica Neue, Segoe UI, Roboto, Ubuntu, sans-serif"}} className="mb-3 text-3xl font-semibold text-center text-white sm:text-4xl md:text-6xl">
                    Unlimited movies,
                  </h1>
                  <h1 style={{fontFamily: "Netflix Sans, Helvetica Neue, Segoe UI, Roboto, Ubuntu, sans-serif"}} className="mb-3 text-3xl font-semibold text-center text-white sm:text-4xl md:text-6xl">
                     TV shows and more.
                  </h1>
                  <h1 className="mb-4 text-xl text-center text-white text-stone-200 font-light sm:text-2xl">
                    Watch anywahere.Cancel anytime
                  </h1>

                   <SearchInput />
                  <h1 className="mb-2 text-center text-white text-stone-200 font-light sm:text-xl sm:mb-8">
                    Ready to watch? Enter your email to create or restart your
                    membership.
                  </h1>
                  {/* <div>
                    <input
                      placeholder="Email Address"
                      className="w-full p-2 py-3 rounded-sm sm:py-4 md:py-5 md:w-3/4"
                    />
                    <Link to={"/signup"}>
                      <button className="px-4 py-2 mt-3 font-medium text-white bg-#dc3545-700 rounded-sm sm:py-4 md:mt-0 md:pb-5 md:text-xl md:w-1/4">
                        Get Started
                      </button>
                    </Link>
                  </div> */}
               
              </div>
            </div>
            <div
              style={{
                backgroundImage:
                  "linear-gradient(hsl(0deg 0% 0% / 0%), hsl(0deg 0% 0% / 38%), hsl(0deg 0% 7%))",
              }}
            ></div>
          </div> 
        </div>
      </nav>
    </>
  );
};

export default Header;