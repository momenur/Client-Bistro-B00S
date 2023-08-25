import { useQuery } from "@tanstack/react-query"

const useMenu = () => {
    const { refetch, data: menu = [], isLoading } = useQuery({
        queryKey: ['menu'],
        queryFn: async () => {
            const response = await fetch(`http://localhost:5000/menu`)
            if (!response.ok) {
                throw new Error('Network response was not ok')
            }
            return response.json()
        },
    })
    return [menu, refetch, isLoading]






    // const [menu, setMenu] = useState([])
    // const [loading, setLoading] = useState(true)
    // useEffect(() => {
    //     fetch('http://localhost:5000/menu')
    //         .then(res => res.json())
    //         .then(data => {
    //             setMenu(data);
    //             setLoading(false);
    //         })
    // }, [])
    // return [menu, loading]
}

export default useMenu;