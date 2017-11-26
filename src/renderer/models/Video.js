import Media from "./Media"
import { VIDEO } from "./Types"

class Video extends Media {
    constructor(options) {
        super(options)
        this.type = VIDEO

        this.poster = options.poster || ""
    }

    getPreview() {
        return this.poster
    }
}

export default Video
