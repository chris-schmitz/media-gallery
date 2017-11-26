import BaseModel from "./Base"

class Media extends BaseModel {
    constructor(options) {
        super(options)
        this.source = options.source || ""
        this.caption = options.caption || ""
    }

    getPreview() {
        // in a true OOP enviroment, this would be considered
        // an abstract method that the extending class needs to
        // implement.
        console.warn("The extending class should implement this method.")
    }
}

export default Media
