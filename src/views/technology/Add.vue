<template>
  <add-tech-form />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AddTechForm from "@/components/AddTechForm.vue";

export default defineComponent({
  components: {
    AddTechForm,
  },
});
</script>