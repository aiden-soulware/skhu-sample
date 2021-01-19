import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: 'mdi', // default - only for display purposes
  },
  theme: {
    themes: {
      light: {
        primary: colors.indigo.base , // #E53935
        secondary: colors.red.darken1, // #FFCDD2
        accent: colors.red.lighten4, // #3F51B5
      },
    },
  },
});
