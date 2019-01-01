<template>
  <v-card
    flat
    color="teal lighten-5"
    class="mb-2 round">
    <v-card-title class="pb-1">
      <v-flex 
        class="headline" 
        style="font-size: 22px !important">
        Personal data
      </v-flex>
      <v-flex 
        shrink 
        class="ml-auto">
        <v-btn 
          small
          outline
          color="secondary darken-1"
          icon
          @click="editing = !editing">
          <v-icon size="16">
            edit
          </v-icon>
        </v-btn>
      </v-flex>
    </v-card-title>
    <transition 
      name="shrink-x" 
      mode="out-in"
      @before-enter="beforeEnter"
      @eenter="enter"
      @after-enter="afterEnter"
      @before-leave="beforeLeave"
      @leeave="leave"
      @after-leave="afterLeave">
      <v-card-text 
        v-if="editing" 
        key="edit" 
        class="pt-1">
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
              lg12
              xl3>
              <v-text-field
                v-model="form.name"
                prepend-icon="person"
                name="name"
                counter="200"
                validate-on-blur
                label="Name"
                type="text"/>
            </v-flex>
            <v-flex 
              xs12 
              sm12
              md12
              lg12
              xl4>
              <v-text-field
                v-model="form.lastName"
                prepend-icon="perm_identity"
                name="lastName"
                counter="200"
                validate-on-blur
                label="Last name"
                type="text"/>
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
                type="text"/>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card-text>
      <v-card-text 
        v-else 
        key="show" 
        class="pt-1">
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
              md6
              xl4>
              <span class="body-2">
                Name:dd
              </span> 
              <span>
                {{ user.name }}
              </span>
            </v-flex>
            <v-flex 
              xs12 
              sm12
              md6
              xl4>
              <span class="body-2">
                Last name:
              </span> 
              <span>
                {{ user.lastName }}
              </span>
            </v-flex>
            <v-flex 
              xs12 
              xl4>
              <span class="body-2 mr-1">
                Email:
              </span> 
              <span>
                {{ user.email }}
              </span>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card-text>
    </transition>
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
  },
  methods: {
    // --------
    // ENTERING
    // --------

    beforeEnter: function(el) {
      // ...
      console.log('bef-enter ' + el.offsetHeight)
    },
    // the done callback is optional when
    // used in combination with CSS
    enter: function(el, done) {
      // ...
      console.log('enter ' + el.offsetHeight)
      done()
    },
    afterEnter: function(el) {
      // ...
      console.log('enter ' + el.offsetHeight)
    },
    enterCancelled: function(el) {
      // ...
    },

    // --------
    // LEAVING
    // --------

    beforeLeave: function(el) {
      // ...
      console.log('beforeLeave ' + el.offsetHeight)

      //   this.originalHeight = el.height
    },
    // the done callback is optional when
    // used in combination with CSS
    leave: function(el, done) {
      console.log('leave ' + el.offsetHeight)
      // ...
      done()
    },
    afterLeave: function(el) {
      console.log('afterLeave ' + el.offsetHeight)
      // ...
    }
  }
}
</script>

<style lang="scss">
// // .shrink-x-enter{

// }
.shrink-x-leave {
  // height: 300px;
  // opacity: 1;
}
.shrink-x-leave-to {
  // height: 0px;
  // background-color: red;
  opacity: 0;
}
.shrink-x-enter-active,
.shrink-x-leave-active {
  transition: all 0.5s;
}

.shrink-x-enter {
  opacity: 0;
}
.shrink-x-enter-to {
}
</style>
