import React, {useState, useEffect} from "react";
import ItemList from "../Item/ItemList";

const ItemDashboard = () => {

  //Get all Items method
  const [itemData, setItemData] = useState([]);

  useEffect(() => {
    fetchItemDataHandler();
  }, []);

  async function fetchItemDataHandler () {
    
    try {
      const response = await fetch('https://localhost:7071/api/Item/getAll', {
      method: 'GET',
      headers: {
            'Content-Type': 'application/json'
      },
    })
    const dataApi = await response.json();

    if(!response.ok){

    }

      const transformedData = dataApi.data.map(item => {
        return{
          id: item.itemId,
          name: item.itemName,
          type: item.itemType,
          description: item.description,
          quantity: item.quantity,
          userId: item.userId
        };
      });

      setItemData(transformedData);
    } catch (error) {

    }
    
  };

  return(
    <div><ItemList fetchItemDataHandler={fetchItemDataHandler} items={itemData}/></div>
    
  );
};

export default ItemDashboard;