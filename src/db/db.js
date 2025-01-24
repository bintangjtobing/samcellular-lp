import Dexie from "dexie"

const db = new Dexie("shoopingCart")
db.version(1).stores({
  Products: "id,name,price,qty,image"
})


export default db