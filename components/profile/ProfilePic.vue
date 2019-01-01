<template>
  <div>
    <v-card 
      v-resize="onResize" 
      hover
      raised
      class="mt-1"
    >
      <v-card-title>
        <v-flex class="body-2">
          Avatar / Picture
        </v-flex>
        <v-flex 
          shrink 
          class="body-2 ml-auto">
          <v-icon>face</v-icon>
        </v-flex>
      
      </v-card-title>
      <v-divider/>
      <v-img
        :src="image"
        :lazy-src="image"
        class="elevation-2"
        aspect-ratio="0.90"
      />
      <v-divider/>
      
      <v-card-actions class="my-2 mt-3 pb-3 justify-space-between">
        <v-btn 
          :block="!isMdOrLow"
          :icon="isMdOrLow"
          flat 
          outline 
          color="amber darken-2">
          <v-icon>delete</v-icon>
        </v-btn>
        <v-btn 
          :block="!isMdOrLow"
          :icon="isMdOrLow"
          flat 
          outline
          @click="editingImg = !editingImg"
          color="secondary">
          <v-icon>edit</v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>
    <v-slide-y-transition hide-on-leave>
      <div v-if="editingImg" class="mt-4">
        <file-pond
          name="test"
          ref="pond"
          label-idle="< Drop your pics here or click me >"
          :allowReplace="false"
          :dropOnPage="true"
          :allowRevert="false"
          @processfile="onUpload"  
          :allow-multiple="false"
          accepted-file-types="image/jpeg, image/png"
          :server="fpConfig.server"
          v-bind:files="myFiles"/>
      </div>
    </v-slide-y-transition>
  </div>
</template>

<script>
// Import Vue FilePond
import vueFilePond from 'vue-filepond';
 
// Import FilePond styles
// import 'filepond/dist/filepond.min.css';
 
// Import FilePond plugins
// Please note that you need to install these plugins separately
 
// Import image preview plugin styles
// import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css';
 
// Import image preview and file type validation plugins
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
 
// Create component
const FilePond = vueFilePond(FilePondPluginFileValidateType, FilePondPluginImagePreview);
 
export default {
  components:{
    FilePond
  },
  data() {
    return {
      image: require('~/assets/images/placeholder-profile.jpg'),
      isMdOrLow: false,
      editingImg: false,
      myFiles: [],
      fpConfig: {
        server: {
            process: {
                url: '/api/users/profile-up',
                method: 'POST',
                withCredentials: false,
                headers: {},
                timeout: 7000,
                onload: null,
                onerror: null,
                ondata: null
            }
        }
      }
    }
  },
  beforeMount() {
    this.onResize()
  },
  methods: {
    onResize() {
      this.isMdOrLow = this.$vuetify.breakpoint.mdAndDown
    },
    onUpload(){
      setTimeout(() => {
        this.editingImg = false
      }, 1500);
    },
  }
}
</script>

<style>
</style>
