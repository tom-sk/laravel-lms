function p(a,n,s,_,o,i,l,d){var e=typeof a=="function"?a.options:a;n&&(e.render=n,e.staticRenderFns=s,e._compiled=!0),_&&(e.functional=!0),i&&(e._scopeId="data-v-"+i);var r;if(l?(r=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,!t&&typeof __VUE_SSR_CONTEXT__<"u"&&(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(l)},e._ssrRegister=r):o&&(r=d?function(){o.call(this,(e.functional?this.parent:this).$root.$options.shadowRoot)}:o),r)if(e.functional){e._injectStyles=r;var f=e.render;e.render=function(h,u){return r.call(u),f(h,u)}}else{var c=e.beforeCreate;e.beforeCreate=c?[].concat(c,r):[r]}return{exports:a,options:e}}const v={mixins:[Fieldtype],data(){return{show:!1}},computed:{inputType(){return this.show?"text":"password"}}};var m=function(){var n=this,s=n._self._c;return s("div",[s("text-input",{attrs:{type:n.inputType,value:n.value},on:{input:n.updateDebounced}}),s("label",[s("input",{directives:[{name:"model",rawName:"v-model",value:n.show,expression:"show"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(n.show)?n._i(n.show,null)>-1:n.show},on:{change:function(_){var o=n.show,i=_.target,l=!!i.checked;if(Array.isArray(o)){var d=null,e=n._i(o,d);i.checked?e<0&&(n.show=o.concat([d])):e>-1&&(n.show=o.slice(0,e).concat(o.slice(e+1)))}else n.show=l}}}),n._v(" Show Password")])],1)},w=[],y=p(v,m,w,!1,null,null,null,null);const C=y.exports;Statamic.booting(()=>{Statamic.$components.register("toggle_password-fieldtype",C)});
