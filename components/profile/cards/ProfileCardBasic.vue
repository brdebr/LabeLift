<template>
  <v-card
    flat
    color="teal lighten-5"
    class="mb-2 round">
    <v-card-title>
      <v-flex 
        class="headline font-weight-medium">
        Personal data
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
            <v-icon size="16">
              {{ editing ? 'check' : 'edit' }}
            </v-icon>
          </v-btn>
        </transition>
      </v-flex>
    </v-card-title>
    <v-divider/>
    <v-slide-x-reverse-transition mode="out-in">
      <v-card-text 
        v-if="editing" 
        key="edit">
        <v-container 
          class="pa-0" 
          fill-height>
          <v-layout
            row
            align-center
            justify-space-between
            class="user-info"
            wrap>
            <v-flex 
              xs12 
              sm12
              md12
              lg5
              xl3>
              <v-text-field
                v-model="form.name"
                prepend-icon="person"
                name="name"
                counter="200"
                validate-on-blur
                label="Name"
                type="text"
                class="pr-2"/>
            </v-flex>
            <v-flex 
              xs12 
              sm12
              md12
              lg7
              xl4>
              <v-text-field
                v-model="form.lastName"
                prepend-icon="perm_identity"
                name="lastName"
                counter="200"
                validate-on-blur
                label="Last name"
                type="text"
                class="pr-2"/>
            </v-flex>
            <v-flex 
              xs12 
              xl4>
              <v-text-field
                v-model="form.email"
                prepend-icon="email"
                validate-on-blur
                name="email"
                label="Email"
                type="text"
                class="pr-2"/>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card-text>
      <v-card-text 
        v-else 
        key="show" >
        <v-container 
          class="pa-0" 
          fill-height>
          <v-layout
            row
            align-center
            class="user-info"
            wrap>
            <v-flex 
              xs12 
              sm12
              md12
              lg6
              xl4
              class="mt-1 pt-3"
              style="height: 64px">
              <span class="subheading font-weight-medium">
                Name:
              </span> 
              <span>
                {{ $auth.user.name || '-Fill your information-' }}
              </span>
            </v-flex>
            <v-flex 
              xs12 
              sm12
              md12
              lg6
              xl4
              class="mt-1 pt-3"
              style="height: 64px">
              <span class="subheading font-weight-medium">
                Last name:
              </span> 
              <span>
                {{ $auth.user.lastName || '-Fill your information-' }}
              </span>
            </v-flex>
            <v-flex 
              xs12 
              lg12
              xl4
              class="mt-1 pt-3"
              style="height: 64px">
              <span class="subheading font-weight-medium mr-1">
                Email:
              </span> 
              <span>
                {{ $auth.user.email || '-Fill your information-' }}
              </span>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card-text>
    </v-slide-x-reverse-transition>
  </v-card>

</template>

<script>
// SLOT SCOPE THE V-IF
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
      form: {
        name: this.user.name,
        lastName: this.user.lastName,
        email: this.user.email
      },
      sizeData: {
        originalHeight: 0
      }
    }
  }
}
</script>
