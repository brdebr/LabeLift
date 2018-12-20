<template>
  <v-layout
    column
    justify-center
    align-center>
    <v-flex
      xs12
      sm8
      md6>
      <div class="text-xs-center"/>
      <v-card>
        <v-card-title class="headline">Welcome to the LabeLift</v-card-title>
        <v-card-text>
          <p>Web application to manage the sale of labels that do the heavy lifting for you.</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sit amet dui vel leo lobortis imperdiet a a ipsum. Nam vehicula aliquet mi. Cras maximus enim eu erat pellentesque, non finibus massa molestie. Donec massa velit, facilisis ac magna et, condimentum egestas tellus. Integer rhoncus, enim vel vulputate euismod, velit ex porttitor nisl, id congue augue est non elit. Fusce ac ipsum sem. Donec eget magna eu velit rutrum mollis.
          </p>
          <h3>Technologies</h3>
          <v-data-table
            :headers="headers"
            :items="techs"
            hide-actions>
            <template
              slot="items"
              slot-scope="props">
              <td>{{ props.item.title }}</td>
              <td class="text-xs-right">{{ props.item.description }}</td>
            </template>
          </v-data-table>
        </v-card-text>
        <v-card-actions>
          <v-spacer/>
          <v-btn
            color="secondary"
            flat
            outline
            nuxt
            to="/about">About</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import Logo from '~/components/Logo.vue'
import VuetifyLogo from '~/components/VuetifyLogo.vue'

export default {
  components: {
    Logo,
    VuetifyLogo
  },
  data() {
    return {
      headers: [
        {
          text: 'Name',
          value: 'name',
          sortable: false,
          align: 'left'
        },
        {
          text: 'Description',
          value: 'description',
          sortable: false,
          align: 'right'
        }
      ],
      techs: [
        {
          title: 'Node.js',
          description: 'The runtime to build everthing using Js'
        },
        {
          title: 'Nuxt.js',
          description: 'Used for several develpment conveniences and SSR'
        },
        {
          title: 'Vue.js',
          description: 'As the frontend framework'
        },
        {
          title: 'Vuetify',
          description: 'As the theme desing base and components'
        }
      ]
    }
  }
}
</script>
