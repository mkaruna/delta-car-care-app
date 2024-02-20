<template>
    <div class="app-main-page-container">
        <div class="header">
            <delta-header parent-page="contactus"></delta-header>
        </div>
        <div class="component-body row">
            <div class="customer-details column">
                <form class="text-left" ref="formElement" @submit.prevent="response1">
                    <div class="row customer-name">
                        <div class="label column">
                            <label class="formLabel">Contact Name:</label>
                        </div>
                        <div class="column">
                            <input id="name" maxlength="80" name="entry.2005620554" size="20" type="text" class="form-control"
                                placeholder="Enter Name">
                        </div>
                    </div>
                    <div class="row phone">
                        <div class="label column">
                            <label class="formLabel">Phone:</label>
                        </div>
                        <div class="column">
                            <input id="phone" maxlength="40" name="entry.1166974658" size="20" type="text" class="form-control"
                                placeholder="Phone Number">
                        </div>
                    </div>
                    <div class="row service-type">
                        <div class="label column">
                            <label class="formLabel">Select a Service:</label>
                        </div>
                        <div class="column">
                            <select id="service" class="service" name="entry.444607297" placeholder="Select service">
                                <option id="" disabled selected>Select Service</option>
                                <option v-for="(key, value) in serviceTypes" :key="key" :id="value">{{ key }}</option>
                            </select>
                        </div>
                    </div>
                    <div class="row email">
                        <div class="label column">
                            <label class="formLabel">Email:</label>
                        </div>
                        <div class="column">
                            <input id="email" maxlength="80" name="entry.1905163202" size="20" type="text" class="form-control"
                                placeholder="Email Address">
                        </div>
                    </div>
                    <div class="row message-us">
                        <div class="label column">
                            <label class="formLabel">Message:</label>
                        </div>
                        <div class="column">
                            <input id="message" maxlength="40" name="entry.839337160" size="20" type="textarea" class="form-control"
                                placeholder="Your message here">
                        </div>
                    </div>
                    <div class="row controls">
                        <div class="column">
                            <button class="submit">Contact US</button>
                        </div>
                    </div>
                </form>
            </div>
            <div class="content-services row">
                <div class="services-info-container column">
                    <delta-services></delta-services>
                </div>
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
import DeltaServices from "./delta-services.vue";
import serviceData from "../resources/services.json";
import { CourierClient } from "@trycourier/courier";

export default {
    name: "contact-us",
    components: {
        DeltaHeader,
        DeltaFooter,
        DeltaServices
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
        async response1() {
            const url =
                "https://docs.google.com/forms/d/e/1FAIpQLSdfv_61kPaMvA8tXQshBTwGQuZuVFoZfq2JiTljdharEZiL3Q/formResponse";
            var vm = this;
            var formElement = vm.$refs.formElement;
            var formData = new FormData(formElement);
            var data = {};
            console.log(formElement);
            for (var pair of formData.entries()) {
                console.log(pair[0] + ", " + pair[1]);
                // data[pair[0]] = pair[1];
            }
            data["entry.2005620554"] = "Manimaran K";
            data["entry.1166974658"] = "3125092223";
            console.log(data);
            const t = await fetch(url, {
                mode: "no-cors",
                method: "POST",
                headers:{
                        "Content-Type": "application/x-www-form-urlencoded",
                },
                body: new URLSearchParams(data).toString(),     
            });

            console.log(t);
            
            if(t) {
                console.log(t);
            } else {
                console.log(`in catch`);
            };
        },
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
.app-main-page-container {
  container-type: inline-size;

  
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
                    &.controls {
                        text-align: right;

                        .submit {
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

                    }
                }
            }
            .content-services {
                width: 600px;
                height: 600px;
            }

            .column {
                padding: 20px 20px 20px 20px;
            }
        }

        @container (max-width: 600px) {
            .content-services {
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
                    &.controls {
                        text-align: right;

                    }
                }
                .label {
                    display: none;
                }
            }

        }
    }
}
</style>