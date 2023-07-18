// Parallax
import { Parallax } from 'react-parallax';
const Cover = ({ img, title, subTitle }) => {
    return (
        <div>
            <Parallax
                blur={{ min: -20, max: 20 }}
                bgImage={img}
                bgImageAlt="the dog"
                strength={-200}
            >
                <div className="h-[650px]  hero">
                    <div className="bg-opacity-0 hero-overlay"></div>
                    <div className="w-full text-center hero-content text-neutral-content">
                        <div className="w-[80%] py-20 bg-black opacity-60">
                            <h1 className="mb-5 font-bold text-white uppercase text-8xl">{title}</h1>
                            <p className="px-6 mb-5 text-xl text-white uppercase">{subTitle}</p>
                        </div>
                    </div>
                </div>
            </Parallax>

        </div>
    );
};

export default Cover;