<!-- DropdownSection.vue -->

<template>
    <div>
      <hr class="w-auto border-b border-light-700 h-px mt-3 ml-5 mr-5 mx-auto">
      <div class="flex flex-col p-2 pt-2 ml-2 mt-3">
        <button
          :id="buttonId"
          class="dropdown flex items-center justify-between w-auto mr-3"
          :data-dropdown-toggle="dropdownToggle"
          @click="toggleRotation"
        >
          <span class="text-xs md:text-sm lg:text-lg xl:text-xl font-bold text-gray-700">{{ labelText }}</span>
          <svg
            :id="iconId"
            :class="{ 'rotate-180': isRotated, 'rotate-0': !isRotated }"
            class="w-2.5 h-2.5 flex ms-auto justify-end"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
          </svg>
        </button>
        <div :class="{ 'flex': isMenuVisible, 'hidden': !isMenuVisible }" class="flex justify-start ">
          <div>
            <div v-for="(item, index) in radioItems" :key="index" class="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-100 w-72">
              <input :id="`${radioIdPrefix}-${index}`" type="radio" @click="() => handleRadioClick(index)" :value="item.value" :checked="item.checked" :name="radioGroupName" class="default-radio focus:ring-transparent w-4 h-4 dropdown bg-white-100">
              <label :id="`${labelIdPrefix}-${index}`" :for="`${radioIdPrefix}-${index}`" class="label-radio w-full ms-2 text-sm font-medium">{{ item.label }} </label>
            </div>
          </div>
        </div>
      </div>

 
    </div>

  </template>
  
  <script>

  export default {
      
    props: {
      buttonId: String,
      dropdownToggle: String,
      labelText: String,
      iconId: String,
      radioItems: Array,
      radioGroupName: String,
      radioIdPrefix: String,
      labelIdPrefix: String,
    },
    
    data() {
      return {
        isRotated: false,
        isMenuVisible: false,
        selectedValues: "",
      };
    },
    methods: {
      toggleRotation() {
        this.isRotated = !this.isRotated;
        this.isMenuVisible = !this.isMenuVisible;
      },
      handleRadioClick(index) {
        const selectedValue = this.radioItems[index].value;
        this.selectedValues = selectedValue;
        this.$emit('selected-values-changed', this.selectedValues);
      },

    },
  };
  </script>
  

  <style>
  
:root {
  --radio-bg-color: #006064;
  --radio-border-color: #006064;
  --unchecked-bg-color: #ffffff;
  --unchecked-border-color: #006468;
  --checked-label-color: #00191a;
  --unchecked-label-color: #006468;
}

[class^="default-radio"]:checked {
  background-color: var(--radio-bg-color);
  border: 1px solid var(--radio-border-color);
}

[class^="default-radio"]:checked ~ [id^="label-radio-"] {
  color: var(--checked-label-color);
}

[class^="default-radio"]:not(:checked) {
  background-color: var(--unchecked-bg-color);
  border: 1px solid var(--unchecked-border-color);
}

[class^="label-radio"] {
  color: var(--unchecked-label-color);
}

  </style>
