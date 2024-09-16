import { useEffect, useState } from "react";
import Categories from "../Category/Categories";





const JobCategory = () => {

    const [categories, setCategories] = useState([]);
    useEffect(()=>{
        fetch('categories.json')
        .then(res => res.json())
        .then(data => setCategories(data))
    }, [])

    return (
        <div className="mt-16">
            <h2 className="text-5xl text-center mb-3 font-medium ">Job Category List: {categories.length}</h2>
            <p className="text-center">Explore thousands of job opportunities with all the information you need. Its your future</p>

            <div className="flex mt-8 gap-4">
                {
                    categories.map(category => <Categories key={category.id} category={category}></Categories>)
                }
            </div>
            
        </div>
    );
};

export default JobCategory;