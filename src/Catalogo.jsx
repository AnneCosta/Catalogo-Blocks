import { useEffect, useState } from "react"
import { X } from 'react-feather'
import axios from "axios";
import Button from "./components/Button";
import Card from "./components/Card"
import './css/style.css'

async function fetchData() {
  try {
    const response = await axios
      .get(`https://fakestoreapi.com/products`, {
        timeout: 5000,
      })
    
    return response.data
  } catch (err) {
    if(err.code === 'ECONNABORTED') {
      console.log('Request timed out')
    } else {
      console.log(err);
    }
  }
}

export default function Catalogo() {
  const [items, setItems] = useState([]);
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    fetchData().then(result => {
      setItems(result)
    })
  }, [items])

  return (
    <div className="grid">
      <section className='sticky top-0 z-10 bg-barBackground/90 text-textSec w-full hidden md:flex justify-center'>
          <div className='flex p-4 justify-center items-center'>
            <p>
              Não limite sua criatividade, junte-se a familia Blocks por apenas <strong>BRL 19,99</strong>
            </p>
            <div className='pl-4'>
              <Button />
            </div>
          </div>
        </section>
      <header className='border-b-4'>
        <section className='p-10 flex justify-center items-center'>
          <div>
            <img className='w-24 md:w-full' src='./logo/web.png' alt='Blocks logo' />
          </div>
        </section>
        <hr className='borderColor w-full' />
        <section className='p-4 py-12 container mx-auto'>
          <h1 className='md:text-3xl text-2xl font-bold'>Catálogo</h1>
          <hr className='md:w-12 w-8 titleDetail rounded-lg' />
        </section>
      </header>
      <main className='container mx-auto py-8 px-2 flex flex-col justify-center'>
        <h2 className='md:text-2xl text-xl pl-2 font-medium text-left pb-2 flex'>Resultados</h2>
        <section>
          <div className='mt-6 grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-3 lg:grid-cols-4 xl:gap-x-8'>
            {items?.map((item, i) => (
              <section key={i} className="group relative border border-borderCol rounded-lg ">
                <Card key={item.id} image={item.image} name={item.title} />
              </section>
            ))}
          </div>
        </section>
      </main>
      <footer className='bg-[#e9e9e9] p-5 flex flex-col md:justify-center md:flex-row'>
        <a className='p-2' href='#'>Sobre</a>
        <a className='p-2' href='#'>FAQ</a>
        <a className='p-2' href='#'>Termos de uso</a>
        <a className='p-2' href='#'>Política de privacidade</a>
      </footer>
      <section className={`${isClicked ? 'hidden' : ''} text-center text-textSec bg-barBackground/90 p-8 sticky bottom-0 md:hidden`}>
        <div className='flex justify-center p-2'>
          <button onClick={() => setIsClicked(true)} className='flex justify-center items-center'>Fechar <X className='pl-2' color='#fff' size='25'/> </button>
        </div>
        <p className='p-2'>
          Não limite sua criatividade, junte-se a familia Blocks por apenas <strong>BRL 19,99</strong>
        </p>
        <div className='p-2 flex justify-center'>
          <Button />
        </div>
      </section>
    </div>
  )
}
