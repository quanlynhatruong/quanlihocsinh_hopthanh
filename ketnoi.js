// --- CẤU HÌNH HỆ THỐNG GIAO TIẾP VÀ ĐỊNH DANH UI ---
var hks_duongDanGiaoTiep_str = "https://script.google.com/macros/s/AKfycbwY_LDKefb80LVnegm_IwoSWzvpAuZB7cLqefApUW4eDiYG3Qc4JYqjLgoJT8SRKG9W/exec"; 

var HKS_LINK_LOGO = "https://i.ibb.co/6R8Y9DNq/logo-l-a-ch-n6.png"; 
var HKS_TEN_TRUONG = "Trường TH&THCS Hợp Thành";
var HKS_TEN_TRUONG_UP = "TRƯỜNG TH&THCS HỢP THÀNH";
var HKS_TEN_PM = "Quản Lý Học Sinh";
var HKS_TEN_PM_UP = "QUẢN LÝ HỌC SINH";
var HKS_PHIEN_BAN = "V2.6.2026";
var HKS_TAC_GIA_UP = "HOÀNG NGỌC LÂM";
var HKS_GOOGLE_CLIENT_ID = "407480994586-m6fpq6sfcc90qqj9k08rsmi1lge6br94.apps.googleusercontent.com";
var HKS_MO_TA = "Hệ thống quản lý thông tin học sinh nội bộ - " + HKS_TEN_TRUONG;

/* ========================================================================= */
/* KHỞI TẠO CẤU TRÚC HEADER TỰ ĐỘNG TỪ FILE JS                               */
/* ========================================================================= */
(function() {
    var metaDesc = document.createElement('meta');
    metaDesc.name = "description";
    metaDesc.content = HKS_MO_TA;
    document.head.appendChild(metaDesc);
    
    document.title = HKS_TEN_PM + " - " + HKS_TEN_TRUONG;
    
    var linkIcon = document.createElement('link');
    linkIcon.rel = 'icon';
    linkIcon.id = 'page_favicon';
    linkIcon.href = HKS_LINK_LOGO;
    document.head.appendChild(linkIcon);
})();

// --- HÀM KẾT NỐI API CHUNG ---
async function hks_thucThiGiaoTiep_fn(hks_lenhDieuPhoi_str, hks_goiDuLieu_obj = {}) {
    hks_goiDuLieu_obj.hks_lenhKichHoat_str = hks_lenhDieuPhoi_str;
    try {
        const hks_phanHoiNhanCung_obj = await fetch(hks_duongDanGiaoTiep_str, {
            method: 'POST',
            headers: {
                "Content-Type": "text/plain;charset=utf-8",
            },
            body: JSON.stringify(hks_goiDuLieu_obj)
        });
        return await hks_phanHoiNhanCung_obj.json();
    } catch (hks_loiNgoaiLe_obj) {
        console.error("Lỗi Fetch API:", hks_loiNgoaiLe_obj);
        throw new Error("Lỗi kết nối Server. Vui lòng kiểm tra lại mạng!");
    }
}
