import Video from "@/models/Video"
import Image from "@/models/Image"
import Media from "@/models/Media"

const state = {
    mediaHasBeenSelected: false,
    selectedMedia: new Media({}),
    media: [
        new Image({
            id: 1,
            source: "https://picsum.photos/900/900/?image=175",
            thumbnail: "https://picsum.photos/200/200/?image=175",
            caption: "An Image"
        }),
        new Image({
            id: 2,
            source: "https://picsum.photos/900/900/?image=483",
            thumbnail: "https://picsum.photos/200/200/?image=483",
            caption: "Another Image"
        }),
        new Video({
            id: 3,
            source:
                "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
            poster:
                "https://peach.blender.org/wp-content/uploads/bbb-splash.png?x11217",
            caption: "And a video"
        }),
        new Video({
            id: 4,
            source:
                "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
            poster:
                "https://peach.blender.org/wp-content/uploads/bbb-splash.png?x11217",
            caption: "And what do you know, another video"
        })
    ]
}

const getters = {
    mediaIsSelected(state) {
        return state.mediaHasBeenSelected
    }
}
const actions = {
    openMedium({ dispatch, commit }, medium) {
        commit("SET_MEDIA_SELECTION_STATE", true)
        commit("OPEN", medium)
    },
    closeMedium({ dispatch, commit }, medium) {
        commit("SET_MEDIA_SELECTION_STATE", false)
        commit("CLOSE")
    }
}

const mutations = {
    SET_MEDIA_SELECTION_STATE(state, bool) {
        state.mediaHasBeenSelected = bool
    },
    OPEN(state, medium) {
        state.selectedMedia = medium
    },
    CLOSE(state) {
        state.selectedMedia = new Media({})
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
