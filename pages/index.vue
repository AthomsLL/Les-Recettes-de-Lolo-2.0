<template>
  <div>
    <p>HOME PAGE</p>
    <button @click="logStringifyDatas">LOG DATAS</button>
    <nuxt-img 
      provider="cloudinary"
      src="/Groupomania/attachments/krjljetfugczcpnqjljk.jpg"
      sizes="sm:100vw md:50vw lg:600px"
    />
  </div>
</template>

<script setup>
const ingredients = [
  {
    id: "b0de6c98-7476-47a6-941a-4499b7c44967",
    name: "Sel, Poivre"
  },
  {
    id: "da84ad76-3714-45ca-9229-e7ea2a431b24",
    name: "3 Oeufs"
  },
  {
    id: "88c88406-4b76-75d2-a4fb-a0fad8b61da0",
    name: "150g Lardons"
  },
  {
    id: "bd5a5dc2-5ff4-7834-bd4f-b5d47a301aeb",
    name: "Pâte feuilletée"
  },
  {
    id: "abe7f4f0-d681-713f-a336-b3eda18c76e9",
    name:  "200g Gruyère râpé"
  },
  {
    id: "0ffaa219-18a6-7bc4-9645-ae029a2f33be",
    name:  "20cl crême fraîche liquide entière"
  }
]

const stringifyIngredients = JSON.stringify(ingredients)

const steps = [
  {
    id: "80e977f8-3466-70b9-90d2-d9365ccb6691",
    name: "Déballer votre pâte feuilletée et étalez la dans un moule avec son papier"
  },
  {
    id: "f576743d-3ab4-7e33-858d-702336dfa9d9",
    name :"Ensuite mélanger les oeufs avec la crême saler et poivrer à votre convenance"
  },
  {
    id: "3045dc19-ab12-780d-a8dd-b608fee759f4",
    name: "Ajouter les lardons et le gruyère et mélanger le tout"
  },
  {
    id: "a74940b8-b828-7b0a-8eaf-703826d62275",
    name: "Mettez au four à 200°C durant 40 minutes"
  }
]

const stringifySteps = JSON.stringify(steps)

const logStringifyDatas = () => {
  console.log(stringifyIngredients);
  console.log(stringifySteps);
}
</script>

<style scoped>
p {
  font-family: 'Libre Baskerville', serif;
}
</style>