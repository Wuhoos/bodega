import React, {useEffect, useState} from "react";
import CurrentInventoryList from "./CurrentInventoryList";
import ReorderInventoryList from "./ReorderInventoryList"

function InventoryManager() {

    const [inventoryList, setInventoryList] = useState([])

    useEffect(() => {
        fetch('http://localhost:8001/inventory')
        .then(res => res.json())
        .then(inventoryList => setInventoryList(inventoryList))
    },[])



    const deleteItem = (id) => {
        fetch(`http://localhost:8001/inventory/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        }) .then(res => {
            if(res.ok){
                setInventoryList(inventoryList.filter(item => {
                    return item.id !== id
                }))
            }
        })
    }

    const [reorder, setReorder] = useState([])

    const reorderList = (id) => {
        const selectedItem = inventoryList.find(item => {
            if(item.id === id && !reorder.find(item => item.id === id)){
                return true
            } else {
                return false
            }
        })
        if(selectedItem !== undefined){
            setReorder([...reorder, selectedItem])
        }
    }

    const removeFromReorder = (id) => {
        const removeItem = reorder.filter(item => item.id !== id)
        setReorder(removeItem)
    }

    return(
        <div className="container">
            <CurrentInventoryList inventoryList={inventoryList} reorderList={reorderList} deleteItem={deleteItem} />
            <ReorderInventoryList reorder={reorder} removeFromReorder={removeFromReorder} />
        </div>
    );
}

export default InventoryManager;