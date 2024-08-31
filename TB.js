// Lấy danh sách thông báo
var thongbaoList = [
    {
      title: 'Tiếp nhận phản hồi và góp ý về hoạt động của CLB',
      date: '05/08/2024',
      image: 'Image_TTTBB/phanhoi.jpg',
      link: 'TB_Phanhoi.html'
    },
    {
      title: 'Thông báo mở cửa phòng tự học dành cho các bạn khoa Công nghệ thông tin, cùng một số lưu ý❗️ ',
      date: '19/05/2024',
      image: 'Image_TTTBB/Open.webp',
      link: 'TB_Open.html'
    },
    {
      title: 'SPIT NEWBIE CONTEST - ĐỢT 4 ',
      date: '26/04/2024',
      image: 'Image_TTTBB/SPITNEWBIECONTEST04.jpg',
      link: 'TB_SPITNEWBIECONTEST04.html'
    },
    {
      title: 'SPIT NEWBIE CONTEST - ĐỢT 3 ',
      date: '30/03/2024',
      image: 'Image_TTTBB/SPITNEWBIECONTEST03.jpg',
      link: 'TB_SPITNEWBIECONTEST03.html'
    },
    {
      title: 'SPIT NEWBIE CONTEST - ĐỢT 2 ',
      date: '23/03/2024',
      image: 'Image_TTTBB/SPITNEWBIECONTEST02.jpg',
      link: 'TB_SPITNEWBIECONTEST02.html'
    },
    {
      title: 'MỞ FORM ĐĂNG KÝ THAM GIA SEMINAR “KNOWLEDGE, SKILLS AND APPLICATIONS”',
      date: '16/03/2024',
      image: 'Image_TTTBB/seminar.webp',
      link: 'TB_ApplySeminarKnowlege.html'
    },
    {
      title: 'SPIT EXPERT CONTEST - ĐỢT 1 ',
      date: '15/03/2024',
      image: 'Image_TTTBB/SPITEXPERTCONTEST01.jpg',
      link: 'TB_SPITEXPERTCONTEST01.html'
    },
    {
      title: 'SPIT NEWBIE CONTEST - ĐỢT 1 ',
      date: '02/03/2024',
      image: 'Image_TTTBB/SPITNEWBIECONTEST01.jpg',
      link: 'TB_SPITNEWBIECONTEST01.html'
    },
    {
      title: 'TỔNG QUAN SPIT CONTEST 2024',
      date: '29/02/2024',
      image: 'Image_TTTBB/SPITCONTEST.png',
      link: 'TB_SPITCONTEST.html'
    },
    {
      title: 'THÔNG BÁO MỞ CỬA PHÒNG TỰ HỌC E202',
      date: '18/02/2024',
      image: 'Image_TTTBB/MoCua.jpg',
      link: 'TB_MoCua.html'
    },
    {
      title: 'THÔNG BÁO DANH SÁCH TRÚNG TUYỂN ĐỢT 2 NĂM HỌC 2023 - 2024',
      date: '25/01/2024',
      image: 'Image_TTTBB/GapMatF2.jpg',
      link: 'TB_GapMatF2.html'
    },
    {
      title: 'Thông báo buổi gặp mặt thế hệ thứ 2 CLB Hỗ trợ Lập trình',
      date: '22/01/2024',
      image: 'Image_TTTBB/DSTrungTruyenF2.jpg',
      link: 'TB_DSTrungTuyenF2.html'
    },
    {
      title: 'THÔNG BÁO PHỎNG VẤN',
      date: '20/01/2024',
      image: 'Image_TTTBB/PVF2.jpg',
      link: 'TB_PVF2.html'
    },
    {
        title: 'CLB HỖ TRỢ LẬP TRÌNH TUYỂN THÀNH VIÊN ĐỢT 2 - NĂM HỌC 2023-2024 ',
        date: '15/01/2024',
        image: 'Image_TTTBB/tuyentv.webp',
        link: 'TB_ApplyD2.html'
    },
    {
        title: 'Thông báo mở cửa phòng tự học dành cho các bạn khoa Công nghệ thông tin, cùng một số lưu ý',
        date: '18/12/2023',
        image: 'Image_TTTBB/MoCua2023.jpg',
        link: 'TB_MoCua2023.html'
    },
    {
        title: 'THÔNG BÁO TẠM DỪNG PHÒNG TỰ HỌC E202',
        date: '28/11/2023',
        image: 'Image_TTTBB/seminar.webp',
        link: 'TB_tamdungphongtuhoc.html'
    },
    {
      title: 'SEMINAR "APPROACH TO PROGRAMMING" ĐÃ QUAY TRỞ LẠI',
      date: '25/10/2023',
      image: 'Image_TTTBB/SApproachtoProgramming.jpg',
      link: 'TB_SApproachtoProgramming.html'
    },
    {
      title: 'THÔNG BÁO THỜI GIAN TỰ HỌC CỦA CLB HỖ TRỢ LẬP TRÌNH',
      date: '24/10/2023',
      image: 'Image_TTTBB/TGTuHoc.jpg',
      link: 'TB_TGTuHoc.html'
    },
    {
      title: 'THÔNG BÁO TẠM HOÃN CHƯƠNG TRÌNH',
      date: '13/10/2023',
      image: 'Image_TTTBB/HoanSeminar.jpg',
      link: 'TB_HoanSeminar.html'
    },
    {
      title: 'SEMINAR "APPROACH TO PROGRAMMING" SẮP DIỄN RA RỒI CÁC BẠN ƠI !!!',
      date: '11/10/2023',
      image: 'Image_TTTBB/TBSApproachtoProgramming.jpg',
      link: 'TB_TBSApproachtoProgramming.html'
    },
    {
      title: 'VONG PHONG VAN',
      date: '27/09/2023',
      image: 'Image_TTTBB/PVF1.jpg',
      link: 'TB_PVF1.html'
    },
    {
      title: 'DONG DON TUYEN THANH VIEN DOT 1',
      date: '24/09/2023',
      image: 'Image_TTTBB/DongDonF1.jpg',
      link: 'TB_DongDonF1.html'
    },
    {
      title: 'TUYEN THANH VIEN DOT 1 NAM HOC 2023-2024',
      date: '18/09/2023',
      image: 'Image_TTTBB/TuyenF1.jpg',
      link: 'TB_TuyenF1.html'
    }
    
  ];
  
  
// Hiển thị danh sách thông báo
var thongbaoListElement = document.querySelector(".thongbao-list");
var paginationElement = document.querySelector(".pagination");

var currentPage = 1;
var itemsPerPage = 4;

function displayThongbaoList() {
  var start = (currentPage - 1) * itemsPerPage;
  var end = start + itemsPerPage;
  var thongbaoListHtml = "";

  for (var i = start; i < end; i++) {
    if (i < thongbaoList.length) {
      thongbaoListHtml += `
        <div class="thongbao">
            <a><img src="${thongbaoList[i].image}"></a>
            <div class="inf">
                <h3>${thongbaoList[i].title}</h3>
                <p>${thongbaoList[i].date}</p>
                <button class="btn xem-them"><a href="${thongbaoList[i].link}">Xem thêm</a></button>
            </div>
        </div>

      `;
    }
  }

  thongbaoListElement.innerHTML = thongbaoListHtml;
}

function pagination() {
  var totalPages = Math.ceil(thongbaoList.length / itemsPerPage);
  var paginationHtml = '';
  var startPage = currentPage - 2;
  var endPage = currentPage + 2;

  if (startPage < 1) {
    startPage = 1;
  }

  if (endPage > totalPages) {
    endPage = totalPages;
  }

  // Hiển thị trang trước
  if (currentPage > 1) {
    paginationHtml += `
      <button class="page-button" data-page="${currentPage - 1}">Pre</button>
    `;
  }

  // Hiển thị trang ở giữa
  for (var i = startPage; i <= endPage; i++) {
    if (i === currentPage) {
      paginationHtml += `
        <button class="page-button active bold">${i}</button>
      `;
    } else {
      paginationHtml += `
        <button class="page-button" data-page="${i}">${i}</button>
      `;
    }
  }

  // Hiển thị trang sau
  if (currentPage < totalPages) {
    paginationHtml += `
      <button class="page-button" data-page="${currentPage + 1}">Next</button>
    `;
  }

  paginationElement.innerHTML = paginationHtml;
}

displayThongbaoList();
pagination();

// Handle pagination clicks
paginationElement.addEventListener("click", function(event) {
  if (event.target.classList.contains("page-button")) {
    var page = event.target.getAttribute("data-page");
    if (page) {
      currentPage = parseInt(page);
      displayThongbaoList();
      pagination();
    }
  }
});
// Add event listener to each notification item
  // Lấy tất cả các thông báo
const thongBaos = document.querySelectorAll('.ThongBaoList .thongbao-list .thongbao');

