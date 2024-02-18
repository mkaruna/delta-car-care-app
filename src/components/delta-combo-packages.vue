<template>
    <div class="app-services-page-container">
        <div class="header">
            <delta-header parent-page="services"></delta-header>
        </div>
        <div class="component-body row">
            <template v-for="serviceType in serviceData.list" :key="serviceType">
                <div class="service-type-item column">
                    <div>{{ serviceType.serviceName }}</div>
                    <ul class="unordered-list">
                        <li v-for="(service, i) in serviceType.services" :key="i" class="service-item">
                            {{ service }}
                        </li>
                    </ul>
                </div>
            </template>
        </div>
        <div class="footer">
            <delta-footer></delta-footer>
        </div>
    </div>
</template>
<script>
import DeltaHeader from "./delta-header.vue";
import DeltaFooter from "./delta-footer.vue";
import serviceData from "../resources/combos.json";

export default {
    name: "delta-combo-packages",
    components: {
        DeltaHeader,
        DeltaFooter,
    },
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
        display: flex;
        justify-content: space-around;
        flex-flow: wrap row;
        .service-type-item {
            border: white;
            border-style: groove;
            margin: 20px 20px 20px 20px;
            font-size: 18px;
            .unordered-list {
                list-style-type: square;
            }
            /* .service-type-item {
                font-size: 20px;
                margin-bottom: 10px;
            } */
            .service-item {
                margin-bottom: 5px;
                list-style-type: square;
                font-size: 16px;
            }
        }

        .column {
            padding: 20px 20px 20px 20px;
        }
    }
    &.row>* {
        flex: 1 1 250px;
    }
}</style>