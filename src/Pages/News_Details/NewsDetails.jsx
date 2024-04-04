
import { useLoaderData, useParams } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import { useState } from "react";


const NewsDetails = () => {

    const [detail, setDetails] = useState([])

    const {id} = useParams()
    const dataNews = useLoaderData()
    // const check = dataNews.find(ids => ids._id === dataId)
    // console.log(check)


    
    

    return (
        <div>
            <Navbar></Navbar>
            <div className="grid md:grid-cols-4">
                <div className="md:col-span-3">
                    <div className="border">
                        <div className="p-5 space-y-3">
                            <h1 className="text-2xl font-semibold">{id}</h1>
                            <img src="" alt="" />
                            <p className="font-medium text-[#000000be]">Lorem ipsum dolor sit amet.</p>
                            <a className="text-orange-600 font-semibold" href="">Read More</a>
                        </div>

                    </div>
                </div>
                <div className="">
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default NewsDetails;