import Vue from 'vue'
import Vuetify from 'vuetify'
import colors from 'vuetify/es5/util/colors'

Vue.use(Vuetify, {
  theme: {
    primary: colors.indigo.darken1,
    secondary: colors.blue.darken2,
    accent: colors.teal.accent4,
    error: colors.red.darken3,
    warning: colors.amber.base,
    info: colors.blue.base,
    success: colors.lightGreen.accent4
  },
  customProperties: true,
  iconfont: 'md',
  minifyTheme: function(css) {
    return process.env.NODE_ENV === 'production'
      ? css.replace(/[\s|\r\n|\r|\n]/g, '')
      : css
  }
})
