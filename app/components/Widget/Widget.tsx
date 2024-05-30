import Image from "next/image";

interface WidgetProps {
    onButtonClick: () => void;
}

export default function Widget({ onButtonClick }: WidgetProps){
   return (
     <div className="fixed bottom-5 left-0 z-10">
        <button className="flex items-center" onClick={onButtonClick}>
            <div className="bg-zinc-900 py-3 px-4">
                <Image 
                  src="/arrow-forward.png" 
                  width={34} 
                  height={32}
                  className="md:scale-50 static md:w-6 md:h-6" 
                  alt="arrow" 
                  />
            </div>
            <div className="bg-gradient-custom-green rounded-r-full flex p-4 items-center justify-center text-zinc-900 lg:text-base md:text-sm font-semibold uppercase">
                Solicite um orçamento
            </div>
        </button>
     </div>
   );
}