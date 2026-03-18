const express = require('express');
const app = express();
const path = require('path');

// Port otomatis dari hosting (Render/Railway) atau 3000 kalo lokal
const PORT = process.env.PORT || 3000;

// Middleware biar bisa baca JSON
app.use(express.json());

// Endpoint utama yang bakal ditembak sama localconfig.json lu
app.get('/', (req, res) => {
    console.log(`[LOG] Ada target konek dari IP: ${req.ip}`);
    
    // Ini data sakti buat unlock visual skin ala Astutech
    const configResponse = {
        "verAddr": "https://server-lu-sendiri.onrender.com/", // Nanti ganti pake link lu
        "resetGuest": true,
        "features": {
            "unlock_all_skins": true,
            "unlock_all_emotes": true,
            "unlock_all_weapons": true,
            "vip_account_status": "gold_v3",
            "anti_ban_v2": "enabled",
            "visual_only": 1
        },
        "status": "SERVER_ACTIVE",
        "msg": "LRN v1.1.1 - Laurents is GOD"
    };

    res.json(configResponse);
});

// Jalankan servernya
app.listen(PORT, () => {
    console.log(`====================================`);
    console.log(`SERVER LRN V1.1.1 AKTIF DI PORT ${PORT}`);
    console.log(`Dibuat oleh Laurents (Dewa Mimpi)`);
    console.log(`====================================`);
});