import { db, auth } from "../firebase.js";

const databasename = "usersid";
const takeoffpage = "./content.html";
const landpage = "../index.html";
const groupone = "./content.html";
const grouptwo = "./content.html";
const groupyhree = "./content.html";
const groupfour = "./content.html";
const masterpage = "./userdata.html";

/****************************************************************************************************************/
document.getElementById("form-title").innerText = "تسجيل الدخول"; // Change title
document.getElementById("back-btn").addEventListener("click", goBack);
function goBack() {window.location.href = landpage; }
/****************************************************************************************************************/
document.getElementById("enter-btn").addEventListener("click", loginUser);

async function loginUser() {
    const username = document.getElementById("user").value;
    const password = document.getElementById("password").value;

    if (!username || !password) {
        alert("يرجى إدخال اسم المستخدم وكلمة المرور");
        return;
    }

    try {
        const snapshot = await db.collection(databasename)
            .where("user", "==", username)
            .where("password", "==", password)
            .get();

        if (!snapshot.empty) {
            const userDoc = snapshot.docs[0]; // Get the first matching user
            const userId = userDoc.id;
            const userData = userDoc.data();
            const userName = userData.name; 

            console.log("✅ User ID retrieved:", userId, "| Name:", userName);


            // Store user ID in sessionStorage for later use
            sessionStorage.setItem("loggedInUserId", userId);

            const usergroup = await db.collection(databasename).doc(userId).get();

            if (usergroup.exists) {
                const userg = usergroup.data();
                let userpage = Number(userg.group);

                console.log("📌 User group value:", userpage, typeof userpage);

                switch (userpage) {
                    case 124: window.location.href = masterpage; break;
                    case 1: window.location.href = groupone; break;
                    case 2: window.location.href = grouptwo; break;
                    case 3: window.location.href = groupyhree; break;
                    case 4: window.location.href = groupfour; break;
                    default: console.error("❌ Invalid group:", userpage); break;
                }
            }
        } else {
            alert("اسم المستخدم أو كلمة المرور غير صحيحة");
        }

    } catch (error) {
        console.error("🔥 Error logging in:", error);
    }
}
/****************************************************************************************************************/

