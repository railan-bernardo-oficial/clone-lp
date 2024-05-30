import Image from "next/image";
import CardItem from "./components/Card/CardItem";

export default function Home() {

  const items = [
    { name: 'Seal', brand: 'BYD', src: '1', alt: 'Description of the image 1' },
    { name: 'Dolphin', brand: 'BYD', src: '2', alt: 'Description of the image 2' },
    { name: 'Yuan Plus', brand: 'BYD', src: '3', alt: 'Description of the image 3' },
    { name: 'Song Plus', brand: 'BYD', src: '4', alt: 'Description of the image 4' },
    { name: 'Tan EV', brand: 'BYD', src: '5', alt: 'Description of the image 5' },
    { name: 'Han EV', brand: 'BYD', src: '6', alt: 'Description of the image 6' },
];

  return (
    <main className="w-full">
      <section className="w-full pb-2.5 border-gradient-custom-green">
         <div className="w-full h-full">
          <Image 
            src="/home-banner-desk.jpg" 
            width={1920}
            height={585}
            className="static md:hidden w-full"
            alt="banner-home" />
          <Image 
            src="/banner-home-md.jpg" 
            width={390}
            height={508}
            className="static lg:hidden w-full"
            alt="banner-home" />
         </div>
      </section>
      <section className="w-full">
          <header className="container mx-auto text-center pt-6 pb-2">
            <h1 className="text-4xl text-zinc-900 font-semibold">Veículos Elétricos</h1>
            <p className="text-xl text-zinc-600 mb-3 font-medium">Conheça nossos modelos</p>
          </header>
          <div className="grid lg:grid-cols-3 md:grid-cols-2">
            {items.map((item, index) => (
             <CardItem key={index} item={item} />
            ))}
          </div>
      </section>
    </main>
  );
}
