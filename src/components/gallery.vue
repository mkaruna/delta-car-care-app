<template>
    <div class="app-gallery-page-container">
        <div class="header">
            <delta-header  @my-event="openModal" parent-page="gallery"></delta-header>
        </div>
        <div class="component-body row">
            <div class="gallery-items">
                <div class="gallery-item column">
                    <img class="gallery-image" src="../assets/door-pad.jpg" alt="">
                </div>
                <div class="gallery-item column">
                    <img class="gallery-image" src="../assets/headlight.jpg" alt="">
                </div>
                <div class="gallery-item column">
                    <img class="gallery-image" src="../assets/side-mirror-outer.jpg" alt="">
                </div>
                <div class="gallery-item column">
                    <img class="gallery-image" src="../assets/under-chassis-silencer.jpg" alt="">
                </div>
            </div>
            <div class="content-services-dialog row">
                <div class="column">
                    <dialog id="promotion-dialog">
                        <div class="btn-container">
                            <button autofocus id="dialog-close-button" @click="closeModal">Close</button>
                        </div>
                        <div>
                            <img class="delta-car-care-offer" src="../assets/summer-offer-2024.png" />
                        </div>
                    </dialog>
                </div>
            </div>
        </div>
        <div class="footer">
            <delta-footer></delta-footer>
        </div>
    </div>
</template>
<script>
import galleryData from "../resources/gallery.json";
import DeltaHeader from "./delta-header.vue";
import DeltaFooter from "./delta-footer.vue";

export default {
    name: "delta-gallery",
    components: {
        DeltaHeader,
        DeltaFooter,
    },
    methods: {
        openModal() {
            const dialog = document.querySelector("dialog");
            dialog.showModal();
        },
        closeModal() {
            const dialog = document.querySelector("dialog");
            dialog.close();
        }
    },
    data() {
        return {
            name: "delta-gallery",
            galleryData
        };
    },

}
</script>
<style scoped>

.component-header {
    .gallery-title {
        font-size: 18px;
        font-weight: 700;
        text-align: center;
        margin-bottom: 10px;
    }
}
.component-body {
    background-color: #3397ea;
    color: white;
    width: 100%;

    .gallery-items {
        display: inline-flex;
        flex-direction: row;
        flex-wrap: wrap;
        .gallery-image {
            width: 435px;
            height: 320px;
            margin: 30px 10px 10px 10px;
            display: block;
        }
    }
    &.row>* {
        flex: 1 1 250px;
    }
    .content-services-dialog {
        #dialog-close-button {
            float: right;
            list-style: none;
            border: 2px solid #000435 !important;
            border-radius: 20px;
            padding: 5px 15px 5px 15px;
            line-height: 15px;
            background-color: #3397EA;
            margin-right: 8px;
            display: inline-block;
            color: white;
            margin-bottom: 20px;
        }
        .delta-car-care-offer {
            width: 600px;
            height: 600px;
        }
    }
    @container (max-width: 400px) {
        .component-body {
            .row {
                &.content-services-dialog {
                    #dialog-close-button {
                        float: right;
                        list-style: none;
                        border: 2px solid #000435 !important;
                        border-radius: 20px;
                        padding: 5px 15px 5px 15px;
                        line-height: 15px;
                        background-color: #3397EA;
                        margin-right: 8px;
                        display: inline-block;
                        color: white;
                    }
                    .delta-car-care-offer {
                        width: 300px;
                        height: 400px;
                    }
                }
            }
        }
    }
}
</style>