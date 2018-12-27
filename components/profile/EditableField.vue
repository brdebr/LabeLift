<template>
  <v-scroll-x-transition mode="out-in">
    <v-layout
      v-if="!editing"
      key="display"
      row
      style="height: 68px"
      align-center>
      <v-flex xs11>
        <v-layout>
          <v-flex xs2>
            <span class="body-2 mr-3 xs3">{{ fieldName }} :</span>
          </v-flex>
          <v-flex>
            <span class="body-1">{{ value }}</span>
          </v-flex>
        </v-layout>
      </v-flex>
      <v-flex>
        <v-btn
          icon
          outline
          color="secondary darken-1"
          @click="editing = !editing">
          <v-icon>
            edit
          </v-icon>
        </v-btn>
      </v-flex>
    </v-layout>
    <v-layout
      v-else
      key="edit"
      row
      align-center>
      <v-flex xs11>
        <v-text-field
          ref="field"
          v-model="newValue"
          :prepend-icon="icon"
          :name="fieldName"
          :label="fieldName"
          clearable
          validate-on-blur
          class="mr-2"
          type="text"/>
      </v-flex>
      <v-flex
      >
        <v-btn
          icon
          color="secondary darken-1"
          @click="reset">
          <v-icon>
            cached
          </v-icon>
        </v-btn>
      </v-flex>
      <v-flex
      >
        <v-btn
          icon
          color="success darken-1"
          @click="sendUpdate">
          <v-icon>
            check
          </v-icon>
        </v-btn>
      </v-flex>
    </v-layout>
  </v-scroll-x-transition>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: ''
    },
    fieldName: {
      type: String,
      default: ''
    },
    icon: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      editing: false,
      newValue: ''
    }
  },
  created() {
    this.newValue = this.value
  },
  methods: {
    sendUpdate() {
      this.$emit('input', this.newValue)
      this.editing = false
    },
    reset() {
      this.newValue = this.value
      this.$refs.field.focus()
    }
  }
}
</script>

<style>
</style>
