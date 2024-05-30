import Image from "next/image";
import { CiCirclePlus } from "react-icons/ci";

interface itemProps {
    name: string;
    brand: string;
    src: string;
    alt: string;
}

export default function CardItem({ item }: { item: itemProps }){
    return (
        <a href="/veiculo/sael" className="w-full overflow-hidden relative">
        <div className="lg:h-custom-item md:h-custom-item-md">
        <Image
          src={`/img-${item.src}.jpg`}
          width={449.66}
          height={289}
          className="w-full"
          alt={`image-${item.alt}`}
        />
        </div>
        <div className="flex items-center justify-between absolute lg:bottom-7 md:bottom-4 w-full lg:px-5 md:px-4">
            <div className="lg:px-2 md:pr-2">
                <p className="text-base font-medium text-white uppercase">{item.brand}</p>
                <h2 className="lg:text-2xl md:text-xl font-semibold text-white uppercase">{item.name}</h2>
            </div>
            <button className="border border-white text-white md:hidden font-normal text-base uppercase bg-transparent hover:bg-gradient-custom-green transition-all hover:text-zinc-900 hover:border-none py-2 px-4">Saiba mais</button>
            <button className="text-white lg:hidden font-normal text-base uppercase w-8 h-8 bg-transparent p-2">
                <CiCirclePlus size={32} />
            </button>
        </div>
    </a>
    );
}