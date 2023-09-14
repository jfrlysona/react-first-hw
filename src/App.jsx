import { useState } from "react";
function Cards() {
  const [addedCard, setAddedCard]= useState(0);
  let cityCards = [
    {
      title: "Exploring Paris, the City of Love",
      author: "Emily Johnson",
      date: "September 5, 2023",
      content: "Paris, often called the City of Love, is known for its romantic atmosphere...",
      image: "https://images.adsttc.com/media/images/5d44/14fa/284d/d1fd/3a00/003d/large_jpg/eiffel-tower-in-paris-151-medium.jpg?1564742900",
    },
    {
      title: "New York City: The City That Never Sleeps",
      author: "David Smith",
      date: "August 20, 2023",
      content: "New York City, the city that never sleeps, is a bustling metropolis with...",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/New_york_times_square-terabass.jpg/1200px-New_york_times_square-terabass.jpg",
    },
    {
      title: "Tokyo: A Blend of Tradition and Technology",
      author: "Maria Rodriguez",
      date: "July 10, 2023",
      content: "Tokyo, the capital of Japan, offers a unique blend of traditional culture...",
      image: "https://media.vogue.fr/photos/5e28668feba60700084eac83/4:3/w_4776,h_3582,c_limit/GettyImages-893365942.jpg",
    },
    {
      title: "Discovering Rome: The Eternal City",
      author: "Michael Williams",
      date: "June 25, 2023",
      content: "Rome, often referred to as the Eternal City, is steeped in history and...",
      image: "https://tourismmedia.italia.it/is/image/mitur/20220127150143-colosseo-roma-lazio-shutterstock-756032350-1?wid=1600&hei=900&fit=constrain,1&fmt=webp",
    },
    {
      title: "The Charm of Istanbul: Where East Meets West",
      author: "Sarah Brown",
      date: "May 5, 2023",
      content: "Istanbul, the transcontinental city straddling Europe and Asia, is known for...",
      image: "https://wander-lush.org/wp-content/uploads/2022/08/Emily-Lush-Istanbul-Turkey-sunset-Galata-Bridge.jpg",
    }
  ];
  let addedCards= [
    {
      id:0,
      title: "London Calling: A Journey Through History",
      author: "Sophia Davis",
      date: "October 15, 2023",
      content: "London, the capital of the United Kingdom, is a city steeped in history and culture...",
      image: "https://img.freepik.com/free-photo/big-ben-westminster-bridge-sunset-london-uk_268835-1395.jpg?w=2000"
    },
    {
      id:1,
      title: "Sydney: Exploring the Land Down Under",
      author: "Daniel Chen",
      date: "November 5, 2023",
      content: "Sydney, Australia's largest city, offers stunning beaches, iconic landmarks, and a vibrant lifestyle...",
      image: "https://s1.at.atcdn.net/wp-content/uploads/2005/09/Sydney-Harbour-Bridge-800x584.jpg"
    },
    {
      id:2,
      title: "Barcelona: A City of Art and Architecture",
      author: "Elena Lopez",
      date: "December 12, 2023",
      content: "Barcelona, Spain's cultural hub, is renowned for its stunning architecture and artistic heritage...",
      image: "https://static.independent.co.uk/2023/03/10/14/iStock-1320014700.jpg" 
    },
    {
      id:3,
      title: "Cape Town: Nature's Paradise at the Tip of Africa",
      author: "Alexandre Du Preez",
      date: "January 8, 2024",
      content: "Cape Town, South Africa's Mother City, boasts breathtaking landscapes and a rich cultural heritage...",
      image: "https://traveltimes.ru/wp-content/uploads/2021/07/00_capetown.jpg" 
    }
  ];
  let combinedCards = [...cityCards,...addedCards.slice(0, addedCard)];
  const showButton = addedCard < addedCards.length;
  
  return (
    <ul className="cards">
      {combinedCards.map((card) => (
        <li className="cards__item">
          <div className="card">
            <img src={card.image} alt="" className="card__image" />
            <div className="card__content">
              <div className="card__title">{card.title}</div>
              <p className="card__text">{card.content}</p>
              <div className="card_end">
                <p>By <span className="author"> {card.author}</span>
                  </p>
                <p>{card.date}</p>
              </div>
            </div>
          </div>
        </li>
      ))}
      {showButton && (
        <button onClick={() => setAddedCard(addedCard + 1)}>+</button>
      )}
    </ul>
  );

}

export default Cards;
