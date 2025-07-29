import { useParams } from 'react-router-dom';
export default function Product(props) {
    const params = useParams();
    console.log(params);

    return (
        <>
            <h2>Product</h2>
            <ul></ul>
        </>
    );
}
