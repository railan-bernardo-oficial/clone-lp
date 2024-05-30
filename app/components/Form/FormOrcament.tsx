import Image from "next/image";

export default function FormOrcament({ show }: {show: Boolean}) {
    return (
        <div className={`lg:w-3/4 md:w-full transition-all fixed z-50 top-20 left-1/2 -translate-x-1/2 px-4 ${show ? 'visible scale-100 opacity-100' : 'invisible scale-50 opacity-0'}`}>
            <div className="w-full relative">
                <Image
                 src="/bg-form.jpg" 
                 width={990} 
                 height={76.67} 
                 className="md:hidden"
                 alt="banner" 
                 />
                <Image
                 src="/bg-form-md.jpg" 
                 width={360} 
                 height={130} 
                 className="lg:hidden"
                 alt="banner" 
                 />
                <div className="absolute lg:bottom-1 md:bottom-5 w-full text-center">
                    <h1 className="text-white lg:text-3xl md:text-2xl uppercase font-bold">Solicite aqui seu orçamento</h1>
                    <p className="text-white text-base md:hidden">Preencha os campos abaixo e em breve um de nossos representantes entrará em contato:</p>
                </div>
            </div>
            <form className="bg-gradient-custom-green w-full lg:px-12 md:px-4 py-6">
                <div className="w-full mb-1.5">
                    <input 
                      type="text"
                      placeholder="Nome"
                      className="w-full px-3 py-1.5 border border-zinc-400 focus:outline-sky-500 focus:border-sky-500 text-zinc-500 placeholder:text-zinc-400"
                      />
                </div>
                <div className="w-full flex gap-1.5">
                    <input 
                      type="email" 
                      placeholder="E-mail"
                      className="w-7/12 px-3 py-1.5 border border-zinc-400 focus:outline-sky-500 focus:border-sky-500 text-zinc-500 placeholder:text-zinc-400"
                      />
                    <input 
                      type="text" 
                      placeholder="DDD + Telefone"
                      className="w-5/12 px-3 py-1.5 border border-zinc-400 focus:outline-sky-500 focus:border-sky-500 text-zinc-500 placeholder:text-zinc-400"
                      />
                </div>
                <div className="w-full flex gap-1.5 mt-1.5">
                    <select 
                      className="w-7/12 px-3 py-1.5 border border-zinc-400 focus:outline-sky-500 focus:border-sky-500 text-zinc-500 placeholder:text-zinc-400"
                      >
                        <option  value="default" disabled>Selecione um modelo</option>
                        <option  value="modelo">Modelo 1</option>
                        <option  value="modelo">Modelo 1</option>
                        <option  value="modelo">Modelo 1</option>
                        <option  value="modelo">Modelo 1</option>
                        <option  value="modelo">Modelo 1</option>
                        <option  value="modelo">Modelo 1</option>
                        <option  value="modelo">Modelo 1</option>
                      </select>
                    <select 
                      className="w-5/12 px-3 py-1.5 border border-zinc-400 focus:outline-sky-500 focus:border-sky-500 text-zinc-500 placeholder:text-zinc-400"
                      >
                        <option  value="default" disabled>Entrar em contato por</option>
                        <option  value="modelo">Telefone</option>
                        <option  value="modelo">E-mail</option>
                        <option  value="modelo">WhatsApp</option>
                      </select>
                </div>
                <div className="w-full mt-1.5">
                    <textarea 
                    className="w-full px-3 py-1.5 border border-zinc-400 focus:outline-sky-500 focus:border-sky-500 text-zinc-500 placeholder:text-zinc-400"
                    placeholder="Mensagem"
                    ></textarea>
                </div>
                <div className="flex gap-1">
                    <input
                    type="checkbox"
                    />
                    <a href="">Aceito a Política de Privacidade</a>
                </div>
                <div className="flex justify-center mt-3">
                    <button 
                    type="submit"
                    className="lg:w-4/12 md:w-6/12 p-2.5 font-medium uppercase text-2xl text-white text-center bg-zinc-900"
                    >
                        Enviar
                    </button>
                </div>
            </form>
        </div>
    );
}