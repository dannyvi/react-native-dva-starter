import request from '../utils/request';

const fetchTest = async () => {
  // const res = await fetch(
  //   'https://www.zhihu.com/api/v3/oauth/sms/supported_countries'
  // );
  // const data = await res.json();
  const data = { data: ['a', 'b', 'c'], b: 'zzz' };
  // console.log('NEW', data);
  return data;
};

const fetchToken = async () => {
  const resp = await fetch('https://taskimage.com/api/v2/app/token', {
    method: 'post',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({ username: 'dan', password: '1234' }),
  });
  const data = await resp.json();
  console.log('fetch token', data);
  return data;
};

const requestToken = async () => {
  return request('/api/v2/app/token', {
    method: 'POST',
    data: {
      username: 'dan',
      password: '1234',
    },
  });
};

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
      const res = yield call(fetchTest);
      yield put({
        type: 'save',
        payload: res,
      });
    },
    *hideList(_, { call, put }) {
      yield put({
        type: 'save',
        payload: { data: [] },
      });
    },
    *getToken(_, { call, put }) {
      const res = yield call(requestToken);
      console.log('res', res);
      yield put({
        type: 'save',
        payload: {},
      });
    },
  },

  reducers: {
    save(state, { payload }) {
      return { ...state, ...payload };
    },
  },
};

export default home;
