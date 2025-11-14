document.addEventListener("DOMContentLoaded", function() {
    const trendSelect = document.getElementById("trend"); 
    trendSelect.addEventListener("change", function() { 
        const targetId = this.value;
        if (targetId && targetId !== "start") {
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        }
    });
});
// let hasTranslated = false;
// function toggleLanguage() {
//     if (hasTranslated) {
//         location.reload();
//     } else {
//         document.getElementById("Lan").innerHTML = "TH";
//         document.getElementById("Cate").innerHTML = "Category";
//         document.getElementById("home").innerHTML = "Home";
//         document.getElementById("bookmark").innerHTML = "Bookmark";
//         document.getElementById("create").innerHTML = "Create";
//         document.getElementById("follower").innerHTML = "follower";
//         hasTranslated = true;
//     }
// }
// function translateThai() {    
//     document.getElementById("TH").style.color = '#B89169';
//     document.getElementById("EN").style.color = '#ccc';
//     document.getElementById("login").innerHTML = "เข้าสู่ระบบ"
//     document.getElementById("login2").innerHTML = "เข้าสู่ระบบเพื่อเข้าถึง บัญชี Webblog ของคุณ"
//     document.getElementById("Email").innerHTML = "อีเมล / Email"
//     document.getElementById("password").innerHTML = "รหัสผ่าน / Password"
//     document.getElementById("loginbtn").innerHTML = "เข้าสู่ระบบ" 
//     document.getElementById("reg").innerHTML = "ยังไม่มีบัญชีใช่ไหม"
//     document.getElementById("signup").innerHTML = " สมัครเลย !"
// }

// function translateEng() {
//     location.reload();
// }