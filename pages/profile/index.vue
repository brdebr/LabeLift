<template>
  <v-layout
    column>
    <v-flex
      xs12>
      <v-card>
        <v-card-title class="headline elevation-1">
          <v-flex xs10>
            Profile
          </v-flex>
          <v-flex
            xs2
            class="subheading text-xs-right pr-2">
            ID # {{ this.$auth.user.id }}
          </v-flex>
        </v-card-title>
        <v-card-text>
          <v-layout
            row>
            <v-flex xs3>
              <v-card>
                <v-img
                  src="https://cdn.vuetifyjs.com/images/cards/desert.jpg"
                  aspect-ratio="0.90"
                />
                <v-card-actions>
                  <v-btn icon>
                    <v-icon>clear</v-icon>
                  </v-btn>
                  <v-spacer/>
                  <v-btn icon>
                    <v-icon>edit</v-icon>
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-flex>
            <v-flex
              xs9
              class="pl-4">
              <editable-field
                v-model="user.name"
                field-name="Name"
                icon="person"/>
              <editable-field
                v-model="user.email"
                field-name="Email"
                icon="email"/>
              <editable-field
                v-model="user.bday"
                field-name="Birthday"
                icon="event"/>
            </v-flex>
          </v-layout>
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>
<script>
import EditableField from '~/components/profile/EditableField'

export default {
  middleware: 'auth',
  components: {
    EditableField
  },
  watch: {
    user: {
      handler: function(newVal, oldVal) {
        console.log(newVal)
      },
      deep: true
    }
  },
  asyncData() {
    return {
      user: {
        name: 'Bryann',
        email: 'bryan@test.com',
        bday: '10/11/12'
      }
    }
  }
}
</script>
