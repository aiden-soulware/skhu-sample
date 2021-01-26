import axios from "axios";
const state = {
  items: [],
  url : [
    "https://images.unsplash.com/photo-1610048899906-d8f64bc45464?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format",
    "https://images.unsplash.com/photo-1610048899906-d8f64bc45464?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format",
    "https://s3.ap-northeast-2.amazonaws.com/elasticbeanstalk-ap-northeast-2-176213403491/media/magazine_img/magazine_319/112_%E1%84%8A%E1%85%A5%E1%86%B7%E1%84%82%E1%85%A6%E1%84%8B%E1%85%B5%E1%86%AF.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTutO1nmrYhFBcRcdUQPaOPp-HAiJrnzH-nuA&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi7OhfW0BhZzL3D4Swp_A7GQPwJE2OhsjXYw&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSa2UDtN4kxCCQYnQ4_yoceVrbDOnEED7aHig&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-nct0eVHBKTlAJkfX5suKzzOtOOrC0p2c7A&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJeIhe-_I6rzcN1Oa4xPvttkUNcrYEv8EP2Q&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkPId4Hjm02Db3jqaXTn6UpzZzVfJB7I8lUw&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1cCPc3QZCzUKtoh9rdC5WTfLegbi26jvMmA&usqp=CAU",
  ],
};
const getters = {
  
};
const actions = {
  //비즈니스로직이 들어 갈 수 있음 ex) password 검사 비동기 처리 같은 로직 처리 후
  //commit 을 사용해 mutations에 전달
  getImageItem: ({ commit }, payload) => {
    commit("imageItem", payload);
  },
  getImageBase64 : (state,url)=> {
   console.log(url)
    return new Promise((resolve, reject) => {
      axios
        .get(url, {
          responseType: "arraybuffer",
        })
        .then(
          (response) => {
            let temp = Buffer.from(response.data, "binary").toString(
              "base64"
            );
            resolve(temp);
          },
          (err) => {
            console.log(err);
            reject(err);
          }
        );
    });
  },
};

const mutations = {
  //state를 변화 시킴
  imageItem: (state, payload) => {
    //payload 가져온 값을 넘겨줌
    state.items.push(payload);
  },
};

export default {
  namespaced: true,
  getters,
  state,
  actions,
  mutations,
};
