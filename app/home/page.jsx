"use client";

import Nav from "@/components/Nav";
import UnderNav from "@/components/UnderNav";
import Avatar from '@components/Avatar';
import Modal from '@components/Modal';
import Comment from '@components/Comment';
import { WeekProvider } from "@/contexts/WeekContext";
import { NameProvider } from "@/contexts/NameContext";

const Home = () => {
    return (
        <div className="bg-beige min-h-screen">
            <WeekProvider>
                    <Nav />
                    <Comment />
                    <Avatar />
                    <Modal />
                    <UnderNav /> 
            </WeekProvider>
        </div>
    )
}

export default Home