/* ==========================================================================
   TỆP: ketnoi.js
   CHỨC NĂNG: CẤU HÌNH ĐỊNH DANH GIAO DIỆN VÀ ĐƯỜNG DẪN API TRUNG TÂM
   ========================================================================== */

// --- CẤU HÌNH ĐƯỜNG DẪN WEB APP ---
const hks_duongDanGiaoTiep_str = "https://script.google.com/macros/s/AKfycbwY_LDKefb80LVnegm_IwoSWzvpAuZB7cLqefApUW4eDiYG3Qc4JYqjLgoJT8SRKG9W/exec"; 

// --- CẤU HÌNH ĐỊNH DANH HỆ THỐNG (UI) ---
const HKS_LINK_LOGO = "https://i.ibb.co/S46wLjDt/logo-tr-ng-TH-THCS-Hop-Thanh3-removebg-preview.png";
const HKS_TEN_TRUONG = "Trường TH&THCS Hợp Thành";
const HKS_TEN_TRUONG_UP = "TRƯỜNG TH&THCS HỢP THÀNH";
const HKS_TEN_PM = "Quản Lý Học Sinh";
const HKS_TEN_PM_UP = "QUẢN LÝ HỌC SINH";
const HKS_PHIEN_BAN = "V2.6.2026";
const HKS_TAC_GIA = "Hoàng Ngọc Lâm";
const HKS_CLIENT_ID = "407480994586-m6fpq6sfcc90qqj9k08rsmi1lge6br94.apps.googleusercontent.com";

// --- HÀM KẾT NỐI API CHUNG ---
async function hks_thucThiGiaoTiep_fn(hks_lenhDieuPhoi_str, hks_goiDuLieu_obj = {}) {
    hks_goiDuLieu_obj.hks_lenhKichHoat_str = hks_lenhDieuPhoi_str;
    
    // BẢO MẬT: Nhúng mã Token tĩnh từ bộ nhớ đệm
    hks_goiDuLieu_obj.hks_token_str = sessionStorage.getItem("sys_token_hs") || "";

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
        throw new Error("Lỗi kết nối Server. Vui lòng kiểm tra lại mạng hoặc link API!");
    }
}
