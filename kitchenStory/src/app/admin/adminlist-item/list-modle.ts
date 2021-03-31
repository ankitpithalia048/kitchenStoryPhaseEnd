export class ItemModle {
    constructor(name:string,price:number,desc:string ){
        this.name=name;
        this.price=price;
        this.description=desc

    }
    name!: string;
    price!: number;
    description!: string;
}