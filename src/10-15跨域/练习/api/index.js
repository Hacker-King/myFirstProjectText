import jsonp from 'jsonp';
// 请求跨域
// let getBaidu = (qure, callback) => {
//   jsonp(
//     'http://suggestion.baidu.com/su?wd=' + qure,
//     { param: 'cb' },
//     (err, data) => {
//       if (err) {
//         alert('网络错误');
//       } else {
//         callback && callback(data);
//       }
//     }
//   );
// };
// Promise
let getBaidu = qure => {
    // promise里接收一个回调函数，这个回调函数就是一个同步的方法
    // 在这个函数里的resolve, reject才是正真的异步方法
  return new Promise((resolve, reject) => {
    jsonp(
      'http://suggestion.baidu.com/su?wd=' + qure,
      { param: 'cb' },
      (err, data) => {
        if (err) {
            reject(err);
          alert('网络错误');
        } else {
            resolve(data);
        }
      }
    );
  });
};
export default getBaidu;
