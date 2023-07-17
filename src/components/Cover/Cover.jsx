
const Cover = ({img, title, subTitle}) => {
    return (
        <div>
            <div className="h-[700px] hero" style={{ backgroundImage: `url(${img})` }}>
                <div className="bg-opacity-0 hero-overlay"></div>
                <div className="text-center hero-content text-neutral-content">
                    <div className="py-20 bg-black opacity-60 px-60">
                        <h1 className="mb-5 font-bold text-white uppercase text-8xl">{title}</h1>
                        <p className="mb-5 text-xl text-white uppercase">{subTitle}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cover;