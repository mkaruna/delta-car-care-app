<template>
    <div class="app-main-page-container">
        <div class="header">
            <delta-header parent-page="contactus"></delta-header>
        </div>
        <div class="component-body row">
            <div class="customer-details column">
                <div class="row service-type">
                        <div class="column">
                            <label class="formLabel">Select a Service:</label>
                        </div>
                        <div class="column">
                            <select id="service" class="service" v-model="serviceType" placeholder="Select service">
                                <option id="" disabled selected>Select Service</option>
                                <option v-for="(key, value) in serviceTypes" :key="key" :id="value">{{ key }}</option>
                            </select>
                        </div>
                    </div>
                <div class="row customer-name">
                    <div class="column">
                        <label class="formLabel">Contact Name:</label>
                    </div>
                    <div class="column">
                        <input id="name" maxlength="80" v-model="customerName" size="20" type="text" class="form-control"
                            placeholder="Enter Name">
                    </div>
                </div>
                <div class="row email">
                    <div class="column">
                        <label class="formLabel">Email:</label>
                    </div>
                    <div class="column">
                        <input id="email" maxlength="80" v-model="email" size="20" type="text" class="form-control"
                            placeholder="Email Address">
                    </div>
                </div>
                <div class="row phone">
                    <div class="column">
                        <label class="formLabel">Phone:</label>
                    </div>
                    <div class="column">
                        <input id="phone" maxlength="40" v-model="phone" size="20" type="text" class="form-control"
                            placeholder="Phone Number">
                    </div>
                </div>
                <div class="row message-us">
                    <div class="column">
                        <label class="formLabel">Message:</label>
                    </div>
                    <div class="column">
                        <input id="message" maxlength="40" v-model="message" size="20" type="textarea" class="form-control"
                            placeholder="Your message here">
                    </div>
                </div>
                <div class="row controls">
                    <div class="column">
                        <input type="button" name="Cancel" value="Cancel" class="form-control" />
                    </div>
                    <div class="column">
                        <input type="button" name="Submit" value="Submit" class="form-control" @click="contactUs" />
                    </div>
                </div>
            </div>
            <div class="ad-here column">
                <template v-for="(serviceType, index) in serviceData.list">
                    <div class="service-type-item">{{ serviceType.serviceName }}</div>
                    <ul v-if="serviceType.serviceName === 'Other Essential Services'" class="unordered-list">
                        <li v-for="(service, index) in serviceType.services" class="service-item">
                            {{ service }}
                        </li>
                    </ul>
                </template>
                <!-- <img class="delta-ad" src="../assets/delta-promotion-ad.jpg" /> -->
            </div>
        </div>
        <div class="footer">
            <delta-footer></delta-footer>
        </div>
    </div>
</template>
<script>
import DeltaHeader from "./delta-header.vue";
import DeltaFooter from "./delta-footer.vue";
import serviceData from "../resources/services.json";
import { CourierClient } from "@trycourier/courier";

export default {
    name: "contact-us",
    components: {
        DeltaHeader,
        DeltaFooter,
    },
    computed: {
        serviceTypes() {
            return {
                "service": "Select",
                "carWash": "Car Wash",
                "polish": "Car Polish",
                "interior": "Interior Detailing",
                "teflon": "Teflon Coating",
                "underChasis": "Under Chasis Coating",
                "headLight": "Head Light Restoration",
                "rainRepellent": "Rain Repellent"
            };
        },
    },
    methods: {
        async contactUs() {
            console.log(`Contact us   ${this.serviceType}`);
            const courier = new CourierClient({ authorizationToken: "N2NiNGQ1NDAtYzVlOS00OTYzLWFmMTYtNDQ1NTUxYTIxOGI4"});

            const { requestId } = await courier.send({
                message: {
                    to: {
                    email: "kmanimaran2k3@gmail.com",
                    },
                    content: {
                    title: "Welcome!",
                    body: "Thanks for signing up, {{name}}",
                    },
                    data: {
                    name: "Manimaran Karunanithi",
                    },
                    routing: {
                    method: "single",
                    channels: ["email"],
                    },
                },
            });
        },
    },
    data() {
        return {
            name: "contact-us",
            serviceData,
            serviceType: null,
            customerName: null,
            email: null,
            phone:null,
            message: null
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
        flex-wrap: wrap;
        justify-content: space-around;

        .customer-details {
            .row {
                display: flex;
                .column {
                    width: 50%;
                }
                .column:first-child .formLabel {
                    float: right;
                }
                .form-control {
                    width: 300px;
                    height: 30px;
                }
                .formLabel {
                    height: 30px;
                }
                #message {
                    width: 300px;
                    height: 100px;
                }
                .service {
                    width: 307.2px;
                    height: 35.2px;
                }
            }
        }
        .ad-here {
            .unordered-list {
                list-style-type: square;
            }
            .service-type-item {
                font-size: 20px;
                margin-bottom: 10px;
            }
            .service-item {
                margin-bottom: 5px;
                list-style-type: square;
            }
        }

        .column {
            padding: 20px 20px 20px 20px;
        }
    }

    @media screen and (max-width: 600px) {
        .ad-here {
            display: none;
        }
        .customer-details {
            .row {
                display: flex;
                .column {
                    width: 50%;
                }
                .column:first-child .formLabel {
                    float: left;
                }
                .form-control {
                    width: 150px;
                    height: 30px;
                }
                .formLabel {
                    height: 30px;
                }
                #message {
                    width: 300px;
                    height: 100px;
                }
                .service {
                    width: 307.2px;
                    height: 35.2px;
                }
            }
        }

    }
}
</style>