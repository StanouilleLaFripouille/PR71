export class Product {
    constructor(
        public title : string,
        public description:string,
        public price:string,
        public company:string,
        public image:string,
    ){
        this.title = title
        this.description = description
        this.price = price
        this.company = company
        this.image = image
    }
}