import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const BreakingNews = () => {
    return (
        <div>
            <div className="bg-[#f3f3f3] flex items-center m-5">
                <button className="text-xl bg-[#d72050] p-3 text-white">Latest</button>
                <Marquee speed={50} pauseOnHover={true}>
                    <Link className="mr-12">Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as</Link>
                    <Link className="mr-12">Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as</Link>
                    <Link className="mr-12">Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as</Link>
                </Marquee>
            </div>
        </div>
    );
};

export default BreakingNews;