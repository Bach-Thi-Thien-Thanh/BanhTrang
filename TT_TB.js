const categorySelect = document.getElementById('category-select');
const latestNewsSection = document.getElementById('latest-news');
// Dữ liệu tin tức
const newsData = {
  'SPIT CONTEST': [
    {
      title: 'TỔNG KẾT SPIT NEWBIE CONTEST 04',
      date: '02/05/2024',
      image: 'Image_TTTBB/TONGKETSPITNEWBIECONTEST04.jpg',
      link: 'TT_TONGKETSPITNEWBIECONTEST04.html'
    },
    {
      title: 'TỔNG KẾT SPIT NEWBIE CONTEST 03',
      date: '04/04/2024',
      image: 'Image_TTTBB/TONGKETSPITNEWBIECONTEST03.jpg',
      link: 'TT_TONGKETSPITNEWBIECONTEST03.html'
    },
    {
      title: 'TỔNG KẾT SPIT EXPERT CONTEST 01',
      date: '21/03/2024',
      image: 'Image_TTTBB/TONGKETSPITEXPERTCONTEST01.jpg',
      link: 'TT_TONGKETSPITEXPERTCONTEST01.html'
    },
    {
      title: 'TỔNG KẾT SPIT NEWBIE CONTEST 01',
      date: '05/03/2024',
      image: 'Image_TTTBB/TONGKETSPITNEWBIECONTEST01.jpg',
      link: 'TT_TONGKETSPITNEWBIECONTEST01.html'
    }
  ],
  'SPIT SEMINAR': [
    {
      title: 'RECAP BUỔI SEMINAR “KNOWLEDGE, SKILLS AND APPLICATIONS”',
      date: '24/03/2024',
      image: 'Image_TTTBB/Seminarknowlegde.webp',
      link: 'TT_S_Knowlegde.html'
    },
    {
      title: 'RECAP BUỔI SEMINAR “APPROACH TO PROGRAMMING” ',
      date: '29/10/2023',
      image: 'Image_TTTBB/RecapSApproachtoProgramming.jpg',
      link: 'TT_RecapSApproachtoProgramming.html'
    }
  ],
  'SPIT SUPPORT': [
    {
      title: 'RECAP BUỔI TRAINING THÀNH VIÊN SỐ 1',
      date: '26/02/2024',
      image: 'Image_TTTBB/Recaptraining1.jpg',
      link: 'TT_Recaptraining1.html'
    }
  ],
  'KHÁC': [
    {
      title: 'Sinh nhật 1 tuổi CLB Hỗ trợ Lập trình',
      date: '19/08/2024',
      image: 'Image_TTTBB/SN1T.jpg',
      link: 'TT_SN1T.html'
    },
    {
      title: 'CUỘC THI “SPIT FRONT END”',
      date: '12/07/2024',
      image: 'Image_TTTBB/SPIT_FRONT-_END-0700384.webp',
      link: 'TT_SFE.html'
    },
    {
      title: 'Chất lượng học tập được nâng cao',
      date: '05/06/2024',
      image: 'Image_TTTBB/Chatluong.jpg',
      link: 'TT_Chatluong.html'
    },
    {
      title: 'CLB SPIT với Khóa bồi dưỡng giảng viên Khu vực miền Trung - Tây Nguyên năm 2024 "Thống kê hiện đại với phần mềm thống kê R"',
      date: '06/05/2024',
      image: 'Image_TTTBB/khoaboiduonggv.jpg',
      link: 'TT_khoaboiduonggv.html'
    },
    {
      title: 'RECAP BUỔI NGOẠI KHÓA 26/03 CỦA CLB HỖ TRỢ LẬP TRÌNH',
      date: '14/04/2024',
      image: 'Image_TTTBB/Recapngoaikhoa.jpg',
      link: 'TT_Recapngoaikhoa.html'
    },
    {
      title: 'SPIT CÙNG VỚI CHUYÊN MỤC NHỊP SỐNG TRẺ THỪA THIÊN HUẾ',
      date: '14/04/2024',
      image: 'Image_TTTBB/Untitled-0950664.webp',
      link: 'TT_NHIPSONGTRE.html'
    },
    {
      title: 'RECAP BUỔI PHỎNG VẤN CLB HỖ TRỢ LẬP TRÌNH ĐỢT 2 NĂM HỌC 2023 - 2024',
      date: '22/01/2024',
      image: 'Image_TTTBB/RecapPhongVanF2.jpg',
      link: 'TT_RecapPhongVanF2.html'
    },
    {
      title: 'NHÌN LẠI NHỮNG KHOẢNH KHẮC TẠI PHÒNG TỰ HỌC E202',
      date: '25/12/2023',
      image: 'Image_TTTBB/TuHocE202.jpg',
      link: 'TT_TuHocE202.html'
    },
    {
      title: 'CLB Hỗ trợ Lập trình cùng với cuộc thi Olympic Tin học Sinh viên Việt Nam lần thứ 32 - Procon Vietnam - ICPC Asia Huế City 2023',
      date: '10/12/2023',
      image: 'Image_TTTBB/OlympicTinHoc202.jpg',
      link: 'TT_OlympicTinHoc202.html'
    },
    {
      title: 'CHÀO MỪNG TÂN THÀNH VIÊN SPIT THẾ HỆ F1',
      date: '05/10/2023',
      image: 'Image_TTTBB/TT_ChaoMungF1.jpg',
      link: 'TT_ChaoMungF1.html'
    }
  ]
};
updateLatestNewsSection(newsData['SPIT CONTEST']);
categorySelect.addEventListener('change', (e) => {
  const selectedCategory = e.target.value;
  const newsItems = newsData[selectedCategory];
  updateLatestNewsSection(newsItems);
});

function updateLatestNewsSection(newsItems) {
  const newsHTML = newsItems.map((newsItem) => {
    return `
      <li>
        <a><img src="${newsItem.image}"></a>
        <div class = "tt-inf">
          <h6>${newsItem.title}</h6>
          <p>${newsItem.date}</p>
          <button class="btn"><a href="${newsItem.link}">Xem thêm</a></button>
        </div>
      </li>
    `;
  }).join('');

  latestNewsSection.innerHTML = `
            <ul class = "block">
            ${newsHTML}
            </ul>
        
  `;
}
const newsItems = latestNewsSection.children;

if (newsItems.length > 4) { // adjust the number to your liking
  latestNewsSection.style.overflowY = 'auto';
  latestNewsSection.style.maxHeight = '1000px'; // adjust the height to your liking
}

