
const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className=" w-1/2 md:w-1/3 text-center mx-auto mt-24 mb-12">
            <p className="text-yellow-500 capitalize text-xs md:text-sm">----{subHeading}----</p>
           <h1 className="text-xl md:text-4xl uppercase border-y-2 py-3 font-semibold">{heading}</h1> 
        </div>
    );
};

export default SectionTitle;