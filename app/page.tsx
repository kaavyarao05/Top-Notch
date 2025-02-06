import banner from '@/public/banner.png';

export default function Home() {
  return (
    <div>
     <header
     style={{backgroundImage: `url(${banner.src})`}}>
      <div className="drop-shadow-lg mx-5 py-36 sm:py-40 md:py-56 duration-500 grid gap-12">
        <h1 className="vincendoFont font-extrabold text-3xl md:text-5xl duration-300 text-center">RAISE YOUR GLASS TO<br/>UNFORGETTABLE MOMENTS!</h1>
        <div className='space-y-5 grid md:flex md:space-y-0 md:gap-4 w-fit mx-auto'>
            <a 
            href='./Contact'
            className='homenavbutton'
            >Book Us For Your Event</a>
            <a 
            href='./Menu'
            className='homenavbutton'
            >Explore Our Menu</a>
        </div>
      </div>
     </header>
     <h2 className='font-mono text-xl italic font-semibold pt-10 px-10 text-center'>Crafting unique cocktail and mocktail experiences for every celebration.</h2>
    </div>
  );
}
