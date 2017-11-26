// are we ever going to manage more than media??
// I originally started with this base model thinking
// there may be a bunch of different model types that
// I'd want to manage (not just media).
// now considering
// 1. there's a media class
// 2. I'm prob not going to need a type check for anything other than media
// 3. I dont' want to send myself into OOP subclass hell
// it's worth considering the idea of folding these properties
// into the Media model class, making it the new "base" class,
// blowing this class away, and calling it a day.
// Keep it simple.
class BaseModel {
    constructor(options) {
        this.id = options.id || null
        this.type = null
    }
}

export default BaseModel
