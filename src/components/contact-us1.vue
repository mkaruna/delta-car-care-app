<template>
    <div class="app-main-page-container">
        <div class="header">
            <delta-header parent-page="contactus"></delta-header>
        </div>
        <div class="component-body row">
            <div class="customer-details column">
                <form class="text-left" ref="formElement" @submit.prevent="response">
                    <div class="response">
                        <span>{{ this.message }}</span>
                    </div>
                    <div class="row customer-name">
                        <div class="label column">
                            <label class="formLabel">Contact Name:</label>
                        </div>
                        <div class="column">
                            <input id="name" maxlength="80" name="entry.2010657061" size="20" type="text" class="form-control"
                                placeholder="* Enter Name">
                        </div>
                    </div>
                    <div class="row phone">
                        <div class="label column">
                            <label class="formLabel">Phone:</label>
                        </div>
                        <div class="column">
                            <input id="phone" maxlength="40" name="entry.1943661662" size="20" type="text" class="form-control"
                                placeholder="* Phone Number">
                        </div>
                    </div>
                    <div class="row service-type">
                        <div class="label column">
                            <label class="formLabel">Select a Service:</label>
                        </div>
                        <div class="column">
                            <select id="service" class="service" name="entry.61576913" placeholder="Select service">
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
                            <input id="email" maxlength="80" name="entry.1825752796" size="20" type="text" class="form-control"
                                placeholder="Email Address">
                        </div>
                    </div>
                    <div class="row message-us">
                        <div class="label column">
                            <label class="formLabel">Message:</label>
                        </div>
                        <div class="column">
                            <input id="message" maxlength="40" name="entry.1520951538" size="20" type="textarea" class="form-control"
                                placeholder="Your message here">
                        </div>
                    </div>
                    <div class="row controls">
                        <div class="column">
                            <button class="submit">Book Appointment</button>
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
                "teflon": "Teflon Coating",
                "ceramic": "Ceramic Coating",
                "carWash": "Eco-Foam Car Wash",
                "interior": "Interior Detailing",
                "underChasis": "Under Chassis Coating",
                "silencerCoating": "Silencer Coating",
                "polish": "Rubbing Polish",
                "rainRepellent": "Rain Repellent",
                "batteryTerminalCoating": "Battery Terminal Coating",
                "chromePolish": "Chrome Polish",
                "headLight": "Head Light Restoration",
            };
        },
    },
    methods: {
        async response() {
            const url =
                "https://docs.google.com/forms/d/e/1FAIpQLSfCqQmX-5p2gBl-T533W2EA_on7-AxH85-Hygb7LIgFLJZ9Vg/formResponse";
            var vm = this;
            var formElement = vm.$refs.formElement;
            var formData = new FormData(formElement);
            var data = {};

            for (var pair of formData.entries()) {
                data[pair[0]] = pair[1];
            }

            const bookingDate = new Date();
            data["entry.700899599"] = `DEL${bookingDate.getMonth() + 1}${bookingDate.getDate()}${bookingDate.getFullYear()}${bookingDate.getMilliseconds()}`

            if(data["entry.2010657061"] === "" && data["entry.1943661662"] === "") {
                this.message = "* Please Enter Name and Phone number to successfully book an appointment";
                return;
            }
            if(data["entry.1943661662"] === "") {
                this.message = "* Please Enter Name to successfully book an appointment";
                return;
            }
            if(data["entry.2010657061"] === "") {
                this.message = "* Please Enter Phone number to successfully book an appointment";
                return;
            }

            const t = await fetch(url, {
                mode: "no-cors",
                method: "POST",
                headers:{
                        "Content-Type": "application/x-www-form-urlencoded",
                },
                body: new URLSearchParams(data).toString(),     
            });
            
            if(t) {
                this.apiResponse = true;
                this.message = "Thank you for your appointment! Team Delta represntative will call you with appointment details.";
            } else {
                this.apiResponse = false;
                this.message = "OOPS! Something went wrong. Please try booking again."
            };
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
            message: null,
            apiResponse: false,
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
                .response {
                    font-size: 16px;
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
                    &.email,
                    &.message-us {
                        display: none;
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