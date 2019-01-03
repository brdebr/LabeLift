<template>
  <v-card
    flat
    class="round"
    color="light-green lighten-5">
    <v-card-title class="pb-1">
      <div class="headline font-weight-medium">
        Bio
      </div>
    </v-card-title>
    <v-card-text class="pt-1">
      <no-ssr>
        <ckeditor 
          :editor="editor" 
          v-model="editorData" 
          :config="editorConfig" 
          class="ck-user-bio"/>
      </no-ssr>
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
      editor: InlineEditor,
      editorData: '<p>Content of the editor.</p>',
      editorConfig: {
        // The configuration of the editor.
      }
    }
  },
  mounted() {
    // this.editorData = this.user.bio
    console.log(this.editorData)
  }
}
</script>

<style lang="scss" scoped>
.ck-user-bio {
  border: 1px solid#3F51B5;
}
</style>
