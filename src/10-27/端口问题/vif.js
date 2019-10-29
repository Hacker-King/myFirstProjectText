const DICT = {
  USER: {
    MINLEN: 0,
    MAXLEN: 2,
    ERR: {
      state: 'err',
      msg: '用户名不能为空，且长度不小于2位'
    }
  },
  PWD: {
    MINLEN: 0,
    MAXLEN: 6,
    ERR: {
      state: 'err',
      msg: '密码不能为空，且长度不小于6位'
    }
  }
};
// 公共的判断函数
// 验证用户名
const vfusername = value => {
  if (value.length === DICT.USER.MINLEN || value.length < DICT.USER.MINLEN) {
    return DICT.USER.ERR.msg;
  }
  return {
    state: 'success'
  };
};
// 验证密码
const vfpassword = value => {
  if (value.length === DICT.PWD.MINLEN || value.length < DICT.PWD.MAXLEN) {
    return DICT.PWD.ERR.msg;
  }
  return {
    state: 'success'
  };
};
export const login = data => {
  let user = vfusername(data.username);
  if (user.state !== 'success') {
    return DICT.USER.ERR.msg;
  }
  let pass = vfpassword(data.password);
  if (pass.state !== 'success') {
    return DICT.PWD.ERR.msg;
  }
  return null;
};
