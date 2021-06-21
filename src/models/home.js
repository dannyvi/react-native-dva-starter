import { requestToken, requestList } from '../services/home'

const home = {
  namespace: 'home',
  state: {
    data: [],
    v: '1.0',
    verCode: '',
    number: 1,
    content: [],
  },
  effects: {
    *showList(_, { call, put }) {
      const res = yield call(requestList)
      console.log('topics', res)
      yield put({
        type: 'save',
        payload: { data: res?.results },
      })
    },
    *hideList(_, { put }) {
      yield put({
        type: 'save',
        payload: { data: [] },
      })
    },
    *getToken(_, { call, put }) {
      const res = yield call(requestToken)
      console.log('res', res)
      yield put({
        type: 'save',
        payload: {},
      })
    },
  },

  reducers: {
    save(state, { payload }) {
      return { ...state, ...payload }
    },
  },
}

export default home
