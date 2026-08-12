import fs from 'fs';
import path from 'path';

export async function fetchProducts() {
  try {
    const filePath = path.join(process.cwd(), 'db.json');
    const fileData = fs.readFileSync(filePath, 'utf8');
    const jsonData = JSON.parse(fileData);
    
    return jsonData.products || jsonData;
  } catch (error) {
    console.error("Error reading products:", error);
    return [];
  }
}