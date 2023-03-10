import { useStore } from './store';
import CardComponent from '@/components/card';
import Loading from '@/components/loading/loading';
import ProductModal from '@/components/modals/modal';
import NotFound from '@/components/pageNotFound';
import { Box, Button } from '@mui/material/';
import { useQuery } from 'react-query';

export default function Home() {
    const { toggleShow } = useStore();
    const fetchProducts = async () => {
        const res = await fetch('/api/products');
        return res.json();
    };
    const { isLoading, isError, data } = useQuery('products', fetchProducts);

    return (
        <>
            <Box>
                <ProductModal />
                {isError ? <NotFound /> : null}
                {isLoading ? <Loading /> : null}
                <Box display="flex" justifyContent="flex-end" alignItems="flex-end">
                    <Button sx={{ m: 1 }} onClick={toggleShow} variant="contained">
                        Add product
                    </Button>
                </Box>
                {data && <CardComponent products={data} />}
            </Box>
        </>
    );
}
