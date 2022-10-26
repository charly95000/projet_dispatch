import { useEffect, useLayoutEffect, useReducer, useRef } from "react"
import Navbar from "../components/navbar"
import './home.css'
import useAxiosGet from "../hooks/useAxiosGet"

import { getRequest } from "../services/axiosClient"
import Recette from "../components/recette"
import {gsap} from "gsap"
import { AuthReducer } from "../hooks/authReducer"

export default function Home() {
    
    const {data, error, isLoading} = useAxiosGet(`${process.env.REACT_APP_API_URL}/article`)
    console.log(data)
    
    return(
        <>
        <Navbar />
        <main>
            <div >
                <div  className="title">
                    <h1>Les meilleures recettes</h1>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>
            </div>
            <h2>Les dernieres recettes</h2>
            <div className="card-container">
                {isLoading ? 
                <p>Chargement des donées en cours ... </p> 
                :
                data.map(recette=><Recette recette={recette} />)
            }
            </div>
            
        </main>
    </>
    )
}
