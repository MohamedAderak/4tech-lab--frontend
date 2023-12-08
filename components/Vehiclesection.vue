<template>
    <div ref="content" class="relative mx-auto mt-4 p-8">
      <div class="relative flex items-top justify-between">
          <div class="text-lg mb-4"> <b class="font-bold">{{ resultsCount }} résultats</b> correspondant à votre recherche.</div>
          <div class="flex items-center mb-4">
            <label for="sort" class="mr-2">Trier par:</label>
            <select id="sort" class="p-2 border border-gray-300 rounded" @change="handleSortChange"> 
              <option value="" selected>-- Select --</option>
              <option value="price">Prix (Bas à Haut)</option>
              <option value="brand">Marque (A à Z)</option>
              <option value="gross_price">Prix brut (Haut à Bas)</option>
              <option value="year">Année (Récent à Ancien)</option>
              <option value="essence">Essence</option>
              <option value="diesel">Diesel</option>
            </select>
          </div>
      </div>
  
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 p-2 ">
      <div
        v-for="(vehicle, index) in filteredVehicles"
        :key="index"
        class="bg-blue-100 border border-gray-300 rounded-lg shadow dark:border-gray-300 m-3 h-auto"
      >
        <template v-if="index !== 5">
          <img
            :src="vehicle.photos[1]"
            alt="Vehicle Photo"
            class="w-auto h-50 object-cover rounded-t-lg mb-2"
          />
          <div class="flex p-6 justify-between">
          <div>
            <p class="text-sky-600 font-medium">{{ vehicle.brand }}</p>
            <h1 class="text-cyan-900 font-bold">{{ vehicle.model }}</h1>
            <p class="text-base text-cyan-800 font-medium">
              {{ vehicle.designation }}
            </p>
            <p class="text-sm text-cyan-800 font-medium">
              {{ vehicle.year }} - {{ vehicle.fuel_type }} - {{ vehicle.power_in_hp }} CH
            </p>
          </div>
          <div class="text-right ">
            <p class="text-xl text-cyan-900 font-extrabold ">{{ vehicle.official_price }} €</p>
            <div class="flex items-center mt-1">
              <p class="text-sm text-cyan-900 line-through mr-2">
                {{ vehicle.gross_price }}€
              </p>
              <p class="text-sm text-cyan-900 font-bold bg-amber-500 px-2 py-0">
                {{ vehicle.discountPercentage.toFixed(0) }}%
              </p>
            </div>
            <div v-if="vehicle.monthly_price" class=" mt-1">
                <p class="text-xs text-neutral-600  mr-2">
                  Ou a partir de
                </p>
                <p  class="text-neutral-600 font-bold mr-2">
                  {{ vehicle.monthly_price }} €
                </p>
                <p class="text-xs text-neutral-600  mr-2">
                  /mois
                </p>
            </div>
          </div>
        </div>
        </template>
        <template v-else>

          <div class="relative p-4 rounded h-full shadow" style="background-image: url('https://www.coches.com/fotos_historicas/dacia/Duster-2017/dacia_duster-2017_r11.jpg'); background-size: cover; filter: grayscale(20%); background-position: center;">
            <div class="absolute inset-x-0 bottom-4 text-center">
              <p class="text-lg text-slate-50 text-shadow font-semibold m-5 mb-2">Vous ne trouvez pas votre<br/> bonheur ? Nous faisons la<br/> recherche pour vous</p>
              <button class="backdrop-opacity-0 border border-white text-white px-2 py-2 mb-1 rounded-full">
                <span class="mr-1">&#x2192;</span> Découvrir 
              </button>
            </div>
          </div>

        </template>
      </div>
    </div>

    <div class="mt-4 flex justify-between items-center pb-10">
      <button @click="prevPage" :disabled="currentPage === 1" class="bg-blue-500 text-white px-4 py-2 rounded">
        Précédent
      </button>
      <div class="flex items-center space-x-2">
        <template v-for="pageNumber in totalPageNumbers">
          <button
            @click="goToPage(pageNumber)"
            :class="{ 'bg-blue-500 text-white px-4 py-2 rounded': currentPage === pageNumber, 'bg-gray-300 text-gray-700 px-4 py-2 rounded': currentPage !== pageNumber }"
          >
            {{ pageNumber }}
          </button>
        </template>
      </div>
      <button @click="nextPage" :disabled="currentPage === totalPages" class="bg-blue-500 text-white px-4 py-2 rounded">
        Suivant
      </button>
    </div>
    
  </div>
</template>
  
<script >

export default {

  props: {
    selectedValues: {
      type: Array,
      default: () => [],
    },
  },
  
  data() {
    return {
      selectedSort: "price",
      vehicles: [],
      itemsPerPage: 9,
      currentPage: 1,
    };
  },
 
  computed: {
    resultsCount() {
      if (Array.isArray(this.vehicles)) {
        return this.vehicles.length;
      } else {
        return 0;
      }
    },
    filteredVehicles() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;

      return this.vehiclesWithPercentage.slice(start, end);
    },
    vehiclesWithPercentage() {
      return this.vehicles.map((vehicle) => {
        const discountPercentage =
          ((vehicle.gross_price - vehicle.official_price) / vehicle.gross_price) * 100;
        return { ...vehicle, discountPercentage };
      });
    },
    totalPages() {
      return Math.ceil(this.resultsCount / this.itemsPerPage);
    },
    start() {
      return (this.currentPage - 1) * this.itemsPerPage;
    },
    end() {
      return this.start + this.itemsPerPage;
    },
    totalPageNumbers() {
    const totalPageNumbers = [];
    for (let i = 1; i <= this.totalPages; i++) {
      totalPageNumbers.push(i);
    }
    return totalPageNumbers;
  },
  },
  watch: {
    selectedValues: {
      handler: 'fetchDataFromApi',
      deep: true,
    },
  },

  created() {
    this.fetchDataFromApi();
  },
  methods: {
    
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage += 1;
        this.$nextTick(() => {
          if (this.$refs.content) {
            this.$refs.content.scrollIntoView({ behavior: 'smooth' });
          }
        });
      }
    },
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage -= 1;
        this.$nextTick(() => {
          if (this.$refs.content) {
            this.$refs.content.scrollIntoView({ behavior: 'smooth' });
          }
        });
      }
    },
    goToPage(pageNumber) {
      this.currentPage = pageNumber;
      this.$nextTick(() => {
          if (this.$refs.content) {
            this.$refs.content.scrollIntoView({ behavior: 'smooth' });
          }
        });
    },
    
    async handleSortChange(event) {
      const selectedSort = event.target.value;
      console.log(selectedSort);
      const url = `/api/vehicles/sort/${selectedSort}`;
      await this.fetchData(url);
    },

    async fetchDataFromApi() {
      let url = '/api/vehicles';

      if (this.selectedValues.length > 0) {
        url = `/api/vehicles/filter/${this.selectedValues.join(',')}`;
      }
      console.log(this.selectedValues)
      await this.fetchData(url);
    },

    async fetchData(url) {
      try {
        if (this.selectedValues.length === 0) {
          this.vehicles = [];
        }

        const response = await this.$axios.$get(url);
        this.vehicles = response;
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    },

    
  },
};
</script>

<style>
.text-shadow{
  text-shadow: 20px 20px 50px #0E4A5B;
}
</style>