import { useState } from 'react';
import Card from "../Card/Card";
import styles from "../Cards/Cards.module.css";

function Cards() {
  const [visibleCards, setVisibleCards] = useState(3); // Mostrar inicialmente 4 tarjetas

  let AllSurveys = [
    {
      id: "56ab51df-6ff4-4be0-853d-806523d2eecb",
      title: "TITULO TITULO TITULO TITULO",
      description: "Lorem ipsusdadadasdadasdasdasdm dolor dsdaadasdasdadasdsit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum",
      imgUrl: "https://res.cloudinary.com/dayd3q0qx/image/upload/v1706641219/Redactar-una-encuesta_s48hah.png",
      status: true
  },
  {
    id: "56ab51df-6ff4-4be0-853d-806523d2eecb",
    title: "TITULO TITULO TITULO TITULO",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor iadsgkljdsfgidsfjgho;dkgjdfl;kgjdsfl;gjdsfl;kgjdfn reprehenderit in voluptate velit esse cillum",
    imgUrl: "https://res.cloudinary.com/dayd3q0qx/image/upload/v1706641219/Redactar-una-encuesta_s48hah.png",
    status: true
},
{
  id: "56ab51df-6ff4-4be0-853d-806523d2eecb",
  title: "TITULO TITULO TITULO TITULO",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut ensfadsognfadgl;kndfglk;ndfg'lkndim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum",
  imgUrl: "https://res.cloudinary.com/dayd3q0qx/image/upload/v1706641219/Redactar-una-encuesta_s48hah.png",
  status: true
} 
,
{
  id: "56ab51df-6ff4-4be0-853d-806523d2eecb",
  title: "TITULO TITULO TITULO TITULO",
  description: "Lorem ipsusdadadasdadasdasdasdm dolor dsdaadasdasdadasdsit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum",
  imgUrl: "https://res.cloudinary.com/dayd3q0qx/image/upload/v1706641219/Redactar-una-encuesta_s48hah.png",
  status: true
},
{
id: "56ab51df-6ff4-4be0-853d-806523d2eecb",
title: "TITULO TITULO TITULO TITULO",
description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor iadsgkljdsfgidsfjgho;dkgjdfl;kgjdsfl;gjdsfl;kgjdfn reprehenderit in voluptate velit esse cillum",
imgUrl: "https://res.cloudinary.com/dayd3q0qx/image/upload/v1706641219/Redactar-una-encuesta_s48hah.png",
status: true
},
{
id: "56ab51df-6ff4-4be0-853d-806523d2eecb",
title: "TITULO TITULO TITULO TITULO",
description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut ensfadsognfadgl;kndfglk;ndfg'lkndim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum",
imgUrl: "https://res.cloudinary.com/dayd3q0qx/image/upload/v1706641219/Redactar-una-encuesta_s48hah.png",
status: true
} ,
{
  id: "56ab51df-6ff4-4be0-853d-806523d2eecb",
  title: "TITULO TITULO TITULO TITULO",
  description: "Lorem ipsusdadadasdadasdasdasdm dolor dsdaadasdasdadasdsit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum",
  imgUrl: "https://res.cloudinary.com/dayd3q0qx/image/upload/v1706641219/Redactar-una-encuesta_s48hah.png",
  status: true
},
{
id: "56ab51df-6ff4-4be0-853d-806523d2eecb",
title: "TITULO TITULO TITULO TITULO",
description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor iadsgkljdsfgidsfjgho;dkgjdfl;kgjdsfl;gjdsfl;kgjdfn reprehenderit in voluptate velit esse cillum",
imgUrl: "https://res.cloudinary.com/dayd3q0qx/image/upload/v1706641219/Redactar-una-encuesta_s48hah.png",
status: true
},
{
id: "56ab51df-6ff4-4be0-853d-806523d2eecb",
title: "TITULO TITULO TITULO TITULO",
description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut ensfadsognfadgl;kndfglk;ndfg'lkndim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum",
imgUrl: "https://res.cloudinary.com/dayd3q0qx/image/upload/v1706641219/Redactar-una-encuesta_s48hah.png",
status: true
} 
]
  const handleShowMore = () => {
    setVisibleCards(visibleCards + 3); // Mostrar 4 tarjetas adicionales al hacer clic en "Ver más"
  };

  return (
    <div>
      <p className={styles.title}>Estas son algunas de nuestras iniciativas activas</p>
      <div className={styles.cardsContainer}>
        {AllSurveys.slice(0, visibleCards).map(Survey => (
          <Card key={Survey.id} Survey={Survey} />
          ))}
          {visibleCards < AllSurveys.length && ( // Renderiza el botón solo si hay más tarjetas por mostrar
            <button onClick={handleShowMore} className={styles.button}>Ver más</button>
      )}
          </div>
    </div>
  );
}
export default Cards;
