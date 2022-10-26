import gsap from 'gsap';
import { useLayoutEffect, useRef } from 'react';
import './recette.css'

const Recette = ({recette}) => {
    const recetteDiv = useRef();
    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
          gsap.to(".article", { rotation: 360 });
        }, recetteDiv);
        
        return () => ctx.revert();
      });
  
  
    return(
        <div ref={recetteDiv}  className="formation">
            <article className="article">
                <h4>{recette.title}</h4>
                <div class="cadre">
                    <img loading="lazy" alt="image indisponible" src={recette.imageUrl} />
                </div>
                
                
                <button>Voir recette</button>
            </article>
        </div>
        
        
    )
}

export default Recette;