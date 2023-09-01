import React from 'react'
import InventoryItemCard from './InventoryItemCard';

function ReorderInventoryList({reorder, removeFromReorder}) {
    return(
        <div id="reorder-container">
            <h2>Reorder</h2>
            <div>
                {reorder.map(item => <InventoryItemCard key={item.id} item={item} reorderList={removeFromReorder} />)}
            </div>
        </div>
    );
}

export default ReorderInventoryList;