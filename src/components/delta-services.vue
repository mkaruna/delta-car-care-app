<template>
    <div class="app-services-page-container">
        <div class="component-body row">
            <template v-for="serviceType in serviceData.services" :key="serviceType">
                <div class="service-items column">
                    <ul class="unordered-list">
                        <li class="service-item">
                            {{ serviceType }}
                        </li>
                    </ul>
                </div>
            </template>
        </div>
    </div>
</template>
<script>
import serviceData from "../resources/services.json";

export default {
    name: "delta-services",
    methods: {},
    data() {
        return {
            name: "delta-services",
            serviceData
        };
    },

}
</script>
<style scoped>
.component-body {
    background-color: #3397ea;
    color: white;
    width: 100%;

    &.row {
        display: inline-flex;
        flex-direction: row;
        flex-wrap: wrap;
        .service-items {
            border: white;
            font-size: 14px;
            .unordered-list {
                list-style-type: lower-latin;
                margin: 5px;
            }
            .service-item {
                margin-bottom: 1px;
                list-style-type: square;
                font-size: 16px;
            }
        }
    }
    &.row>* {
        flex: 1 1 250px;
    }
}</style>