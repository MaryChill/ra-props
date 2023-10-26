const Listing = ({ items }) => {
    const itemsObj = Object.values(items);
    //console.log(Object.values(items).map((el, index)=> {el}))
    // console.log(Object.values(items), itemsObj)
       itemsObj.map((el, index)=> {
        console.log(el.MainImage.listing_id)
       })
    return (
        <>
            {/* {itemsObj.map((el, index) => {
                <div className="item" key={index}>
                    <div className="item-image">
                        <a href={el.url}>
                            <img src={el.MainImage.url_570xN} />
                        </a>
                    </div>
                    <div className="item-details">
                        <p className="item-title">{el.title}</p>
                        <p className="item-price">${el.price}</p>
                        <p className="item-quantity level-medium">{el.quantity}</p>
                    </div>
                </div>
            })} */}
        </>

        // <>
        //     <div className="item-list">
        //         <div className="item">
        // <div className="item-image">
        //     <a href={items.url}>
        //         <img src={items.MainImage.url_570xN} />
        //     </a>
        // </div>
        // <div className="item-details">
        //     <p className="item-title">{items.title}</p>
        //     <p className="item-price">${items.price}</p>
        //     <p className="item-quantity level-medium">{items.quantity}</p>
        // </div>
        //         </div>
        //     </div>
        // </>
    )
}

export default Listing;