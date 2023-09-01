import React from 'react'
import InventoryItemCard from './InventoryItemCard';

function CurrentInventoryList({inventoryList, reorderList, deleteItem}) {

    return(
        <div id="current-inventory">
            <h2>Current Inventory</h2>
            <div>
                {inventoryList.map(item => <InventoryItemCard reorderList={reorderList} key={item.id} item={item} deleteItem={deleteItem} /> )}
            </div>item
        </div>
    );
}

export default CurrentInventoryList;