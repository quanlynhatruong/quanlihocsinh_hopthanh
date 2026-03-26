// --- CẤU HÌNH HỆ THỐNG ---
const linkapi = "https://script.google.com/macros/s/AKfycbwY_LDKefb80LVnegm_IwoSWzvpAuZB7cLqefApUW4eDiYG3Qc4JYqjLgoJT8SRKG9W/exec"; // Thay Link Web App (doPost) vào đây

// --- HÀM KẾT NỐI API CHUNG ---
async function callServer(actionName, payload = {}) {
    payload.action = actionName;
    try {
        const res = await fetch(linkapi, {
            method: 'POST',
            headers: {
                "Content-Type": "text/plain;charset=utf-8",
            },
            body: JSON.stringify(payload)
        });
        return await res.json();
    } catch (error) {
        console.error("Lỗi Fetch API:", error);
        throw new Error("Lỗi kết nối Server. Vui lòng kiểm tra lại mạng hoặc link API!");
    }
}