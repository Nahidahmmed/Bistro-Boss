import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import featuredImg from '../../../assets/home/featured.jpg';
import './Featured.css'

const Featured = () => {
    return (
        <div className="featured-item my-20 bg-fixed  pt-10">
            <SectionTitle subHeading={'check it out'} heading={'Featured Items'}></SectionTitle>
            <div className="md:flex justify-center items-center pb-20 pt-12 px-36 text-white bg-gray-800 bg-opacity-30">
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div className="md:m-10">
                    <p>Aug 20, 2024</p>
                    <p className="uppercase"> Where can I get some?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic a itaque molestias, voluptas sapiente repellendus maiores cumque dolores non illum similique minima ea illo doloremque quae vero sunt recusandae id nesciunt vel. Neque labore cumque sequi? Nesciunt accusamus, fugiat corporis quis vitae, id quod fugit doloremque excepturi quae aliquid. Porro.</p>
                    <button className="btn btn-outline border-0 border-b-4 mt-4">Order Now </button>
                </div>
            </div>
        </div>
    );
};

export default Featured;