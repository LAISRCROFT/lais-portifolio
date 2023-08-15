<template>
    <div class="topbar-dropdawn">
        <!-- <Dropdown v-model="selectedCountry" :options="countries" optionLabel="name" placeholder="Idioma" class="buttons-menu dropdown-idioma"/> -->
        
        <select class="dropdown-idioma" aria-label="Default select" v-model="selectedCountry" @change="emitSelectedOption">
          <option :value="country.code" v-for="(country, i) in countries" :key="i">
            {{ country.name }}
          </option>
        </select>
    </div>
</template>

<script>
  import eventBus from '../plugins/eventBus';
  export default {
    name: 'Topbar_Dropdown',
    data() {
      return {
        selectedCountry: null,
        countries: [
          {name: 'USA', code: 'us'},
          {name: 'BR', code: 'br'},
          {name: 'ES', code: 'es'}
        ]
      };
    },
    methods: {
      emitSelectedOption() {
        eventBus.$emit('att-idioma', this.selectedCountry);
      }
    },
    mounted() {
      this.selectedCountry = 'us'
    },
    watch: {
      selectedCountry() {
        let lang = this.changeLanguage(this.selectedCountry)
        this.$emit('localizationChanged')
      }
    }
  }
</script>
  
<style lang="scss" scoped>
@import '~/assets/scss/components/Topbar_Dropdown.scss';

</style>