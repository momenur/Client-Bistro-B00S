import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
const useCart = () => {
    const { user } = useContext(AuthContext);


    const { refetch, data: cart = [] } = useQuery({
        queryKey: ['carts', user?.email],
        queryFn: async () => {
            const response = await fetch(`https://server-bistro-boss-momenurislam6-gmailcom.vercel.app/carts?email=${user?.email}`)
            if (!response.ok) {
                throw new Error('Network response was not ok')
            }
            return response.json()
        },
    })
    return [cart, refetch]
}
export default useCart;