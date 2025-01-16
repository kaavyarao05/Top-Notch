import banner from '@/public/banner.png';

export default function Home() {
  return (
    <div>
     <header
     style={{backgroundImage: `url(${banner.src})`}}>
      <div className="drop-shadow-lg mx-5 py-36 sm:py-40 md:py-56 duration-500">
        <h1 className="font-extrabold text-3xl md:text-5xl xl-xl duration-300 text-center">RAISE YOUR GLASS TO<br/>UNFORGETTABLE MOMENTS!</h1>
        <h3 className='italic mb-10'> Crafting unique cocktail and mocktail experiences for every celebration.</h3>
        <div className='space-y-12 grid w-fit mx-auto'>
            <a 
            href='./Contact'
            className='shadow-transparent shadow-xl hover:shadow-[rgba(255,255,255,0.73)] bg-cyan duration-300 py-2 px-5 hover:bg-major hover:text-cyan rounded-2xl'
            >Book Us For Your Event</a>
            <a 
            href='./Menu'
            className='shadow-transparent shadow-xl hover:shadow-[rgba(255,255,255,0.73)] bg-cyan duration-300 py-2 px-5 hover:bg-major hover:text-cyan rounded-2xl'
            >Explore Our Menu</a>
        </div>
      </div>
     </header>
     <h2 className='pt-20 pl-10 text-2xl'>About Us</h2>
    </div>
  );
}
