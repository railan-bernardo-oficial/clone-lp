'use client'
import React, { useState } from "react";
import Image from "next/image";
import Widget from "../Widget/Widget";
import FormOrcament from "../Form/FormOrcament";
export default function Footer(){
    const [show, setShow] = useState(false);

    const handleButtonClick  = () =>{
        setShow(true)
    }

    const handleClose  = () =>{
        setShow(false)
    }

    return (
        <footer className="w-full md:pb-14">
            <Widget onButtonClick={handleButtonClick} />
            <FormOrcament show={show} />
            <a href="" className="fixed right-4 bottom-5 z-10">
                <Image src="/whatsapp.png" width={75} height={75} alt="whatsapp" />
            </a>
            <div className={`fixed top-0 left-0 transition-all z-40 w-screen h-screen bg-black/90 ${show ? 'visible' : 'invisible'}`} onClick={handleClose}></div>
            <div className="container mx-auto px-7">
                <div className="flex flex-wrap py-12 lg:px-7">
                    <div className="lg:w-5/12 lg:px-7 md:w-full">
                        <h2 className="text-zinc-900 font-semibold block text-center text-sm py-3 custom-green-title">Pontos de Recarga Terra Santa BYD</h2>
                        <div className="flex justify-between py-4 border-b border-gray-300">
                            <div className="w-6/12">
                                <p className="text-xs mb-2 font-bold text-custom-green">Terra Santa | Aracaju</p>
                                <p className="text-xs">Av. Ministro General Barreto Sobral, 215
                                    Shopping Jardins - Aracaju/SE
                                    Telefone: (79) 4004-4995</p>
                            </div>
                            <button className="border border-zinc-300 mt-5 bg-white text-zinc-900 leading-none h-9 hover:border-white hover:bg-gradient-custom-green transition-all text-xs w-32 uppercase px-2">Ver no mapa</button>
                        </div>
                    </div>
                    <div className="lg:w-7/12 md:hidden">
                        <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3917.22794164667!2d-37.06800552180922!3d-10.94614679454883!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x71ab3c2c8bb2ea1%3A0xaa503ef4da3e7d4d!2sAv.%20Ministro%20Geraldo%20Barreto%20Sobral%2C%201700%20-%20Jardins%2C%20Aracaju%20-%20SE%2C%2049025-090!5e0!3m2!1spt-PT!2sbr!4v1692368139575!5m2!1spt-PT!2sbr" 
                        width="600" 
                        height="450" 
                        style={{ border: 0 }} 
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
                <div className="flex justify-center gap-12 items-center">
                    <a href="">
                        <Image src="/facebook.png" width={35} height={35} alt="Facebook" />
                    </a>
                    <a href="">
                        <Image src="/instagram.png" width={35} height={35} alt="Instagram" />
                    </a>
                </div>
                <div className="flex items-center md:flex-wrap py-5 justify-between">
                <div className="md:w-full lg:hidden mb-3">
                        <p className="text-xs text-center">Todos os Direitos Reservados | 2024 © Terra Santa BYD</p>
                    </div>
                    <div className="lg:w-4/12 md:w-6/12">
                        <Image src="/logo-rodape.png" width={300} height={39} alt="logo" />
                    </div>
                    <div className="lg:w-4/12 md:hidden">
                        <p className="text-xs text-center">Todos os Direitos Reservados | 2024 © Terra Santa BYD</p>
                    </div>
                    <div className="lg:w-4/12 md:w-6/12 flex justify-end">
                        <Image src="/logo-lf.png" width={155} height={36} alt="logo-lf" />
                    </div>
                </div>
            </div>
        </footer>
    );
}