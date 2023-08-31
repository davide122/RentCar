import { useEffect, useState } from "react";
import videoauto from "../utlis/LB-Silhouette R35 GTR  _ 4K.mp4"
import fotoauto from "../utlis/fotoauto1-removebg-preview.png"
const Heropage = () =>{
    const [typedText, setTypedText] = useState('');
    const [scrollDown, setScrollDown] = useState(false);
    const [vehicleType, setVehicleType] = useState('auto'); // Aggiungi stato per il tipo di veicolo
    const handleScroll = () => {
      const isScrolledDown = window.scrollY > 0;
      setScrollDown(isScrolledDown);
    };
    
  const animateText = (text, interval) => {
    let index = 0;
    const typingInterval = setInterval(() => {
      setTypedText(text.slice(0, index + 1));
      index++;
      if (index === text.length) clearInterval(typingInterval);
    }, interval);
  };
    useEffect(() => {
        const vehicleTypes = ['un auto?', 'una barca?', 'un appartamento?'];
        let index = 0;
  
        // Funzione per cambiare automaticamente il tipo di veicolo
        const changeVehicleType = () => {
            const currentVehicleType = vehicleTypes[index];
      animateText(currentVehicleType, 100);
          setVehicleType(vehicleTypes[index]);
          index = (index + 1) % vehicleTypes.length;
        };
  
        const interval = setInterval(changeVehicleType, 3000); // Cambia ogni 5 secondi
  
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
    

    return(
        <>
        
<div className="SizeHero vh-100">
<div className="container h-100">
    <div className="row h-100">
        <div className="col-s-12 col-md-6 d-flex flex-column justify-content-center align-items-center">
        <h1 className={`mx-5 text-light`}>
                <span className="text-blue">Stai cercando</span> di affittare {typedText}
              </h1>
<p className="mx-5">Lorem ipsum, dolor sit amet consectetur adipisicing elit. At animi aut beatae! Inventore dolorem aperiam quaerat corrupti culpa molestias architecto doloribus temporibus maiores repellendus! Fugit delectus explicabo quae accusamus at?</p>
        </div>
     <div
        className={`col-s-12 col-md-6 d-flex justify-content-center align-items-center rounded-5 ${
          scrollDown ? 'zoom-in' : ''
        }`}
      >
        <img
          src={fotoauto}
          alt=""
          className="image"
        />
      </div>
    </div>

</div>
</div>
        </>
    )
}
export default Heropage;