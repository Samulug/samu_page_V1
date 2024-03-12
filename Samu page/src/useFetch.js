import { useEffect, useState } from "react";

export function useFetch (url) {
    const [img , setImg] = useState(null);
    const [cargando, setCargando] = useState(true)

    useEffect( () => {
        fetch(url)
        .then((response) => response.json)
        .then((img) => setData(img))
        .finally (() => setCargando(false));
    },[])

    return {img , cargando}
}