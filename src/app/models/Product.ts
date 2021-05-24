export class Product {
    constructor(
        public name: string, 
        public year: number, 
        public price: number, 
        public imageUrl: string, 
        public description: string, 
        public id: number, 
        public categoryId: number,
        public dateAdded: Date) {}
}