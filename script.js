let jokes = [
    `
    पप्पू जलेबी बेच रहा था, लेकिन कह रहा था
    आलू ले लो आलू ले लो...
    .
    .
    राहगीर- लेकिन ये तो जलेबी है
    .
    पप्पू- चुप हो जा! वरना मक्खियां आ जाएंगी।`, 
`टीचर- एक औरत एक घंटे मे 50 रोटी बना लेती है, तो तीन औरतें एक घंटे में कितनी रोटी बनाएंगी...
.बच्चा- एक भी नही, क्योंकि तीनों मिलकर सिर्फ चुगली करेंगी...!
.बच्चे की बात सुनकर टीचर अभी तक बेहोश है...`,
`वकील - हत्या की रात तुम्हारे पति के अंतिम शब्द?
.
पत्नी - मेरा चश्मा कहां है संगीता...?
.
वकील - तो इसमें मारने वाली क्या बात थी...?
.
पत्नी - मेरा नाम रंजना है!
.
पूरा कोर्ट खामोश...`,
`एक सज्जन बता रहे थे कि
वो पिछले 20 सालों से गीता के उपदेश सुनते आ रहे हैं...!
.
.
पता करने पर पता चला कि
गीता उनकी धर्मपत्नी का नाम है...!!!`,
`मास्टर जी - शांति किसके घर में रहती है...?
.
.
पप्पू - जिस घर में पति और पत्नी दोनों मोबाइल चलाते हैं...!!!`,
`यमराज (औरत से) - चलो, मैं तुम्हें लेने आया हूं।
.
औरत - बस दो मिनट दे दो।
.
यमराज - दो मिनट में ऐसा क्या कर लोगी...?
.
औरत - फेसबुक पर स्टेटस डालना है, 'Traveling to yamlok'!
.
यह सुनकर यमराज ही हो गए बेहोश...!!!`,
`Why did an old man fall in a well?
Because he couldn't see that well!`,

`Why did the actor fall through the floorboards?
They were going through a stage!`,

`Why did a scarecrow win a Nobel prize?
He was outstanding in his field!`,

`Why are peppers the best at archery?
Because they habanero!`,

`What did the duck say after she bought chapstick?
Put it on my bill!`,

`What do you call a fake noodle?
An impasta!`,

`What did the three-legged dog say when he walked into a saloon?
“I'm looking for the man who shot my paw!”`,

`How do you tell the difference between a bull and a cow?
It is either one or the udder!`,

`What's red and smells like blue paint?
Red paint!`,

`What's the difference between a hippo and a Zippo?
One is very heavy, the other is a little lighter!`,
`What do you call an illegally parked frog?
Toad!`,

`Why can't you send a duck to space?
Because the bill would be astronomical!`,

`What does Jeff Bezos do before he goes to sleep?
He puts his PJ-Amazon!`,

`What happened when the world's tongue-twister champion got arrested?
They gave him a tough sentence!`,

`What did the mama cow say to the calf?
It's pasture bedtime!`,

`How does a vampire start a letter?
Tomb it may concern!`,

`What did one plate say to the other?
Dinner is on me!`,

`Why do hummingbirds hum?
Because they don't know the words!`,

`What do sprinters eat before a race?
Nothing. They fast!`,

`Two muffins are baking in an oven. One of them looks to the other and says, "Phew, it's getting hot in here!" The other looks back and says, "Ack! A talking muffin!"`,
`What does a lemon say when it answers the phone?
Yellow!`,

`What did one dried fruit say when another asked it to the movies?
It's a date!`,

`What does a cow call an earthquake?
A milkshake!`,

`Why did the man go to the yogurt museum?
To get a little culture!`

];

const morefunc = ()=>{
    let joke0 = Math.floor(Math.random()* 30);
    let joke1 = jokes[joke0];
    let joke = document.getElementById('joke');
    joke.innerHTML = '" ' + joke1 + ' "';
};