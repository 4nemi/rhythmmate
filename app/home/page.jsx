"use client";

import Nav from "@/components/Nav";
import UnderNav from "@/components/UnderNav";
import Avatar from '@components/Avatar';
import Modal from '@components/Modal';
import { WeekProvider } from "@/contexts/WeekContext";

const Home = () => {
    return (
        <div className="bg-beige min-h-screen">
            <WeekProvider>
                <Nav />
                <Avatar />
                <Modal />
                <UnderNav /> 
            </WeekProvider>
        </div>
    )
}

export default Home