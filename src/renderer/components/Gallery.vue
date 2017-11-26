<template lang="pug">
    div.gallery-container
        media-tile.thumbnail(
            v-for="medium in media"
            :media="medium"
            :key="medium.id"
        )
        v-dialog(
            v-model="showSelectedMedia"
        )
            v-card(
            style="overflow:hidden;"
            )
                video(
                        v-if="selectedMedia.type === videoModel"
                        :controls="true"
                        autoplay
                    )
                    //- for some reason we need this if statement
                    //- to get the video to load correctly
                    source(
                        v-if="selectedMedia.source"
                        :src="selectedMedia.source"
                        type="video/mp4"
                )
                v-card-media(
                    v-if="selectedMedia.type === imageModel"
                    :src="selectedMedia.source"
                    height="80vh"
                    class="fullsize"
                )
                v-card-title {{selectedMedia.caption}}
        //- how do we de-select when we want to close
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex"

import Video from "../models/Video"
import Image from "../models/Image"
import { VIDEO, IMAGE } from "../models/Types"

import MediaTile from "./MediaTile"

export default {
    components: { MediaTile },
    data() {
        return {
            videoModel: VIDEO,
            imageModel: IMAGE
        }
    },
    computed: {
        ...mapState("Gallery", ["media", "selectedMedia"]),
        ...mapGetters("Gallery", ["mediaIsSelected"]),
        showSelectedMedia: {
            get() {
                return this.mediaIsSelected
            },
            set(state) {
                // close is really all we need
                this.closeMedium()
            }
        }
    },
    methods: {
        ...mapActions("Gallery", ["closeMedium"])
    }
}
</script>

<style lang='scss' scoped>
.gallery-container {
    display: flex;
    flex-wrap: wrap;
    > * {
        margin: 10px;
    }
}
.dialog-card {
    overflow: hidden;
}
video {
    width: 100%;
}
</style>
