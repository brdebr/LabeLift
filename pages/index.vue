<template>
  <v-layout
    column
  >
    <v-flex
      xs12>
      <v-card>
        <v-card-title>
          <span class="display-1 ml-1">Welcome to the LabeLift</span>
          <logo class="ml-auto" height="64"/>
        </v-card-title>
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
              <td class="tech-icon-cell">
                <v-avatar
                  class="ma-1 mr-3 avatar-border"
                  size="45"
                  color="light-blue lighten-5"
                  style="border:1px solid #546E7A !important">
                  <fa
                    :icon="props.item.icon"
                    :color="props.item.color"
                    style="font-size: 24px" />
                </v-avatar>
                {{ props.item.title }}
              </td>
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
import Logo from '~/components/Logo'

export default {
  components:{
    Logo
  },
  asyncData() {
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
          description: 'The runtime to build everthing using Js',
          icon: ['fab', 'node'],
          color: '#4CAF50'
        },
        {
          title: 'Nuxt',
          description: 'Used for several develpment conveniences and SSR',
          icon: ['fas', 'server'],
          color: '#004D40'
        },
        {
          title: 'Vue',
          description: 'As the base frontend framework',
          icon: ['fab', 'vuejs'],
          color: '#2E7D32'
        },
        {
          title: 'Vuetify',
          description: 'As the base theme desing and components',
          icon: ['fas', 'palette'],
          color: '#0277BD'
        }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
.tech-icon-cell {
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: nowrap;
  height: auto;
}
</style>
