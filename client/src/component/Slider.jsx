import React from "react";

const Slider = () => {
  return (
    <div class="h-[210vh] flex flex-col ">
      <div className="h-[140vh] -mb-[70vh] ">
        <div class="h-[70vh] flex  ">
          <div className=" w-1/2   p-4 flex flex-col  justify-between gap-1">
            <span>
              <h1 className="text-sm md:text-3xl text-black font-semibold line-clamp-3">
                Dahi Bara Aloo Dum - The Quintessential Street Food of Odisha
              </h1>
              <span className="text-m text-[#e78371] dark:text-gray uppercase font-extrabold tracking-wider">
                Food
              </span>
            </span>
            <p className="mt-4 dark:text-green-100 line-clamp-4">
              The millennium city of Cuttack is famous for various reasons –
              silver filigree work, Historical Barabati fort, Famous Barabati
              stadium among others. Besides this, Cuttack is famous for one more
              thing and that is the ‘Dahibara-aloodum’.The name itself conjures
              up thousands of memories and for anyone who’s ever been to Cuttack
              or hails from the same, needs no intro to this legendary street
              food – Dahi Bara Aloo Dum and Guguni, mostly known as “Dahi Bara
              Aloo Dum”. “Aloo dum Dahi bara”, A wholesome meal in itself is
              said to be the staple food of Cutkis.
            </p>
          </div>
          <div class="w-1/2 bg-[url('/food.webp')] bg-cover bg-center"></div>
        </div>
        <div className="w-full h-[70vh] "></div>
      </div>

      <div class="h-[70vh] flex">
        <div class="w-1/2 bg-[url('/artculture.jpeg')] bg-cover bg-center"></div>

        <div className=" w-1/2   p-4 flex flex-col  justify-between gap-1">
          <span>
            <h1 className="text-sm md:text-3xl text-black font-semibold line-clamp-3">
              A Look Into Odisha’s Tribal And Ethnic Jewellery
            </h1>
            <span className="text-m text-[#e78371] dark:text-gray uppercase font-extrabold tracking-wider">
              Art & Culture
            </span>
          </span>
          <p className="mt-4 dark:text-green-100 line-clamp-4">
            According to the official Census held in 2011, Adivasis constitute
            8.6 per cent of the nation’s total population – some 104. 3 million
            people. Unofficial figures vary significantly but represent a much
            higher proportion of India’s population. The tribal peoples are
            often referred to as “Adivasis,” which means “original inhabitants
            of a particular area.” Indigenous tribes constitute India’s poorest
            still relying on agriculture, fishing, or manual labour for
            survival. Each tribe has its own traditions, clothing, language, and
            jewellery.
          </p>
        </div>
      </div>
      <div class="h-[70vh] flex">
        <div className=" w-1/2   p-4 flex flex-col  justify-between gap-1">
          <span>
            <h1 className="text-sm md:text-3xl text-black font-semibold line-clamp-3">
              A Look Into Odisha’s Tribal And Ethnic Jewellery
            </h1>
            <span className="text-m text-[#e78371] dark:text-gray uppercase font-extrabold tracking-wider">
              Art & Culture
            </span>
          </span>
          <p className="mt-4 dark:text-green-100 line-clamp-4">
            According to the official Census held in 2011, Adivasis constitute
            8.6 per cent of the nation’s total population – some 104. 3 million
            people. Unofficial figures vary significantly but represent a much
            higher proportion of India’s population. The tribal peoples are
            often referred to as “Adivasis,” which means “original inhabitants
            of a particular area.” Indigenous tribes constitute India’s poorest
            still relying on agriculture, fishing, or manual labour for
            survival. Each tribe has its own traditions, clothing, language, and
            jewellery.
          </p>
        </div>

        <div class="w-1/2 bg-[url('/history.webp')] bg-cover bg-center"></div>
      </div>
    </div>
  );
};

export default Slider;
