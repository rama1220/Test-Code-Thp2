import { useEffect } from "react";
import Footer from "./Footer";
// import { useAuth } from "../Context/AuthContext";

export default function Menu() {
  /* const { menuData } = useAuth(); */
  const menu = JSON.parse(localStorage.getItem("DataMenu"));

  useEffect(() => {
    const menuList = document.querySelector(".menu-title ul");
    const menuItems = document.querySelectorAll(".menu-title ul li");

    menuItems.forEach((item) => {
      item.addEventListener("click", () => {
        const selectedItem = item;
        const scrollContainer = menuList.parentElement;
        const scrollAmount = selectedItem.offsetLeft - scrollContainer.clientWidth / 2 + selectedItem.clientWidth / 2;
        scrollContainer.scrollTo({ left: scrollAmount, behavior: "smooth" });
      });
    });
  }, []);

  return (
    <>
      <div className="container-page">
        <div className="bg-header">
          <h3>Menu</h3>
        </div>
        <div className="menu-title">
          <ul>
            {menu?.result?.categories?.map((category, index) => (
              <li key={index}>{category.category_name}</li>
            ))}
          </ul>
        </div>

        <div className="menu-item">
          {menu?.result?.categories?.map((category, index) => (
            <div key={index} className="menu-title-item">
              <h4>{category.category_name}</h4>
              <div className="menu-list">
                {category.menu.map((item, itemIndex) => (
                  <div key={itemIndex} className="menu-item-list">
                    <div className="image-menu">
                      <img src={item.photo} alt={item.name} />
                    </div>
                    <div className="disc-menu">
                      <h5>{item.name}</h5>
                      <p>{item.description.slice(1, 30)}...</p>
                    </div>
                    <div className="price-menu">
                      <p>{item.price}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <Footer />
      </div>
    </>
  );
}
