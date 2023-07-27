"use client";

import Nav from "@/components/Nav";
import UnderNav from "@/components/UnderNav";
import Avatar from '@components/Avatar';

const Home = () => {
    return (
        <div className="bg-beige min-h-screen">
            <Nav />
            <Avatar successTime={0}/>
            <UnderNav /> 
        </div>
    )
}

export default Home