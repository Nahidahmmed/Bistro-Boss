
import { useEffect, useState } from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import MenuItems from "../../../Shared/MenuItems/MenuItems";
const PopularMenu = () => {
    const [menu, setMenu] = useState([]);
    useEffect(()=>{
        fetch('Menu.json')
        .then(res => res.json())
        .them(data => {
            const PopularItems = data.filter(item => item.category === 'popular');
            setMenu(PopularItems)})
    },[])

    return (
        <section>
            <SectionTitle
        heading={"From our Menu"}
        subHeading={"Popular items"}
        ></SectionTitle>
        {
            menu.map(item => <MenuItems 
               key={item._id}
               item={item}
            ></MenuItems>)
        }
        </section>
    );
};

export default PopularMenu;