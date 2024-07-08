
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
    const time = `${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`

}