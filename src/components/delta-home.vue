<template>
  <div class="app-main-page-container">
    <delta-header></delta-header>
    <div class="component-body">
      <div class="content-services row">
        <div class="service-wash-container column">
          <img class="wash" src="../assets/car-wash-detailing-station.png" />
          <div class="service-description">
            <p v-for="desc in serviceDescriptions.ecowash.description">{{ desc }}</p>
          </div>
        </div>
        <div class="service-polish-container column">
          <img class="polish" src="../assets/car-wash-detailing-station-1.png" />
          <div class="service-description">
            <p v-for="desc in serviceDescriptions.teflon.description">{{ desc }}</p>
          </div>
        </div>
        <div class="service-misc-container column">
          <img class="misc" src="../assets/car-wash-detailing-station-2.png" />
          <div class="service-description">
            <p v-for="desc in serviceDescriptions.detailing.description">{{ desc }}</p>
          </div>
        </div>
      </div>
    </div>
    <delta-footer></delta-footer>
  </div>
</template>
<script>
import DeltaHeader from "./delta-header.vue";
import DeltaFooter from "./delta-footer.vue";
import serviceDescriptions from "../resources/service-descriptions.json";

export default {
    name: "delta-home",
    components: {
        DeltaHeader,
        DeltaFooter,
    },
    data() {
        return {
            name: "delta-home",
            serviceDescriptions,
        };
    },

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
    .content-services {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      .column {
        /* margin: 20px 5px 20px 5px; */
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
    }
    .wash,
    .polish,
    .misc {
      width: 435px;
      height: 350px;
      margin: 0 auto;
      display: block;
    }
  }
  @media screen and (max-width: 400px) {
    .component-body {
      .wash,
      .polish,
      .misc {
        width: 371px;
        height: 350px;
        margin: 0 auto;
        display: block;
      }
    }
  }
}
</style>
