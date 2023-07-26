"use client";

import Nav from "@/components/Nav";
import UnderNav from "@/components/UnderNav";
import Avatar from '@components/Avatar';

const Home = () => {
    return (
        <div>
            <Nav />
            <Avatar successTime={0}/>
            <UnderNav /> 
        </div>
    )
}

export default Home