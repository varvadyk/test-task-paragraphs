
export const ADD_PARAGRAPH='ADD_PARAGRAPH';
 export const initialState={
post :[
    {
        
        title: "Svydovets ridge ",
        content: "Land of lakes, mountain beech forests, green pastures and colorful mountains. The Svydovets ridge is one of the most picturesque in the Carpathians",
        more_sv:"Read more",
    },
    
    {   
      
        title: "A mountain is a with big Ears stone  ",
        content: "Fantasy each of us draws different offenses. So it takes place with those, who looks at a mountain. An ear is really seen someone, and someone noticed a nose!",
        more_ears:"Read more",
    },
    {
       
        title: "Mountain of Spoke  ",
        content: "Mountain that made friends with thunder and thunderclouds. Spokes as if beckon to itself an inclement weather. Clouds here like to cry and outpour all sorrow to the mountain. ",
        more_spoke:"Read more",
    

    },

    {
       
        title: "Dzembonya",
        content: "Great place to hide from the world and escape from civilization. Dzembronya is the highest mountain village in Ukraine and the most picturesque mountain ",
        more_dz:"Read more",
    },
    {
       
        title: "Mountain valley of Borzhava  ",
        content: "The nature of the Carpathians is multifaceted. The bright colors of the mountain valley of Borzhava, flooded with sunlight, boundless expanses, give a feeling of wonder  ",
        more_bz:"Read more",
    },
    {
       
        title: "Dovbush rocks ",
        content: "Nature is the best sculptor. Only she could create such powerful and wise forms as Dovbush Rocks. The outlines of huge rocks and giant stones of incredible images of fantastic creatures look something like this.",
        more_dr:"Read more",
    },
    {
       
        title: "SKOLIVSKY park of the Beskids ",
        content: "Between the three Carpathian rivers - Stryi, Opir and Mizunka is a charming mountain range. The forests of the Carpathians give coolness. Huge beeches, ancient spruces and firs have been growing here for more than hundreds of years.  ",
        more_sp:"Read more",
    },
    {
       
        title: "Rocky Karst Bridge  ",
        content: "The rock is a karst bridge, skillfully carved by the sea, an imprint of ancient times. You can also get to this place by singing - there is no road to the fantastic rock as such  ",
        more_kb:"Read more",
    },
    {
        
        title: "Milk Stone Cave ",
        content: "It seems that you described in a fairy tale. He is believed to be the master of this underground kingdom, who created fantastic models.   ",
        more_ms:"Read more",
    },
    {
       
        title: "Cinderella Cave",
        content: "There are unique natural places in the Carpathians underground. Cinderella Cave has earned its name for its modesty.  ",
        more_cc:"Read more",
    },
]

}
const  homeReduser=(state=initialState,action)=>{
    switch(action.type){
        case ADD_PARAGRAPH:{
            return{
                ...state,
                post:[...state.post,action.value]
            }
        }
        default:{
            return state;
        }
    }
}
export default homeReduser;