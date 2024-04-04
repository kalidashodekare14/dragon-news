import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const LeftSideNav = () => {
    const [categories, setCategories] = useState([])
    const [leftSide, setLeftSide] = useState([])

    useEffect(() => {
        fetch('categories.json')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])


    useEffect(() => {
        fetch('leftSide.json')
            .then(res => res.json())
            .then(data => setLeftSide(data))
    }, [])

    


    return (
        <div>
            <h1 className="text-2xl font-semibold">All Categories</h1>
            <div className="flex flex-col items-start text-3xl p-5">
                {
                    categories.map(cate =>
                        <div key={cate.id}>
                            <NavLink className="text-[20px]">{cate.name}</NavLink>
                        </div>)
                }
            </div>
            <div>
                {
                    leftSide.map(left =>
                        <div key={left.id}>
                            <div className="card  bg-base-100">
                                <figure><img src={left.image} alt="Shoes" /></figure>
                                <div className="card-body">
                                    <h2 className="text-2xl">{left.title}</h2>
                                    <div className="flex items-center space-y-2">
                                        <p className="font-poppins">{left.categories[0]}</p>
                                        <p className="font-poppins" >{left.date}</p>
                                    </div>
                                </div>
                            </div>
                        </div>)
                }
            </div>
        </div>
    );
};

export default LeftSideNav;