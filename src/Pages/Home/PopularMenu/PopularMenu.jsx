

import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import MenuItems from "../../../Shared/MenuItems/MenuItems";
import useMenu from "../../../Hooks/UseMenu";
const PopularMenu = () => {
    const [menu,loading] = useMenu();
    const popularItems = menu.filter(item => item.category === 'popular');
    // const [menu, setMenu] = useState([]);
    // useEffect(() => {
    //     fetch('menu.json')
    //     .then(res => res.json())
    //         .then(data => {
    //             const popularItems = data.filter(item => item.category === 'popular');
    //             setMenu(popularItems)
    //         })
    // }, [])

    return (
        <section className="mb-12">
            {loading}
            <SectionTitle
                heading={"From our Menu"}
                subHeading={"Popular items"}
            ></SectionTitle>
           <div className="grid md:grid-cols-2 gap-10">
           {
                popularItems.map(item => <MenuItems
                    key={item._id}
                    item={item}
                ></MenuItems>)
            }
           </div>
           <button className="btn btn-outline border-0 border-b-4 mt-16 "> View Full Menu</button>
        </section>
    );
};

export default PopularMenu;