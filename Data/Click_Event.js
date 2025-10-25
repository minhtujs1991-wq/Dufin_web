// Click_Event

/////////////////////////Chọn đăng ký vay
$(document).ready(function(){  
	let Elm_Nut_Dangky = document.getElementById("Main_Noidung_1_Nut_DangkyVay");
	let Elm_Noidung_1 = document.getElementById('Main_Noidung_1');
	let Elm_Noidung_2 = document.getElementById('Main_Noidung_2');
		Elm_Nut_Dangky.addEventListener('click', function(){
			Elm_Noidung_1.style.display = "none";
			Elm_Noidung_2.style.display = "block";
		})
});
/////////////////////////

/////////////////////////Chọn số tiền muốn vay
$(document).ready(function(){  
	let Elm_Nut_Tieptheo = document.querySelector("#Main_Noidung_2 > .Event");
	let Elm_Input_Sotienvay = document.getElementById('Sotienvay_1');
	let Elm_Noidung_2 = document.getElementById('Main_Noidung_2');
	let Elm_Noidung_3 = document.getElementById('Main_Noidung_3');
		Elm_Nut_Tieptheo.addEventListener('click', function(){
			if (Sotienvay_Capnhat == 1){
				Elm_Nut_Tieptheo.src = "image/Nut_Tieptheo_Canhbao.png";
			}else if (Sotienvay_Capnhat > 1) {
				setTimeout(function(){
					Sotienvay = Elm_Input_Sotienvay.value;
					setTimeout(function(){
						Elm_Noidung_2.style.display = "none";
						Elm_Noidung_3.style.display = "block";
					}, 100)
				}, 10)
			}
		})
});
/////////////////////////

/////////////////////////Chọn có/không làm việc tại HN
$(document).ready(function(){  
	let Elm_Nut_Co = document.getElementById("LamviecTaiHN_Co");
	let Elm_Nut_Khong = document.getElementById('LamviecTaiHN_Khong');
	let Elm_Nut_Tieptheo = document.querySelector("#Main_Noidung_3 > .Event");
	let Elm_Noidung_3 = document.getElementById('Main_Noidung_3');
	let Elm_Noidung_4 = document.getElementById('Main_Noidung_4');
		
		Elm_Nut_Co.addEventListener('click', function(){
			if (LamviecTaiHN == undefined || LamviecTaiHN == "Không") {
				Elm_Nut_Co.style.borderColor = "red";
				Elm_Nut_Co.style.background = "green";
				LamviecTaiHN = "Có";
				//
				Elm_Nut_Khong.style.borderColor = "white";
				Elm_Nut_Khong.style.background = "none";
				//
				Elm_Nut_Tieptheo.src = "image/Nut_Tieptheo.png";
			}
		})
		
		Elm_Nut_Khong.addEventListener('click', function(){
			if (LamviecTaiHN == undefined || LamviecTaiHN == "Có") {
				Elm_Nut_Co.style.borderColor = "white";
				Elm_Nut_Co.style.background = "none";
				LamviecTaiHN = "Không";
				//
				Elm_Nut_Khong.style.borderColor = "red";
				Elm_Nut_Khong.style.background = "green";
				//
				Elm_Nut_Tieptheo.src = "image/Nut_Tieptheo.png";
			}
		})
		
		Elm_Nut_Tieptheo.addEventListener('click', function(){
			if (LamviecTaiHN == undefined) {
				Elm_Nut_Tieptheo.src = "image/Nut_Tieptheo_Canhbao.png";
			}else if(LamviecTaiHN !== undefined){
				Elm_Noidung_3.style.display = "none";
				Elm_Noidung_4.style.display = "block";
			}
		})
		
});
/////////////////////////

/////////////////////////Chọn có/không dính nợ xấu
$(document).ready(function(){  
	let Elm_Nut_Co = document.getElementById("DinhNoxau_Co");
	let Elm_Nut_Khong = document.getElementById('DinhNoxau_Khong');
	let Elm_Nut_Tieptheo = document.querySelector("#Main_Noidung_4 > .Event");
	let Elm_Noidung_4 = document.getElementById('Main_Noidung_4');
	let Elm_Noidung_5 = document.getElementById('Main_Noidung_5');
		
		Elm_Nut_Co.addEventListener('click', function(){
			if (DinhNoxau == undefined || DinhNoxau == "Không") {
				Elm_Nut_Co.style.borderColor = "red";
				Elm_Nut_Co.style.background = "green";
				DinhNoxau = "Có";
				//
				Elm_Nut_Khong.style.borderColor = "white";
				Elm_Nut_Khong.style.background = "none";
				//
				Elm_Nut_Tieptheo.src = "image/Nut_Tieptheo.png";
			}
		})
		
		Elm_Nut_Khong.addEventListener('click', function(){
			if (DinhNoxau == undefined || DinhNoxau == "Có") {
				Elm_Nut_Co.style.borderColor = "white";
				Elm_Nut_Co.style.background = "none";
				DinhNoxau = "Không";
				//
				Elm_Nut_Khong.style.borderColor = "red";
				Elm_Nut_Khong.style.background = "green";
				//
				Elm_Nut_Tieptheo.src = "image/Nut_Tieptheo.png";
			}
		})
		
		Elm_Nut_Tieptheo.addEventListener('click', function(){
			if (DinhNoxau == undefined) {
				Elm_Nut_Tieptheo.src = "image/Nut_Tieptheo_Canhbao.png";
			}else if(DinhNoxau !== undefined){
				Elm_Noidung_4.style.display = "none";
				Elm_Noidung_5.style.display = "block";
			}
		})
		
});
/////////////////////////

/////////////////////////Điền thông tin
$(document).ready(function(){  
	let form = document.getElementById('contactForm');
	let msg = document.getElementById('formMessage');
	let resetBtn = document.getElementById('resetBtn');
	let inputs = form.querySelectorAll('input');
	let Elm_Noidung_5 = document.getElementById('Main_Noidung_5');
	let Elm_Noidung_6 = document.getElementById('Main_Noidung_6');

	// Lắng nghe khi người dùng nhập để đổi viền xanh khi hợp lệ
	inputs.forEach(input => {
		input.addEventListener('input', () => {
			if (input.checkValidity()) {
				input.classList.add('valid');
			} else {
				input.classList.remove('valid');
			}
		});
	});

	form.addEventListener('submit', function(e){
		e.preventDefault();

		if (!form.checkValidity()) {
			form.classList.add('was-validated');
			msg.style.display = 'none';
			return;
		}

		let data = {
			GioPhut: Lay_Thoigian_Hientai("Gio") + ":" + Lay_Thoigian_Hientai("Phut"), 
			NgayThangNam: Lay_Thoigian_Hientai("Ngay") + "/" + Lay_Thoigian_Hientai("Thang") + "/" + Lay_Thoigian_Hientai("Nam"),
			SotienMuonvay: Sotienvay,
			SongtaiHanoi: LamviecTaiHN, 
			CoNoxau: DinhNoxau, 
			Ten: document.getElementById('fullName').value.trim(),
			Sdt: document.getElementById('phone').value.trim(),
			Facebook: document.getElementById('facebook').value.trim()
		};
		
		let Noidung_Tinnhan = `Khách hàng ${data.Ten},\n
							- Có SĐT là : ${data.Sdt},\n
							- Có Link Facebook là : ${data.Facebook}, \n
							- Hiện tại đang :${data.SongtaiHanoi} ở Hà Nội, ${data.CoNoxau} dính nợ xấu, \n
							- Đang muốn vay ${data.SotienMuonvay}, \n\n
							- Thời gian gửi yêu cầu : ${data.GioPhut} - ${data.NgayThangNam}`;
			
		console.log('Form data:', data);

		fetch('https://dufin.vercel.app/api/send', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ message: Noidung_Tinnhan })
		})
		
		.then(res => res.json())
		.then(result => {
			if (result.success) {
				console.log("✅ Gửi thành công!");
			} else {
				console.log('❌ Lỗi khi gửi: ' + JSON.stringify(result));
			}
		})
		.catch(err => {
			console.log('❌ Lỗi kết nối: ' + err.message);
		});
		
		Elm_Noidung_5.style.display = "none";
		Elm_Noidung_6.style.display = "block";
	});

	resetBtn.addEventListener('click', function(){
		form.reset();
		form.classList.remove('was-validated');
		msg.style.display = 'none';
		inputs.forEach(i => i.classList.remove('valid'));
	});
});
/////////////////////////

/////////////////////////Thông báo liên hệ.
$(document).ready(function(){  
	let Elm_Nut_Zalo = document.getElementById('Main_Noidung_6_Nut_Zalo');
	
	Elm_Nut_Zalo.addEventListener('click', function(){
		let url = "https://zalo.me/0379997749";
		
		if (typeof Android !== "undefined" && Android.goToPage) {
			Android.goToPage(url);
		} else {
			// Nếu chạy trong trình duyệt bình thường
			window.location.href = url;
		}
	})
});
/////////////////////////