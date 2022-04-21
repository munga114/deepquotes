export class Quote {
    id:number;
    name:string;
    quote:string;
    author:string;
    numberOfUpvotes:number;
    numberOfDownvotes:number;


    // upvotes:number;
    // downvotes:number;

    constructor(id:number,name:string,quote:string,author:string,numberOfUpvotes:number,numberOfDownvotes:number, public completeDate: Date){
        this.id=id;
        this.name=name;
        this.quote=quote;
        this.author=author;
        this.numberOfUpvotes=0;
        this.numberOfDownvotes=0;
        // this.completeDate=new Date;


    }
}
