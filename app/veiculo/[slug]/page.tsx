'use client'
import { useEffect } from "react";
import Image from "next/image";
import Carousel from "@/app/components/Slide/Carousel";
export default function InternaModel({ params }: { params: { slug: string } }) {
    const data = [
        { 
            image_url: '/item-1.jpg', 
            name: 'Design Esportivo "Golden Ratio"', 
            desc: "As linhas ágeis e expressivas do corpo do BYD Seal são complementadas por um perfil lateral suave e natural. A perfeita relação eixo/comprimento de 0.61, alcançada com um comprimento de carroceria de 4800mm e uma distância entre eixos de 2.920mm, desenha um estilo único para o sedã esportivo." 
        },
        { 
            image_url: '/item-2.jpg', 
            name: 'Revolucionária e-Platform 3.0', 
            desc: "O Seal também usa a e-Platform 3.0, especialmente desenvolvida pela BYD para veículos puramente elétricos. A plataforma busca melhorar a segurança e a autonomia, bem como garantir uma experiência de condução inteligente, criando um veículo mais eficiente e seguro." 
        },
        { 
            image_url: '/item-3.jpg', 
            name: 'Roda Blade Precision（AWD)', 
            desc: "O BYD Seal oferece dois estilos diferentes de rodas. A roda de 18 polegadas apresenta pequenas formas triangulares, que acompanham seu design vivo e enérgico. A Roda Blade de 19 polegadas possui um design simples, mas capaz. Sua superfície fechada é decorada com listras que formam um efeito visual deslumbrante quando vistas de diferentes ângulos. A requintada estrutura guia de palhetas reduz efetivamente a resistência do vento." 
        },
    ]
    useEffect(() => {
        console.log("PARAMS => ", params.slug)
    }, [])

    return (
        <div className="w-full">
            <section className="w-full lg:h-custom-banner h-auto">
                <div className="w-full h-full">
                    <Image
                        src="/banner-interna.jpg"
                        width={1360}
                        height={585}
                        className="object-cover static"
                        alt="banner"
                    />
                </div>
            </section>
            <section className="lg:container mx-auto">
                <div className="flex flex-wrap w-10/12 md:w-full mx-auto md:pb-12">
                    <div className="w-6/12 md:w-full">
                        <div className="flex justify-center">
                            <Image
                              src="/cor-1.png"
                              width={540}
                              height={386}
                              style={{ position: "static" }}
                              alt="cor-1"
                              />
                        </div>
                    </div>
                    <div className="w-6/12 md:w-full lg:pt-16 pl-7 md:text-center">
                        <h2 className="text-4xl text-zinc-900 uppercase font-bold mb-4">Seal</h2>
                        <p className="text-base text-zinc-800 font-medium">Dinâmico e Inteligente</p>
                        <div className="flex items-center gap-2 mt-5 md:justify-center">
                            <button className="border border-zinc-700 w-4 h-4 rounded-full bg-zinc-400"></button>
                            <button className="border border-zinc-700 w-4 h-4 rounded-full bg-blue-400"></button>
                            <button className="border border-zinc-700 w-4 h-4 rounded-full bg-green-400"></button>
                            <span className="text-lg text-zinc-800 font-bold pl-5">Cor blue</span>
                        </div>
                    </div>
                </div>
            </section>
            <section className="w-full">
                <div className="w-full h-4 bg-gray-200 block py-6" />
                <div className="container mx-auto pt-12 md:px-4">
                    <div className="lg:w-10/12 mx-auto">
                        {data.map((item, index) => (
                            <div className={`w-full flex flex-wrap pb-12 ${index % 2 === 1 ? 'flex-row-reverse' : ''}`} key={index}>
                                <div className="lg:w-6/12 md:w-full md:mb-4">
                                    <Image
                                      src={item.image_url}
                                      width={540}
                                      height={416}
                                      className="md:mx-auto"
                                      alt="item"
                                    />
                                </div>
                                <div className="lg:w-6/12 lg:px-12 md:w-full">
                                    <h2 className="lg:text-4xl md:text-2xl text-zinc-900 font-semibold lg:pb-12 mb-4">{item.name}</h2>
                                    <p className="text-lg text-zinc-800 font-normal">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section className="w-full">
                 <div className="container mx-auto">
                     <div className="lg:w-10/12 mx-auto">
                         <Carousel />
                     </div>
                 </div>
            </section>
        </div>
    );
}