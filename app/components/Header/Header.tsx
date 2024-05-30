import Image from "next/image";


export default function Header(){
    return (
        <header className="w-full fixed bg-gradient-header py-2.5 z-10">
            <div className="container mx-auto lg:px-8 md:px-4">
                <div className="lg:grid lg:grid-cols-2 md:flex md:justify-center">
                    <div>
                        <a href="/" className="flex items-center pl-7">
                            <Image src="/logo-terra-santa.png" width={300} height={39} alt="banner-home" />
                        </a>
                    </div>
                    <div className="md:hidden">
                        <a href="/" className="flex items-center justify-end pr-7">
                            <Image src="/logo-terra-santa.png" width={300} height={39} alt="banner-home" />
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
}