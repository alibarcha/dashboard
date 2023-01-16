import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';


Vue.use(Vuetify);

export default new Vuetify({
    icons:{
        iconfont:'mdi',
        
    },
    theme:{
        // dark:true
        themes:{
            light:{
                primary:'#00cae3',
                success:'#4caf50',
                info:'#00cae3',
                error:'#ff5252',
                warning:'#fb8c00',
                secondary:'#9c27b0',

                pink:'#d81b60',
                
            },
            dark:{
                primary:'#00cae3',
                secondary:'#9c27b0',

                pink:'#d81b60',
                error:'#ff5252',
                // themedark:'#fff',
            }
        }
    }
});
