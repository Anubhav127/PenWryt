import React from "react";
import { Container, Logo, LogoutBtn } from "../index";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Header() {
  const authStatus = useSelector((state) => state.auth?.status);
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const navItems = [
    {
      name: "Home",
      slug: "/",
      active: true,
    },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
    },
    {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
    },
    {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
    },
    {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
    },
  ];

  return (
    <header className="py-4 shadow-lg bg-gradient-to-r from-gray-900 to-gray-800 sticky top-0 z-50">
      <Container>
        <nav className="flex items-center justify-between relative">
          {/* Logo */}
          <div className="mr-4 transform hover:scale-105 transition-transform duration-200">
            <Link to="/">
              <Logo width="80px" />
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2 rounded-lg text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400 transition-all duration-200"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={
                  isMobileMenuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>

          {/* Navigation Items */}
          <ul
            className={`absolute lg:relative top-full left-0 w-full lg:w-auto
              ${isMobileMenuOpen ? "block" : "hidden"} lg:block
              lg:flex lg:items-center lg:space-x-1
              bg-gray-800 lg:bg-transparent
              mt-2 lg:mt-0 p-4 lg:p-0
              rounded-lg lg:rounded-none
              shadow-xl lg:shadow-none
              transition-all duration-200 ease-in-out
              z-50
            `}
          >
            {navItems.map(
              (item) =>
                item.active && (
                  <li key={item.name} className="mb-2 lg:mb-0">
                    <button
                      onClick={() => {
                        navigate(item.slug);
                        setIsMobileMenuOpen(false);
                      }}
                      className="w-full lg:w-auto block px-6 py-2.5 text-white
                        font-medium tracking-wide
                        hover:bg-blue-600 hover:text-white
                        rounded-lg transition-all duration-200
                        bg-transparent hover:shadow-lg
                        text-center"
                    >
                      {item.name}
                    </button>
                  </li>
                )
            )}
            {authStatus && (
              <li className="mt-2 lg:mt-0">
                <LogoutBtn />
              </li>
            )}
          </ul>
        </nav>
      </Container>
    </header>
  );
}

export default Header;
