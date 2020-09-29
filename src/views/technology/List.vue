<template>
  <div class="w-3/5 max-w-6xl h-auto flex flex-col mb-5">
    <div>
      <form action="GET">
        <label for="tag filter" class="mr-2">Filter by tech name:</label>
        <input
          type="text"
          class="h-8 mb-3 border border-gray-300 focus:border-gray-500 rounded"
        />
        <button
          v-on:click="onFilter"
          class="bg-gray-600 hover:bg-gray-500 ml-3 rounded-lg shadow-md text-white p-1 uppercase tracking-wide text-sm font-bold"
        >
          filter
        </button>
      </form>
    </div>
    <hr class="border border-gray-500" />
    <div class="w-full mt-5 flex flex-col items-center">
      <details-card
        v-for="(tech, index) in techs"
        :key="index"
        :name="tech.name"
        :tags="tech.tags"
      />
    </div>
  </div>
</template>

<script lang="ts">
import axios from "axios";
import { defineComponent } from "vue";
import DetailsCard from "@/components/DetailsCard.vue";

export default defineComponent({
  components: {
    DetailsCard,
  },

  data() {
    return {
      techs: [],
    };
  },

  created: function () {
    axios
      .get("https://sos-data-api.herokuapp.com/tech/list")
      .then((res) => {
        this.techs = res.data;
        console.log(this.techs);
      })
      .catch((error) => console.log(error));
  },

  methods: {
    onFilter(event: any) {
      event.preventDefault();
    },
  },
});
</script>