import ProductOrderCard from "./ProductOrderCard";
import { GetShopItems } from "../Api";

export default function Products(props) {
    var shopItems = GetShopItems();

    return shopItems.map(element => element.stock < 1 ? null :
        <ProductOrderCard
            key={element.id}
            id={element.id}
            title={element.title} description={element.description}
            price={element.price} image={`${process.env.PUBLIC_URL}${element.image_path}`}
            max_order={Math.min(element.stock, 15)}
        />
    );
}