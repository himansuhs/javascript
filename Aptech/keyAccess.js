let menu={
  cuisine:{
      southIndian:{
          Dosa : 45,
          Idli :35,
          maduVada : 60,
          Rasam : 89,
          Uttapam : 90
      },
      nothIndian :{
          ButterChicken : 50,
          PaneerTikka :40,
          DalMakhani : 70,
          AlooGobi : 95,
          ChickenBiryani : 99
      },
      Chinese:{
          Manchurian: 50,
          HakkaNoodles :50,
          ChilliChicken : 65,
          FriedRice : 90,
          GobiManchurian : 95
      }

  }
}
let sum=0
for(let i in menu.cuisine){
  for(let j in menu.cuisine[i]){
    sum=sum+menu.cuisine[i][j]
  }
}
console.log(sum)