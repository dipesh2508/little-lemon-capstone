import React from 'react'
import Image from "../assets/restaurantfood.jpg"
const highlightDishes = [
  {
      name: 'Greek Salad',
      img: 'https://cdn.loveandlemons.com/wp-content/uploads/2019/07/greek-salad-2.jpg',
      id: 1,
      description: 'The famous greek salad of crispy lettuce, olives, and our famous Chicago style cheese, garnished with crunchy garlic and croutons',
      price: 4.99,
  },
  {
      name: 'Bruchetta',
      img: 'https://www.cookingclassy.com/wp-content/uploads/2019/07/bruschetta-2.jpg',
      id: 2,
      description: 'Our Bruchetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil for the perfect taste',
      price: 4.99,
  },
  {
    name: 'Lemon Dessert',
    img: 'https://www.thereciperebel.com/wp-content/uploads/2018/07/lemon-lush-dessert-TRR-1200-44-of-46.jpg',
    id: 3,
    description: 'This comes straight from grandma\'s recipe book, every last ingredient has been sourced and is as authentic as can be imagined',
    price: 4.99,
}
]

const Highlights = () => {
  return (
    <>
      <div className='mt-32 flex justify-between items-center px-12 lg:px-60 xl:px-96 flex-col md:flex-row'>
        <h1 className='text-2xl md:text-4xl font-semibold mb-4 md:mb-0'>This weeks specials!</h1>
        <button className='bg-yellow-400 text-black rounded-xl py-2 px-4'>Online Menu</button>
      </div>
      <section className='mt-12 flex justify-center'>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-32'>
          {highlightDishes.map((dish) => (
            <div className='w-[300px] bg-[#495d57] text-white flex flex-col justify-between rounded-3xl' key={dish.id}>
              <img src={dish.img} className='h-[350px] rounded-3xl' alt={dish.name} />
              <div className='flex justify-around items-center text-2xl pt-2 px-2'>
                <h1 className='font-semibold'>{dish.name}</h1>
                <p className='font-light'>${dish.price}</p>
              </div>
              <p className='p-4 font-extralight text-center'>{dish.description}</p>
              <button className='p-2 flex justify-center items-center hover:bg-yellow-600 transition ease-in-out bg-yellow-400 hover:text-slate-200 text-black font-semibold rounded-xl w-1/2 mb-4 mx-auto'>Order Now</button>
            </div>
          ))}
        </div>
      </section>

    </>
  )
}

export default Highlights