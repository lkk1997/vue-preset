// import Vue from 'vue'
// import Vuex from 'vuex'
import { createStore } from 'vuex'
import getters from './getters'

const modulesFiles = require.context('./modules', true, /\.ts$/)
const modules = modulesFiles.keys().reduce((modules:any, modulePath:any) => {
  const moduleName:any = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1')
  const value = modulesFiles(modulePath)
  modules[moduleName] = value.default
  return modules
}, {})

const store = createStore({
  modules,
  getters
})

export default store


