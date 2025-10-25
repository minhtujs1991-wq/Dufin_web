// JavaScript Document

  // Ngăn Ctrl + / Ctrl - / Ctrl 0
//  document.addEventListener('keydown', function (event) {
//    if (event.ctrlKey && 
//       (event.key === '+' || event.key === '-' || event.key === '=' || event.key === '0')) {
//      event.preventDefault();
//    }
//  });
//
//  // Ngăn zoom bằng con lăn chuột + Ctrl
//  document.addEventListener('wheel', function (event) {
//    if (event.ctrlKey) {
//      event.preventDefault();
//    }
//  }, { passive: false });


/////////////////////////Chọn số tiền muốn vay
var Sotienvay;
var Sotienvay_Capnhat = 0;

function formatNumber(n){
	return Number(n).toLocaleString('vi-VN');
}

function Update_Sotienvay(){
	
	let Elm_Input_Sotienvay_Box = document.getElementById('Sotienvay_1_Box');
	let Elm_Input_Sotienvay = document.getElementById('Sotienvay_1');
	let Elm_Nut_Tieptheo = document.querySelector("#Main_Noidung_2 > .Event");
	
	let v = Elm_Input_Sotienvay.value;
		Elm_Input_Sotienvay_Box.textContent = formatNumber(v) + " VND";

	// Cập nhật màu gradient track để phản ánh tỉ lệ (visual)
	const min = +Elm_Input_Sotienvay.min;
	const max = +Elm_Input_Sotienvay.max;
	const percent = ((v - min) / (max - min)) * 100;

		// đặt background dynamic để thấy phần đã kéo
		Elm_Input_Sotienvay.style.background = `linear-gradient(90deg, var(--accent) ${percent}%, var(--muted) ${percent}%)`;

		Sotienvay_Capnhat = Sotienvay_Capnhat+1;
		Elm_Nut_Tieptheo.src = "image/Nut_Tieptheo.png";
}

document.getElementById('Sotienvay_1').addEventListener('input', Update_Sotienvay);
/////////////////////////

/////////////////////////Chọn có/không làm việc tại HN
var LamviecTaiHN;
/////////////////////////

/////////////////////////Chọn có/không làm việc tại HN
var DinhNoxau;
/////////////////////////

/////////////////////////Điền thông tin
var TenKhachVay;
var SoDienthoai;
var LinkFb;
/////////////////////////


/////////////////////////Funtion Chung
function Lay_Thoigian_Hientai(Elm1) {
	const now = new Date();
	
	if (Elm1 == "Gio") {
		let hours = now.getHours();
			hours = String(hours).padStart(2, '0')
		
		return hours;
	}
	
	if (Elm1 == "Phut") {
		let minutes = now.getMinutes();
			minutes = String(minutes).padStart(2, '0')
		
		return minutes;
	}
	
	if (Elm1 == "Ngay") {
		let day = now.getDate();
			day = String(day).padStart(2, '0')
		
		return day;
	}
	
	if (Elm1 == "Thang") {
		let month = now.getMonth() + 1;
			month = String(month).padStart(2, '0')
		
		return month;
	}
	
	if (Elm1 == "Nam") {
		let year = now.getFullYear();

		return year;
	}
}
/////////////////////////





