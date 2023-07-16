import SectionTitle from "../../../components/SectionTitle";
import featuredImg from '../../../assets/Home/featured.jpg'
import './Featured.css'
const Featured = () => {
    return (
        <section className="mt-20 featured-item">
            <div className="px-32 pt-1 pb-20 text-white bg-black bg-opacity-60">
                <SectionTitle
                    subHeading="check it out"
                    heading="featured item"
                ></SectionTitle>
                <div className="items-center justify-center md:flex">
                    <div>
                        <img src={featuredImg} alt="" />
                    </div>
                    <div className="ml-10">
                        <p>  Aug 27, 1990 </p>
                        <p className="uppercase">where can i get some?</p>
                        <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo porro perspiciatis dicta vero accusantium ut voluptatem doloremque facilis natus sint architecto consequatur, doloribus sunt ullam voluptas sequi et cumque obcaecati ad illum. Laborum quasi at vel aliquid. Odit, quam unde, suscipit harum eius assumenda nulla perferendis quasi, eaque facere nemo.</p>
                        <button className="mt-4 text-yellow-500 border-t-0 border-b-4 border-s-0 border-e-0 btn btn-outline hover:text-white">Read More</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Featured;