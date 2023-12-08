<template>
<div>
    <div class="flex justify-between min-h-screen h-screen bg-gray-100" >
      
      <div class="flex justify-start padding-b bg-slide h-screen w-48  overflow-auto custom-scrollbar md:w-64 lg:w-84 xl:w-1/4 2xl:w-1/5 flex flex-col">
      
        <div class="flex items-center">
          <a href="/"><img src="./images/Logo.png" alt="Logo" class="m-1 px-4" /></a>
        </div>
        

        <ul>
          <li>
                <div class="flex flex-col margin justify-center space-y-4">
                <div :class="{'bg-div-checked': hybrideChecked, 'bg-div': !hybrideChecked}" class="text-white rounded-md p-3 flex items-center justify-between">
                    <label for="hybride" class="mr-2">Prêt à partir</label>
                    <label class="relative inline-flex items-center cursor-pointer ">
                      <input type="checkbox" @change="handleCheckboxChange('hybride')" v-model="hybrideChecked" value="hybride" class="sr-only peer">
                      <div class="checkbox-opacity w-11 h-6  mr-2 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 "></div>
                    </label>
                </div>
                <div :class="{'bg-div-checked': zeroKmChecked, 'bg-div': !zeroKmChecked}" class="text-white rounded-md p-3 flex items-center justify-between">
                    <label for="zeroKm" class="mr-2">Zéro km</label>
                    <label class="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" @change="handleCheckboxChange('zeroKm')" v-model="zeroKmChecked" value="zeroKm" class="sr-only peer">
                      <div class="checkbox-opacity w-11 h-6  mr-2 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 "></div>
                    </label>
                </div>
                <div :class="{'bg-div-checked': PromotionsChecked, 'bg-div': !PromotionsChecked}" class="text-white rounded-md p-3 flex items-center justify-between">
                    <label for="Promotions" class="mr-2">Promotions</label>
                    <label class="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" @change="handleCheckboxChange('Promotions')" v-model="PromotionsChecked" value="Promotions" class="sr-only peer">
                      <div class="checkbox-opacity w-11 h-6 mr-2 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 "></div>
                    </label>
                </div>
            </div>
          </li>
          <li>
            <div class="flex flex-col justify-center w-auto">
              <div class="flex items-center justify-start p-2 pt-2 ml-2">
                  <span class="text-sm md:text-lg lg:text-xl xl:text-2xl font-bold text-gray-700" >Budget</span>
              </div>

              <div class="flex w-auto ml-5 mr-10">
                    <ul class="flex items-center justify-start w-auto">
                      <li>
                      <input
                          type="radio"
                          id="Total"
                          name="Budget"
                          value="Total"
                          class="hidden peer text-xs md:text-sm lg:text-base xl:text-lg"
                          required
                          @change="handleChange"
                      />
                      <label
                          for="Total"
                          :class="{
                            'Budget-checked ': totalChecked,
                            'Budget-div ': !totalChecked,
                          }"
                          class="Budget Budget-t inline-flex items-center justify-between w-full p-2 rounded-l cursor-pointer border-t-solid-l-r-none font-bold"
                      >
                          <div class="block">
                            <div class="w-full text-lg font-semibold">Total</div>
                          </div>
                      </label>
                      </li>
                      <li>
                      <input
                          type="radio"
                          id="Mensuel"
                          name="Budget"
                          value="Mensuel"
                          class="hidden peer text-xs md:text-sm lg:text-base xl:text-lg"
                          @change="handleChange"
                      />
                      <label
                          for="Mensuel"
                          :class="{
                            'Budget-checked': mensuelChecked,
                            'Budget-div':
                              !mensuelChecked,
                          }"
                          class="Budget Budget-m inline-flex items-center justify-between w-full p-2 rounded-r cursor-pointer border-t-solid-r-l-none font-bold"
                      >
                          <div class="block">
                            <div class="w-full text-lg font-semibold">Mensuel</div>
                          </div>
                      </label>
                      </li>
                    </ul>
              </div>
              <div class="flex items-center justify-start p-2 pt-2 ml-2 w-auto">
                <section class="range-slider">
                  <input name="rangeOne" value="100" min="100" max="51000" step="10" type="range" @input="handleChange">
                  <input name="rangeTwo" value="32000" min="100" max="51000" step="10" type="range" @input="handleChange">
                  <span class="full-range"></span>
                  <span class="incl-range"></span>
                  <div class="flex justify-between p-2 pt-2 ml-2">
                    <span class="output outputOne"></span>
                    <span class="output outputTwo"></span>
                  </div>
              </section>
              </div>
            
            </div>
          </li>
          <li>
            <DropdownSection
              buttonId="dropdownRadioBgHoverButton1"
              dropdownToggle="dropdownRadioBgHover"
              labelText="Marque"
              iconId="icon1"
              :radioItems="MarqueRadioItems"
              radioGroupName="default-radio-1"
              radioIdPrefix="default-radio-1"
              labelIdPrefix="label-radio-1"
            ></DropdownSection>
          </li>
          <li>
            <DropdownSection
              buttonId="dropdownRadioBgHoverButton2"
              dropdownToggle="dropdownRadioBgHover"
              labelText="Type de véhicule"
              iconId="icon2"
              :radioItems="vehicleTypeRadioItems"
              radioGroupName="default-radio-2"
              radioIdPrefix="default-radio-2"
              labelIdPrefix="label-radio-2"
            ></DropdownSection>
          </li>
          <li>
            <DropdownSection
              buttonId="dropdownRadioBgHoverButton3"
              dropdownToggle="dropdownRadioBgHover"
              labelText="Modèle"
              iconId="icon3"
              :radioItems="modelRadioItems"
              radioGroupName="default-radio-3"
              radioIdPrefix="default-radio-3"
              labelIdPrefix="label-radio-3"
            ></DropdownSection>
          </li>
          <li>
            <DropdownSection
              buttonId="dropdownRadioBgHoverButton5"
              dropdownToggle="dropdownRadioBgHover"
              labelText="Année"
              iconId="icon5"
              :radioItems="yearRadioItems"
              radioGroupName="default-radio-5"
              radioIdPrefix="default-radio-5"
              labelIdPrefix="label-radio-5"
            ></DropdownSection>
            
          </li>
          <li>
            <DropdownSection
              buttonId="dropdownRadioBgHoverButton4"
              dropdownToggle="dropdownRadioBgHover"
              labelText="Kilométrage"
              iconId="icon4"
              :radioItems="kilometerRadioItems"
              radioGroupName="default-radio-4"
              radioIdPrefix="default-radio-4"
              labelIdPrefix="label-radio-4"
            ></DropdownSection>
          </li>
          <li>
            <DropdownSection
              buttonId="dropdownRadioBgHoverButton6"
              dropdownToggle="dropdownRadioBgHover"
              labelText="Couleur"
              iconId="icon6"
              :radioItems="CouleurRadioItems"
              radioGroupName="default-radio-6"
              radioIdPrefix="default-radio-6"
              labelIdPrefix="label-radio-6"
            ></DropdownSection>
          </li>
          <li>
            <DropdownSection
              buttonId="dropdownRadioBgHoverButton7"
              dropdownToggle="dropdownRadioBgHover"
              labelText="Motorisation"
              iconId="icon7"
              :radioItems="MotorisationRadioItems"
              radioGroupName="default-radio-7"
              radioIdPrefix="default-radio-7"
              labelIdPrefix="label-radio-7"
            ></DropdownSection>
          </li>
          <li>
            <DropdownSection
              buttonId="dropdownRadioBgHoverButton8"
              dropdownToggle="dropdownRadioBgHover"
              labelText="Equipement"
              iconId="icon8"
              :radioItems="EquipementRadioItems"
              radioGroupName="default-radio-8"
              radioIdPrefix="default-radio-8"
              labelIdPrefix="label-radio-8"
            ></DropdownSection>
          </li>
        </ul>

      </div>
   

    
    
      <div class="flex justify-end bg-light h-screen w-screen  overflow-auto custom-scrollbar md:flex-grow lg:flex-grow xl:flex-grow 2xl:flex-grow">
          <Vehiclesection :selectedValues="selectedValues"></Vehiclesection>
      </div>

    </div>
</div>  
</template>
  
  <script>
import DropdownSection from '@/components/DropdownSection.vue';
import Vehiclesection from "@/components/Vehiclesection.vue";
  export default {
      name: 'index',
      components: {
        DropdownSection,
        Vehiclesection,
      },
      data() {
        return {
          zeroKmChecked: false,
          hybrideChecked: false,
          PromotionsChecked: false,
          totalChecked: true,
          mensuelChecked: false,
          isRotated1: false,
          isRotated2: false,
          MarqueRadioItems: [],
          vehicleTypeRadioItems: [],
          modelRadioItems: [],
          kilometerRadioItems: [
             { value: 'all', label: 'Tous', checked: 'checked' },
          ],
          yearRadioItems: [],
          CouleurRadioItems: [
             { value: 'all', label: 'Tous', checked: 'checked' },
          ],
          MotorisationRadioItems: [
             { value: 'all', label: 'Tous', checked: 'checked' },
          ],
          EquipementRadioItems: [
             { value: 'all', label: 'Tous', checked: 'checked' },
          ],
          selectedValues: [],
        };  
      },
      async fetch() {
        try {
          const response = await this.$axios.$get('/api/vehicles');
          this.vehicles = response;

          const uniqueBrands = [...new Set(this.vehicles.map((vehicle) => vehicle.brand))];
          this.MarqueRadioItems = [
            { value: 'all', label: 'Toutes', checked: 'checked' },
            ...uniqueBrands.map((brand) => ({ value: brand, label: brand })),
          ];

          const uniqueTransmissionTypes = [...new Set(this.vehicles.map((vehicle) => vehicle.transmission_type))];
          this.vehicleTypeRadioItems = [
            { value: 'all', label: 'Tous', checked: 'checked' },
            ...uniqueTransmissionTypes.map((type) => ({ value: type, label: type })),
          ];

          const uniqueModels = [...new Set(this.vehicles.map((vehicle) => vehicle.model))];
          this.modelRadioItems = [
            { value: 'all', label: 'Tous', checked: 'checked' },
            ...uniqueModels.map((model) => ({ value: model, label: model })),
          ];

          const uniqueYears = [...new Set(this.vehicles.map((vehicle) => vehicle.year))];
          this.yearRadioItems = [
            { value: 'all', label: 'Tous', checked: 'checked' },
            ...uniqueYears.map((year) => ({ value: year, label: year })),
          ];

        } catch (error) {
          console.error('Error fetching data:', error);
        }
      },
      methods: {
        handleChange(event) {
          this.totalChecked = event.target.value === 'Total';
          this.mensuelChecked = event.target.value === 'Mensuel';
        },
        handleCheckboxChange(checkboxName) {
          console.log(`Checkbox ${checkboxName} changed. Current state: ${this[`${checkboxName}Checked`]}`);

          if (this.hybrideChecked && !this.selectedValues.includes('hybride')) {
            this.selectedValues.push('hybride');
          } else if (!this.hybrideChecked) {
            const index = this.selectedValues.indexOf('hybride');
            if (index !== -1) {
              this.selectedValues.splice(index, 1);
            }
          }

          if (this.zeroKmChecked && !this.selectedValues.includes('zeroKm')) {
            this.selectedValues.push('zeroKm');
          } else if (!this.zeroKmChecked) {
            const index = this.selectedValues.indexOf('zeroKm');
            if (index !== -1) {
              this.selectedValues.splice(index, 1);
            }
          }

          if (this.PromotionsChecked && !this.selectedValues.includes('Promotions')) {
            this.selectedValues.push('Promotions');
          } else if (!this.PromotionsChecked) {
            const index = this.selectedValues.indexOf('Promotions');
            if (index !== -1) {
              this.selectedValues.splice(index, 1);
            }
          }
          console.log(this.selectedValues);
        },

      },
      mounted() {
        const rangeOne = this.$el.querySelector('input[name="rangeOne"]');
        const rangeTwo = this.$el.querySelector('input[name="rangeTwo"]');
        const outputOne = this.$el.querySelector('.outputOne');
        const outputTwo = this.$el.querySelector('.outputTwo');
        const inclRange = this.$el.querySelector('.incl-range');

        const updateView = function () {
          if (this.getAttribute('name') === 'rangeOne') {
            const maxRangeTwo = parseInt(rangeTwo.value) - 200;
            this.value = Math.min(this.value, maxRangeTwo);
            outputOne.innerHTML = this.value + ' €';
            outputOne.style.left = (this.value / this.getAttribute('max')) * 100 + '%';
          } else {
            const minRangeOne = parseInt(rangeOne.value) + 200;
            this.value = Math.max(this.value, minRangeOne);
            outputTwo.innerHTML = this.value + ' €';
            outputTwo.style.left = (this.value / this.getAttribute('max')) * 100 + '%';
          }

          if (parseInt(rangeOne.value) > parseInt(rangeTwo.value)) {
            inclRange.style.width =
              ((rangeOne.value - rangeTwo.value) / this.getAttribute('max')) * 100 + '%';
            inclRange.style.left = (rangeTwo.value / this.getAttribute('max')) * 100 + '%';
          } else {
            inclRange.style.width =
              ((rangeTwo.value - rangeOne.value) / this.getAttribute('max')) * 100 + '%';
            inclRange.style.left = (rangeOne.value / this.getAttribute('max')) * 100 + '%';
          }
        };

        const stopRanges = function () {
          if (parseInt(rangeOne.value) >= parseInt(rangeTwo.value)) {
            rangeOne.value = parseInt(rangeTwo.value) - 200;
            updateView.call(rangeOne);
          }

          if (parseInt(rangeTwo.value) <= parseInt(rangeOne.value)) {
            rangeTwo.value = parseInt(rangeOne.value) + 200;
            updateView.call(rangeTwo);
          }
        };

        this.$nextTick(() => {
          updateView.call(rangeOne);
          updateView.call(rangeTwo);

          rangeOne.addEventListener('mouseup', () => {
            rangeOne.blur();
          });
          rangeOne.addEventListener('mousedown', updateView);
          rangeOne.addEventListener('input', () => {
            updateView.call(rangeOne);
            stopRanges();
          });

          rangeTwo.addEventListener('mouseup', () => {
            rangeTwo.blur();
          });
          rangeTwo.addEventListener('mousedown', updateView);
          rangeTwo.addEventListener('input', () => {
            updateView.call(rangeTwo);
            stopRanges();
          });
        });
      },
  }


  </script>

  <style >

.padding-b{
  padding-bottom: 150px;
}

.bg-div-checked {
  background-color: #0E4A5B;
}

.bg-div {
  background-color: #5a818d;
}

.margin {
  margin: 1rem;
}
.bg-slide{
  background-color: #FFFFFF;
}
.logo{
  color: #002A37;
}
.checkbox-opacity{
  background-color: rgba(255, 255, 255, 0.3);
}


.border-t-solid-l-r-none {
  border: solid 1px #0E4A5B;
  border-style: solid none solid solid;
}
.border-t-solid-r-l-none {
  border: solid 1px #0E4A5B;
  border-style: solid solid solid none;
}
.Budget-checked{
  padding: 5px 20px;
  margin-left: 5px;
  background-color: #0E4A5B;
  color: white;
}

.Budget-div{
  padding: 5px 20px;
  margin-left: 5px;
  background-color: #FFFFFF;
  color: #0E4A5B;
}

.dropdown{
  color: #0E4A5B;
}

/* custom scrollbar */
::-webkit-scrollbar {
  width: 20px;
}

::-webkit-scrollbar-track {
  background-color: transparent;
}

::-webkit-scrollbar-thumb {
  background-color: #d6dee1;
  border-radius: 20px;
  border: 6px solid transparent;
  background-clip: content-box;
}

::-webkit-scrollbar-thumb:hover {
  background-color: #a8bbbf;
}
   .range-slider {
      position: relative;
      width: 170px;
      height: 35px;
      text-align: center;
      margin-bottom: 15%;
      margin-left: 10%;
    }
    
    .range-slider input {
      pointer-events: none;
      position: absolute;
      overflow: hidden;
      left: 0;
      top: 15px;
      width: 170px;
      outline: none;
      height: 18px;
      margin: 0;
      padding: 0;
    }
    
    .range-slider input::-webkit-slider-thumb {
      pointer-events: all;
      position: relative;
      z-index: 1;
      outline: 0;
    }
    
    .range-slider input::-moz-range-thumb {
      pointer-events: all;
      position: relative;
      z-index: 10;
      -moz-appearance: none;
      width: 9px;
    }
    
    .range-slider input::-moz-range-track {
      position: relative;
      z-index: -1;
      background-color: rgba(0, 0, 0, 1);
      border: 0;
    }
    
    .range-slider input:last-of-type::-moz-range-track {
      -moz-appearance: none;
      background: none transparent;
      border: 0;
    }
    
    .range-slider input[type=range]::-moz-focus-outer {
      border: 0;
    }
    
    .output {
      position: absolute;
      width: auto;
      height: 30px;
      text-align: center;
      color: #0E4A5B;
      display: inline-block;
      margin-right: -100px;
      font: bold 15px/30px Helvetica, Arial;
      bottom: 75%;
      left: 50%;
      top: 120%;
      transform: translate(-50%, 0);
    }
    
    .output.outputTwo {
      position: absolute;
      padding-left: 22%;

    }
    .output.outputOne {
      position: absolute;
      padding-right: 22%;

    }
    
    .container {
      position: absolute;
      transform: translate(-50%, -50%);
    }
    
    input[type=range] {
      -webkit-appearance: none;
      background: none;
    }
    
    input[type=range]::-webkit-slider-runnable-track {
      height: 5px;
      border: none;
      border-radius: 3px;
      background: transparent;
    }
    
    input[type=range]::-ms-track {
      height: 5px;
      background: transparent;
      border: none;
      border-radius: 3px;
    }
    
    input[type=range]::-moz-range-track {
      height: 5px;
      background: transparent;
      border: none;
      border-radius: 3px;
    }
    
    input[type=range]::-webkit-slider-thumb {
      -webkit-appearance: none;
      border: none;
      height: 16px;
      width: 16px;
      border-radius: 50%;
      background: #0E4A5B;
      margin-top: -5px;
      position: relative;
      z-index: 10000;
    }
    
    input[type=range]::-ms-thumb {
      -webkit-appearance: none;
      border: none;
      height: 16px;
      width: 16px;
      border-radius: 50%;
      background: #0E4A5B; 
      margin-top: -5px;
      position: relative;
      z-index: 10000;
    }
    
    input[type=range]::-moz-range-thumb {
      -webkit-appearance: none;
      border: none;
      height: 16px;
      width: 16px;
      border-radius: 50%;
      background: #0E4A5B; 
      margin-top: -5px;
      position: relative;
      z-index: 10000;
    }
    
    input[type=range]:focus {
      outline: none;
    }
    
    .full-range,
    .incl-range {
      width: 100%;
      height: 5px;
      left: 0;
      top: 21px;
      position: absolute;
      background: #ecf0f1; 
    }
    
    .incl-range {
      background: #739daa; 
    }
  </style>




  