<template>
  <div class="app-main-page-container">
    <delta-header @my-event="openModal"></delta-header>
    <div class="component-body">
      <div class="content-services1 row">
        <div class="services-info-container column">
          <delta-services></delta-services>
        </div>
      </div>
      <div class="content-services row">
        <div class="service-wash-container column">
          <div class="title">Organic Eco-Friendly Foam Wash</div>
          <img class="wash" src="../assets/car-wash-detailing-station.png" />
          <div class="service-description">
            <p v-for="(desc, count) in serviceDescriptions.ecowash.description" :key="count">{{ desc }}</p>
          </div>
        </div>
        <div class="service-polish-container column">
          <div class="title">Teflon Coating</div>
          <img class="polish" src="../assets/car-wash-detailing-station-1.png" />
          <div class="service-description">
            <p v-for="(desc, count) in serviceDescriptions.teflon.description" :key="count">{{ desc }}</p>
          </div>
        </div>
        <div class="service-misc-container column">
          <div class="title">Enrichment services</div>
          <img class="misc" src="../assets/car-wash-detailing-station-2.png" />
          <div class="service-description">
            <p v-for="(desc, count) in serviceDescriptions.detailing.description" :key="count">{{ desc }}</p>
          </div>
        </div>
      </div>
      <div class="content-services-dialog row">
        <dialog id="promotion-dialog">
          <div>
            <button autofocus id="dialog-close-button" @click="closeModal">Close</button>
            <img class="delta-car-care-offer" src="../assets/offer-feb-2024.png" />
          </div>
        </dialog>
        <button id="dialog-open-button" @click="openModal">Show the dialog</button>
      </div>
    </div>
    <delta-footer></delta-footer>
  </div>
</template>
<script>
import DeltaHeader from "./delta-header.vue";
import DeltaFooter from "./delta-footer.vue";
import DeltaServices from "./delta-services.vue";
import serviceDescriptions from "../resources/service-descriptions.json";

export default {
    name: "delta-home",
    components: {
        DeltaHeader,
        DeltaFooter,
        DeltaServices
    },
    data() {
        return {
            name: "delta-home",
            serviceDescriptions,
        };
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
    }

}

</script>

<style scoped>
* {
  box-sizing: border-box;
}
.row::after {
  content: "";
  clear: both;
  display: table;
}
.column {
  margin: 20px 5px 20px 5px;
}
.app-main-page-container {
  container-type: inline-size;
  .component-body {
    background-color: #3397ea;
    color: white;
    .content-services1 {
      display: block;
      .services-info-container {
        border-style: groove;
        margin-top: 0px;
      }
    }
    .content-services {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      .column {
        width: 450px;
      }
      .service-wash-container,
      .service-polish-container,
      .service-misc-container {
        border: white;
        border-style: groove;
        img {
          margin: 5px;
        }
        .service-description {
          margin: 5px;
        }
      }
      .title {
        font-weight: 700;
          text-align: center;
          margin: 5px 0 5px 0;
        }
    }
    .wash,
    .polish,
    .misc {
      width: 435px;
      height: 350px;
      margin: 0 auto;
      display: block;
    }
    .content-services-dialog {
      #dialog-close-button {
        float: right;
      }
      .delta-car-care-offer {
        width: 500px;
        height: 600px;
      }
    }
  }
  @container (max-width: 400px) {
    .component-body {
      .wash,
      .polish,
      .misc {
        width: 370px;
        height: 350px;
        margin: 0 auto;
        display: block;
      }
      .service-wash-container,
      .service-polish-container,
      .service-misc-container {
        border-style: none;
      }
      .content-services-dialog {
      #dialog-close-button {
        float: right;
      }
      .delta-car-care-offer {
        width: 300px;
        height: 400px;
      }
    }
    }
  }
}
::backdrop {
  background-image: linear-gradient(
    45deg,
    magenta,
    rebeccapurple,
    dodgerblue,
    green
  );
  opacity: 0.75;
}
</style>
