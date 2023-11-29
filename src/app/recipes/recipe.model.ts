export class Recipe {
    public name: String;
    public description: String;
    public imagepath: String;

    constructor(name: String, desc: String, image: String) {
        this.name = name;
        this.description = desc;
        this.imagepath = image;
    }
}