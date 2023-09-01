import React from 'react'

function InventoryItemCard({item, reorderList, deleteItem}) {
    return(
        <div className="card" onClick={() => reorderList(item.id)}>
            <img src={item.image}></img>
            <h3>{item.name}</h3>
            <h4>${item.price}</h4>
            <button onClick={() => deleteItem(item.id)}>Delete</button>
        </div>
    );
}

export default InventoryItemCard;