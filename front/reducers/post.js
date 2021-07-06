export const initialState = {
  mainPosts: [
    {
      id: 1,
      User: {
        id: 1,
        nickname: '성윤',
      },
      content: '첫 번째 게시글 #해시태그 #익스프레스',
      Images: [
        {
          src: 'https://news.hmgjournal.com/images_n/contents/ioniq5-media-reaction1.jpg',
        },
        {
          src: 'https://image.newsis.com/2021/01/13/NISI20210113_0000672749_web.jpg?rnd=20210113094408',
        },
        {
          src: 'http://image.newdaily.co.kr/site/data/img/2021/01/13/2021011300033_0.jpg',
        },
      ],
      Comments: [
        {
          User: {
            nickname: 'hero',
          },
          content: '안녕하세요',
        },
        {
          User: {
            nickname: 'nero',
          },
          content: '안녕못해요',
        },
      ],
    },
  ],
  imagePaths: [],
  postAdded: false,
};

const ADD_POST = 'ADD_POST';

export const addPost = {
  type: ADD_POST,
};

const dummyPost = {
  id: 2,
  content: '더미데이터',
  User: {
    id: 1,
    nickname: '더미',
  },
  Images: [],
  Comments: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        mainPosts: [dummyPost, ...state.mainPosts],
        postAdded: true,
      };
    default:
      return state;
  }
};

export default reducer;
