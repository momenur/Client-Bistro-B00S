import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
const useAdmin = () => {
    const { user } = useContext(AuthContext);


    const { refetch, data: admin = [], isLoading } = useQuery({
        queryKey: ['admin', user?.email],
        queryFn: async () => {
            const response = await fetch(`http://localhost:5000/users/admin/${user?.email}`)
            if (!response.ok) {
                throw new Error('Network response was not ok')
            }
            return response.json()
        },
    })
    return [admin, isLoading, refetch]
}
export default useAdmin;