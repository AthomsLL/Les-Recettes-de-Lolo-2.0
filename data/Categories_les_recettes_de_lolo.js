{
  "name":"categories", // A transformer en <select>
  "data": [
    "Aperitifs", // 1
    "Entrees", // 2
    "Plats", // 3
    "Desserts", // 4
    "Sauces", // 5
    "Cocktails" // 6
  ]
}

{
  "name":"difficulty", // A transformer en <select>
  "data": [
    "Facile", // 1
    "Moyen", // 2
    "Difficile" // 3
  ]
}

{
  "name":"users", // A créer au moment de la réponse du signup de Firebase
  "data": [
    {
      "id":"UUID v4",
      "email":"email retourné par Firebase",
      "name":"displayName Firebase",
      "avatar":"",
      "isAdmin":"boolean"
    }
  ]
}