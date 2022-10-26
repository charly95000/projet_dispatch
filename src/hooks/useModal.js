import {useState} from "react"

const useModal = () => {
    const [isShowing, setIsShowing] = useState(false);

    function toggle(){
        setIsShowing(!isShowing)
        document.body.style.overflow = isShowing ? "unset":"hidden"
    }

    return [isShowing, toggle]
        
}

export default useModal
