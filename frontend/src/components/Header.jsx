import React from "react";
import '../styles/Header.css';

const Header = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen((prev) => !prev);

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector(".header");
      if (window.scrollY > 0) {
        header.classList.add("sticky");
      } else {
        header.classList.remove("sticky");
      }
    };
  
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  

  return (
    <header className="header">
      <div className="container">
        <h1>Welcome to Shoe Haven</h1>
        <p>Find the perfect shoes for every occasion!</p>
      </div>
    </header>
  );
};

export default Header;
