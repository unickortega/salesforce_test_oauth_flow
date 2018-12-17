import axios from 'axios'
import Cookies from 'js-cookie'
import * as types from '../mutation-types'

// state
export const state = {
    user: null,
    access_token: Cookies.get('access_token')
}

// getters
export const getters = {
    user: state => state.user,
    access_token: state => state.access_token
}

// mutations
export const mutations = {
    [types.SAVE_TOKEN] ( state, {access_token , remember} ){
        state.access_token = access_token
        Cookies.set('access_token', access_token, { expires: remember ? 365 : null })
    },
    [types.LOGOUT] (state){
        state.user = null
        state.access_token = null

        Cookies.remove('access_token')
    }
}

// actions
export const actions = {
    saveToken ({commit, dispatch}, payload){

        commit(types.SAVE_TOKEN, payload)
    },

    async logout ({commit}){
        try{
            alert('please update logout process')
        }catch(e){}

        commit(types.LOGOUT)
    }
}