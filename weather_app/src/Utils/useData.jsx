import { useState } from "react";
export const useData = () => {
    const locale = 'en';
    const [today, setDate] = useState(new Date())

    useEffect(() => {
        const timer = setInterval(() => {
            setDate(new Date())
        },60*1000);

        return () => {
            clearInterval(timer)
        }
    },[])

    const day = today.tolocaledateString(locale,{weekday: 'long'} )
    const date = `${day}, ${today.getDate()},${today.tolocaledateString(locale,{month: 'long'})}\n\n`
    const time = today.tolocaledateString(locale, { hour: 'numeric', hour12: true, minute: 'numeric'})

    return(
        date, time
    )

}