function speakGeneric() {
    console.log(this.sound);
}

let dog = {
    sound: "Au Au",
    speak: speakGeneric
}

let cat = {
    sound: "Miau",
    speak: speakGeneric
}

dog.speak();
cat.speak();

let bindFunction = speakGeneric.bind(cat);

bindFunction()