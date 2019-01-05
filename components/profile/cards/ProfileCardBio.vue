<template>
  <v-card
    flat
    class="round"
    color="light-green lighten-5">
    <v-card-title>
      <v-flex 
        class="headline font-weight-medium">
        Bio
      </v-flex>
      <v-flex 
        shrink 
        class="ml-auto">
        <transition 
          name="flip" 
          mode="out-in">
          <v-btn 
            :color="`${editing ? 'green' : 'secondary' } darken-1`"
            :key="editing"
            small
            outline
            icon
            @click="editing = !editing">
            <v-icon size="14">
              {{ editing ? 'check' : 'edit' }}
            </v-icon>
          </v-btn>
        </transition>
      </v-flex>
    </v-card-title>
    <v-card-text 
      v-if="editing" 
      key="editing" 
      class="pt-1">
      <no-ssr>
        <ckeditor 
          :editor="editor" 
          v-model="editorData" 
          :config="editorConfig" 
          class="ck-user-bio"/>
      </no-ssr>
    </v-card-text>
    <v-card-text 
      v-else 
      key="display" 
      class="pt-1">
      <div v-html="editorData"/>
    </v-card-text>
  </v-card>
</template>

<script>
let InlineEditor
if (process.browser) {
  InlineEditor = require('@ckeditor/ckeditor5-build-inline')
} else {
  InlineEditor = ''
}

export default {
  props: {
    user: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      editing: false,
      editor: InlineEditor,
      editorData: this.user.bio,
      editorConfig: {
        // The configuration of the editor.
      }
    }
  },
  mounted() {
    // this.editorData = this.user.bio
    // console.log(this.editorData)
  }
}
</script>

<style lang="scss" scoped>
.ck-user-bio {
  border: 1px solid#3F51B5;
}
</style>
