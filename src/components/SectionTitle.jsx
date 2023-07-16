
const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="w-1/2 mx-auto mt-24 mb-12 text-center md:w-1/3">
            <p className="mb-1 text-xs text-yellow-500 capitalize md:text-sm">----{subHeading}----</p>
           <h1 className="py-3 text-xl font-semibold uppercase md:text-4xl border-y-2">{heading}</h1> 
        </div>
    );
};

export default SectionTitle;