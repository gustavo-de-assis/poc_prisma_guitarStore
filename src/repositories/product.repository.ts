import { connection } from "../database/db.js";
import { Product } from "../protocols/product.protocol.js";

export async function insertProduct(product: Product){
    await connection.query(`
        INSERT 
        INTO product 
            (model, brand, price, year)
        VALUES ($1,$2,$3,$4)`,
        [product.model, product.brand, 
            product.price, product.year]);
}