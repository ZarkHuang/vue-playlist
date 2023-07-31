//管理數據
const Playlist = {
  data() {
    return {
      playlist: [
        "Cocky",
        "CTB",
        "Gemmini",
        "Right here",
        "Who you Blame",
        "In my Zone",
        "Home Run",
      ],
      //保存搜尋的值
      searchTerm: " ",
    };
  },
  computed: {
    filteredPlaylist() {
      if (this.searchTerm) {
        //根據輸入的值去過濾陣列裡的值
        return this.playlist.filter(
          (song) => song.toLowerCase().includes(this.searchTerm.toLowerCase())
          //英文全先轉為小寫在進行比較
        );
      } else {
        return this.playlist;
        //如果清空了（input沒輸入東西）就顯示原本的值
      }
    },
  },
};

//Playlist做為整個list的應用對象，給html提供數據（動態展示）
Vue.createApp(Playlist).mount("#app");
