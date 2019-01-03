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
        <v-slide-y-transition 
          name="flip" 
          mode="out-in">
          <v-btn 
            v-show="editing"
            color="amber darken-1"
            small
            outline
            icon
            @click="cancelEditing">
            <v-icon size="16">
              clear
            </v-icon>
          </v-btn>
        </v-slide-y-transition>
      </v-flex>


      <v-flex 
        shrink 
      >
        <transition 
          name="flip" 
          mode="out-in">
          <v-btn 
            :color="`${editing ? 'green' : 'secondary' } darken-1`"
            :key="editing"
            small
            outline
            icon
            @click="toggleEditing">
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
                {{ $store.state.user.user.name || '-Fill your information-' }}
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
                {{ $store.state.user.user.lastName || '-Fill your information-' }}
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
                {{ $store.state.user.user.email || '-Fill your information-' }}
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
  data() {
    return {
      editing: false,
      form: {
        name: this.$store.state.user.user.name,
        lastName: this.$store.state.user.user.lastName,
        email: this.$store.state.user.user.email
      },
      sizeData: {
        originalHeight: 0
      }
    }
  },
  methods: {
    updateUser() {
      let data = { id: this.$auth.user.id, ...this.form }
      this.$axios.put('/api/users/current', { data }).then(result => {
        if (result.data.user) {
          this.$store.commit('user/setUser', {
            ...this.$store.state.user.user,
            ...result.data.user
          })
          this.$toast.info('Profile updated')
        }
      })
    },
    toggleEditing() {
      if (this.editing) {
        this.updateUser()
        this.editing = false
      } else {
        this.editing = true
      }
    },
    cancelEditing() {
      if (this.editing) {
        this.editing = false
        // MAYBE: Refresh user data
      }
    }
  }
}
</script>
