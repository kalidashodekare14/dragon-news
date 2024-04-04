import { useEffect, useState } from "react";
import Header from "../Shared/Header/Header";
import LeftSideNav from "../Shared/LeftSideNav/LeftSideNav";
import Navbar from "../Shared/Navbar/Navbar";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import BreakingNews from "./BreakingNews/BreakingNews";
import { CiBookmark } from "react-icons/ci";
import { CiShare2 } from "react-icons/ci";
import { FaEye } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";


const Home = () => {

    const  getNews  = useLoaderData()
    console.log(getNews)

    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="">
                    <LeftSideNav></LeftSideNav>
                </div>
                <div className="md:col-span-2  space-y-5">
                    {
                        getNews.map(newsCard =>
                            <div className="" key={newsCard.id}>
                                <div className="border">
                                    <div className="flex justify-between items-center bg-[#f3f3f3] py-3 px-5">
                                        <div className="flex items-center space-x-3">
                                            <img className="w-12 rounded-full" src={newsCard.author.img} alt="" />
                                            <div>
                                                <h4 className="font-semibold text-[#000000c6]">Awlad Hossain</h4>
                                                <h5 className="font-semibold text-[#000000ad]">2022-08-21</h5>
                                            </div>
                                        </div>
                                        <div className="flex items-center text-2xl space-x-2">
                                            <CiBookmark />
                                            <CiShare2 />
                                        </div>
                                    </div>
                                    <div className="p-5 space-y-3">
                                        <h1 className="text-2xl font-semibold">{newsCard.title}</h1>
                                        <img src={newsCard.image_url} alt="" />
                                        <p className="font-medium text-[#000000be]">{newsCard.details.slice(0, 500)}</p>
                                        <Link to={`/details/${newsCard._id}`} className="text-orange-600 font-semibold" href="">Read More</Link>
                                    </div>
                                    <div className="flex justify-between items-center px-5 py-5">
                                        <div className="flex items-center space-x-3">
                                            <div className="rating rating-md">
                                                <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                                                <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" checked />
                                                <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                                                <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                                                <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                                            </div>
                                            <p className="text-xl">{newsCard.rating.number}</p>
                                        </div>
                                        <div className="flex items-center space-x-3 ">
                                            <FaEye />
                                            <p>{newsCard.total_view}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>)
                    }
                    <div>

                    </div>

                </div>
                <div className="">
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default Home;