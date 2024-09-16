

const Categories = ({category}) => {
    const {id, logo, category_name, availability} = category;
    return (
        <div>
                <div className="card p-6 bg-sky-50 w-[300px] h-[240px] shadow-xl">
                 
                        <img className=" py-4 px-2 rounded-xl bg-purple-100  w-[50px] shadow-xl rounded" src={logo} alt="Shoes" />
                  
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">{category_name}</h2>
                        <p>{availability}</p>
                    </div>
                </div>
        </div>
    );
};

export default Categories;