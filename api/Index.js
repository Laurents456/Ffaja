// Script LRN v1.1.1 - API buat tembak localconfig
export default function handler(req, res) {
  console.log("Ada target masuk ke perangkap!");

  // Data JSON sakti buat unlock visual skin
  const config = {
    "verAddr": "https://ffaja.vercel.app/",
    "resetGuest": true,
    "status": "VIP_PREMIUM_ACTIVE",
    "features": {
      "unlock_all_skins": true,
      "unlock_all_emotes": true,
      "unlock_all_weapons": true,
      "bypass_security": "enabled_v5",
      "visual_skin_enable": 1
    },
    "metadata": {
      "owner": "Laurents",
      "bot": "LRN v1.1.1"
    }
  };

  // Set header biar lancar jaya
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Content-Type', 'application/json');
  
  // Kirim respon JSON
  return res.status(200).json(config);
      }
