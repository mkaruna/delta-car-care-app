<template>
    <div class="contact-us-container">
        <form class="text-left" ref="formElement" @submit.prevent="response1">
            <input name="entry.1166974658"/>
            <button class="submit">Click for Response</button>
            <!-- <div class="component-header row">
                <span>
                    Contact Us
                </span>
            </div>
            <div class="component-body row">
                <div class="contact-us-form row">
                    <div class="contact-us-form-column column">
                        <div class="service-row row">
                            <div class="service-text-column text-column column">Select a Service:</div>
                            <div class="service-input-column column">
                                <select class="service" v-model="serviceType">
                                    <option v-for="(key, value) in serviceTypes" :key="key" :id="value">{{ key }}</option>
                                </select>
                            </div>
                        </div>
                        <div class="email-row row">
                            <div class="email-text-column text-column column">
                                <label for="email" class="formLabel">Email:</label>
                            </div>
                            <div class="email-input-column column">
                                <input v-model="email"/>
                            </div>
                        </div>
                        <div class="mobile-number-row row">
                            <div class="mobile-number-text-column text-column column">Mobile Number:</div>
                            <div class="mobile-number-input-column column">
                                <input name="entry.1166974658"/>
                            </div>
                        </div>
                        <div class="message-row row">
                            <div class="message-text-column text-column column">Message For Us:</div>
                            <div class="message-input-column column">
                                <input v-model="message"/>
                            </div>
                        </div>
                        <div class="submit-row row">
                            <div class="submit-input-column text-column column">
                                <button class="submit">Click for Response</button>
                            </div>
                             <div class="cancel-input-column column">
                                <button class="cancel" type="button">Cancel</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="packages row"></div>
            </div>-->
        </form>
    </div>
</template>
<script>
import { computed, ref, unref, onMounted } from "vue";
import axios from "axios";

export default {
    name: "contactus",
    data() {
        return {
            
        }
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
                method: "post",
                headers:{
                        "Content-Type": "application/x-www-form-urlencoded",
                },
                body: new URLSearchParams(data).toString(),     
            });
            
            if(t) {
                console.log(t);
            } else {
                console.log(`in catch`);
            };
        },
        response () {
            var vm = this;
            var formElement = vm.$refs.formElement;
            var formData = new FormData(formElement);
            // Display the key/value pairs
            for (var pair of formData.entries()) {
                console.log(pair[0] + ", " + pair[1]);
            }
            console.log(formData);
            const url =
                "https://docs.google.com/forms/u/0/d/e/1FAIpQLSdfv_61kPaMvA8tXQshBTwGQuZuVFoZfq2JiTljdharEZiL3Q/formResponse";
            axios
                .post(url, formData, {
                    mode: "no-cors",
                    headers:{
                        "Content-Type": "application/x-www-form-url-encoded",
                    }
                }).then(function(response) {
                    console.log(response);
                }).catch(err => {
                    console.log(`in catch: ${err}`);
                });
        }

    }
}
</script>
<style scoped>
.contact-us-container {
    .component-body {
        width: 100%;
        .row {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
        }
        .contact-us-form-column {
            width: 100%;
            .column {
                width: 50%;
            }
            .text-column {
                text-align: right;
            }
        }
    }
    @media screen and (max-width: 400px) {
        .form-control {
            width: 100px;
            height: 30px;
        }
        .formLabel {
            height: 30px;
        }
        #message {
            width: 100px;
            height: 100px;
        }
        .service {
            width: 107.2px;
            height: 35.2px;
        }
    }
}
</style>