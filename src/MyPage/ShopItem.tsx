type ShopItemProps = {
    title: string;
    imageUrl: string;
    description: string;
    price: number;
};

export const ShopItem: React.FC<ShopItemProps> = ({ title, description, imageUrl, price }) => {
    return (
        <div className="grid__item">
            <div className="shopItem">
                <img className="shopItem__image" src={imageUrl} alt={title} />
                <h2 className="shopItem__title">{title}</h2>
                <p className="shopItem__description">{description}</p>
                <div className="shopItem__actions">
                    <span className="shopItem__price">€ {price}</span>
                    <button className="shopItem__button">Buy</button>
                </div>
            </div>
        </div>
    );
};