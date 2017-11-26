<template lang="pug">
    div.media-tile-container(@click="openMedia")
        v-card(class="card")
            v-card-media(
                :src="imageSource"
                class="thumbnail"
            )
            v-card-title {{media.caption}}
</template>

<script>
import { mapActions } from "vuex"
import { VIDEO, IMAGE } from "../models/Types"

export default {
    props: ["media"],
    data() {
        return {
            mediaHeight: "200px"
        }
    },
    computed: {
        imageSource() {
            // if (this.media.type === VIDEO) {
            //     return this.media.poster
            // }
            // if (this.media.type === IMAGE) {
            //     return this.media.thumbnail
            // }
            return this.media.getPreview()
        }
    },
    methods: {
        ...mapActions("Gallery", ["openMedium"]),
        openMedia() {
            this.openMedium(this.media)
        }
    }
}
</script>

<style lang='scss' scoped>
.thumbnail {
    width: 200px;
    // we're having to important the hight here b/c the
    // vuetify component sets the style of the media sub
    // with a style tag
    height: 200px !important;
}
.card {
    min-height: 280px;
}
</style>
