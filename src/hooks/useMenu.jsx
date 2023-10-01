import { useQuery } from "@tanstack/react-query"

const useMenu = () => {
    const { refetch, data: menu = [], isLoading } = useQuery({
        queryKey: ['menu'],
        queryFn: async () => {
            const response = await fetch(`https://server-bistro-boss-momenurislam6-gmailcom.vercel.app/menu`)
            if (!response.ok) {
                throw new Error('Network response was not ok')
            }
            return response.json()
        },
    })
    return [menu, refetch, isLoading]
}
export default useMenu;