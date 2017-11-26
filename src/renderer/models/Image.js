import Media from "./Media"
import { IMAGE } from "./Types"

class Image extends Media {
    constructor(options) {
        super(options)
        this.type = IMAGE

        this.thumbnail = options.thumbnail || ""
    }

    getPreview() {
        return this.thumbnail
    }
}

export default Image
