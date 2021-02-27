import axios from 'axios';

export const getProducts = async (setter, setLoading) => {
    setLoading(true)
    try {
        const res = await axios.get('/api/products');
        const { status, data } = res;
        if (status === 200) {
            setLoading(false)
            console.log(data);
            setter(data?.data)
        }

    } catch (error) {
        console.log(error);
        setLoading(false)

    }
}
export const getProductById = async (id, setter, setLoading) => {
    setLoading(true)
    try {
        const res = await axios.get(`/api/products/${id}`);
        const { status, data } = res;
        if (status === 200) {
            setLoading(false)
            console.log(data);
            setter(data)
        }

    } catch (error) {
        console.log(error);
        setLoading(false)

    }
}